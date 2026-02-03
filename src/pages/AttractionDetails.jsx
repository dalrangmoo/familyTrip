import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const AttractionDetails = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-white min-h-screen font-display">
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Link to="/attractions">
            <span className="material-symbols-outlined cursor-pointer text-[#1b0d11] dark:text-white">arrow_back_ios</span>
          </Link>
        </div>
        <h2 className="text-lg font-bold tracking-tight">볼거리 상세</h2>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined cursor-pointer text-[#1b0d11] dark:text-white">share</span>
          <span className="material-symbols-outlined cursor-pointer text-[#1b0d11] dark:text-white">favorite</span>
        </div>
      </nav>

      <main className="pb-32">
        <div className="@container">
          <div className="px-0 @[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-200 @[480px]:rounded-xl min-h-[400px] relative shadow-lg"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCS0QF4EkDz0mhzsmJAGa_f_z0ren0yt09tQUkIVh0-LrhIU-ss-G0cAxEEtY3oxJ1EcvzWdPAcZaSa0y_DD7AfbwLWLvnltvgIUReCW5sogBADg_aKumQSrSAkexZx-b4l4tAMRggQWYshoKDLbFTxpjtJrv4PHEfVbZHK0qQQP9neFXwzKNhdAHSLKyXsuNRvrqkYANQYHLzB4qfNfZKanlKsILDoO-CNxEfdqmGvn9K9qeuZPOrmYI7v0GV6uhZO_3KKOUbMMLjg")'
              }}
            >
              <div className="p-6">
                <div className="flex gap-2 mb-2">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Nature</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Biei</span>
                </div>
                <h1 className="text-white text-3xl font-extrabold leading-tight">청의 호수 <br/><span className="text-lg font-medium opacity-90">(Blue Pond)</span></h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-4 py-6 overflow-x-auto no-scrollbar">
          <div className="min-w-[120px] bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <span className="material-symbols-outlined text-primary mb-2">schedule</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-display">관람 시간</p>
            <p className="text-sm font-bold">24시간 개방</p>
          </div>
          <div className="min-w-[120px] bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <span className="material-symbols-outlined text-primary mb-2">payments</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-display">입장료</p>
            <p className="text-sm font-bold">무료</p>
          </div>
          <div className="min-w-[120px] bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <span className="material-symbols-outlined text-primary mb-2">wb_sunny</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-display">추천 시기</p>
            <p className="text-sm font-bold">5월 - 6월</p>
          </div>
        </div>

        <section>
          <h2 className="text-[#1b0d11] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-4">소개</h2>
          <p className="text-[#1b0d11] dark:text-gray-300 text-base font-normal leading-relaxed pb-6 pt-2 px-4">
            신비로운 에메랄드 빛을 내는 비에이의 대표적인 명소입니다. 1988년 도카치다케 화산 분화 이후 재해를 막기 위해 만든 제방에 물이 고이며 우연히 생겨난 인공 호수입니다. 계절과 날씨, 햇빛의 각도에 따라 물의 색이 변하며, 호수 한가운데 말라버린 낙엽송들이 자아내는 몽환적인 분위기가 일품입니다.
          </p>
        </section>

        <section className="px-4 mb-8">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-[#1b0d11] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">위치 및 정보</h2>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-primary text-primary rounded-full text-xs font-bold active:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-sm">content_copy</span>
              주소 복사
            </button>
          </div>
          <div className="w-full h-64 bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden relative shadow-sm border border-gray-200 dark:border-zinc-800">
            <iframe
              title="Google Maps"
              allowFullScreen=""
              className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.375276226154!2d142.61036327664673!3d43.48927066318995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0cad9733d83151%3A0x868b8e2a3c74c10a!2sShirogane%20Blue%20Pond!5e0!3m2!1sen!2skr!4v1711111111111!5m2!1sen!2skr"
            ></iframe>
            <a
              className="absolute bottom-3 right-3 bg-white dark:bg-zinc-900 shadow-lg px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-bold border border-gray-100 dark:border-zinc-800 active:scale-95 transition-transform text-[#1b0d11] dark:text-white"
              href="https://maps.google.com/?q=Shirogane+Blue+Pond"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-sm text-primary">open_in_new</span>
              Google Maps에서 열기
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 px-1">
            <span className="material-symbols-outlined text-xs align-middle">location_on</span>
            홋카이도 가미카와군 비에이초 시로가네
          </p>
        </section>

        <section className="bg-white dark:bg-zinc-900 py-8 mb-4">
          <h2 className="text-[#1b0d11] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6">교통 정보</h2>
          <div className="px-4 space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">train</span>
                </div>
                <div className="w-0.5 h-full bg-gray-100 dark:bg-zinc-800 my-1"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="font-bold text-sm">JR 비에이역 도착</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-display">아사히카와역에서 약 35분 소요</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">directions_bus</span>
                </div>
                <div className="w-0.5 h-full bg-gray-100 dark:bg-zinc-800 my-1"></div>
              </div>
              <div className="flex-1 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-sm">도호쿠 버스 이용</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-display">39번, 42번 버스 (시로가네 온천행)</p>
                  </div>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded font-display">약 20분</span>
                </div>
                <div className="mt-2 bg-background-light dark:bg-background-dark p-3 rounded-lg border border-gray-100 dark:border-zinc-800">
                  <p className="text-xs font-semibold mb-1">정류장 명칭:</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">비에이역 앞 (Biei Station) → 시로가네 청의 호수 (Shirogane Blue Pond)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default AttractionDetails;
