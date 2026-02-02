import React from 'react';
import { Link } from 'react-router-dom';

const TrainTimetable = () => {
  return (
    <div className="max-w-[480px] mx-auto bg-white dark:bg-background-dark min-h-screen shadow-xl relative overflow-x-hidden text-[#111418] dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link to="/" className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <div className="flex-1 text-center">
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">삿포로 ➔ 오타루</h2>
            <p className="text-xs text-primary font-medium">JR 하코다테 본선</p>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-[#111418] dark:text-white">
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
          </div>
        </div>
        {/* Filter Chips */}
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4">
            <p className="text-sm font-medium">오늘, 10월 12일</p>
            <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4">
            <p className="text-[#111418] dark:text-gray-300 text-sm font-medium">지금 출발</p>
            <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4">
            <p className="text-[#111418] dark:text-gray-300 text-sm font-medium">쾌속 열차만</p>
          </button>
        </div>
      </header>

      {/* Winter Alert */}
      <div className="px-4 py-3">
        <div className="bg-winter-blue dark:bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">ac_unit</span>
          <div className="flex-1">
            <p className="text-primary text-[10px] font-bold uppercase tracking-wider">겨울철 운행 안내</p>
            <p className="text-[#111418] dark:text-gray-200 text-sm">오타루 지역 강설이 예상됩니다. 현재 모든 열차 정상 운행 중입니다.</p>
          </div>
        </div>
      </div>

      <main className="pb-24">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">예정된 열차</h3>
          <span className="text-primary text-xs font-bold uppercase">1-2번 승강장</span>
        </div>

        <div className="space-y-4 px-4">
          {/* Train 1 */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-primary"></div>
            <div className="absolute left-0 top-1 size-6 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white dark:ring-background-dark">
              <span className="material-symbols-outlined text-[16px]">train</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-white">쾌속 에어포트</span>
                    <span className="text-success text-xs font-medium flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-success"></span> 정상 운행
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#111418] dark:text-white text-xl font-bold">10:15 — 10:50</p>
                    <p className="text-[#617289] text-[10px] mt-0.5 font-medium">출발 — 도착</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#111418] dark:text-white font-bold">750 JPY</p>
                  <p className="text-[#617289] text-xs">소요시간 35분</p>
                </div>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-[16/5] bg-cover rounded-lg"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaHQEDQj1ProgzpkRVauWcLTcLKoBRUAy0Z10FpoVvntPXShjR2HQ7vsWZhaBd84Wbm24MEsySgMzeEINtIapt-AlOn7b5WAQ27yalx78QlOnURP_ETOyR_EJ-E_fPsyk5z0hwHOJ9_V2MTL2nlcrsuG2dtllkZ93pMxrK9nkDdWbuI2THrQXd10SvRb7x8CrEoJEsXtUFykq_47LEUJdRZgvuXDDkKDZSZKE_NoeFODgR9ejuJn8i-as4IaiRRvHirwCHUjyX3es")' }}
              ></div>
            </div>
          </div>

          {/* Train 2 */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gray-300 dark:border-gray-600"></div>
            <div className="absolute left-0 top-1 size-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 ring-4 ring-white dark:ring-background-dark">
              <span className="material-symbols-outlined text-[16px]">directions_subway</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">보통 열차</span>
                    <span className="text-warning text-xs font-medium flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-warning"></span> 3분 지연
                    </span>
                  </div>
                  <p className="text-[#111418] dark:text-white text-xl font-bold">10:28 — 11:13</p>
                  <p className="text-[#617289] text-[10px] mt-0.5 font-medium">출발 — 도착</p>
                </div>
                <div className="text-right">
                  <p className="text-[#111418] dark:text-white font-bold">750 JPY</p>
                  <p className="text-[#617289] text-xs">소요시간 45분</p>
                </div>
              </div>
            </div>
          </div>

          {/* Train 3 */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-primary/40"></div>
            <div className="absolute left-0 top-1 size-6 rounded-full bg-primary/40 flex items-center justify-center text-white ring-4 ring-white dark:ring-background-dark">
              <span className="material-symbols-outlined text-[16px]">train</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-white">쾌속 에어포트</span>
                    <span className="text-success text-xs font-medium flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-success"></span> 정상 운행
                    </span>
                  </div>
                  <p className="text-[#111418] dark:text-white text-xl font-bold">10:45 — 11:20</p>
                  <p className="text-[#617289] text-xs mt-1">4호차: 지정석 이용 가능</p>
                </div>
                <div className="text-right">
                  <p className="text-[#111418] dark:text-white font-bold">1,590 JPY</p>
                  <p className="text-[#617289] text-xs font-medium">지정석 포함 요금</p>
                </div>
              </div>
            </div>
          </div>

          {/* Train 4 */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 h-10 w-[2px] border-l-2 border-dashed border-gray-300 dark:border-gray-600"></div>
            <div className="absolute left-0 top-1 size-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 ring-4 ring-white dark:ring-background-dark">
              <span className="material-symbols-outlined text-[16px]">directions_subway</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">보통 열차</span>
                    <span className="text-success text-xs font-medium flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-success"></span> 정상 운행
                    </span>
                  </div>
                  <p className="text-[#111418] dark:text-white text-xl font-bold">11:02 — 11:47</p>
                  <p className="text-[#617289] text-[10px] mt-0.5 font-medium">출발 — 도착</p>
                </div>
                <div className="text-right">
                  <p className="text-[#111418] dark:text-white font-bold">750 JPY</p>
                  <p className="text-[#617289] text-xs">소요시간 45분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 px-6 py-3 flex justify-between items-center z-50">
        <Link to="/timetable" className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined">directions_transit</span>
          <span className="text-[10px] font-bold mt-1">시간표</span>
        </Link>
        <button className="flex flex-col items-center text-gray-400">
          <span className="material-symbols-outlined">map</span>
          <span className="text-[10px] font-medium mt-1">지도</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <span className="material-symbols-outlined">confirmation_number</span>
          <span className="text-[10px] font-medium mt-1">패스/티켓</span>
        </button>
        <Link to="/trip-list" className="flex flex-col items-center text-gray-400">
          <span className="material-symbols-outlined">family_restroom</span>
          <span className="text-[10px] font-medium mt-1">가족 여행</span>
        </Link>
      </nav>
    </div>
  );
};

export default TrainTimetable;
