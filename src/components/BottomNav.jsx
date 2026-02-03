import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  const navItems = [
    { icon: 'home', label: '홈', to: '/' },
    { icon: 'restaurant', label: '맛집', to: '/restaurants' },
    { icon: 'landscape', label: '볼거리', to: '/attractions' },
    { icon: 'storefront', label: '편의점', to: '/convenience' },
    { icon: 'directions_bus', label: '교통', to: '/transportation' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-slate-100 dark:border-zinc-800 px-2 py-3 pb-8 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 w-1/5 transition-colors ${
              isActive ? 'text-primary' : 'text-slate-400 dark:text-zinc-500'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
              >
                {item.icon}
              </span>
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
