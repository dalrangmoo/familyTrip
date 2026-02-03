import React from 'react';

const BusTimetable = ({ onClose }) => {
  const times = [
    { time: '08:30', start: '삿포로역 출발', via: '스스키노 경유 · 오도리 파크', status: '정상 운행', detail: 'T1/T2 순차 도착' },
    { time: '09:15', start: '삿포로역 출발', via: '직행', status: '정상 운행', detail: '급행 버스' },
    { time: '10:00', start: '삿포로역 출발', via: '스스키노 경유', status: '정상 운행', detail: 'T1/T2 순차 도착' },
    { time: '10:45', start: '삿포로역 출발', via: '주요 호텔 경유', status: '잔여 5석', detail: '혼잡 예상', alert: true },
    { time: '11:30', start: '삿포로역 출발', via: '스스키노 경유', status: '정상 운행', detail: 'T1/T2 순차 도착' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end bg-black/60 backdrop-blur-[2px]">
      <div className="relative w-full max-w-[480px] mx-auto bg-white dark:bg-[#1a0c0f] rounded-t-[24px] shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex h-6 w-full items-center justify-center cursor-pointer" onClick={onClose}>
          <div className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>

        <div className="flex items-center px-6 py-2 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">directions_bus</span>
            </div>
            <h2 className="text-[#1b0d11] dark:text-zinc-100 text-xl font-bold leading-tight tracking-tight">공항 리무진 버스 시간표</h2>
          </div>
          <button onClick={onClose} className="flex items-center justify-center rounded-full w-10 h-10 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="px-6 py-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20 flex items-center gap-2">
              <img alt="character logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc5JU3KNhQnhm7lSKjPo47PkACBGsVLPPJtUaXf7fAxrEOdyuyVmEZlegvFe1IcQLaUQSaIHkdbXFrBfmaCc2MaLVzO6GDmToaaFbG7dTyC1nAIfGVXPhWdbd7AEeDHdWko4LgK7I-GtVy5g1aFC-nfttRA78sUJ-izJlG4yj3qAwv5tHZaJs4a7RilyNF_3lP2gxq24r2FpWFopuiL7NLrPJ4ClTK__k95DgmzT6sHp-a-8ZFiwTSlZM_3hGpFm2zVi9uT_eNEB_K"/>
              <span className="text-xs font-semibold text-primary">오늘의 운행 정보</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-2">
          <div className="flex h-12 w-full items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800/50 p-1.5">
            <button className="flex h-full grow items-center justify-center rounded-lg px-2 bg-white dark:bg-zinc-700 shadow-sm text-primary text-sm font-bold">
              삿포로 → 공항
            </button>
            <button className="flex h-full grow items-center justify-center rounded-lg px-2 text-zinc-500 dark:text-zinc-400 text-sm font-bold">
              공항 → 삿포로
            </button>
          </div>
        </div>

        <div className="px-6">
          <div className="flex border-b border-zinc-100 dark:border-zinc-800 gap-8">
            <div className="border-b-[2px] border-primary text-primary pb-3 pt-4">
              <p className="text-sm font-bold tracking-tight">평일</p>
            </div>
            <div className="border-b-[2px] border-transparent text-zinc-400 dark:text-zinc-600 pb-3 pt-4">
              <p className="text-sm font-bold tracking-tight">주말/공휴일</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          {times.map((t, i) => (
            <div key={i} className="flex items-center gap-4 px-4 min-h-[80px] py-3 justify-between border-b border-zinc-50 dark:border-zinc-800/50">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white font-display">{t.time}</div>
                <div className="flex flex-col text-left">
                  <p className="text-zinc-900 dark:text-zinc-200 text-sm font-semibold">{t.start}</p>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-0.5">{t.via}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.alert ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}`}>
                  {t.status}
                </span>
                <p className="text-zinc-400 text-[10px]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-4">
          <p className="text-xs text-zinc-500 text-center leading-relaxed font-display">
            교통 상황 및 기상 조건에 따라 운행 시간이 변동될 수 있습니다.<br/>
            정류소 위치 확인은 지도 탭에서 가능합니다.
          </p>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
            실시간 위치 확인하기
          </button>
        </div>
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default BusTimetable;
