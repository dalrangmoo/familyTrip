import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      <header className="px-5 pt-4 pb-2 flex justify-center items-center sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
        <div className="relative py-2 px-6 flex items-center justify-center">
          <span className="material-symbols-outlined absolute -top-1 -left-1 text-[#D1EAFF] dark:text-blue-900/40 text-xl rotate-[-15deg]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <span className="material-symbols-outlined absolute bottom-0 -left-3 text-[#FFE4E9] dark:text-pink-900/40 text-lg rotate-[10deg]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <span className="material-symbols-outlined absolute -top-2 -right-1 text-[#FFE4E9] dark:text-pink-900/40 text-2xl rotate-[15deg]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <span className="material-symbols-outlined absolute bottom-1 -right-4 text-[#D1EAFF] dark:text-blue-900/40 text-lg rotate-[-5deg]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <h1 className="font-logo text-3xl font-bold text-primary flex items-center gap-2 relative z-10">
            <span className="material-symbols-outlined text-4xl align-middle">pets</span>
            <span className="whitespace-nowrap">달랑무's 홋카이도 여행</span>
          </h1>
        </div>
      </header>

      <main className="pb-32 pt-2">
        <section className="px-5 mb-6">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-zinc-800 flex justify-between items-center">
            <div className="flex items-center">
              <img alt="Sunny Weather Icon" className="w-14 h-14 mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqlOx040sYMTaUI6xnqFe_nRJpUoC88rHlztPhyqO3cjq_AcBMTQd4e2P4LsevztEAXDf0giHoy4mWViQPazqbhQC0ewE2ybWUNlR13uoNo-6YXqFQ8oyJOUGvVx5KszoOxFeCXUlwCmOsI-a8cqUCxA5KESZyAUtRYbg5fwIALX9OpOSNg-31ULOuCLashosJngGOal0MBQfXU0GC3HQV8hVQE5FswEGJKCQULHs3Tdic4QBg6_-kGwzVEwWMCm3OiSgJDgoDM0qb"/>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">삿포로 현재 날씨</p>
                <h2 className="text-3xl font-bold">-2°C <span className="text-sm font-normal text-slate-400 ml-1">눈 내림</span></h2>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-primary">적설량 5cm</p>
              <p className="text-xs text-slate-400">습도 78%</p>
            </div>
          </div>
        </section>

        <section className="mb-8 px-5">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="text-xl font-bold">실시간 운행 상태</h3>
              <p className="text-xs text-slate-400 font-display">Real-time Transportation Status</p>
            </div>
            <Link to="/transportation" className="text-sm text-primary font-medium">전체보기</Link>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">train</span>
                </div>
                <div>
                  <p className="font-bold text-sm">JR 하코다테 본선</p>
                  <p className="text-[10px] text-slate-400 font-display">JR Hakodate Line</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">정상 운행</span>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">subway</span>
                </div>
                <div>
                  <p className="font-bold text-sm">삿포로 시영 지하철</p>
                  <p className="text-[10px] text-slate-400 font-display">Sapporo Subway</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">정상 운행</span>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-primary/20 dark:border-primary/40 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">directions_bus</span>
                </div>
                <div>
                  <p className="font-bold text-sm">신치토세 공항 리무진</p>
                  <p className="text-[10px] text-slate-400 font-display">Airport Limousine</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary/10">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-primary">폭설 지연 (15분)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="px-5 flex justify-between items-end mb-4">
            <div>
              <h3 className="text-xl font-bold">삿포로 맛집 추천</h3>
              <p className="text-xs text-slate-400 font-display">Sapporo Restaurants</p>
            </div>
            <Link to="/restaurants" className="text-sm text-primary font-medium">전체보기</Link>
          </div>
          <div className="flex overflow-x-auto no-scrollbar px-5 space-x-4">
            <div className="flex-none w-64">
              <Link to="/restaurants/1">
                <div className="relative h-40 rounded-2xl overflow-hidden mb-3">
                  <img alt="Sapporo Ramen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlYw-zcRP21_jSegXRrkYli9_L1nqjczE1deidALj2Wbnof-kS54ncmUbJ0lN_yMEjC35Wtf2Bqq4--L1BLrRjw02U2XO7nh_Sb_VopM8a_su_cwjSMTo7iHtGaNP8hlzGfpuj2Dk56KOI9nkfuZANI0aO89rZk1HcqlqJnSyBIlWVbdilaE1RISbfL-TWyJoy3ZuPe1vatmkYr8PG8uC8g11Ti9TYGq5VxTY4MTYq7vnnaQasMqegk5FG-4cPsQnp_pIHJ-S-OqY7"/>
                  <div className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-md font-bold">인기 급상승</div>
                </div>
                <h4 className="font-bold text-base truncate">미소 라멘 전문점</h4>
                <p className="text-xs text-slate-500 mb-1">스스키노 역 도보 5분</p>
                <div className="flex items-center text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold ml-0.5">4.8 (1,200+)</span>
                </div>
              </Link>
            </div>
            <div className="flex-none w-64">
              <Link to="/restaurants/2">
                <div className="relative h-40 rounded-2xl overflow-hidden mb-3">
                  <img alt="Sapporo Crab" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMSjz_Qr3nx2VdY1tAjePdfnMl2kbnL-pAvgHzSyzweejcI4yJc8KxenkUV33kvFzW0BiFr2BNOZYl5tklhtk5jqlOZfhrYCdheE-HZyqDz1ucTqUsBmxHa-ozCV2NhCL5NrQJ64Crn-WZnT92tP9qEWVHNGVVu0CuM8dp-d4HQTf9m0HLs0OX8791Me98UTBAtRFj8MbYgSTLQ5nOr7gWDVeGsIC0VDfWTYTaGOZglbQEDrTiN5Evjvpv9hnrghtiIBbU8x-I_tCm"/>
                </div>
                <h4 className="font-bold text-base truncate">카니 장인</h4>
                <p className="text-xs text-slate-500 mb-1">니조 시장 내 위치</p>
                <div className="flex items-center text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold ml-0.5">4.9 (850)</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="px-5 flex justify-between items-end mb-4">
            <div>
              <h3 className="text-xl font-bold">비에이 명소 둘러보기</h3>
              <p className="text-xs text-slate-400 font-display">Biei Sightseeing</p>
            </div>
            <Link to="/attractions" className="text-sm text-slate-400 dark:text-slate-500">더보기</Link>
          </div>
          <div className="flex overflow-x-auto no-scrollbar px-5 space-x-4">
            <div className="flex-none w-40">
              <Link to="/attractions/1">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-2 shadow-sm border border-slate-100 dark:border-zinc-800">
                  <img alt="Biei Trees" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUTD2EN5djhdAoYEYjmBNXSeNp3V3ZbWhXYjogBz8MVpOM60K-Czdry7ql7kgLkwMKcQZT3cK9VLJjMXqEfDXySs17fadxvP2jF7I7PXJMh8uL2mkj-2spBqZJvyFQuKdeM3JfMKJwTmszIvx1lSbLjgSAHM3OdAUyRD2Bbn6AuhosSakHHis5Df4XbrP5QZsLMCaBHBSTndTf9-QckERSYk8oCobiKW35bTPng2_tXGrQDWDEpp3L6AMNdvgfbVmYIdD1uQdXkE-s"/>
                  <button className="absolute top-2 right-2 p-1.5 bg-black/30 backdrop-blur-sm rounded-full">
                    <span className="material-symbols-outlined text-white text-lg">favorite</span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-bold text-sm">켄과 메리의 나무</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-none w-40">
              <Link to="/attractions/2">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-2 shadow-sm border border-slate-100 dark:border-zinc-800">
                  <img alt="Biei Blue Pond" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3ukpvJZ4KODJn3JZiiGObyzaGHZifqwsI7tB2Nsxw-Q-78zrZoRS_IVaKcSAAJ5dZmhPNrmeEKMlX4kzkskkjJ1nzO1TF-DtLrdMo33HdirVlKNkzDAiDam7-qTmf4AoJH5N9p-_xRsArPgQEfrk2ttXFfRBOGuxLEPGrRPufAHSUKIrX2T3m5RWYwjsPgOB7cwt0dSRNi3AIGuAuCMlak_2z_q_UXXy1U4vY2bsFpSq0RmWTTLlnojTP3TWrHLW0YfFEQWEUsYp_"/>
                  <button className="absolute top-2 right-2 p-1.5 bg-black/30 backdrop-blur-sm rounded-full">
                    <span className="material-symbols-outlined text-white text-lg">favorite_border</span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-bold text-sm">청의 호수</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-8 px-5">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="flex items-center space-x-1">
                <span className="material-symbols-outlined text-primary">storefront</span>
                <h3 className="text-xl font-bold">오타루 주변 편의점</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-display">Otaru Convenience Stores</p>
            </div>
            <Link to="/convenience" className="text-sm text-primary font-medium">더보기</Link>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 flex items-center justify-between shadow-sm w-full">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">store</span>
                </div>
                <div>
                  <p className="font-bold text-base">로손 오타루 운하점</p>
                  <p className="text-xs text-slate-500">운하에서 도보 2분 (150m)</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[10px] px-2 py-1 rounded bg-slate-100 dark:bg-zinc-800 font-bold text-slate-600 dark:text-slate-400">24H 영업</span>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 flex items-center justify-between shadow-sm w-full">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-blue-600">local_convenience_store</span>
                </div>
                <div>
                  <p className="font-bold text-base">세븐일레븐 사카이마치</p>
                  <p className="text-xs text-slate-500">오르골당 근처 (300m)</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[10px] px-2 py-1 rounded bg-slate-100 dark:bg-zinc-800 font-bold text-slate-600 dark:text-slate-400">24H 영업</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <button className="fixed right-5 bottom-32 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-slate-100 dark:border-zinc-700 flex items-center justify-center active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-slate-500">arrow_upward</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default Home;
