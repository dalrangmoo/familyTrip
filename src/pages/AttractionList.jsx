import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const AttractionList = () => {
  const categories = ['전체', '삿포로', '비에이', '오타루'];

  const attractions = [
    {
      id: 1,
      name: '오타루 운하',
      location: '오타루',
      rating: 4.8,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLXZf6u0-b2sORdoxBBXkvbIoJjc1lsANtbbWIkssTi7YeSKduYqc1h4W6A33br808j6xMoSg56I8vDv5CKa7ilPv-aJMzTvWEpbmGph7xtVh2wz4GVFQKCBMaS9hh4JfizyCtRPLFvJyL3EZOn_AjV5SifHMzqeQEbADNcYmBqoEJy5XSZJ5-m4Kp6t-E6gTOUywVTtH4MFU52EYpOgWqrl76FTAWe9g56bHEPcv1ZxRYA2Y8pKU0Yn4hM5SgnUcvejwtDnH_xhW7'
    },
    {
      id: 2,
      name: '비에이 청의 연못',
      location: '비에이',
      rating: 4.9,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAo6fYbNadorSxyEiqqSlAEn5HvfCOcPHMu5mwH85m0rPJw46D1eQ8mEl76XD5xd4EnSV3adBwA8QcKDbcEzY5dSqTdUdV3xKBzsh4MlesHqMccr0yirRB5-dSN_TrKQ9k0X3L6w5O98dC1puRZI4_JBa0ZuuQJlHIEdK_EZP6QA7d8wwCSOXEKNnqpguScKYGkUW7aeuJ0-Xoo1h_0v19MckqOpj-12mfvXio9jcjucjI_03NV64fJxbm-6DLScJETmrCVJfVHSzb'
    },
    {
      id: 3,
      name: '삿포로 TV 타워',
      location: '삿포로',
      rating: 4.5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHVrtsqnhmyzicY-Z5UZgpuLn9nQHYxLlDFN6yKPL5j0tFfN-Kia6ZqWHj_UHX4miW1mKJ1ju_e5fiOA_LCjBxlmDCW-c-y4aOz1zZ4u1k9BMfqkhm8uzP0g6GQeckevqDiPL7tBOOgSZTdmpk32XUbbwO7jYNtZ6_jm7PJBbl4DgQ7oByMKjX1uXXB2GWLm12FS9wfsp2M7OzZ6JABBHiIUwaydOiNrOUjqzOc-DbMTf3SZ66-a71Tk0T9K7jFpYDGQrX-5e4Tryz'
    },
    {
      id: 4,
      name: '시키사이노오카',
      location: '비에이',
      rating: 4.7,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUA4W5c-7a5oGzbqJv2hjwgKzE1bv-xG7YOvYo3QZcoIqrfhpVVqu3g4O65ZGGiW_VlAa2uDK4mbeoSue7djTL1CR7kjmzd6iOaTxDT-R0203te4NCxIGcZfougCaaU8UTUQDeGoD9sW-mYxqHipVMBkXtF78poHEDcZS8ONCdyprCluLvuHsWdUfv_Mv-gJuFuCNbVLngvLfHdVkEv3yIZMv-Q7IGgNn_JK-vCHH7i5JZ1LJ34ousJNyddlJKAgO7mafeU-Vx9XAH'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-white font-display min-h-screen">
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight">볼거리</h1>
          <div className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-2xl">search</span>
          </div>
        </div>
      </nav>

      <main className="pb-32">
        <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-6 transition-transform active:scale-95 ${
                i === 0 ? 'bg-primary text-white shadow-sm' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-sm font-semibold">{cat}</span>
            </button>
          ))}
        </div>

        <div className="px-4 mt-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">인기 여행지</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">훗카이도에서 꼭 가봐야 할 명소들</p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4">
          {attractions.map((attr) => (
            <Link key={attr.id} to={`/attractions/${attr.id}`} className="group flex flex-col gap-2">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${attr.image}")` }}
                >
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </button>
                </div>
              </div>
              <div className="px-1">
                <p className="text-base font-bold text-gray-900 dark:text-white leading-tight">{attr.name}</p>
                <div className="flex items-center gap-1 mt-1 text-primary">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="text-xs font-medium">{attr.location}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{attr.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default AttractionList;
