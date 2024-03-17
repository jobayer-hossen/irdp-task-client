"use client"
import React, { useState } from 'react';
import userPhoto from '../../../public/all-images/profile 1.png';
import Image from 'next/image';
import { ImCross } from "react-icons/im";
import allDuaIcon from '../../../public/all-images/All Duas.png';
import logo from '../../../public/all-images/logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleNav2 = () => {
    setNav(false);
  };

  return (

    <>
      <div className='py-0 w-full mx-auto px-0 md:px-4 text-black bg-white lg:bg-inherit '>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='block lg:hidden'>
              <Image
                src={logo}
                alt="Picture of the author"
                className='cursor-pointer'
                width={80}
                height={80}
              />
            </div>

            <h1 className=' text-lg font-bold text-black'>Dua Page</h1>
          </div>

          <div className='flex justify-end'>
            <div className='hidden md:flex pr-10'>
              <div className='w-64'>
                <div className="relative">
                  <input
                    type="text"
                    id="Search"
                    placeholder="Search by Dua Name"
                    className="w-full rounded-md border-[#868686] py-2.5 pe-10 shadow-sm sm:text-sm ps-2 border outline-none text-black"
                  />

                  <span className="absolute inset-y-1 end-1 grid w-10 bg-[#F3F4F6] place-content-center rounded-md">
                    <button type="button" className="text-gray-600 hover:text-gray-700">
                      <span className="sr-only">Search</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className='w-14' onClick={handleNav} >
              <Image
                src={userPhoto}
                alt="Picture of the author"
                className='cursor-pointer'
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        {/* right side option */}
        <div>
          <div
            className={
              nav
                ? 'fixed right-0 top-0 w-[60%] md:w-[25%] h-full bg-white ease-in-out duration-700 pt-10 rounded-s-[10px] px-5 z-10'
                : 'ease-in-out flex flex-col items-center w-[30%] pt-10 duration-700 fixed top-0 bottom-0 right-[-100%] px-5 z-10'
            }
          >
            <div onClick={handleNav2} className='flex justify-center cursor-pointer'>
              <ImCross />
            </div>
            {/* Mobile Logo */}
            <div className='mt-5'>
              <h1 className='w-full text-lg text-center font-bold '>Setting</h1>

              <div className='flex flex-col gap-4 py-5'>
                <div className='flex flex-row items-center p-2 bg-[#F7F8FA] gap-3 rounded'>
                  <Image
                    src={allDuaIcon}
                    alt="Picture of the author"
                    className='hover:scale-125 transition duration-500 cursor-pointer'
                    width={35}
                    height={35}
                  />
                  <h1 className='text-[#868686] '>General Settings</h1>
                </div>
                <div className='flex flex-row items-center p-2 bg-[#F7F8FA] gap-3 rounded'>
                  <Image
                    src={allDuaIcon}
                    alt="Picture of the author"
                    className='hover:scale-125 transition duration-500 cursor-pointer'
                    width={35}
                    height={35}
                  />
                  <h1 className='text-[#868686] '>General Settings</h1>
                </div>
                <div className='flex flex-row items-center p-2 bg-[#F7F8FA] gap-3 rounded'>
                  <Image
                    src={allDuaIcon}
                    alt="Picture of the author"
                    className='hover:scale-125 transition duration-500 cursor-pointer'
                    width={35}
                    height={35}
                  />
                  <h1 className='text-[#868686] '>General Settings</h1>
                </div>
                <div className='flex flex-row items-center p-2 bg-[#F7F8FA] gap-3 rounded'>
                  <Image
                    src={allDuaIcon}
                    alt="Picture of the author"
                    className='hover:scale-125 transition duration-500 cursor-pointer'
                    width={35}
                    height={35}
                  />
                  <h1 className='text-[#868686] '>General Settings</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NavBar;