import React from 'react';
import logo from '../assets/logo.svg';
import pc from '../assets/pc.svg';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-56 text-white p-6 flex flex-col items-center space-y-6 overflow-y-auto relative">
      {/* Logo with exact positioning */}
      <img
        src={logo}
        alt="Vayuz Logo"
        className="w-[130px] h-[30px] absolute top-[23px] left-[45px]"
      />

      {/* Contact Button with exact measurements and conic gradient border */}
      <div className="absolute top-[92px] left-[30px]">
        <div className="
          rounded-[56px]
          p-[1.5px]
          bg-[conic-gradient(from_90deg_at_50%_50%,_#07A7CD_0deg,_#FC0600_62.37deg,_#09D809_173.97deg,_#FF6600_255.65deg,_#F60163_290.5deg,_#07A7CD_360deg)]
        ">
          <button className="cursor-pointer
            w-full h-full
            bg-[#121212]
            rounded-[56px]
            flex items-center justify-center
            pt-[12px] pr-[30px] pb-[12px] pl-[30px]
            gap-[10px]
            text-white text-[16px] font-bold
            border-none
          ">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Menu Items - adjusted margin to account for absolute positioning */}
      <nav className="space-y-6 md:space-y-8 text-sm md:text-[15px] leading-[160%] tracking-normal w-full px-4 font-medium mt-[160px] md:mt-[180px]">
        <a href="#" className="block hover:text-pink-500">App Development</a>
        <a href="#" className="block hover:text-pink-500">Challenges</a>
        <a href="#" className="block hover:text-pink-500">Hire Developer</a>
        <a href="#" className="block hover:text-pink-500">Community</a>
      </nav>

      {/* Image Cards */}
      <div className="w-full mt-[26px] md:mt-[74px] rounded-lg overflow-hidden">
        <img
          src={pc}
          alt="Workspace"
          className="rounded-md mb-2 w-full h-auto"
        />
        <p className="text-sm md:text-[14px] text-gray-300 font-medium leading-[100%] tracking-normal py-2">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;