import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const RestaurantList = () => {
  const categories = ['전체', '스프카레', '징기스칸', '스시', '라멘', '디저트'];

  const restaurants = [
    {
      id: 1,
      name: '가라쿠 (Garaku)',
      rating: 4.8,
      type: 'Soup Curry',
      description: '진한 육수의 원조 스프카레 전문점입니다.',
      location: '삿포로 시내, 스스키노 도보 5분',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB--OI4p9Cn4QWbTW_OoGQJzd_mpvIoySjN9Y2OGLEfTvpTbTll61dxt_4TQq4rzxJ02409UwvvlrqnuReTOXbx0TuGD8_MxBDuiFlgyWXl-32Wl6m4YMcRz4OyLZxQhZ5k0SCPIK9W63PW7ybsMr7xhUvP1_6y1ZUUG_lJqkM0YUlYknXjM9Q9XjX3Qv1DaHgwL2qD1VyM1LsjP4dgiT8VQmyHmFc33HfmbX59bDfO109pyhS2251bnXvuDrR4ShZYgzAsP4kQzU97'
    },
    {
      id: 2,
      name: '다루마 6.4 (Daruma)',
      rating: 4.6,
      type: 'Genghis Khan',
      description: '신선한 양고기를 화로에 구워먹는 삿포로 대표 맛집.',
      location: '스스키노 거리',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKaOBEzaIwT_faNFgY-buRdZBzgzTZQndkRblVxod2_aEZ7ZtBSZGpse8dHXQ4Oi6kEV6Y5ItLz46tu5BnxIyegxBlYGh5aAAjUw9Hdr2_r1Z3Ia4dBg_tHAoXqM_aH10FxVk2MGZ272aTKooAq0J13YOutY4ErsvgLl3ewin7-zuIV3HVj4yAdDGNDeCdm-SlQ3MHrHytUDdjCcOo3N3o5EcsvnX5z56DwIyAtt46XZsFZb-61AGURWY244KGgOA4Tr40VffspHSS'
    },
    {
      id: 3,
      name: '하나마루 (Hanamaru)',
      rating: 4.7,
      type: 'Sushi',
      description: '네무로 산지 직송 신선한 재료의 회전초밥.',
      location: 'JR 삿포로 역 스텔라 플레이스 6층',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6y1nTy7IBO-aWV3o573rKdzNN5_MkvsF2SzTmYJ1J-pIgKhh8bHo_f4jMLWe-tI24sAFojlNwvQ4hkt41as6yNAj95dz4sHlBlEpWInagUUFDXAZOZyYSwiMlTWxNNKij58PI7e2TR82fNNgJ9Hz101ckZ0M00Frd-I613fePLKr6Im_ZWZCouyhloiZadD9MdB201qPRf-8B9-wU6ewizl2cmaDLyUEL6ocFeBfRPsso508YLIeDWi9pibQ1u3sEM3Nx0S3y9ZcH'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-[#f8f6f6] min-h-screen">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link to="/" className="text-primary flex size-12 shrink-0 items-center">
            <span className="material-symbols-outlined text-3xl">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#1b0d11] dark:text-[#fcf8f9] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">삿포로 맛집 리스트</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-primary">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pb-32">
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
              <div className="text-primary flex border-none bg-white dark:bg-[#321a20] items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#1b0d11] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#321a20] h-full placeholder:text-[#9a4c5f] px-4 pl-2 text-base font-normal"
                placeholder="삿포로 맛집 검색..."
                defaultValue=""
              />
            </div>
          </label>
        </div>

        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <div
              key={cat}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 ${
                i === 0 ? 'bg-primary shadow-md' : 'bg-white dark:bg-[#321a20] border border-primary/10'
              }`}
            >
              <p className={`text-sm ${i === 0 ? 'text-white font-bold' : 'text-[#1b0d11] dark:text-[#fcf8f9] font-medium'}`}>
                {cat}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 pt-4">
          <h3 className="text-[#1b0d11] dark:text-[#fcf8f9] text-xl font-bold leading-tight tracking-tight">추천 맛집</h3>
          <span className="text-primary text-sm font-medium">전체보기</span>
        </div>

        <div className="space-y-6 p-4">
          {restaurants.map((res) => (
            <Link
              key={res.id}
              to={`/restaurants/${res.id}`}
              className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#2d161c]"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover relative"
                style={{ backgroundImage: `url("${res.image}")` }}
              >
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 backdrop-blur-sm p-2 rounded-full flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 p-5">
                <div className="flex justify-between items-start">
                  <p className="text-[#1b0d11] dark:text-[#fcf8f9] text-lg font-bold">{res.name}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-sm">{res.rating}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-primary text-sm font-bold uppercase tracking-wider font-display">{res.type}</p>
                  <p className="text-[#9a4c5f] dark:text-[#d1a3ad] text-base font-normal leading-normal">{res.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-sm text-[#9a4c5f]">location_on</span>
                  <p className="text-xs text-[#9a4c5f] dark:text-[#d1a3ad]">{res.location}</p>
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

export default RestaurantList;
