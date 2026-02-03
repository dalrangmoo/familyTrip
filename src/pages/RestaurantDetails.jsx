import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const RestaurantDetails = () => {
  const [showToast, setShowToast] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText("北海道札幌市中央区南２条西２丁目６−1");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-white min-h-screen relative font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <div className="flex items-center p-4 justify-between">
          <Link to="/restaurants" className="text-[#1b0d11] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#1b0d11] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">맛집 상세</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center text-[#1b0d11] dark:text-white">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pb-32">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#fcf8f9] @[480px]:rounded-xl min-h-[350px] shadow-lg relative"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmdFRrBBfR9bISbptrIAaz0pTqXjB4VXtZaogWfMY_MXjipouQJPsC11g2186iptYY7pVNdUN-WHARoVQ37yNVoNTJ84Q8jKFgfUHxnu3JtLNinTuDqm4ypbTPk1UQl4CYM4Pq2EiHDTvFR8O5nkEQjD6e-8iJSFOhcv9K_ECA6fJXdgjjLYTY1NE2JmoGP7uui3VWJntaAsKTX-SbQhR2GUYchWCyheuDMokAfiUmWz7Hx-pDq1ynUTqE_lAQO7GDVcpkxH2FlhE0")' }}
            >
              <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-24">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">삿포로 명물</span>
                <h1 className="text-white text-3xl font-bold leading-tight">가라쿠 수프카레</h1>
                <p className="text-white/90 text-sm mt-1">Garaku Soup Curry (Sapporo Central)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-transparent px-4 py-6 justify-between border-b border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-[#1b0d11] dark:text-white text-xl font-bold font-display">4.8</p>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-0.5">(1,240+ 리뷰)</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">timer</span>
                대기 시간 보통: 30-40분
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <button className="text-primary text-sm font-bold bg-primary/5 px-5 py-2.5 rounded-xl border border-primary/20">리뷰 보기</button>
          </div>
        </div>

        <div className="px-4 py-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#1b0d11] dark:text-white text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              위치 및 정보
            </h3>
            <button
              onClick={copyAddress}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/40 text-primary text-xs font-bold hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
              주소 복사
            </button>
          </div>
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-md border border-gray-200 dark:border-white/10">
            <iframe
              title="Restaurant Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.0125439486034!2d141.3533967766023!3d43.06010537113658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29845d070001%3A0x7d67493a77641275!2zR2FyYWt1IFNvdXAgQ3Vycnk!5e0!3m2!1sen!2skr!4v1710000000000!5m2!1sen!2skr"
              className="w-full h-full border-0"
            >
            </iframe>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg h-fit">map</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#1b0d11] dark:text-white">주소</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed font-display">北海道札幌市中央区南２条西２丁目６−1</p>
                <a href="https://maps.google.com/?q=Garaku+Soup+Curry+Sapporo" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-primary mt-2">
                  <span className="text-xs font-bold underline">Google 지도에서 열기</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg h-fit">schedule</span>
              <div>
                <p className="text-sm font-bold text-[#1b0d11] dark:text-white">영업 시간</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-display">매일 11:30 - 21:00</p>
                <p className="text-xs text-gray-400 mt-1 font-medium italic">(브레이크타임 15:30 - 17:00)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-8 border-t border-gray-100 dark:border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#1b0d11] dark:text-white text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">restaurant_menu</span>
              대표 메뉴
            </h3>
            <button className="text-primary text-sm font-bold">전체보기</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
              <div className="size-24 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-100 dark:border-white/5">
                <img alt="치킨 수프카레" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe_W_vIa5LJsD4saq6IhswC_TInT6AJJPZqzH4yfGX11cdRag-_uAtEiyKgYw-8jcK0JPr8HxFzCklRYbIPHcAdBM_fYYB3EwC81cGEFaXT7ZL-Rnlu-mvSiBHW5rrJrh2pSq5NwDbBoJQhOqUkTEHNXiBPUUX3VTOlQuLLpGt6h_e3USmofkVWoZjAAuFYk93hme7F3CANwLhejoBvAJYh1aviHNqIxuoNs7yBSee--uvUz6j4w06eiEVvbXLXtTKp-3BgjhbPA-R"/>
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold text-[#1b0d11] dark:text-white leading-tight">야채와 치킨 수프카레</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">부드러운 닭다리와 신선한 홋카이도 계절 야채가 가득한 시그니처 메뉴</p>
                <p className="text-primary font-bold text-lg mt-2 font-display">¥1,200</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] w-[80%] max-w-[300px]">
          <div className="bg-primary text-white flex items-center justify-center gap-3 py-3 px-6 rounded-full shadow-lg border border-white/20">
            <span className="material-symbols-outlined text-xl">check_circle</span>
            <span className="text-sm font-bold tracking-tight">주소가 복사되었습니다</span>
          </div>
        </div>
      )}

      {showToast && <div className="fixed inset-0 bg-black/20 z-[90] pointer-events-none"></div>}

      <BottomNav />
    </div>
  );
};

export default RestaurantDetails;
