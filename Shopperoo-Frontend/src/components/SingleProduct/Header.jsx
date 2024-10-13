/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-16 py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-1.5 justify-center items-center text-4xl font-bold text-black whitespace-nowrap max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05944335d4c8ea27735c375aa3816d3f0f03f0b176bd0909049a018400cd773a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="Furniro logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.56] w-[50px]" />
            <div className="self-stretch my-auto">Furniro</div>
          </div>
        </div>
        <nav className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ul className="flex gap-10 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 self-stretch my-auto max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfd1560c89715dfbf18a1fa6f51d2f8a05e9335d38240a3cbb66eddf554516f1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 w-7 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f40e31db536e728e11f5ada2b2427ba4009bd0fff48c9a9ef7ce9aa538510c?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 w-7 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d439d946a8806089a93703c1944b8437cf17641d15b85e467d69766882603033?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 w-7 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f76559c7b760dbe45cac1c57eab4f5f50547c0967676dedaab2870fdc884f7?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 w-7 aspect-square" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;