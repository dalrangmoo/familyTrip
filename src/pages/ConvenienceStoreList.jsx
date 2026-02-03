import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ConvenienceStoreList = () => {
  const categories = ['전체', '세이코마트', '세븐일레븐', '로손'];

  const stores = [
    {
      id: 1,
      brand: 'Seicomart',
      brandColor: 'text-seicomart',
      brandBg: 'bg-seicomart/10',
      name: '세이코마트 삿포로역점',
      distance: '120m',
      hours: '24h',
      active: true,
      features: ['coffee', 'atm', 'restaurant']
    },
    {
      id: 2,
      brand: '7-Eleven',
      brandColor: 'text-seveneleven',
      brandBg: 'bg-seveneleven/10',
      name: '세븐일레븐 북 5조 서점',
      distance: '250m',
      hours: '24h',
      active: true,
      features: ['atm', 'liquor']
    },
    {
      id: 3,
      brand: 'Lawson',
      brandColor: 'text-lawson',
      brandBg: 'bg-lawson/10',
      name: '로손 삿포로 에키마에점',
      distance: '430m',
      hours: '07:00-23:00',
      active: false,
      features: ['atm', 'restaurant']
    },
    {
      id: 4,
      brand: 'FamilyMart',
      brandColor: 'text-familymart',
      brandBg: 'bg-familymart/10',
      name: '패밀리마트 오도리공원점',
      distance: '850m',
      hours: '24h',
      active: true,
      features: ['atm'],
      opacity: 'opacity-80'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="relative min-h-screen flex flex-col max-w-md mx-auto bg-white dark:bg-zinc-950">
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg px-4 pt-12 pb-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <Link to="/" className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-slate-100 dark:border-zinc-700 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-200">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold">편의점 리스트</h1>
            <button className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-slate-100 dark:border-zinc-700">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-200">search</span>
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold shadow-sm ${
                  i === 0 ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400 font-medium border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <main className="flex-1 px-4 py-2 space-y-4 pb-32">
          <div className="flex items-center justify-between px-1">
            <p className="text-xs text-slate-500 font-medium font-display">내 주변 <span className="text-primary font-bold">12개</span>의 편의점</p>
            <div className="flex items-center gap-1 text-xs text-slate-500 font-display">
              <span className="material-symbols-outlined text-sm">sort</span>
              <span>거리순</span>
            </div>
          </div>

          {stores.map((store) => (
            <div
              key={store.id}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-zinc-800 flex items-center justify-between gap-4 ${store.opacity || ''}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 ${store.brandBg} ${store.brandColor} text-[10px] font-bold rounded uppercase font-display`}>
                    {store.brand}
                  </span>
                  <span className={`${store.active ? 'text-primary' : 'text-slate-400'} text-[10px] font-bold flex items-center gap-0.5 font-display`}>
                    <span className="material-symbols-outlined text-[12px]">schedule</span> {store.hours}
                  </span>
                </div>
                <h3 className="font-bold text-[15px] mb-1 font-display">{store.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3 font-display">
                  <span className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                    {store.distance}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {store.features.map((feat) => (
                    <div key={feat} className="w-6 h-6 rounded-md bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px] text-primary">{feat === 'liquor' ? 'liquor' : feat === 'restaurant' ? 'restaurant' : feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="flex flex-col items-center justify-center gap-1.5 min-w-[84px] h-[84px] rounded-xl bg-primary text-white active:opacity-90 transition-opacity">
                <span className="material-symbols-outlined">map</span>
                <span className="text-[10px] font-bold">구글맵으로 보기</span>
              </button>
            </div>
          ))}
        </main>

        <BottomNav />
      </div>
    </div>
  );
};

export default ConvenienceStoreList;
