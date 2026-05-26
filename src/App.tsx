import { useState, useEffect } from 'react';

const DAY_CITY_MAP: Record<string, string> = {
  "5/27": "sapporo",
  "5/28": "biei",
  "5/29": "otaru",
  "5/30": "sapporo",
};

const JMA_URLS = {
  sapporo: "https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json",
  biei:    "https://www.jma.go.jp/bosai/forecast/data/forecast/012000.json",
} as const;

const OM_POINTS = {
  sapporo: { lat: 43.0618, lon: 141.3545 },
  otaru:   { lat: 43.1907, lon: 140.9947 },
  biei:    { lat: 43.5883, lon: 142.4671 },
};

function getOMUrl(lat: number, lon: number) {
  const p = new URLSearchParams({
    latitude: String(lat), longitude: String(lon), timezone: "Asia/Tokyo",
    hourly: ["temperature_2m","apparent_temperature","precipitation","wind_speed_10m","relative_humidity_2m","cloud_cover"].join(","),
    daily:  ["sunrise","sunset"].join(","),
    forecast_days: "10",
  });
  return `https://api.open-meteo.com/v1/jma?${p.toString()}`;
}

interface CurrentWeather {
  temp: string;
  apparentTemp: string;
  precipProb: number;
  windSpeed: number;
  cloudCover: number;
  humidity: number;
  sunrise: string;
  sunset: string;
  code: number;
  msg: string;
}

interface CityDayWeather extends DayWeather {
  cityName: string;
  precipProb: number;
}

interface CityWeather {
  current: CurrentWeather;
  daily: CityDayWeather[];
}
import { Home, Calendar, Utensils, Navigation, MapPin, Menu, X, Sun, Cloud, CloudSun, CloudRain, CloudSnow, CloudLightning, RefreshCw } from 'lucide-react';

interface DayWeather {
  date: string;
  max: number;
  min: number;
  code: number;
}

