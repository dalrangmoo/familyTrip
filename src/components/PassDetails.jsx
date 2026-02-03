import React from 'react';

const PassDetails = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]">
      <div className="w-full max-w-sm bg-white dark:bg-[#2d1a1f] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col relative max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-black/10 backdrop-blur-md rounded-full size-8 flex items-center justify-center text-white hover:text-white active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-xl font-bold">close</span>
        </button>

        <div className="overflow-y-auto no-scrollbar">
          <div className="bg-primary px-6 pt-10 pb-8 relative shrink-0">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">confirmation_number</span>
            </div>
            <span className="inline-block text-[11px] font-bold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 font-display">Hokkaido Rail Pass</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">홋카이도 레일 패스</h2>
            <div className="mt-4 flex items-baseline gap-1 text-white font-display">
              <span className="text-3xl font-bold">¥27,000</span>
              <span className="text-sm opacity-80">(7일권 성인 기준)</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-[12px] font-bold text-primary mb-4 uppercase tracking-[0.2em] flex items-center gap-2 font-display">
              <span className="w-1.5 h-3 bg-primary rounded-full"></span>
              이용 혜택
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                </div>
                <p className="text-[#1b0d11] dark:text-white text-[15px] font-medium leading-relaxed font-display">JR 홋카이도 전 열차 무제한 이용</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                </div>
                <p className="text-[#1b0d11] dark:text-white text-[15px] font-medium leading-relaxed font-display">특급열차 지정석 무료 예약 가능</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                </div>
                <p className="text-[#1b0d11] dark:text-white text-[15px] font-medium leading-relaxed font-display">7일간 연속 사용 (개시일부터)</p>
              </li>
            </ul>

            <h3 className="text-[12px] font-bold text-primary mb-4 uppercase tracking-[0.2em] flex items-center gap-2 font-display">
              <span className="w-1.5 h-3 bg-primary rounded-full"></span>
              주요 노선도
            </h3>
            <div className="bg-primary/5 rounded-3xl p-4 mb-8 border border-primary/10">
              <div className="relative w-full aspect-[4/3] bg-white dark:bg-[#3d2a2f] rounded-2xl flex items-center justify-center p-2 shadow-inner overflow-hidden">
                <svg className="w-full h-full" fill="none" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 250 L150 200 L180 150 L220 120 L350 80" stroke="#bd0f3b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                  <path d="M180 150 L220 220 L280 260" opacity="0.4" stroke="#bd0f3b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                  <path d="M180 150 L120 100 L80 100" stroke="#bd0f3b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                  <circle cx="180" cy="150" fill="#bd0f3b" r="8" stroke="white" strokeWidth="2.5"></circle>
                  <circle cx="50" cy="250" fill="#bd0f3b" r="8" stroke="white" strokeWidth="2.5"></circle>
                  <circle cx="120" cy="100" fill="#bd0f3b" r="8" stroke="white" strokeWidth="2.5"></circle>
                  <circle cx="220" cy="120" fill="#bd0f3b" r="8" stroke="white" strokeWidth="2.5"></circle>
                  <circle cx="350" cy="80" fill="#bd0f3b" opacity="0.6" r="4" stroke="white" strokeWidth="1.5"></circle>
                  <circle cx="280" cy="260" fill="#bd0f3b" opacity="0.6" r="4" stroke="white" strokeWidth="1.5"></circle>
                  <text className="fill-primary font-bold text-[22px]" textAnchor="middle" x="180" y="185">삿포로</text>
                  <text className="fill-primary font-bold text-[18px]" textAnchor="middle" x="65" y="235">하코다테</text>
                  <text className="fill-primary font-bold text-[18px]" textAnchor="middle" x="110" y="85">오타루</text>
                  <text className="fill-primary font-bold text-[18px]" textAnchor="start" x="235" y="115">아사히카와</text>
                </svg>
              </div>
            </div>

            <h3 className="text-[12px] font-bold text-primary mb-4 uppercase tracking-[0.2em] flex items-center gap-2 font-display">
              <span className="w-1.5 h-3 bg-primary rounded-full"></span>
              현지 창구 교환 장소
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-4 bg-primary/5 dark:bg-white/5 p-4 rounded-2xl border border-primary/10">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                </div>
                <div className="text-left">
                  <p className="text-[#1b0d11] dark:text-white text-[15px] font-bold leading-tight">신치토세 공항역 JR 안내소</p>
                  <p className="text-[#9a4c5f] text-[11px] mt-1">국내선/국제선 터미널 지하 연계</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-primary/5 dark:bg-white/5 p-4 rounded-2xl border border-primary/10">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                </div>
                <div className="text-left">
                  <p className="text-[#1b0d11] dark:text-white text-[15px] font-bold leading-tight">삿포로역 JR 정보 외국인 안내소</p>
                  <p className="text-[#9a4c5f] text-[11px] mt-1">삿포로역 서쪽 개찰구 인근</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-10 shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default PassDetails;
