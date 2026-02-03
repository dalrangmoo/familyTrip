import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import BusTimetable from '../components/BusTimetable';
import PassDetails from '../components/PassDetails';

const Transportation = () => {
  const [showBusTimetable, setShowBusTimetable] = useState(false);
  const [showPassDetails, setShowPassDetails] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-white min-h-screen flex flex-col relative overflow-x-hidden font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/5">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link to="/" className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#1b0d11] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">교통 정보</h2>
          <div className="flex w-12 items-center justify-end"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <section className="px-4 pt-6">
          <button
            onClick={() => setShowBusTimetable(true)}
            className="w-full flex items-center gap-4 bg-primary text-white p-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform text-left"
          >
            <div className="bg-white/20 p-2.5 rounded-xl">
              <span className="material-symbols-outlined text-3xl">airport_shuttle</span>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold leading-tight">공항 리무진 버스 시간표</h3>
              <p className="text-white/80 text-xs mt-0.5">신치토세 공항 ↔ 삿포로 시내</p>
            </div>
            <span className="material-symbols-outlined text-white/60">chevron_right</span>
          </button>
        </section>

        <section>
          <div className="flex items-center justify-between px-4 pt-8 pb-2">
            <h3 className="text-[#1b0d11] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">실시간 운행 상태</h3>
            <span className="text-xs text-primary font-bold flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-full">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
              LIVE
            </span>
          </div>
          <div className="space-y-3 px-4">
            <div className="flex items-center gap-4 bg-white dark:bg-[#2d1a1f] rounded-2xl px-4 py-3 border border-transparent shadow-sm">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                <span className="material-symbols-outlined">train</span>
              </div>
              <div className="flex-1">
                <p className="text-[#1b0d11] dark:text-white text-base font-bold leading-normal">JR 홋카이도 (삿포로-오타루)</p>
                <p className="text-green-600 dark:text-green-400 text-sm font-medium leading-normal">현재 정상 운행 중</p>
              </div>
              <div className="shrink-0">
                <div className="size-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-[#2d1a1f] rounded-2xl px-4 py-3 border border-transparent shadow-sm">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                <span className="material-symbols-outlined">directions_bus</span>
              </div>
              <div className="flex-1">
                <p className="text-[#1b0d11] dark:text-white text-base font-bold leading-normal">중앙 버스 (삿포로 시내)</p>
                <p className="text-primary text-sm font-medium leading-normal italic">폭설로 인한 15분 지연 서행</p>
              </div>
              <div className="shrink-0">
                <div className="size-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[#1b0d11] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">홋카이도 패스 정보</h3>
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar">
            <div className="min-w-[280px] bg-primary text-white p-5 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="material-symbols-outlined text-6xl">confirmation_number</span>
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full uppercase tracking-wider font-display">Hokkaido Rail Pass</span>
                <h4 className="text-xl font-bold mt-2">홋카이도 레일 패스</h4>
                <p className="text-white/80 text-sm mt-1">전 노선 무제한 탑승</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold font-display">¥27,000</span>
                  <span className="text-xs opacity-70">(7일권 기준)</span>
                </div>
                <button
                  onClick={() => setShowPassDetails(true)}
                  className="mt-4 w-full bg-white text-primary font-bold py-2.5 rounded-xl text-sm shadow-lg"
                >상세보기</button>
              </div>
            </div>
            <div className="min-w-[280px] bg-white dark:bg-[#2d1a1f] border border-primary/20 p-5 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded-full uppercase tracking-wider font-display">Area Pass</span>
                <h4 className="text-xl font-bold mt-2 text-[#1b0d11] dark:text-white">삿포로-노보리베츠</h4>
                <p className="text-[#9a4c5f] text-sm mt-1">에어리어 한정 자유 패스</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary font-display">¥9,000</span>
                  <span className="text-xs text-[#9a4c5f]">(4일권 기준)</span>
                </div>
                <button className="mt-4 w-full bg-primary/10 text-primary font-bold py-2.5 rounded-xl text-sm">상세보기</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[#1b0d11] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">삿포로 시내 전차 (노덴)</h3>
          <div className="px-4">
            <div className="bg-white dark:bg-[#2d1a1f] rounded-2xl p-4 border border-primary/10 shadow-sm">
              <div className="relative h-48 w-full bg-primary/5 rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-primary/20">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[160px]">route</span>
                </div>
                <div className="relative w-4/5 h-3/4 border-4 border-primary rounded-[40px] flex items-center justify-center">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="size-2 bg-white border-2 border-primary rounded-full"></div>
                    <span className="text-[9px] font-bold mt-1 text-primary">니시 4초메</span>
                  </div>
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 flex items-center">
                    <span className="text-[9px] font-bold mr-1 text-primary">스스키노</span>
                    <div className="size-2 bg-white border-2 border-primary rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[9px] font-bold mb-1 text-primary">로프웨이이리구치</span>
                    <div className="size-2 bg-white border-2 border-primary rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 flex items-center">
                    <div className="size-2 bg-white border-2 border-primary rounded-full"></div>
                    <span className="text-[9px] font-bold ml-1 text-primary">니시 15초메</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-3xl">tram</span>
                    <span className="text-[10px] text-primary/60 font-medium uppercase font-display">Loop Line</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider font-display">전차 이용 요금</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-[#1b0d11] dark:text-white font-display">성인 ¥200</span>
                      <span className="text-base font-bold text-[#9a4c5f]">/</span>
                      <span className="text-xl font-bold text-[#1b0d11] dark:text-white font-display">어린이 ¥100</span>
                    </div>
                    <span className="text-xs text-[#9a4c5f] font-medium">(1회 승차 기준)</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-primary/5 space-y-3">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider font-display">결제 안내</p>
                  <div className="flex items-center gap-2 bg-primary/5 rounded-lg px-3 py-2 border border-primary/10">
                    <div className="flex -space-x-1.5 items-center">
                      <div className="size-5 rounded-full bg-[#3096e2] flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-white">K</div>
                      <div className="size-5 rounded-full bg-[#1db14b] flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-white">S</div>
                      <div className="size-5 rounded-full bg-[#fbbc05] flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-white">M</div>
                    </div>
                    <span className="text-sm font-bold text-[#1b0d11] dark:text-white leading-none">교통카드 사용 가능</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#9a4c5f]">
                    <span className="material-symbols-outlined text-sm mt-0.5">credit_card</span>
                    <p className="text-[11px] font-medium leading-normal">신용카드 컨택리스 및 각종 IC카드(Suica, Kitaca, SAPICA 등) 결제 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />

      {showBusTimetable && <BusTimetable onClose={() => setShowBusTimetable(false)} />}
      {showPassDetails && <PassDetails onClose={() => setShowPassDetails(false)} />}
    </div>
  );
};

export default Transportation;
