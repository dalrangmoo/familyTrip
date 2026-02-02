import React from 'react';
import { Link } from 'react-router-dom';

const AttractionDetails = () => {
  return (
    <div className="relative flex h-auto w-full max-w-[480px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden text-[#111418] dark:text-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
        <Link to="/" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer">
          <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
        </Link>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">관광지 상세 정보</h2>
        <div className="flex w-10 items-center justify-end">
          <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer">
            <span className="material-symbols-outlined text-xl">share</span>
          </div>
        </div>
      </div>

      <div className="@container">
        <div className="px-0 sm:px-4 py-0 sm:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-gray-200 @[480px]:rounded-xl min-h-[300px] relative"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASwVJNt79WYA2p62fmHKTx3jpi-fHLSe2m8owQP87Jnp4NtYYaaEn0z6m1XjV_YoTv_5tcKeY8uLwkoHKVmDXfMFPR2FVFPpuzsVRI1ei88fAD500tIeFkJBEzZ7irCDaCC2YiDXqQ0ZQji3DZ-RuCoas-2k9jt2nIp4rErQMKvlRMhWkLW9UkeGTsN2cAECoPtK1BbJ8WKHGGtTrQyrCgo4aFliWbAILjrt03ellF2ez1cRuErHuy6J6iNRHfSWoq7DlVe9MP38w")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative p-6">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">인기 관광지</span>
              <h1 className="text-white text-3xl font-extrabold mt-2">비에이 청의 호수</h1>
              <p className="text-white/80 text-sm mt-1">일본 홋카이도 비에이</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Widgets */}
      <div className="flex flex-wrap gap-3 p-4">
        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-sm">sunny</span>
            <p className="text-sm font-medium">날씨</p>
          </div>
          <p className="tracking-tight text-xl font-bold leading-tight mt-1">18°C, 맑음</p>
          <p className="text-primary text-xs font-semibold">최적의 관람 조건</p>
        </div>
        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-sm text-yellow-500">star</span>
            <p className="text-sm font-medium">평점</p>
          </div>
          <p className="tracking-tight text-xl font-bold leading-tight mt-1">4.7/5</p>
          <p className="text-[#07883b] text-xs font-semibold">+2,500건의 후기</p>
        </div>
      </div>

      <div className="bg-white dark:bg-background-dark mt-2 pt-4 rounded-t-3xl shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="px-4 flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold leading-tight tracking-[-0.015em]">찾아가는 방법</h3>
          <span className="text-sm font-medium text-primary flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span>
            삿포로 출발
          </span>
        </div>

        {/* Transport Tabs */}
        <div className="px-4 py-2">
          <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-gray-700 shadow-sm rounded-lg text-sm font-bold">
              <span className="material-symbols-outlined text-lg">train</span>
              JR 열차
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-gray-500 dark:text-gray-400 text-sm font-bold">
              <span className="material-symbols-outlined text-lg">directions_bus</span>
              버스
            </button>
          </div>
        </div>

        {/* Route Details */}
        <div className="px-4 py-4">
          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-4 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">후라노선 경유</span>
                <h4 className="text-lg font-extrabold">JR 후라노선</h4>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-primary">¥2,860</p>
                <p className="text-xs text-gray-500">편도 기준</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-primary bg-white"></div>
                <div className="w-0.5 h-8 border-l-2 border-dashed border-primary/30"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex flex-col justify-between h-14 py-0.5">
                <p className="text-sm font-bold">삿포로역</p>
                <p className="text-sm font-bold">비에이역</p>
              </div>
              <div className="ml-auto flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                <span className="text-sm font-bold">약 2시간 30분</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timetable */}
        <div className="mb-4">
          <div className="px-4 flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">다음 열차 안내</p>
            <Link to="/timetable" className="text-xs font-medium text-primary cursor-pointer">전체 시간표 보기</Link>
          </div>
          <div className="flex overflow-x-auto gap-3 px-4 no-scrollbar">
            <div className="flex-shrink-0 flex flex-col items-center gap-1 bg-primary text-white p-4 rounded-2xl min-w-[80px]">
              <p className="text-xs font-medium opacity-80">09:30</p>
              <p className="text-lg font-black">출발전</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl min-w-[80px]">
              <p className="text-xs font-medium text-gray-500">10:15</p>
              <p className="text-lg font-bold">45분후</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl min-w-[80px]">
              <p className="text-xs font-medium text-gray-500">11:00</p>
              <p className="text-lg font-bold">1.5시간</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl min-w-[80px]">
              <p className="text-xs font-medium text-gray-500">12:30</p>
              <p className="text-lg font-bold">3시간</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 pb-32">
          <h3 className="text-lg font-bold mt-6 mb-2">관광지 정보</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            비에이의 '청의 호수'(아오이이케)는 신비로운 에메랄드빛 푸른 물로 유명한 인공 호수입니다. 1988년 도카치산 분화 이후 재해 방지를 위해 조성되었으며, 물속의 알루미늄 성분이 햇빛을 반사하여 이토록 아름다운 푸른색을 띱니다. 마른 낙엽송들이 호수 속에 서 있는 모습은 마치 동화 속 한 장면 같은 분위기를 자아냅니다.
          </p>
        </div>
      </div>

      {/* Bottom Sticky Actions */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 p-4 flex gap-3 items-center pb-8 sm:pb-4 z-50">
        <button className="flex-shrink-0 size-12 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <span className="material-symbols-outlined text-primary">map</span>
        </button>
        <button className="flex-1 bg-primary text-white py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add_circle</span>
          내 리스트에 추가
        </button>
      </div>
    </div>
  );
};

export default AttractionDetails;
