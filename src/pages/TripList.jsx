import React from 'react';
import { Link } from 'react-router-dom';

const TripList = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[480px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden text-[#111418] dark:text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">map</span>
            <h1 className="text-xl font-bold tracking-tight">나만의 여행 리스트</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-md mx-auto pb-24 w-full">
        {/* Category Tabs */}
        <div className="bg-white dark:bg-background-dark px-4 sticky top-[65px] z-40">
          <div className="flex border-b border-gray-100 dark:border-gray-800 gap-6">
            <a className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4" href="#">
              <p className="text-sm font-bold tracking-wide">전체</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 dark:text-gray-400 pb-3 pt-4" href="#">
              <p className="text-sm font-bold tracking-wide">맛집</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 dark:text-gray-400 pb-3 pt-4" href="#">
              <p className="text-sm font-bold tracking-wide">명소</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 dark:text-gray-400 pb-3 pt-4" href="#">
              <p className="text-sm font-bold tracking-wide">저장됨</p>
            </a>
          </div>
        </div>

        <div className="mt-4 px-4 space-y-3">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">삿포로 예정 일정</h2>

          {/* Item 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex items-center p-3 gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq632XlrGqEwhor3wXUBCJR2uYeGPOFouy8k7tO1FjhUAqIQ5yYhBKPGwBbVFPWN4zhGMo-EWauv_ldEfUMGhG5ProJnoJ4gjQWCMohSmMPtaAreHq6L1S3CSHuy82pCT7tPjKNPA6qFm0AmRM_zlsVXP3k9teRxPWaiP1f4EfZyHCadn1wmvV8R0sCsNiZLDMuytMDJ9MkEgC32C1Ad3imVto2TD_2AK_sWsAdf-DseAK16b1s4-mcYPRQUhgR_2TeUtoWMQWX30")' }}
            >
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">명소</span>
                <span className="flex items-center gap-1 text-[10px] text-orange-500 font-bold"><span className="material-symbols-outlined text-[12px] fill-1">sunny</span> 18°C</span>
              </div>
              <p className="text-[#111418] dark:text-white text-base font-semibold leading-tight truncate">삿포로 맥주 박물관</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs truncate">삿포로시 히가시구 · 오후 8시까지 영업</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex items-center p-3 gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQflECnLPMYqsg_3j8GXINP79sWK1ke2F1XbSZ_KaEQnoOaJH7RwwOBdHb-IvuMvxFaPwU-tdzHIHJoIRt0ru1H-mycF0FyDRCOE_uv1B103LyZtlCaTPi2fcJy2ogNnEGBS06t2cMYsyeMFk55w6bO2bkXJ_PkdKNvloQT7UylHCfsb_AelI9VLTx5me9I1ANvw_6aS9b9dxHarH5e856c_4mVE-jzyNeRZN-S8tiE8kpk-_nw8i_2tGXgBItW9AFKJZuh1NWxZ0")' }}
            >
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">명소</span>
                <span className="flex items-center gap-1 text-[10px] text-gray-400"><span className="material-symbols-outlined text-[12px]">group</span> 가족 추천</span>
              </div>
              <p className="text-[#111418] dark:text-white text-base font-semibold leading-tight truncate">오타루 오르골당</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs truncate">오타루 · 삿포로에서 기차로 35분</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex items-center p-3 gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq8JviCrMNTTge7hjhnnyYmmKsAx1PjqOlDJ5hEq0LYqAs26KIH-HU3rcywEqp8g-nkYBNZWoauyOKYpxvclXOSpKm6xJtHxUVKTb8asYvhGMuUMQZK_54HYM45ZVvk9Hqq3spvbJCxB3VW9QN5kVHwAwAjpM9jX5hD4Otfg5m26qM5OETo6Ft4yunjllewwEQdx-OTisDwciLaUh_hI2-21e91U8-_oMbhIAmUbwAQHBcTrD8LBAOdErLYpU3W6KpcgNx4t6ipkQ")' }}
            >
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">맛집</span>
                <span className="flex items-center gap-1 text-[10px] text-blue-400 font-bold"><span className="material-symbols-outlined text-[12px]">cloudy_snowing</span> 2°C</span>
              </div>
              <p className="text-[#111418] dark:text-white text-base font-semibold leading-tight truncate">스프카레 가라쿠</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs truncate">스스키노 · 유명 수프 카레 전문점</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          </div>

          {/* Item 4 (Visited) */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex items-center p-3 gap-4 opacity-75">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0 grayscale"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUjZ8V3hmLiF-T6Gwcr3eMiMjdtY4JO8bKEhZHeMmVaUW4Xs-IrDkB-ZQvAdz7rtdOQ68WwCaccXsSjwexuF47qHULE87mM6CE4gdCDDhfjObcRuFDpH_DrJIq4B3hG9AQSwsTalMs-HmoT3p2uzLEu36shKDVenrAl--SbPctDlFf6dNGGcoX_fN4z-z_eBCDbI_-qZbk9-BUx-oqAAqb5Acyq5omlj2WPA67dR-P2dHNEsJnls4NKE1RzyivfAyOi-bQprvg8k4")' }}
            >
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 text-[10px] font-bold uppercase tracking-wider">맛집</span>
                <span className="text-[10px] text-gray-400 font-bold line-through">방문 완료</span>
              </div>
              <p className="text-[#111418] dark:text-white text-base font-semibold leading-tight truncate">니조시장 오히소</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs truncate">중앙구 · 신선한 해산물 덮밥</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          </div>
        </div>

        {/* Travel Tip */}
        <div className="mt-8 px-4">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary">train</span>
              <h3 className="font-bold text-sm text-primary uppercase tracking-tight">여행 팁</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              삿포로의 대부분 명소는 <span className="font-bold text-primary">난보쿠선</span>으로 이동 가능합니다. 편리한 이동을 위해 사피카(Sapica)나 IC 카드를 꼭 챙기세요!
            </p>
          </div>
        </div>
      </main>

      {/* FAB */}
      <div className="fixed bottom-20 right-6 flex flex-col items-center gap-2 z-50">
        <button aria-label="장소 추가" className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-105 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 px-6 py-2 flex justify-between items-center z-40 max-w-[480px] mx-auto">
        <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-medium">탐색</span>
        </Link>
        <Link to="/trip-list" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined fill-1">bookmark</span>
          <span className="text-[10px] font-bold">내 리스트</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">thermostat</span>
          <span className="text-[10px] font-medium">날씨</span>
        </button>
        <Link to="/timetable" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">directions_transit</span>
          <span className="text-[10px] font-medium">교통</span>
        </Link>
      </div>
    </div>
  );
};

export default TripList;