export default function DallangmuApp() {
  const [activeTab, setActiveTab] = useState('home');
const tripDays = ['5/27', '5/28', '5/29', '5/30'];
const dayTheme: Record<string, string> = {
  '5/27': '여행시작!',
  '5/28': '비에이',
  '5/29': '오타루',
  '5/30': '마지막날',
};

const dayDesc: Record<string, string> = {
  '5/27': '삿포로 도착! 스프카레를 첫 식사로 즐겨요.',
  '5/28': '비에이 투어로 홋카이도 자연을 만끽해요.',
  '5/29': '오타루 운하, 오르골당, 증기시계 관광!',
  '5/30': '즐거웠던 여행을 마무리하고 귀국!',
};
  const todayKey = (() => { const n = new Date(); return `${n.getMonth()+1}/${n.getDate()}`; })();
  const [selectedDay, setSelectedDay] = useState(tripDays.includes(todayKey) ? todayKey : '5/27');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [weatherMap, setWeatherMap] = useState<Record<string, CityWeather>>({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const translateJA = async (text: string): Promise<string> => {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=ko&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const data = await res.json();
      return (data[0] as any[]).map((item: any) => item[0]).join('');
    } catch {
      return text;
    }
  };

  const fetchWeather = async () => {
    setIsRefreshing(true);
    try {
      const nowJST = new Date(Date.now() + 9 * 60 * 60 * 1000);
      const nowStr = nowJST.toISOString().slice(0, 13);

      /* 현재 6시간 구간 인덱스 (JMA pops용) */
      const findCurrentPopIdx = (timeDefines: string[]) => {
        let idx = 0;
        for (let i = 0; i < timeDefines.length; i++) {
          if (new Date(timeDefines[i]) <= nowJST) idx = i;
        }
        return idx;
      };

      /* Open-Meteo hourly 현재 시각 인덱스 */
      const findOMHourIdx = (times: string[]) => {
        const i = times.findIndex(t => t.slice(0, 13) >= nowStr);
        return i >= 0 ? i : 0;
      };

      const findDateIdx = (timeDefines: string[], dateStr: string) =>
        timeDefines.findIndex(t => t.startsWith(dateStr));

      const findArea = (areas: any[], name: string) =>
        areas.find((a: any) => a.area.name === name);

      /* 병렬 fetch — JMA JSON 우선, Open-Meteo는 실시간 hourly 보완용 */
      const [d016, d012, omSapporo, omOtaru, omBiei] = await Promise.all([
        fetch(JMA_URLS.sapporo).then(r => r.json()),
        fetch(JMA_URLS.biei).then(r => r.json()),
        fetch(getOMUrl(OM_POINTS.sapporo.lat, OM_POINTS.sapporo.lon)).then(r => r.json()),
        fetch(getOMUrl(OM_POINTS.otaru.lat,   OM_POINTS.otaru.lon)).then(r => r.json()),
        fetch(getOMUrl(OM_POINTS.biei.lat,    OM_POINTS.biei.lon)).then(r => r.json()),
      ]);

      /* jmaArr[0] = 단기예보, jmaArr[1] = 주간예보 */
      const buildCity = async (
        jmaArr: any[], om: any,
        popAreaName: string,
        codeAreaName: string,
        tempCityName: string,
        weeklyAreaName: string
      ): Promise<CityWeather> => {
        const short  = jmaArr?.[0]; // 단기: timeSeries[0~2]
        const weekly = jmaArr?.[1]; // 주간: timeSeries[0~1]

        /* ── JMA 우선 항목 ── */
        const popSeries     = short?.timeSeries?.[1];
        const popArea       = popSeries ? findArea(popSeries.areas, popAreaName) : null;
        const currentPopIdx = popSeries ? findCurrentPopIdx(popSeries.timeDefines) : 0;
        const precipProb    = popArea ? parseInt(popArea.pops[currentPopIdx] ?? "0") || 0 : 0;

        const codeSeries = short?.timeSeries?.[0];
        const codeArea   = codeSeries ? findArea(codeSeries.areas, codeAreaName) : null;
        const todayCode  = codeArea ? parseInt(codeArea.weatherCodes[0] ?? "100") : 100;
        const rawWeatherText = (codeArea?.weathers?.[0] ?? '').replace(/\s+/g, ' ').trim();
        const msg = rawWeatherText ? await translateJA(rawWeatherText) : '';

        /* ── Open-Meteo 보완 항목 (실시간 hourly) ── */
        const hIdx      = findOMHourIdx(om.hourly.time);
        const currentTemp  = Math.round(om.hourly.temperature_2m[hIdx]);
        const apparentTemp = Math.round(om.hourly.apparent_temperature[hIdx]);
        const windSpeed    = Math.round(om.hourly.wind_speed_10m[hIdx]);
        const humidity     = om.hourly.relative_humidity_2m[hIdx] ?? 0;
        const cloudCover   = om.hourly.cloud_cover[hIdx] ?? 0;
        const sunrise      = (om.daily.sunrise[0] ?? '').slice(11, 16);
        const sunset       = (om.daily.sunset[0] ?? '').slice(11, 16);

        /* ── 7일 예보 (JMA 우선: 기온·강수·코드 모두 JMA weekly) ── */
        const weeklyTs0      = weekly?.timeSeries?.[0];
        const weeklyTs1      = weekly?.timeSeries?.[1];
        const weeklyTimes    = (weeklyTs0?.timeDefines ?? []) as string[];
        const weeklyArea     = weeklyTs0 ? findArea(weeklyTs0.areas, weeklyAreaName) : null;
        const weeklyTempArea = weeklyTs1 ? findArea(weeklyTs1.areas, tempCityName) : null;
        const tripDates = ["2026-05-27","2026-05-28","2026-05-29","2026-05-30"];
        const daily: CityDayWeather[] = weeklyTimes.length > 0 ? tripDates.map(td => {
          const idx = findDateIdx(weeklyTimes, td);
          if (idx === -1) return null;
          const m = parseInt(td.slice(5, 7));
          const dd = parseInt(td.slice(8, 10));
          return {
            date: `${m}/${dd}`,
            cityName: tempCityName,
            max:        weeklyTempArea ? parseInt(weeklyTempArea.tempsMax?.[idx] ?? "0") : 0,
            min:        weeklyTempArea ? parseInt(weeklyTempArea.tempsMin?.[idx] ?? "0") : 0,
            code:       weeklyArea ? parseInt(weeklyArea.weatherCodes?.[idx] ?? "100") : 100,
            precipProb: weeklyArea ? parseInt(weeklyArea.pops?.[idx] ?? "0") || 0 : 0,
          };
        }).filter(Boolean) as CityDayWeather[] : [];

        return {
          current: {
            temp: `${currentTemp}°`,
            apparentTemp: `${apparentTemp}°`,
            precipProb, windSpeed, cloudCover, humidity,
            sunrise, sunset, code: todayCode, msg,
          },
          daily,
        };
      };

      const [sapporoW, otaruW, bieiW] = await Promise.all([
        buildCity(d016, omSapporo, "石狩地方", "石狩地方", "札幌",   "石狩・空知・後志地方"),
        buildCity(d016, omOtaru,   "後志地方", "後志地方", "倶知安", "石狩・空知・後志地方"),
        buildCity(d012, omBiei,    "上川地方", "上川地方", "旭川",   "上川・留萌地方"),
      ]);
      setWeatherMap({ sapporo: sapporoW, otaru: otaruW, biei: bieiW });
    } catch (err) {
      console.error("날씨 fetch 실패:", err);
      const fallback: CityWeather = {
        current: { temp: "--°", apparentTemp: "--°", precipProb: 0, windSpeed: 0, cloudCover: 0, humidity: 0, sunrise: "--:--", sunset: "--:--", code: 100, msg: "" },
        daily: [],
      };
      setWeatherMap({ sapporo: fallback, biei: fallback, otaru: fallback });
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    fetchWeather();
    return () => clearInterval(timer);
  }, []);

  const OVERVIEW_MAP = 'https://www.google.com/maps/@43.4134022,141.7915009,8.5z/data=!4m3!11m2!2sofAFs3H3yhsORQMF46038g!3e3?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D';
  const mapLinks: Array<[string, string]> = [
    ['공항버스',        'https://maps.app.goo.gl/FHmBku5rPKMDBaqb9'],
    ['카메라 픽업',     'https://maps.app.goo.gl/FHmBku5rPKMDBaqb9'],
    ['TW0263',         'https://maps.app.goo.gl/FHmBku5rPKMDBaqb9'],
    ['한국 도착',       'https://maps.app.goo.gl/FHmBku5rPKMDBaqb9'],
    ['신치토세',        'https://maps.app.goo.gl/M2dJbtNdD4x7Tx9T6'],
    ['TW0264',         'https://maps.app.goo.gl/M2dJbtNdD4x7Tx9T6'],
    ['공항 이동',       'https://maps.app.goo.gl/M2dJbtNdD4x7Tx9T6'],
    ['공항 점심',       'https://maps.app.goo.gl/M2dJbtNdD4x7Tx9T6'],
    ['베셀',           'https://maps.app.goo.gl/CV5pUugbLAqN3UjJ8'],
    ['호텔 조식',       'https://maps.app.goo.gl/CV5pUugbLAqN3UjJ8'],
    ['스아게',         'https://maps.app.goo.gl/tQaYrCbPQknC39L6A'],
    ['시내 투어',       'https://maps.app.goo.gl/7j2MkHQoPs7yjHp59'],
    ['유우히',         'https://maps.app.goo.gl/ytiXAUyNYG4gGPfq5'],
    ['비에이 투어 시작', 'https://maps.app.goo.gl/xnZ7xkeymWsZv7s7A?g_st=ac'],
    ['비에이 관광',     'https://maps.app.goo.gl/wGwDBkfLjMAR5MBw9'],
    ['후속 투어',       'https://maps.app.goo.gl/wGwDBkfLjMAR5MBw9'],
    ['다이마루',        'https://www.google.com/maps/place/%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+1+Chome-7-2+Nakamachi,+Biei,+Kamikawa+District,+Hokkaido+071-0207+%EC%9D%BC%EB%B3%B8/data=!4m2!3m1!1s0x5f0cc5c369df0d79:0x9ff82fcf46ad7f0c'],
    ['카도야',         'https://maps.app.goo.gl/8mRMuBu3LAnVCMVD8'],
    ['겐텐소노',        'https://maps.app.goo.gl/x4cA7quzbpjNuEoC9'],
    ['오타루',         'https://maps.app.goo.gl/F8GFdBmUgH61wTfW8'],
    ['와규 쿠로사와',   'https://maps.app.goo.gl/kP94YVcX9nuYL7WS9'],
    ['맥주박물관',      'https://maps.app.goo.gl/Sy4ZSJxa9rWmf9wt9'],
    ['츠바메',         'https://maps.app.goo.gl/1vZxctTDgXXNP86g8'],
    ['코메다',         'https://maps.app.goo.gl/WvCFavVHPdyeRWGZ7'],
  ];
  const openMaps = (placeName: string) => {
    const match = mapLinks.find(([key]) => placeName.includes(key));
    if (match) { window.open(match[1], '_blank', 'noopener,noreferrer'); return; }
    window.open(OVERVIEW_MAP, '_blank', 'noopener,noreferrer');
  };

  // [복구] 5/27 ~ 5/30 전체 상세 일정 (생략 절대 없음)
  const fullSchedule: Record<string, any[]> = {
    '5/27': [
      { time: '06:40', task: '인천공항 출발', desc: '집에서 출발. 6013번 버스 이용 (06:10 / 06:40 배차 확인).' },
      { time: '10:10', task: '티웨이 TW251 탑승', desc: '제1여객터미널 출발. 모바일 체크인 권장. 삿포로행 이륙.' },
      { time: '13:00', task: '신치토세 도착', desc: '공항버스로 시내 이동 (국제선 84번, 국내선 22/14번 게이트). 왕복 2,500엔.' },
      { time: '15:00', task: '베셀 호텔 체크인', desc: '체크인은 2시부터. 체크인 전 라멘집 대기표 미리 뽑아두기 추천.' },
      { time: '15:30', task: '점심: 스아게+', desc: '유명 스프카레 맛집.\n추천 메뉴: 닭, 돼지, 브로콜리 추가 필수.' },
      { time: '오후', task: '시내 투어 & 쇼핑', desc: '맥주박물관(무료), 시계탑, TV타워. GU(8층), 돈키호테(2층), 스탠다드(8층).' },
      { time: '19:30', task: '저녁: 유우히', desc: '징기스칸(양고기) 식사.\n핫페퍼 사전 예약 완료.' }
    ],
    '5/28': [
      { time: '08:00', task: '호텔 조식', desc: '베셀 호텔 조식 이용 후 투어 집합 장소로 이동.' },
      { time: '09:00', task: '비에이 투어 시작', desc: '다이와 로이넷 호텔 앞 집합 (흰그림자투어/마이리얼트립 결제 완료).' },
      { time: '오전', task: '비에이 관광', desc: '팜토미타(30분), 탁신관(30분), 언덕(20분) 방문.' },
      { time: '14:00', task: '점심: 준페이', desc: '투어 중 에비동 식사 (약 70분 소요). 바삭한 새우 튀김.' },
      { time: '오후', task: '후속 투어', desc: '청의 호수(30분), 흰수염 폭포(20분), 휴게소 후 삿포로 복귀.' },
      { time: '20:00', task: '저녁: 니쿠마루', desc: '야키니쿠 식사 (대안: 시부키, 니쿠시키 등 예약 가능).' }
    ],
    '5/29': [
      { time: '09:00', task: '아침 식사', desc: '07:00 오픈 "겐텐소노 2" 라멘 또는 호텔 조식.' },
      { time: '10:00', task: '오타루 이동', desc: 'JR 삿포로역 출발. ★진행 방향 오른쪽 좌석 추천★ 바다 조망.' },
      { time: '11:00', task: '오타루 관광', desc: '오르골당, 증기시계, 스누피, 어묵공장. 기타이치홀(오후 2/3/4시 이벤트).' },
      { time: '13:00', task: '점심: 와규 쿠로사와', desc: '규카츠 식사 (예약 가능). 르타오 디저트 및 운하 산책.' },
      { time: '오후', task: '스스키노 복귀', desc: '오타루 일정 후 복귀. 전날 못 갔을 경우 맥주박물관 구경.' },
      { time: '19:00', task: '저녁: 사보텐', desc: '오코노미야키 식사 (대안: 쿠우야 또는 5월 초 예약 필요한 텟판치).' }
    ],
    '5/30': [
      { time: '09:00', task: '조식: 코메다커피', desc: '나고야 스타일 앙버터 토스트 모닝 세트. 오전 7시 오픈.' },
      { time: '10:00', task: '공항 이동', desc: '호텔 1층 앞 공항버스 탑승. 하차 시 티켓 지불. 2층 국내선 관광.' },
      { time: '11:30', task: '공항 점심', desc: '신치토세 공항 구경 및 공항 내 점심 식사.' },
      { time: '14:35', task: '티웨이 TW252 탑승', desc: '삿포로(CTS) 출발. 출국 수속 및 면세점 대기.' },
      { time: '17:40', task: '한국 도착', desc: '인천공항 도착 및 즐거운 일정 마무리.' }
    ]
  };

  // [전수 수록] 87개 맛집 리스트 (생략 절대 없음!)
  Object.assign(fullSchedule, {
    '5/27': [
      { time: '06:10', task: '공항버스 출발', desc: '6013번 버스 (06:10 / 06:40 배차)\n편도 17,000원, 소요 약 90분' },
      { time: '07:40', task: '카메라 픽업', desc: '렌탈공룡 카메라 픽업\nT1 3층 출발층 8번에서 픽업' },
      { time: '10:10', task: '티웨이 TW0263 탑승', desc: '제1여객터미널 출발. 투어비스 이용.\n비행시간 약 2시간 50분. 삿포로행 이륙.' },
      { time: '13:00', task: '신치토세 도착', desc: '공항버스로 시내 이동\n국제선 1층 84번 / 국내선 22·14번 게이트\n왕복 2,500엔 / 편도 1,300엔, 소요 약 90분' },
      { time: '15:00', task: '베셀 호텔 체크인', desc: '아고다 예약. 체크인은 2시부터.\n★ 체크인 전 스아게+ 웨이팅 확인\n★ 체크인 시 조식 신청' },
      { time: '15:30', task: '점심: 스아게+', desc: '유명 스프카레 맛집.\n추천 메뉴: 닭, 돼지, 브로콜리 추가 필수.' },
      { time: '오후', task: '시내 투어 & 쇼핑', desc: '구경: 시계탑 → 오도리공원 → TV타워\n쇼핑: GU(~20시), 스탠다드(~20시), 칼디(~21시), 메가돈키(~02시)' },
      { time: '19:30', task: '저녁: 유우히', desc: '징기스칸(양고기) 식사.\n핫페퍼 사전 예약 완료.' }
    ],
    '5/28': [
      { time: '08:00', task: '호텔 조식', desc: '베셀 호텔 조식 이용 후 투어 집합 장소로 이동.' },
      { time: '09:30', task: '비에이 투어 시작', desc: '다이와 로이넷 호텔 앞 집합.\n흰그림자투어 / 네이버 예약 완료.' },
      { time: '오전', task: '비에이 관광', desc: '휴게소(10분) → 흰수염폭포(20분) → 청의호수(30분)' },
      { time: '점심', task: '점심: 다이마루', desc: '비에이역 앞 돈카츠 맛집.\n비에이 투어 중 점심 식사.' },
      { time: '오후', task: '후속 투어', desc: '팜도미타(60분) → 휴게소(10분)\n스스키노 19:00 도착' },
      { time: '19:30', task: '저녁: 카도야', desc: '장어덮밥 식사.' }
    ],
    '5/29': [
      { time: '09:00', task: '아침: 겐텐소노2', desc: '라멘 맛집. 07:00 오픈. 호텔에서 이동.' },
      { time: '10:00', task: '오타루 이동', desc: 'JR 삿포로역 → 미나미오타루역 (35~40분)\n★ 진행 방향 오른쪽 좌석 추천 ★\n편도 800엔' },
      { time: '11:00', task: '오타루 관광', desc: '오르골당 → 증기시계(15분마다) → 스누피 → 어묵공장 → 르타오 → 운하 → 기찻길 → 오타루역\n기타이치홀(2/3/4시 30분씩 이벤트)' },
      { time: '13:00', task: '점심: 와규 쿠로사와', desc: '규카츠 식사. 예약 가능.' },
      { time: '오후', task: '삿포로 복귀 & 맥주박물관', desc: '오타루역 → 삿포로역 → 맥주박물관\n북구 2번 정류장, 188번 버스 10분\n버스: 뒷문 승차, 앞문 하차, 240엔\n맥주박물관: 입장 무료, 잔 450엔, 18:00까지' },
      { time: '19:00', task: '저녁: 츠바메', desc: '야키니쿠 식사. 핫페퍼 예약 완료.' }
    ],
    '5/30': [
      { time: '09:00', task: '조식: 코메다커피', desc: '나고야 스타일 앙버터 토스트 모닝 세트\n오전 7시 오픈' },
      { time: '10:00', task: '공항 이동', desc: '공항버스 탑승. 1출구 앞 하차 후 티켓 제출.\n에컬 탑승 → 2층 국제선' },
      { time: '11:30', task: '공항 점심', desc: '신치토세 공항 구경 및 공항 내 점심 식사.' },
      { time: '14:30', task: '티웨이 TW0264 탑승', desc: '삿포로(CTS) 출발. 비행시간 약 3시간 10분.\n출국 수속 및 면세점' },
      { time: '17:40', task: '한국 도착', desc: '인천공항 도착 및 즐거운 일정 마무리.' }
    ]
  });

  const gourmetData = [
    { name: '야끼니꾸 구루만', cat: '야키니쿠', desc: '가성비 최고의 홋카이도산 특수부위 전문 맛집.' },
    { name: '와규 이시자키', cat: '야키니쿠', desc: '전실 개별 룸으로 구성된 최고급 암소 와규 전문점.' },
    { name: '야끼니꾸 츠바메', cat: '야키니쿠', desc: '모던한 인테리어와 예쁜 플레이팅이 돋보이는 고기 맛집.' },
    { name: '야끼니꾸 세카이 챔피언', cat: '야키니쿠', desc: '최상급 A5 랭크 와규와 희소 부위만을 취급하는 전문점.' },
    { name: '요시우시 (Yoshiushi)', cat: '야키니쿠', desc: '고기의 감칠맛을 극대화한 숙성 와규를 맛볼 수 있는 곳.' },
    { name: '기와미 시부키', cat: '야키니쿠', desc: '다양한 고기 부위를 합리적인 가격에 즐길 수 있는 가성비 명소.' },
    { name: '니쿠키조쿠 스스키노', cat: '야키니쿠', desc: '고기를 1장부터 주문 가능한 새로운 스타일의 로컬 맛집.' },
    { name: 'BULL TOKYO 스스키노', cat: '야키니쿠', desc: '신선한 홋카이도산 고기를 제공하는 프리미엄 야키니쿠점.' },
    { name: '야키니쿠 탄카', cat: '야키니쿠', desc: '신삿포로점에서 즐기는 홋카이도산 고기 야키니쿠 전문점.' },
    { name: '다루마', cat: '징기스칸', desc: '1954년 오픈 이래 삿포로 여행객의 필수 코스로 사랑받는 명소.' },
    { name: '이타다키마스', cat: '징기스칸', desc: '자체 목장에서 키운 홋카이도산 사포크 양고기만을 사용하는 전문점.' },
    { name: '징기스칸 램 (Ram)', cat: '징기스칸', desc: '예약 없이 대기 가능하며, 양설 등 희귀 부위를 맛볼 수 있는 맛집.' },
    { name: '라무구치카즈야', cat: '징기스칸', desc: '앗케시카키 라무구치카즈야의 캐주얼하고 친근한 현지인 맛집.' },
    { name: '요조라노 징기스칸', cat: '징기스칸', desc: '10층에서 삿포로의 화려한 야경을 바라보며 생 양고기를 즐길 수 있는 곳.' },
    { name: '아지노히츠지가오카', cat: '징기스칸', desc: '10가지 이상의 채소와 과일을 넣은 자체 숙성 소스가 일품인 식당.' },
    { name: '유우히', cat: '징기스칸', desc: '잡내 없는 고급 양고기를 탁 트인 야경과 함께 제공하는 스스키노 맛집.' },
    { name: '코레가 징기스칸', cat: '징기스칸', desc: '숯불구이 전문점으로, 파 소금 등 이색적인 소스를 곁들여 먹는 곳.' },
    { name: '마츠오 징기스칸', cat: '징기스칸', desc: '50년 전통의 특제 소스에 재운 양고기를 제공하는 전통의 강자.' },
    { name: '마사진', cat: '징기스칸', desc: '개별 화로에서 취향에 맞게 구워 먹는 스스키노의 인기 징기스칸.' },
    { name: '키린비루니와', cat: '징기스칸', desc: '키린 생맥주와 냉장 상태의 신선한 생양고기를 함께 즐기는 비어홀.' },
    { name: '가라쿠 (GARAKU)', cat: '스프카레', desc: '닭다리가 통째로 들어간 향신료 풍미 가득한 줄 서는 맛집.' },
    { name: '스아게 (Suage+)', cat: '스프카레', desc: '튀긴 야채와 고기, 그리고 밥까지 완벽한 조화를 이루는 유명 식당.' },
    { name: '아쟌타 소혼케', cat: '스프카레', desc: '30종의 향신료를 사용해 하루 50인분만 한정 판매하는 약선 카레.' },
    { name: '샤바조 (Syabazo)', cat: '스프카레', desc: '양 뼈 육수를 베이스로 한 깊은 맛의 이색 스프카레 현지인 맛집.' },
    { name: '스시젠 본점', cat: '스시/해산물', desc: '예술품 같은 스시를 쥐어주는 삿포로 최고의 전통 스시 강자.' },
    { name: '스시 미야카와', cat: '스시/해산물', desc: '미슐랭 3스타의 품격 있는 오마카세를 경험할 수 있는 명소.' },
    { name: '스시사이 와키치', cat: '스시/해산물', desc: '미슐랭 2스타의 정교하고 섬세한 스시를 선보이는 맛집.' },
    { name: '스시 코이세', cat: '스시/해산물', desc: '비교적 예약이 편리하고 친절한 분위기의 실력파 스시 전문점.' },
    { name: '토리톤 스시', cat: '스시/해산물', desc: '현지인들이 줄을 서서 먹는 가성비 최고의 인기 회전초밥 전문점.' },
    { name: '이세즈시', cat: '스시/해산물', desc: '오타루의 미슐랭 스타 레스토랑으로 미식가들이 강력 추천하는 곳.' },
    { name: '스시야 코다이', cat: '스시/해산물', desc: '오타루 현지 로컬들이 아끼는 숨은 보석 같은 스시 명소.' },
    { name: '오타루 후쿠즈시', cat: '스시/해산물', desc: '다양하고 신선한 오타루의 해산물을 정통 초밥으로 즐기는 곳.' },
    { name: '오타루 우오마사', cat: '스시/해산물', desc: '장인 정신이 느껴지는 깔끔하고 신선한 오타루 대표 스시집.' },
    { name: '오타루 마사즈시', cat: '스시/해산물', desc: '오타루를 대표하는 초밥집으로 화려하고 풍성한 구성을 자랑함.' },
    { name: '와라쿠', cat: '스시/해산물', desc: '오타루의 신선한 해산물을 맛볼 수 있는 대형 회전초밥 전문점.' },
    { name: '효우세츠노몬', cat: '게 요리', desc: '삿포로에서 가장 오랜 역사를 자랑하는 게 요리 코스 전문점.' },
    { name: '삿포로 카니야', cat: '게 요리', desc: '다양한 게 요리 코스를 갖춘 대형 전문점으로 가족 단위 방문에 좋음.' },
    { name: '카니혼케', cat: '게 요리', desc: '고급스러운 분위기에서 친절한 서비스를 받으며 게 요리를 즐기는 곳.' },
    { name: '시라카바산소', cat: '라멘', desc: '궁극의 진한 국물을 자랑하는 삿포로 정통 미소라멘 맛집.' },
    { name: '아라톤 본점', cat: '라멘', desc: '활어 뼈와 돼지 뼈를 우려낸 특제 매운 츠케멘이 인기인 곳.' },
    { name: '라멘 키치린', cat: '라멘', desc: '맑은 시오라멘과 깔끔한 국물맛이 일품인 식당.' },
    { name: '멘즈나가쿠라', cat: '라멘', desc: '토종닭과 생간장을 사용해 깊은 풍미를 낸 왕도 스타일의 라멘.' },
    { name: '라멘 토라 TORA', cat: '라멘', desc: '진하고 크리미한 맛의 해물 돈코츠 스프가 특징인 라멘집.' },
    { name: '멘야 코하쿠', cat: '라멘', desc: '트리플 수프와 수제 호박기름을 사용한 아츠베츠 지역의 인기 라멘.' },
    { name: '시노고노이와즈', cat: '라멘', desc: '산초와 고추의 강렬한 매운맛을 즐길 수 있는 매운 라멘 전문점.' },
    { name: '라멘 도카이야', cat: '라멘', desc: '오타루 현지 로컬들이 꾸준히 찾는 정통파 스타일의 라멘집.' },
    { name: '케이엔 앙카케 야끼소바', cat: '라멘', desc: '오타루의 소울푸드로 불리는 볶음면 요리의 원조격 식당.' },
    { name: '베이후테이', cat: '라멘', desc: '직장인들에게 인기 있는 아부라 소바와 다양한 세계 맥주가 있는 곳.' },
    { name: '우미아지하키쵸', cat: '카이센동', desc: '연어 알을 산더미처럼 쌓아주는 "츳코메시"로 유명한 명소.' },
    { name: '키타노 구루메테이', cat: '카이센동', desc: '삿포로 장외시장의 신선한 재료를 담은 해물덮밥 전문점.' },
    { name: '만푸쿠테이', cat: '카이센동', desc: '오타루 산카쿠 마켓 내 위치한 넉넉한 인심의 시장 식당.' },
    { name: '산카쿠테이', cat: '카이센동', desc: '수량 한정 메뉴인 산카쿠동을 맛볼 수 있는 시장 대표 맛집.' },
    { name: '다베도코로 아이다', cat: '카이센동', desc: '현지인들이 더 많이 찾는 산카쿠 시장 내 가성비 좋은 식당.' },
    { name: '아지도코로', cat: '카이센동', desc: '이치바 쇼쿠도에서 즐기는 신선한 사시미와 덮밥 전문점.' },
    { name: '다키나미', cat: '카이센동', desc: '다양한 조합의 메뉴를 선택할 수 있는 시장 카이센동 명소.' },
    { name: '돈부리 차야', cat: '카이센동', desc: '오타루 사카이마치에서 화려한 일품 카이센동을 제공하는 곳.' },
    { name: '유키지루시 파라', cat: '디저트', desc: '유지방 16%의 진한 "스노 로얄" 푸딩과 아이스크림의 전설.' },
    { name: '롯카테이 삿포로', cat: '디저트', desc: '유통기한이 단 3시간뿐인 "사쿠사쿠파이"를 맛볼 수 있는 본점.' },
    { name: '르타오 본점', cat: '디저트', desc: '오타루를 대표하는 더블프롬마주 치즈케이크의 명가.' },
    { name: '르타오 파토스', cat: '디저트', desc: '오타루 최대 규모 매장으로 다양한 디저트 시식 가능.' },
    { name: '데니쉬 다니 르타오', cat: '디저트', desc: '비에이 우유를 듬뿍 사용한 고소한 치즈 데니쉬 전문점.' },
    { name: '류게츠 오타루토점', cat: '디저트', desc: '오타루 매장 한정 타르트와 촉촉한 바움쿠헨이 인기.' },
    { name: '키타카로', cat: '디저트', desc: '입안에서 녹는 바움쿠헨과 커다란 슈크림으로 유명한 전문점.' },
    { name: '키노토야', cat: '디저트', desc: '삿포로역 등에서 만날 수 있는 진한 우유맛 아이스크림 1위 맛집.' },
    { name: '반즈 (BARNES)', cat: '디저트', desc: '수제 건포도를 넣은 "럼 레즌" 아이스크림이 환상적인 곳.' },
    { name: 'CAFE NORTE SAPPORO', cat: '디저트', desc: '홋카이도 특산물 하스캇푸 소스를 곁들인 아이스크림.' },
    { name: '크레미아', cat: '디저트', desc: '고급 풍미 프리미엄 소프트크림 명소.' },
    { name: '밀크무라', cat: '디저트', desc: '130종의 술을 아이스크림에 뿌려 먹는 이색 시메 파르페 전문점.' },
    { name: '펭귄당', cat: '디저트', desc: '삿포로 밤 파르페 문화의 원조격으로 수제 젤라또가 일품.' },
    { name: '화이트 코지', cat: '디저트', desc: '요쓰바 유업 직영으로 신선하고 진한 우유 맛 파르페 제공.' },
    { name: '파르페 술 사토', cat: '디저트', desc: '밤늦게까지 화려한 비주얼의 과일 파르페를 즐기는 곳.' },
    { name: '카페 노이몬드', cat: '디저트', desc: '다채로운 구성의 젤라또 파르페를 선보이는 전문 카페.' },
    { name: '파르페테리아 미르', cat: '디저트', desc: '비주얼 쇼크! 깨트려 먹는 재미가 있는 이색 파르페.' },
    { name: '로지우라 카페', cat: '디저트', desc: '살살 녹는 질감과 고급스러운 맛의 파르페 맛집.' },
    { name: '기기타이치홀', cat: '디저트', desc: '167개의 유리 석유 램프가 켜지는 환상적인 분위기.' },
    { name: 'cafe 이로나이 식당', cat: '디저트', desc: '옛 민가를 리모델링하여 고즈넉한 분위기를 살린 카페.' },
    { name: '카히사칸', cat: '디저트', desc: '오타루역 내에 위치해 여행 전후 들르기 좋은 명소.' },
    { name: '페이스트리 스내플스', cat: '디저트', desc: '하코다테 명물인 입안에서 녹는 "치즈 오믈렛" 전문점.' },
    { name: '삿포로 모리히코', cat: '디저트', desc: '맛있는 핸드드립 커피와 정갈한 디저트를 즐기는 카페.' },
    { name: '포플러 팜', cat: '디저트', desc: '붉은 멜론 위에 아이스크림을 올린 "산타 수염" 맛집.' },
    { name: '준페이 (Junpei)', cat: '기타/지역', desc: '바삭하고 통통한 새우가 일품인 인생 에비동 성지.' },
    { name: 'Biei Curry', cat: '기타/지역', desc: '비에이 지역의 신선한 채소를 담은 카레 식당.' },
    { name: '나루토 본점', cat: '기타/지역', desc: '겉바속촉 닭 반 마리 튀김 "한미아게" 원조집.' },
    { name: '오타루 창고 No.1', cat: '기타/지역', desc: '운하 옆에서 로컬 맥주와 소시지를 즐기는 양조장 카페.' },
    { name: 'Jacksonville', cat: '기타/지역', desc: '홋카이도산 식재료로 만드는 정통 미국식 수제버거.' },
    { name: '치토세츠루 이자카야', cat: '기타/지역', desc: '양조장 직영으로 운영되는 토주와 안주 맛집.' },
    { name: '레스토랑 시갈', cat: '기타/지역', desc: '이시카리만의 풍경을 바라보며 즐기는 비프시츄.' },
    { name: '테라스 브랏세리', cat: '기타/지역', desc: '오타루 운하 인근 호텔 내 위치한 조식 뷔페.' },
    { name: '하야시야 식당', cat: '기타/지역', desc: '카레 라멘부터 해산물까지 이른 아침 식사가 가능한 곳.' }
  ];

  const categories = ['전체', '야키니쿠', '징기스칸', '스프카레', '스시/해산물', '라멘', '카이센동', '디저트', '게 요리', '기타/지역'];
  const filteredGourmet = selectedCategory === '전체' ? gourmetData : gourmetData.filter(item => item.cat === selectedCategory);

  const getCody = (temp: number): string => {
    if (temp >= 28) return "폭염 주의! 통기성 좋은 린넨이나 민소매로 가볍게 입으세요. ☀️";
    if (temp >= 23) return "낮 활동이 많다면 반팔! 에어컨 대비 얇은 셔츠도 좋아요. 👕";
    if (temp >= 20) return "긴팔 티셔츠 한 장이면 충분! 가벼운 발걸음으로 여행하세요. 😊";
    if (temp >= 17) return "일교차가 커요! 사진용 예쁜 자켓을 꼭 챙기세요. 🧥";
    if (temp >= 12) return "트렌치코트나 야상이 베스트!\n활동성과 스타일을 동시에 잡으세요. 🧥";
    if (temp >= 9)  return "아침저녁은 꽤 쌀쌀해요! 경량 패딩이나 도톰한 니트가 필수입니다. 🧣";
    if (temp >= 5)  return "추위에 떨면 여행 망쳐요! 울 코트나 패딩으로 든든하게 입으세요. ❄️";
    return "여행지는 한겨울! 롱패딩과 핫팩으로 무장하고 나가세요. ❄️";
  };

  const getW = () => {
    const code = weatherMap.sapporo?.current.code ?? 100;
    if (code < 200) return { bg: "from-[#FFF59D] to-[#FFD54F]", box: "bg-amber-400/25", line: "border-amber-400/40" };
    if (code < 210) return { bg: "from-[#B3E5FC] to-[#E1F5FE]", box: "bg-sky-400/20",   line: "border-sky-400/30" };
    if (code < 400) return { bg: "from-[#80DEEA] to-[#B2EBF2]", box: "bg-cyan-400/20",  line: "border-cyan-400/30" };
    return           { bg: "from-[#CE93D8] to-[#EDE7F6]", box: "bg-purple-400/20", line: "border-purple-400/30" };
  };
  const getWeatherMessage = (w: CurrentWeather): string => {
    if (w.precipProb >= 60) return "비 가능성이 높아요. 우산을 꼭 챙기세요. ☂️";
    if (w.precipProb >= 35) return "비 가능성이 조금 있어요. 접이식 우산을 추천해요. 🌂";
    if (w.windSpeed >= 25) return "바람이 강해 체감온도가 낮게 느껴질 수 있어요. 🌬️";
    if (w.cloudCover >= 70) return "구름이 많아 흐리게 느껴질 수 있어요. ☁️";
    return "야외 일정에 무난한 날씨예요. 😊";
  };

  const w = getW();
  const getWeatherLabel = (code: number) => {
    if (code < 110) return '맑음 ☀️';
    if (code < 200) return '맑고 구름 ⛅';
    if (code < 210) return '흐림 ☁️';
    if (code < 300) return '흐리고 비 🌧️';
    if (code < 400) return '비 🌧️';
    if (code < 500) return '눈 ❄️';
    return '특보 ⛈️';
  };

  const getWeatherIcon = (code: number, size = 32) => {
    if (code < 110) return <Sun size={size} className="text-amber-400" />;
    if (code < 200) return <CloudSun size={size} className="text-gray-400" />;
    if (code < 210) return <Cloud size={size} className="text-gray-500" />;
    if (code < 400) return <CloudRain size={size} className="text-blue-500" />;
    if (code < 500) return <CloudSnow size={size} className="text-blue-300" />;
    return <CloudLightning size={size} className="text-purple-400" />;
  };

  const getDayLabel = (dateStr: string) => {
    const [m, d] = dateStr.split('/');
    const date = new Date(2026, parseInt(m) - 1, parseInt(d));
    return ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  };


  const parseMin = (t: string): number | null => {
    const m = t.match(/^(\d{1,2}):(\d{2})$/);
    return m ? parseInt(m[1]) * 60 + parseInt(m[2]) : null;
  };
  const getItemIcon = (task: string): string => {
    if (task.includes('출발') || task.includes('탑승') || task.includes('도착') || task.includes('공항') || task.includes('TW')) return '✈️';
    if (task.includes('호텔') || task.includes('체크인') || task.includes('베셀') || task.includes('조식')) return '🏨';
    if (task.includes('점심') || task.includes('저녁') || task.includes('식사') || task.includes('라멘') || task.includes('카레') || task.includes('커피') || task.includes('아침')) return '🍽️';
    if (task.includes('투어') || task.includes('관광') || task.includes('비에이') || task.includes('오타루')) return '🗺️';
    if (task.includes('쇼핑') || task.includes('이동')) return '🛍️';
    if (task.includes('카메라')) return '📷';
    return '📍';
  };

  const getItemStatus = (item: any, items: any[], index: number): 'past' | 'current' | 'future' => {
    const today = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
    const tripStart = new Date(2026, 4, 27); // 5/27 여행 시작일

    // 여행 시작 전: 5/27 탭의 첫 번째 항목만 활성화
    if (today < tripStart) {
      return (selectedDay === '5/27' && index === 0) ? 'current' : 'future';
    }

    // 여행 시작 후: 오늘이 아닌 탭은 모두 future
    const todayKey2 = `${currentTime.getMonth()+1}/${currentTime.getDate()}`;
    if (selectedDay !== todayKey2) return 'future';

    // 오늘 탭: 실시간 타임테이블 로직
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const itemMin = parseMin(item.time);

    // "오후/오전/점심" 등 시간 미정 항목: 앞뒤 파싱 가능한 시간 사이에 같이 활성화
    if (itemMin === null) {
      let prevMin: number | null = null;
      for (let j = index - 1; j >= 0; j--) {
        const pm = parseMin(items[j].time);
        if (pm !== null) { prevMin = pm; break; }
      }
      let nextMin: number | null = null;
      for (let j = index + 1; j < items.length; j++) {
        const nm = parseMin(items[j].time);
        if (nm !== null) { nextMin = nm; break; }
      }
      if (prevMin === null || now < prevMin) return 'future';
      if (nextMin !== null && now >= nextMin) return 'past';
      return 'current';
    }

    // 당일 첫 일정 시작 전이면 첫 항목 활성화
    if (now < itemMin) return index === 0 ? 'current' : 'future';
    for (let j = index + 1; j < items.length; j++) {
      const nm = parseMin(items[j].time);
      if (nm !== null) return now < nm ? 'current' : 'past';
    }
    return 'current';
  };

  return (
    <div className="w-full bg-[#FBFBFC] min-h-screen font-sans text-[#1A1A1A] overflow-x-hidden flex flex-col items-center">
      
      <header className="w-full bg-white z-[100] border-b border-[#EEEEEE] max-w-md sticky top-0 overflow-hidden">
        <img src={activeTab === 'schedule' ? "https://www.starfield.co.kr/cdn/images/event/regular2/dalrangmoos3.png" : "https://www.starfield.co.kr/cdn/images/event/regular2/dalrangmoos.png"} alt="HEEHEE TOUR" className="w-full block object-contain cursor-pointer" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); window.scrollTo(0,0); }} />
      </header>

      <main className="w-full max-w-md px-4 pb-24">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-500 pt-6">
            <div className={`relative w-full p-4 rounded-[22px] mb-4 shadow-sm bg-gradient-to-br ${w.bg} border border-black/5 transition-opacity duration-300 ${isRefreshing ? 'opacity-60' : 'opacity-100'}`}>
              <button
                onClick={fetchWeather}
                disabled={isRefreshing}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-black/10 active:scale-90 transition-all disabled:opacity-50 z-10"
                aria-label="날씨 새로고침"
              >
                <RefreshCw size={14} className={`text-[#1A55AA] ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
              {/* 삿포로 현재 날씨 고정 */}
              {weatherMap.sapporo ? (() => {
                const cur = weatherMap.sapporo.current;
                return (
                  <>
                    <div className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${w.box} shadow-inner mb-2`}>
                      <div>
                        <p className="text-[11px] font-black opacity-80 mb-0.5">오늘({currentTime.getMonth()+1}/{currentTime.getDate()}) 삿포로 날씨</p>
                        <p className="text-[26px] font-[1000] leading-tight">삿포로 {cur.temp}</p>
                        <p className="text-[13px] font-bold opacity-75">체감 {cur.apparentTemp}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[18px] font-bold opacity-90 block">{getWeatherLabel(cur.code)}</span>
                        <span className="text-[12px] font-bold opacity-70">🌅 {cur.sunrise} / 🌇 {cur.sunset}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1 mb-2">
                      <div className="flex flex-col items-center bg-white/40 rounded-xl py-1.5">
                        <span className="text-[10px] font-black opacity-60">강수확률</span>
                        <span className="text-[15px] font-[900]">{cur.precipProb}%</span>
                      </div>
                      <div className="flex flex-col items-center bg-white/40 rounded-xl py-1.5">
                        <span className="text-[10px] font-black opacity-60">바람</span>
                        <span className="text-[15px] font-[900]">{cur.windSpeed}<span className="text-[10px]">km</span></span>
                      </div>
                      <div className="flex flex-col items-center bg-white/40 rounded-xl py-1.5">
                        <span className="text-[10px] font-black opacity-60">습도</span>
                        <span className="text-[15px] font-[900]">{cur.humidity}%</span>
                      </div>
                      <div className="flex flex-col items-center bg-white/40 rounded-xl py-1.5">
                        <span className="text-[10px] font-black opacity-60">구름</span>
                        <span className="text-[15px] font-[900]">{cur.cloudCover}%</span>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold opacity-90 text-center mb-2.5">
                      {cur.msg || getWeatherMessage(cur)}
                    </p>
                  </>
                );
              })() : (
                <div className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${w.box} shadow-inner mb-2.5`}>
                  <p className="text-[26px] font-[1000]">삿포로 --</p>
                  <span className="text-[18px] font-bold opacity-60">로딩 중</span>
                </div>
              )}

              {/* 4일 그리드: 날짜별 방문 도시 날씨 */}
              <div className="grid grid-cols-4 gap-1.5 pt-2.5 border-t border-black/10 mb-2.5">
                {(['5/27','5/28','5/29','5/30'] as const).map((day) => {
                  const cityKey = DAY_CITY_MAP[day];
                  const cityLabel = cityKey === 'sapporo' ? '삿포로' : cityKey === 'biei' ? '비에이' : '오타루';
                  const dayWeather = weatherMap[cityKey]?.daily.find((d) => d.date === day);
                  return (
                    <div key={day} className="flex flex-col items-center gap-0.5 bg-white/50 backdrop-blur-sm rounded-xl py-2 px-1 border border-white/70 shadow-sm">
                      <span className="text-[10px] font-black opacity-90 leading-tight">{cityLabel}</span>
                      <span className="text-[10px] font-black opacity-75 leading-tight">{`${String(day.split('/')[0]).padStart(2,'0')}/${String(day.split('/')[1]).padStart(2,'0')}(${getDayLabel(day)})`}</span>
                      <div className="my-0.5">{dayWeather ? getWeatherIcon(dayWeather.code, 24) : <Cloud size={24} className="text-gray-400" />}</div>
                      {dayWeather ? (
                        <div className="flex items-center gap-1">
                          <span className="text-[15px] font-[900]">{dayWeather.max}°</span>
                          <span className="text-[11px] opacity-60 font-bold">{dayWeather.min}°</span>
                        </div>
                      ) : <span className="text-[12px] opacity-50">--</span>}
                      {dayWeather && <span className="text-[10px] opacity-70 font-bold">{dayWeather.precipProb}%</span>}
                    </div>
                  );
                })}
              </div>

              {/* 코디 — 하단 1번만, 삿포로 현재 기온 기준 */}
              {weatherMap.sapporo && (
                <p className="text-[14px] font-bold opacity-80 text-center whitespace-pre-line leading-snug border-t border-black/10 pt-2.5">
                  {getCody(parseInt(weatherMap.sapporo.current.temp))}
                </p>
              )}
            </div>
            
            {/* 현재 시각 카드 */}
            <div className="rounded-[18px] bg-gradient-to-br from-[#1A55AA] to-[#2E6FD8] px-5 py-4 mb-3 shadow-md text-center select-none">
              <p className="text-white/90 text-[13px] font-black tracking-[0.15em] mb-2">
                {currentTime.getFullYear()}. {String(currentTime.getMonth()+1).padStart(2,'0')}. {String(currentTime.getDate()).padStart(2,'0')} &nbsp;
                {['일','월','화','수','목','금','토'][currentTime.getDay()]}요일
              </p>
              <div className="flex items-end justify-center gap-2">
                <span className="text-white text-[14px] font-black bg-white/25 px-2.5 py-0.5 rounded-full mb-1">
                  {currentTime.getHours() < 12 ? '오전' : '오후'}
                </span>
                <span className="text-white text-[42px] font-[900] tabular-nums leading-none tracking-tight">
                  {String(currentTime.getHours() % 12 || 12).padStart(2,'0')}
                  <span className="blink">:</span>
                  {String(currentTime.getMinutes()).padStart(2,'0')}
                </span>
                <span className="text-white/40 text-[18px] font-bold tabular-nums leading-none mb-1">
                  {String(currentTime.getSeconds()).padStart(2,'0')}
                </span>
              </div>
            </div>

            {/* 항공편 카드 */}
            <div className="bg-white rounded-[18px] border border-[#E8EEF8] px-5 py-4 shadow-sm mb-6">
              <div className="flex items-center gap-1.5 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#1A55AA" stroke="none">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                <span className="text-[12px] font-black text-[#888]">항공편 정보</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-center">
                      <p className="text-[16px] font-[900] leading-tight">ICN</p>
                      <p className="text-[10px] text-[#AAA] font-bold">인천</p>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] font-black text-[#1A55AA] mb-0.5">TW0263</span>
                      <div className="flex items-center gap-0.5">
                        <div className="w-8 h-[1.5px] bg-[#DDDDDD]"/>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#1A55AA"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                        <div className="w-8 h-[1.5px] bg-[#DDDDDD]"/>
                      </div>
                      <span className="text-[10px] text-[#AAA] mt-0.5">5/27</span>
                    </div>
                    <div className="text-center">
                      <p className="text-[16px] font-[900] leading-tight">CTS</p>
                      <p className="text-[10px] text-[#AAA] font-bold">삿포로</p>
                    </div>
                  </div>
                  <p className="text-[15px] font-[900] text-[#1A1A1A]">10:10 → 13:00</p>
                </div>
                <div className="border-t border-[#F4F4F4]"/>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-center">
                      <p className="text-[16px] font-[900] leading-tight">CTS</p>
                      <p className="text-[10px] text-[#AAA] font-bold">삿포로</p>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] font-black text-[#1A55AA] mb-0.5">TW0264</span>
                      <div className="flex items-center gap-0.5">
                        <div className="w-8 h-[1.5px] bg-[#DDDDDD]"/>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#1A55AA"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                        <div className="w-8 h-[1.5px] bg-[#DDDDDD]"/>
                      </div>
                      <span className="text-[10px] text-[#AAA] mt-0.5">5/30</span>
                    </div>
                    <div className="text-center">
                      <p className="text-[16px] font-[900] leading-tight">ICN</p>
                      <p className="text-[10px] text-[#AAA] font-bold">인천</p>
                    </div>
                  </div>
                  <p className="text-[15px] font-[900] text-[#1A1A1A]">14:30 → 17:40</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-2xl font-[900] flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A55AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <line x1="8" y1="14" x2="11" y2="14"/>
                  <line x1="13" y1="14" x2="16" y2="14"/>
                  <line x1="8" y1="18" x2="11" y2="18"/>
                </svg>
                오늘의 일정
              </h3>
              <button onClick={() => { setActiveTab('schedule'); window.scrollTo(0,0); }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#1A55AA] bg-white text-[13px] font-black text-[#1A55AA] active:scale-95 transition-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <line x1="8" y1="14" x2="11" y2="14"/>
                  <line x1="13" y1="14" x2="16" y2="14"/>
                </svg>
                전체일정
              </button>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {tripDays.map(day => (

                <button key={day} onClick={() => setSelectedDay(day)} className={`flex flex-col items-center py-3 rounded-2xl w-full transition-all border ${selectedDay === day ? 'bg-[#1A55AA] text-white border-[#1A55AA] shadow-md' : 'bg-[#F4F6FA] text-[#999] border-transparent'}`}>
                  <span className={`text-[15px] font-black ${selectedDay === day ? 'text-white' : 'text-[#333]'}`}>{day} {getDayLabel(day)}</span>
                </button>
              ))}
            </div>

            <div className="flex items-start justify-between mb-5 px-1">
              <div className="flex-1">
                <p className="text-[22px] font-black text-[#111111]">{selectedDay} ({getDayLabel(selectedDay)}) {dayTheme[selectedDay]}</p>
                <p className="text-[16px] text-[#444] mt-1 leading-snug">{dayDesc[selectedDay]}</p>
              </div>
              <div className="shrink-0 ml-3 text-right">
                <p className="text-[17px] font-black text-[#1A55AA]">{weatherMap.sapporo?.current.temp ?? '--'}</p>
                <p className="text-[13px] text-[#666]">삿포로</p>
              </div>
            </div>

            <div className="relative">
              {fullSchedule[selectedDay].map((item: any, i: number, arr: any[]) => {
                const status = getItemStatus(item, arr, i);
                return (
                  <div key={i} className="flex gap-3 mb-1">
                    <div className="flex flex-col items-center w-14 shrink-0">
                      <span className={`text-[13px] font-black mb-1 ${status === 'current' ? 'text-[#E13B30]' : 'text-[#777]'}`}>{item.time}</span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[18px] z-10 shadow-sm border-2 ${status === 'current' ? 'bg-[#E13B30] border-[#E13B30] shadow-[0_0_0_4px_rgba(225,59,48,0.2)]' : status === 'past' ? 'bg-[#EEEEEE] border-[#EEEEEE]' : 'bg-white border-[#E0E0E0]'}`}>{getItemIcon(item.task)}</div>
                      {i < arr.length - 1 && <div className="w-[2px] flex-1 min-h-[24px] bg-[#EEEEEE] mt-1" />}
                    </div>
                    <div className={`flex-1 pb-5 ${status === 'past' ? 'opacity-40' : ''}`}>
                      {status === 'current' ? (
                        <div className="shine-card">
                          <div className="shine-card-inner">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[20px] font-[900] leading-tight text-[#E13B30]">{item.task}</span>
                              <button onClick={() => openMaps(item.task)} className="shrink-0 w-10 h-10 bg-[#E13B30] rounded-full flex items-center justify-center text-white shadow-md active:scale-90"><MapPin size={16} /></button>
                            </div>
                            <ul className="space-y-1.5 list-none text-left">
                              {item.desc.split('\n').map((line: string, j: number) => (
                                <li key={j} className="relative pl-4 text-[16px] text-[#222] leading-snug before:content-['•'] before:absolute before:left-0 before:text-[#E13B30] before:font-black">{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-4 shadow-sm">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[20px] font-[900] leading-tight text-[#111]">{item.task}</span>
                            <button onClick={() => openMaps(item.task)} className="shrink-0 w-10 h-10 bg-[#1A55AA] rounded-full flex items-center justify-center text-white shadow-md active:scale-90"><MapPin size={16} /></button>
                          </div>
                          <ul className="space-y-1.5 list-none text-left">
                            {item.desc.split('\n').map((line: string, j: number) => (
                              <li key={j} className="relative pl-4 text-[16px] text-[#444] leading-snug before:content-['•'] before:absolute before:left-0 before:text-[#1A55AA] before:font-black">{line}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="animate-in slide-in-from-right duration-500 pt-4">
            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {Object.keys(fullSchedule).map(day => (
                <button key={day} onClick={() => setSelectedDay(day)} className={`flex flex-col items-center py-3 rounded-2xl w-full transition-all border ${selectedDay === day ? 'bg-[#1A55AA] text-white border-[#1A55AA] shadow-md' : 'bg-[#F4F6FA] text-[#999] border-transparent'}`}>
                  <span className={`text-[15px] font-black ${selectedDay === day ? 'text-white' : 'text-[#333]'}`}>{day} {getDayLabel(day)}</span>
                </button>
              ))}
            </div>

            <div className="flex items-start justify-between mb-5 px-1">
              <div className="flex-1">
                <p className="text-[22px] font-black text-[#111111]">{selectedDay} ({getDayLabel(selectedDay)}) {dayTheme[selectedDay]}</p>
                <p className="text-[16px] text-[#444] mt-1 leading-snug">{dayDesc[selectedDay]}</p>
              </div>
              <div className="shrink-0 ml-3 text-right">
                <p className="text-[17px] font-black text-[#1A55AA]">{weatherMap.sapporo?.current.temp ?? '--'}</p>
                <p className="text-[13px] text-[#666]">삿포로</p>
              </div>
            </div>

            <div className="relative">
              {fullSchedule[selectedDay].map((item: any, i: number, arr: any[]) => {
                const status = getItemStatus(item, arr, i);
                return (
                  <div key={i} className="flex gap-3 mb-1">
                    <div className="flex flex-col items-center w-14 shrink-0">
                      <span className={`text-[13px] font-black mb-1 ${status === 'current' ? 'text-[#E13B30]' : 'text-[#777]'}`}>{item.time}</span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[18px] z-10 shadow-sm border-2 ${status === 'current' ? 'bg-[#E13B30] border-[#E13B30] shadow-[0_0_0_4px_rgba(225,59,48,0.2)]' : status === 'past' ? 'bg-[#EEEEEE] border-[#EEEEEE]' : 'bg-white border-[#E0E0E0]'}`}>{getItemIcon(item.task)}</div>
                      {i < arr.length - 1 && <div className="w-[2px] flex-1 min-h-[24px] bg-[#EEEEEE] mt-1" />}
                    </div>
                    <div className={`flex-1 pb-5 ${status === 'past' ? 'opacity-40' : ''}`}>
                      {status === 'current' ? (
                        <div className="shine-card">
                          <div className="shine-card-inner">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[20px] font-[900] leading-tight text-[#E13B30]">{item.task}</span>
                              <button onClick={() => openMaps(item.task)} className="shrink-0 w-10 h-10 bg-[#E13B30] rounded-full flex items-center justify-center text-white shadow-md active:scale-90"><MapPin size={16} /></button>
                            </div>
                            <ul className="space-y-1.5 list-none text-left">
                              {item.desc.split('\n').map((line: string, j: number) => (
                                <li key={j} className="relative pl-4 text-[16px] text-[#222] leading-snug before:content-['•'] before:absolute before:left-0 before:text-[#E13B30] before:font-black">{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-4 shadow-sm">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[20px] font-[900] leading-tight text-[#111]">{item.task}</span>
                            <button onClick={() => openMaps(item.task)} className="shrink-0 w-10 h-10 bg-[#1A55AA] rounded-full flex items-center justify-center text-white shadow-md active:scale-90"><MapPin size={16} /></button>
                          </div>
                          <ul className="space-y-1.5 list-none text-left">
                            {item.desc.split('\n').map((line: string, j: number) => (
                              <li key={j} className="relative pl-4 text-[16px] text-[#444] leading-snug before:content-['•'] before:absolute before:left-0 before:text-[#1A55AA] before:font-black">{line}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'gourmet' && (
          <div className="animate-in fade-in duration-500 pt-4">
             <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 shrink-0 text-[14px] font-[900] rounded-xl border transition-all ${selectedCategory === cat ? 'bg-[#1A55AA] text-white border-[#1A55AA]' : 'bg-white text-[#999999]'}`}>{cat}</button>
                ))}
             </div>
             <div className="grid grid-cols-1 gap-4">
               {filteredGourmet.map((shop, i) => (
                 <div key={i} className="bg-white rounded-[24px] border border-[#EEEEEE] p-5 shadow-sm flex items-center justify-between gap-3">
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-black px-1.5 py-0.5 bg-[#F8F9FA] rounded text-[#1A55AA] border border-[#1A55AA]/20 uppercase">#{shop.cat}</span>
                        <p className="text-[18px] font-[900] truncate">{shop.name}</p>
                      </div>
                      <p className="text-[15px] text-[#666666] leading-tight">{shop.desc}</p>
                   </div>
                   <button onClick={() => openMaps(shop.name)} className="shrink-0 w-10 h-10 bg-[#F8F9FA] rounded-full flex items-center justify-center border border-[#EEEEEE] text-[#1A55AA] active:scale-90"><Navigation size={16} fill="currentColor" /></button>
                </div>
               ))}
             </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-8 right-6 z-[200] flex flex-col items-end gap-3">
        {isMenuOpen && (
          <div className="flex flex-col items-end gap-3 mb-2 animate-in slide-in-from-bottom-5 duration-300">
            <button onClick={() => { setActiveTab('home'); setIsMenuOpen(false); window.scrollTo(0,0); }} className="flex items-center gap-3">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[13px] font-black shadow-md border border-black/5">홈</span>
              <div className="w-12 h-12 bg-[#E13B30] text-white rounded-full flex items-center justify-center shadow-lg"><Home size={20} /></div>
            </button>
            <button onClick={() => { setActiveTab('schedule'); setIsMenuOpen(false); window.scrollTo(0,0); }} className="flex items-center gap-3">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[13px] font-black shadow-md border border-black/5">일정표</span>
              <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center shadow-lg"><Calendar size={20} /></div>
            </button>
            <button onClick={() => { setActiveTab('gourmet'); setIsMenuOpen(false); window.scrollTo(0,0); }} className="flex items-center gap-3">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[13px] font-black shadow-md border border-black/5">맛집</span>
              <div className="w-12 h-12 bg-[#1A55AA] text-white rounded-full flex items-center justify-center shadow-lg"><Utensils size={20} /></div>
            </button>
          </div>
        )}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`w-14 h-14 ${isMenuOpen ? 'bg-white text-black' : 'bg-[#1A1A1A] text-white'} rounded-full flex items-center justify-center shadow-2xl transition-all border-4 border-white active:scale-95`}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[150]" onClick={() => setIsMenuOpen(false)} />}
    </div>
  );
}
