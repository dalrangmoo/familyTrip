import React, { useState, useEffect } from 'react';
import {
  Home,
  Calendar,
  Utensils,
  Navigation,
  Plane,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

interface WeatherData {
  temp: string;
  msg: string;
  code: number;
}

const DallangmuApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDay, setSelectedDay] = useState('5/27');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [realWeather, setRealWeather] = useState<WeatherData>({
    temp: '..',
    msg: '날씨 로딩 중',
    code: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=43.0667&longitude=141.35&current_weather=true&timezone=Asia%2FTokyo'
        );
        const data = await res.json();
        const t = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        const getCody = (temp: number) => {
          if (temp >= 28)
            return '폭염 주의! 린넨이나 민소매로 가볍게 입으세요. ☀️';
          if (temp >= 23)
            return '낮 활동이 많다면 반팔! 얇은 셔츠도 좋아요. 👕';
          if (temp >= 20)
            return '긴팔 티셔츠 한 장이면 충분! 즐거운 여행 되세요. 😊';
          if (temp >= 17) return '일교차가 커요! 예쁜 자켓을 꼭 챙기세요. 🧥';
          if (temp >= 12)
            return '트렌치코트나 야상이 베스트! 스타일을 잡으세요. 🧥';
          if (temp >= 9)
            return '아침저녁은 쌀쌀해요! 경량 패딩이 필수입니다. 🧣';
          if (temp >= 5)
            return '추위에 떨면 안 돼요! 울 코트로 든든하게 입으세요. ❄️';
          return '여행지는 한겨울! 롱패딩과 핫팩으로 무장하세요. ❄️';
        };
        setRealWeather({ temp: `${t}°`, msg: getCody(t), code: code });
      } catch (err) {
        setRealWeather({
          temp: '6°',
          msg: '추우니 패딩으로 든든하게 입으세요! ❄️',
          code: 0,
        });
      }
    };
    fetchWeather();
    return () => clearInterval(timer);
  }, []);

  const openMaps = (placeName: string) => {
    const context = placeName.includes('오타루')
      ? 'Otaru'
      : placeName.includes('비에이')
      ? 'Biei'
      : 'Sapporo';
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        placeName + ' ' + context
      )}`,
      '_blank'
    );
  };

  const fullSchedule: Record<string, any[]> = {
    '5/27': [
      {
        time: '06:40',
        task: '인천공항 제1여객터미널',
        desc: '집에서 출발. 6013번 버스 이용 (06:10 / 06:40 배차 확인).',
      },
      {
        time: '10:10',
        task: '티웨이 TW251 탑승',
        desc: '모바일 체크인 권장. 삿포로행 이륙.',
      },
      {
        time: '13:00',
        task: '신치토세 공항',
        desc: '공항버스로 시내 이동 (국제선 84번, 국내선 22/14번 게이트).',
      },
      {
        time: '15:00',
        task: '베셀 호텔 캄파나 스스키노',
        desc: '체크인은 2시부터. 라멘집 대기표 미리 뽑기 추천.',
      },
      {
        time: '15:30',
        task: '스아게 플러스 (Suage+)',
        desc: '유명 스프카레 맛집. 닭, 돼지, 브로콜리 추가 필수.',
      },
      {
        time: '오후',
        task: '삿포로 맥주 박물관',
        desc: '무료 관람. 시계탑, 오도리공원, TV타워 산책.',
      },
      {
        time: '19:30',
        task: '징기스칸 유우히 (Yuuhi)',
        desc: '양고기 식사. 핫페퍼 사전 예약 완료.',
      },
    ],
    '5/28': [
      {
        time: '아침',
        task: '베셀 호텔 조식',
        desc: '호텔 조식 이용 후 투어 집합 장소로 이동.',
      },
      {
        time: '09:00',
        task: '다이와 로이넷 호텔 앞',
        desc: '비에이 투어 집합 (흰그림자투어).',
      },
      {
        time: '오전',
        task: '팜 토미타',
        desc: '라벤더와 꽃밭 구경 (30분 소요).',
      },
      {
        time: '14:00',
        task: '준페이 (Junpei) 비에이',
        desc: '투어 중 에비동 식사. 바삭한 새우 튀김.',
      },
      {
        time: '오후',
        task: '흰수염 폭포',
        desc: '청의 호수와 함께 방문하는 비에이 필수 코스.',
      },
      {
        time: '20:00',
        task: '야키니쿠 니쿠마루',
        desc: '삿포로 복귀 후 저녁 식사.',
      },
    ],
    '5/29': [
      {
        time: '아침',
        task: '겐텐소노 2 라멘',
        desc: '07:00 오픈 아침 식사 가능한 로컬 라멘집.',
      },
      {
        time: '10:00',
        task: 'JR 삿포로역',
        desc: '오타루행 열차 탑승. ★오른쪽 좌석 추천★',
      },
      {
        time: '11:00',
        task: '오타루 운하',
        desc: '오르골당, 증기시계, 스누피 빌리지 산책.',
      },
      {
        time: '13:00',
        task: '와규 쿠로사와 오타루',
        desc: '규카츠 식사. 르타오 본점 디저트 필수.',
      },
      {
        time: '19:00',
        task: '오코노미야키 사보텐',
        desc: '스스키노 복귀 후 철판 요리 저녁 식사.',
      },
    ],
    '5/30': [
      {
        time: '09:00',
        task: '코메다 커피 삿포로',
        desc: '나고야 스타일 모닝 세트로 마지막 아침.',
      },
      {
        time: '11:30',
        task: '신치토세 공항 국내선',
        desc: '공항 내 상점가 구경 및 마지막 식사.',
      },
      {
        time: '14:35',
        task: '티웨이 TW252 출발',
        desc: '삿포로(CTS) 출발. 면세 쇼핑 마무리.',
      },
    ],
  };

  const gourmetData = [
    {
      name: '야끼니꾸 구루만',
      cat: '야키니쿠',
      desc: '가성비 최고의 홋카이도산 특수부위 전문 맛집.',
    },
    {
      name: '와규 이시자키',
      cat: '야키니쿠',
      desc: '전실 개별 룸으로 구성된 최고급 암소 와규 전문점.',
    },
    {
      name: '야끼니꾸 츠바메',
      cat: '야키니쿠',
      desc: '모던한 인테리어와 예쁜 플레이팅이 돋보이는 고기 맛집.',
    },
    {
      name: '야끼니꾸 세카이 챔피언',
      cat: '야키니쿠',
      desc: '최상급 A5 랭크 와규와 희소 부위만을 취급하는 전문점.',
    },
    {
      name: '요시우시 (Yoshiushi)',
      cat: '야키니쿠',
      desc: '고기의 감칠맛을 극대화한 숙성 와규를 맛볼 수 있는 곳.',
    },
    {
      name: '기와미 시부키',
      cat: '야키니쿠',
      desc: '다양한 고기 부위를 합리적인 가격에 즐길 수 있는 가성비 명소.',
    },
    {
      name: '니쿠키조쿠 스스키노',
      cat: '야키니쿠',
      desc: '고기를 1장부터 주문 가능한 새로운 스타일의 로컬 맛집.',
    },
    {
      name: 'BULL TOKYO 스스키노',
      cat: '야키니쿠',
      desc: '신선한 홋카이도산 고기를 제공하는 프리미엄 야키니쿠점.',
    },
    {
      name: '야키니쿠 탄카',
      cat: '야키니쿠',
      desc: '신삿포로점에서 즐기는 홋카이도산 고기 야키니쿠 전문점.',
    },
    {
      name: '다루마',
      cat: '징기스칸',
      desc: '1954년 오픈 이래 삿포로 여행객의 필수 코스.',
    },
    {
      name: '이타다키마스',
      cat: '징기스칸',
      desc: '자체 목장에서 키운 홋카이도산 사포크 양고기 전문점.',
    },
    {
      name: '징기스칸 램 (Ram)',
      cat: '징기스칸',
      desc: '예약 없이 대기 가능하며, 양설 등 희귀 부위 맛집.',
    },
    {
      name: '라무구치카즈야',
      cat: '징기스칸',
      desc: '앗케시카키 라무구치카즈야의 친근한 현지인 맛집.',
    },
    {
      name: '요조라노 징기스칸',
      cat: '징기스칸',
      desc: '10층에서 삿포로 야경을 보며 생 양고기를 즐기는 곳.',
    },
    {
      name: '아지노히츠지가오카',
      cat: '징기스칸',
      desc: '10가지 이상 채소와 과일을 넣은 숙성 소스가 일품.',
    },
    {
      name: '유우히',
      cat: '징기스칸',
      desc: '잡내 없는 고급 양고기를 야경과 함께 제공하는 맛집.',
    },
    {
      name: '코레가 징기스칸',
      cat: '징기스칸',
      desc: '숯불구이 전문점으로, 파 소금 소스가 이색적인 곳.',
    },
    {
      name: '마츠오 징기스칸',
      cat: '징기스칸',
      desc: '50년 전통의 특제 소스 양고기 전통의 강자.',
    },
    {
      name: '마사진',
      cat: '징기스칸',
      desc: '개별 화로에서 취향껏 구워 먹는 스스키노의 인기점.',
    },
    {
      name: '키린비루니와',
      cat: '징기스칸',
      desc: '키린 생맥주와 신선한 생양고기를 즐기는 비어홀.',
    },
    {
      name: '가라쿠 (GARAKU)',
      cat: '스프카레',
      desc: '닭다리가 통째로 들어간 향신료 풍미 가득한 맛집.',
    },
    {
      name: '스아게 (Suage+)',
      cat: '스프카레',
      desc: '튀긴 야채와 고기, 밥까지 완벽한 조화의 유명 식당.',
    },
    {
      name: '아쟌타 소혼케',
      cat: '스프카레',
      desc: '30종 향신료를 사용해 50인분만 한정 판매하는 약선 카레.',
    },
    {
      name: '샤바조 (Syabazo)',
      cat: '스프카레',
      desc: '양 뼈 육수 베이스의 깊은 맛 이색 스프카레 맛집.',
    },
    {
      name: '스시젠 본점',
      cat: '스시/해산물',
      desc: '예술품 같은 스시를 쥐어주는 삿포로 전통 스시 강자.',
    },
    {
      name: '스시 미야카와',
      cat: '스시/해산물',
      desc: '미슐랭 3스타의 품격 있는 오마카세 명소.',
    },
    {
      name: '스시사이 와키치',
      cat: '스시/해산물',
      desc: '미슐랭 2스타의 정교하고 섬세한 스시 맛집.',
    },
    {
      name: '스시 코이세',
      cat: '스시/해산물',
      desc: '예약이 편리하고 친절한 실력파 스시 전문점.',
    },
    {
      name: '토리톤 스시',
      cat: '스시/해산물',
      desc: '현지인들이 줄 서서 먹는 가성비 최고 회전초밥.',
    },
    {
      name: '이세즈시',
      cat: '스시/해산물',
      desc: '오타루의 미슐랭 스타 레스토랑 미식가 강력 추천.',
    },
    {
      name: '스시야 코다이',
      cat: '스시/해산물',
      desc: '오타루 현지 로컬들이 아끼는 숨은 보석 같은 명소.',
    },
    {
      name: '오타루 후쿠즈시',
      cat: '스시/해산물',
      desc: '신선한 오타루 해산물을 정통 초밥으로 즐기는 곳.',
    },
    {
      name: '오타루 우오마사',
      cat: '스시/해산물',
      desc: '장인 정신이 느껴지는 깔끔하고 신선한 오타루 대표집.',
    },
    {
      name: '오타루 마사즈시',
      cat: '스시/해산물',
      desc: '오타루를 대표하는 초밥집으로 화려한 구성을 자랑함.',
    },
    {
      name: '와라쿠',
      cat: '스시/해산물',
      desc: '오타루 해산물을 맛볼 수 있는 대형 회전초밥 전문점.',
    },
    {
      name: '효우세츠노몬',
      cat: '게 요리',
      desc: '삿포로에서 가장 오랜 역사의 게 요리 코스 전문점.',
    },
    {
      name: '삿포로 카니야',
      cat: '게 요리',
      desc: '다양한 게 요리 코스를 갖춘 대형 전문점.',
    },
    {
      name: '카니혼케',
      cat: '게 요리',
      desc: '고급스러운 분위기에서 친절한 서비스를 받는 게 요리집.',
    },
    {
      name: '시라카바산소',
      cat: '라멘',
      desc: '궁극의 진한 국물을 자랑하는 삿포로 정통 미소라멘.',
    },
    {
      name: '아라톤 본점',
      cat: '라멘',
      desc: '활어 뼈와 돼지 뼈를 우려낸 특제 매운 츠케멘 인기.',
    },
    {
      name: '라멘 키치린',
      cat: '라멘',
      desc: '맑은 시오라멘과 깔끔한 국물맛이 일품인 식당.',
    },
    {
      name: '멘즈나가쿠라',
      cat: '라멘',
      desc: '토종닭과 생간장을 사용해 깊은 풍미를 낸 라멘.',
    },
    {
      name: '라멘 토라 TORA',
      cat: '라멘',
      desc: '진하고 크리미한 해물 돈코츠 스프가 특징인 라멘집.',
    },
    {
      name: '멘야 코하쿠',
      cat: '라멘',
      desc: '트리플 수프와 수제 호박기름을 사용한 인기 라멘.',
    },
    {
      name: '시노고노이와즈',
      cat: '라멘',
      desc: '산초와 고추의 강렬한 매운맛을 즐기는 매운 라멘.',
    },
    {
      name: '라멘 도카이야',
      cat: '라멘',
      desc: '오타루 현지 로컬들이 꾸준히 찾는 정통파 라멘집.',
    },
    {
      name: '케이엔 앙카케 야끼소바',
      cat: '라멘',
      desc: '오타루의 소울푸드 볶음면 요리의 원조격 식당.',
    },
    {
      name: '베이후테이',
      cat: '라멘',
      desc: '아부라 소바와 다양한 세계 맥주가 있는 곳.',
    },
    {
      name: '우미아지하키쵸',
      cat: '카이센동',
      desc: '연어 알을 산더미처럼 쌓아주는 츳코메시 명소.',
    },
    {
      name: '키타노 구루메테이',
      cat: '카이센동',
      desc: '삿포로 장외시장의 신선한 재료 해물덮밥 전문점.',
    },
    {
      name: '만푸쿠테이',
      cat: '카이센동',
      desc: '오타루 산카쿠 마켓 내 위치한 넉넉한 인심의 식당.',
    },
    {
      name: '산카쿠테이',
      cat: '카이센동',
      desc: '수량 한정 메뉴인 산카쿠동을 맛볼 수 있는 맛집.',
    },
    {
      name: '다베도코로 아이다',
      cat: '카이센동',
      desc: '현지인들이 더 많이 찾는 산카쿠 시장 가성비 식당.',
    },
    {
      name: '아지도코로',
      cat: '카이센동',
      desc: '이치바 쇼쿠도에서 즐기는 신선한 사시미와 덮밥.',
    },
    {
      name: '다키나미',
      cat: '카이센동',
      desc: '다양한 조합의 메뉴를 선택할 수 있는 카이센동 명소.',
    },
    {
      name: '돈부리 차야',
      cat: '카이센동',
      desc: '오타루 사카이마치에서 화려한 카이센동을 제공하는 곳.',
    },
    {
      name: '유키지루시 파라',
      cat: '디저트',
      desc: '유지방 16%의 진한 "스노 로얄" 푸딩과 아이스크림.',
    },
    {
      name: '롯카테이 삿포로',
      cat: '디저트',
      desc: '유통기한 3시간 "사쿠사쿠파이"를 맛볼 수 있는 본점.',
    },
    {
      name: '르타오 본점',
      cat: '디저트',
      desc: '오타루를 대표하는 더블프롬마주 치즈케이크의 명가.',
    },
    {
      name: '르타오 파토스',
      cat: '디저트',
      desc: '오타루 최대 규모 매장으로 다양한 디저트 시식 가능.',
    },
    {
      name: '데니쉬 다니 르타오',
      cat: '디저트',
      desc: '비에이 우유를 사용한 고소한 치즈 데니쉬 전문점.',
    },
    {
      name: '류게츠 오타루토점',
      cat: '디저트',
      desc: '오타루 매장 한정 타르트와 촉촉한 바움쿠헨 인기.',
    },
    {
      name: '키타카로',
      cat: '디저트',
      desc: '입안에서 녹는 바움쿠헨과 커다란 슈크림 전문점.',
    },
    {
      name: '키노토야',
      cat: '디저트',
      desc: '진한 우유맛 아이스크림 1위 맛집.',
    },
    {
      name: '반즈 (BARNES)',
      cat: '디저트',
      desc: '수제 건포도를 넣은 럼 레즌 아이스크림 명소.',
    },
    {
      name: 'CAFE NORTE SAPPORO',
      cat: '디저트',
      desc: '하스캇푸 소스를 곁들인 상큼한 아이스크림.',
    },
    {
      name: '크레미아',
      cat: '디저트',
      desc: '고급 풍미 프리미엄 소프트크림 명소.',
    },
    {
      name: '밀크무라',
      cat: '디저트',
      desc: '130종 술을 아이스크림에 뿌려 먹는 시메 파르페.',
    },
    {
      name: '펭귄당',
      cat: '디저트',
      desc: '삿포로 밤 파르페 문화의 원조격 수제 젤라또.',
    },
    {
      name: '화이트 코지',
      cat: '디저트',
      desc: '요쓰바 유업 직영 신선하고 진한 우유 파르페.',
    },
    {
      name: '파르페 술 사토',
      cat: '디저트',
      desc: '밤늦게까지 화려한 비주얼 과일 파르페 명소.',
    },
    {
      name: '카페 노이몬드',
      cat: '디저트',
      desc: '다채로운 구성의 젤라또 파르페 전문 카페.',
    },
    {
      name: '파르페테리아 미르',
      cat: '디저트',
      desc: '비주얼 쇼크! 깨트려 먹는 재미가 있는 파르페.',
    },
    {
      name: '로지우라 카페',
      cat: '디저트',
      desc: '살살 녹는 질감과 고급스러운 맛의 파르페 맛집.',
    },
    {
      name: '기타이치홀',
      cat: '디저트',
      desc: '167개 유리 석유 램프가 켜지는 환상적 분위기.',
    },
    {
      name: 'cafe 이로나이 식당',
      cat: '디저트',
      desc: '옛 민가를 리모델링한 고즈넉한 분위기 카페.',
    },
    {
      name: '카히사칸',
      cat: '디저트',
      desc: '오타루역 내 위치해 여행 전후 들르기 좋은 명소.',
    },
    {
      name: '페이스트리 스내플스',
      cat: '디저트',
      desc: '하코다테 명물 입안에서 녹는 치즈 오믈렛 전문.',
    },
    {
      name: '삿포로 모리히코',
      cat: '디저트',
      desc: '맛있는 핸드드립 커피와 정갈한 디저트 카페.',
    },
    {
      name: '포플러 팜',
      cat: '디저트',
      desc: '붉은 멜론 위에 아이스크림을 올린 산타 수염 맛집.',
    },
    {
      name: '준페이 (Junpei)',
      cat: '기타/지역',
      desc: '바삭하고 통통한 새우가 일품인 인생 에비동 성지.',
    },
    {
      name: 'Biei Curry',
      cat: '기타/지역',
      desc: '비에이 지역 신선 채소를 담은 카레 식당.',
    },
    {
      name: '나루토 본점',
      cat: '기타/지역',
      desc: '겉바속촉 닭 반 마리 튀김 원조집.',
    },
    {
      name: '오타루 창고 No.1',
      cat: '기타/지역',
      desc: '운하 옆에서 로컬 맥주와 소시지를 즐기는 곳.',
    },
    {
      name: 'Jacksonville',
      cat: '기타/지역',
      desc: '홋카이도산 식재료로 만드는 정통 수제버거.',
    },
    {
      name: '치토세츠루 이자카야',
      cat: '기타/지역',
      desc: '양조장 직영으로 운영되는 토주와 안주 맛집.',
    },
    {
      name: '레스토랑 시갈',
      cat: '기타/지역',
      desc: '이시카리만 풍경을 바라보며 즐기는 비프시츄.',
    },
    {
      name: '테라스 브랏세리',
      cat: '기타/지역',
      desc: '오타루 운하 인근 호텔 내 위치한 조식 뷔페.',
    },
    {
      name: '하야시야 식당',
      cat: '기타/지역',
      desc: '카레 라멘부터 해산물까지 아침 식사 가능.',
    },
  ];

  const categories = [
    '전체',
    '야키니쿠',
    '징기스칸',
    '스프카레',
    '스시/해산물',
    '라멘',
    '카이센동',
    '디저트',
    '게 요리',
    '기타/지역',
  ];
  const filteredGourmet =
    selectedCategory === '전체'
      ? gourmetData
      : gourmetData.filter((item) => item.cat === selectedCategory);

  const w = {
    bg:
      realWeather.code <= 1
        ? 'from-[#E0F2F1] to-[#B2DFDB]'
        : realWeather.code <= 3
        ? 'from-[#F5F5F5] to-[#E0E0E0]'
        : realWeather.code <= 67
        ? 'from-[#E3F2FD] to-[#BBDEFB]'
        : 'from-[#F3E5F5] to-[#E1BEE7]',
    box:
      realWeather.code <= 1
        ? 'bg-black/10'
        : realWeather.code <= 3
        ? 'bg-black/5'
        : realWeather.code <= 67
        ? 'bg-blue-900/10'
        : 'bg-purple-900/10',
    line:
      realWeather.code <= 1
        ? 'border-[#004D40]/20'
        : realWeather.code <= 3
        ? 'border-[#424242]/20'
        : realWeather.code <= 67
        ? 'border-[#0D47A1]/20'
        : 'border-[#4A148C]/20',
  };

  return (
    <div className="w-full bg-[#FBFBFC] min-h-screen font-sans text-[#1A1A1A] overflow-x-hidden flex flex-col items-center">
      <header className="w-full h-[70px] bg-white px-5 flex justify-between items-center z-[100] border-b border-[#EEEEEE] max-w-md sticky top-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white rounded-full border-2 border-[#1A1A1A] flex items-center justify-center overflow-hidden shrink-0">
            <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
              <path
                d="M12 12C12 12 13 2 20 2C27 2 28 12 28 12"
                stroke="#2D963F"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <circle
                cx="20"
                cy="25"
                r="13"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2.5"
              />
              <circle cx="16" cy="24" r="1.8" fill="#1A1A1A" />
              <circle cx="24" cy="24" r="1.8" fill="#1A1A1A" />
            </svg>
          </div>
          <h1 className="text-lg font-[900] italic uppercase tracking-tighter">
            Dallangmu
          </h1>
        </div>
        <p className="text-[13px] font-black">
          {currentTime.toLocaleTimeString('ko-KR', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </header>

      <main className="w-full max-w-md px-4 pb-24">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-500 pt-6">
            <div
              className={`w-full p-6 rounded-[28px] mb-6 shadow-sm bg-gradient-to-br ${w.bg} border border-black/5`}
            >
              <div
                className={`w-full px-5 py-3 rounded-2xl ${w.box} shadow-inner mb-3 flex items-center justify-center`}
              >
                <p className="text-[20px] font-[1000]">
                  삿포로 {realWeather.temp}
                </p>
              </div>
              <div className={`w-full pt-3 border-t ${w.line}`}>
                <p className="text-[12px] font-bold opacity-80">
                  {realWeather.msg}
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-[28px] mb-8 text-white shadow-lg">
              <div className="flex justify-between items-center text-[14px] font-black">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] text-white/40 mb-1 uppercase">
                    Dep
                  </span>
                  TW251 (10:10)
                </div>
                <Plane size={20} className="text-[#2D963F]" />
                <div className="text-right flex flex-col items-center">
                  <span className="text-[9px] text-white/40 mb-1 uppercase">
                    Ret
                  </span>
                  TW252 (14:35)
                </div>
              </div>
            </div>

            <h3 className="text-xl font-[900] mb-5 px-1">오늘의 루트</h3>
            <div className="space-y-4">
              {fullSchedule['5/27'].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] border border-[#EEEEEE] p-5 shadow-sm flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#2D963F] font-black text-[13px]">
                        {item.time}
                      </span>
                      <span className="text-[#1A1A1A] font-[900] text-[16px]">
                        {item.task}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#555555] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => openMaps(item.task)}
                    className="shrink-0 w-10 h-10 bg-[#F8F9FA] rounded-full flex items-center justify-center text-[#E13B30] border border-[#EEEEEE] active:scale-90"
                  >
                    <MapPin size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="animate-in slide-in-from-right duration-500 pt-4">
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
              {Object.keys(fullSchedule).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-5 py-2 shrink-0 text-[13px] font-[900] rounded-full border transition-all ${
                    selectedDay === day
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#999999]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {fullSchedule[selectedDay].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] border border-[#EEEEEE] p-5 shadow-sm flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#2D963F] font-black text-[13px]">
                        {item.time}
                      </span>
                      <span className="text-[#1A1A1A] font-[900] text-[16px]">
                        {item.task}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#555555] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => openMaps(item.task)}
                    className="shrink-0 w-10 h-10 bg-[#F8F9FA] rounded-full flex items-center justify-center text-[#E13B30] border border-[#EEEEEE] active:scale-90"
                  >
                    <MapPin size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gourmet' && (
          <div className="animate-in fade-in duration-500 pt-4">
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 shrink-0 text-[12px] font-[900] rounded-xl border transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#2D963F] text-white border-[#2D963F]'
                      : 'bg-white text-[#999999]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {filteredGourmet.map((shop, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] border border-[#EEEEEE] p-5 shadow-sm flex items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-black px-1.5 py-0.5 bg-[#F8F9FA] rounded text-[#2D963F] border border-[#2D963F]/20 uppercase">
                        #{shop.cat}
                      </span>
                      <p className="text-[16px] font-[900] truncate">
                        {shop.name}
                      </p>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-tight">
                      {shop.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => openMaps(shop.name)}
                    className="shrink-0 w-10 h-10 bg-[#F8F9FA] rounded-full flex items-center justify-center border border-[#EEEEEE] text-[#2D963F] active:scale-90"
                  >
                    <Navigation size={16} fill="currentColor" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* --- 플로팅 버튼 메뉴 (FAB) --- */}
      <div className="fixed bottom-8 right-6 z-[200] flex flex-col items-end gap-3">
        {isMenuOpen && (
          <div className="flex flex-col items-end gap-3 mb-2 animate-in slide-in-from-bottom-5 duration-300">
            {[
              {
                id: 'home',
                label: '홈',
                icon: <Home size={20} />,
                color: 'bg-[#E13B30]',
              },
              {
                id: 'schedule',
                label: '일정표',
                icon: <Calendar size={20} />,
                color: 'bg-[#1A1A1A]',
              },
              {
                id: 'gourmet',
                label: '맛집',
                icon: <Utensils size={20} />,
                color: 'bg-[#2D963F]',
              },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center gap-3 group"
              >
                <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[13px] font-black shadow-md border border-black/5">
                  {item.label}
                </span>
                <div
                  className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform`}
                >
                  {item.icon}
                </div>
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-14 h-14 ${
            isMenuOpen ? 'bg-white text-black' : 'bg-[#1A1A1A] text-white'
          } rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95 border-4 border-white`}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 메뉴 열렸을 때 뒷배경 흐리게 (선택 사항) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[150] transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DallangmuApp;
