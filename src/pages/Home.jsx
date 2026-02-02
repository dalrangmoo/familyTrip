import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[480px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between">
        <div className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center">
          <span className="material-symbols-outlined text-primary">cloudy_snowing</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">일본, 홋카이도 삿포로</h2>
          <p className="text-xs text-[#617289] dark:text-gray-400">가족 여행 • 2월 14일-20일</p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/10 text-primary gap-2 text-base font-bold leading-normal">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>

      <div className="@container">
        {/* Weather Card */}
        <div className="px-4 py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-80 shadow-lg"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBl_M2gQTL0gWnWnR3jp-kbf8VxCDhDB_OgnpZ66TabeFYI6NacdqbeSLH2TDUOUjvq4u0ESIc_BYMXigJpxufA6-Sj8c2FnOquE29sO-MKFi1HJ9OCdrFGNFSWwZfI7bsLix9RMZJ8MZ5bRiK9G9aMaNihzQ4UG38Y4cceW6HJUxhRIEOPfMygw09ZCT6dPCCjJd-CF6xUqGOIHBXheolQiWuIohuCElOYvtPWkHyV4cVuaHyZ2NeFSESQecVpMIxGe2E2vn9FrMM")' }}
          >
            <div className="flex flex-col p-6 gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white text-4xl">ac_unit</span>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">-4°C</p>
              </div>
              <p className="text-white/90 text-lg font-medium">오늘 폭설이 예상됩니다</p>
              <div className="flex gap-2 mt-2">
                <span className="bg-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">warning</span> 한파 주의보
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="flex flex-wrap gap-3 p-4">
        <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-[#617289] dark:text-gray-400">
            <span className="material-symbols-outlined text-sm">snowing</span>
            <p className="text-xs font-medium uppercase tracking-wider">강설량</p>
          </div>
          <p className="text-[#111418] dark:text-white tracking-light text-xl font-bold leading-tight">15cm</p>
        </div>
        <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-[#617289] dark:text-gray-400">
            <span className="material-symbols-outlined text-sm">air</span>
            <p className="text-xs font-medium uppercase tracking-wider">풍속</p>
          </div>
          <p className="text-[#111418] dark:text-white tracking-light text-xl font-bold leading-tight">12km/h</p>
        </div>
      </div>

      {/* Next Train Alert */}
      <Link to="/timetable" className="px-4 block">
        <div className="bg-primary/5 dark:bg-primary/20 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-2 rounded-lg">
              <span className="material-symbols-outlined">train</span>
            </div>
            <div>
              <p className="text-[#111418] dark:text-white text-sm font-bold">오타루행 다음 열차</p>
              <p className="text-primary text-xs font-medium">4번 승강장 • 8분 후 출발</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary">chevron_right</span>
        </div>
      </Link>

      {/* Recommended Restaurants */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <h2 className="text-[#111418] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">추천 맛집</h2>
        <button className="text-primary text-sm font-bold">전체보기</button>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex items-stretch p-4 gap-4">
          <div className="flex h-full flex-1 flex-col gap-3 rounded-xl min-w-64 bg-white dark:bg-gray-800 p-2 shadow-sm">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKfzdL6GjbSsc-bsVBNk-EFTTJ4q0NZBWnkXX-sBCGU2NjhCZfk1A-44GsubuF-0ld5ySSlcsSUTmiKfpLiIRJJTbATeyJcU4LxwZXb5Aybsx0sVfuHXcxQDOUZN5rZ6dAea7YKy8QdwuQhXLEK0ZOAlhTXLFmm6MUlBV1tqSxKVileb0w-P6p8_zGrxCtUPRXG480M1WJ4FCtVu7fItBl-_e7D0A9Z6bBw7LC7fPLfjC-RWnbdqgl_bYjXjCx34CICk3Ulju0xlA")' }}
            >
              <div className="m-2 self-start bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-orange-500 text-sm fill-current">star</span>
                <span className="text-[10px] font-bold text-gray-800">4.9</span>
              </div>
            </div>
            <div className="px-1 pb-2">
              <p className="text-[#111418] dark:text-white text-base font-bold leading-normal">멘야 사이미</p>
              <p className="text-[#617289] dark:text-gray-400 text-sm font-normal">유명 미소 라멘 • ₩₩</p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-3 rounded-xl min-w-64 bg-white dark:bg-gray-800 p-2 shadow-sm">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDn-RjIJ_v2bZ1GBVoMg5NSZodTyjDvZr9Z8NuEp6XaAFki5ydRl2cYhR-KN4TmGbrKlvoYfkOf6DVWlPvCkjOKqYj39vo285JtpWlOiimmF-OMW6MTU96cf_Hr2h4JyAo0BoDBmGz78LhOLzpiO9YnZDDzBMrW75UeyNXlNCoBdQCXI3mVVAD9RfiXss32jqUYPXu3v3w6rBzbO5QHYNLxa2WHB706LKdAvq0xO1t8jSNm_PwonaibtRsRXF619Xe7zRap4SZ5iiU")' }}
            >
              <div className="m-2 self-start bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-orange-500 text-sm fill-current">star</span>
                <span className="text-[10px] font-bold text-gray-800">4.7</span>
              </div>
            </div>
            <div className="px-1 pb-2">
              <p className="text-[#111418] dark:text-white text-base font-bold leading-normal">가라쿠 스프카레</p>
              <p className="text-[#617289] dark:text-gray-400 text-sm font-normal">정통 스프카레 • ₩₩</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h2 className="text-[#111418] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">인기 여행지</h2>
        <button className="text-primary text-sm font-bold">지도보기</button>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex items-stretch p-4 gap-4">
          <div className="flex h-full flex-1 flex-col gap-3 rounded-xl min-w-64 bg-white dark:bg-gray-800 p-2 shadow-sm">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col justify-end"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOS4HxKfu5K-DO0ExGzRK0TKUb5MK27ofiTW0kLc9-BaDfabDpxDqG5HRZk3AGkYs4CyW9nuoJkXaxSKZSi1P25zpAaJoXOc3Ub4CpD784SD7_GuZA18LpFaAcUF8rXJMLzghbeH6iOWs27UQ9d4iffPDkpA1MRC54FOaB1SKv_yQ4YFjBzeGzkSxTKMyyRD8kfqVSSVckw5fwrEDP6S5TR-4TSyORPQl6UdcVBnA8cr5vhIubsrbngfslz6Y6Bof8iMmbxsWMb4Y")' }}
            >
            </div>
            <div className="px-1 pb-2">
              <p className="text-[#111418] dark:text-white text-base font-bold leading-normal">오타루 운하</p>
              <div className="flex items-center gap-1 text-[#617289] dark:text-gray-400 text-sm">
                <span className="material-symbols-outlined text-sm">directions_car</span>
                <span>차로 45분 소요</span>
              </div>
            </div>
          </div>
          <Link to="/details" className="flex h-full flex-1 flex-col gap-3 rounded-xl min-w-64 bg-white dark:bg-gray-800 p-2 shadow-sm">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col justify-end"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5I50qzUyG7GcHbSo0uDRIUYFLD-v2z9pPhqb_mDsTpUwHsAHsx3QV5LO8HOx850JpSHBzMKHHej1Uv7hBN8TCbboHLdLAtCpTiVvdlYtEQluKEAayzzme6_Bc5LVpn_Bxa4MNfc0s80K6IgcvfCwsuvnI8S5gibSPVPCCUJ0QKTTX79_cJXwjoqFgkVNVHMAOQx1Anc9zNEABf9moP4vq_DJjXqZh6_29gKbkBLewmg2TCsWLCidOXxfNl4tyQ-uQdFqTrPxZ68s")' }}
            >
            </div>
            <div className="px-1 pb-2">
              <p className="text-[#111418] dark:text-white text-base font-bold leading-normal">비에이 청의 호수</p>
              <div className="flex items-center gap-1 text-[#617289] dark:text-gray-400 text-sm">
                <span className="material-symbols-outlined text-sm">train</span>
                <span>열차로 2.5시간 소요</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="h-24"></div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 flex justify-around items-center py-3 px-6 z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined font-bold">home</span>
          <span className="text-[10px] font-bold tracking-tight">홈</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold tracking-tight">탐색</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] font-bold tracking-tight">저장</span>
        </button>
        <Link to="/trip-list" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold tracking-tight">여행일정</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
