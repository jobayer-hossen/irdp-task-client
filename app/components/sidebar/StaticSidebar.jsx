import Image from 'next/image';
import React, { Children } from 'react';
import logo from '../../../public/all-images/logo.png';
import homeIcon from '../../../public/all-images/Home.png';
import allDuaIcon from '../../../public/all-images/All Duas.png';
import bookIcon from '../../../public/all-images/Book.png';
import bookmarkIcon from '../../../public/all-images/Bookmark.png';
import MemorizeIcon from '../../../public/all-images/Memorize.png';
import RuqyahIcon from '../../../public/all-images/Ruqyah.png';
import commentIcon from '../../../public/all-images/Dua Q&A.png';
import donateIcon from '../../../public/all-images/I want to support.png';

const StaticSidebar = () => {
    return (
        <>
            <div className='p-2 bg-white rounded-[10px] hidden lg:flex flex-col justify-between items-center'>
                <div>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className='cursor-pointer'
                        width={80}
                        height={80}
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <Image
                        src={homeIcon}
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        alt="Picture of the author"
                        width={35}
                        height={35}
                    />
                    <Image
                        src={allDuaIcon}
                        alt="Picture of the author"
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        width={35}
                        height={35}
                    />
                    <Image
                        src={MemorizeIcon}
                        alt="Picture of the author"
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        width={35}
                        height={35}
                    />
                    <Image
                        src={bookmarkIcon}
                        alt="Picture of the author"
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        width={35}
                        height={35}
                    />
                    <Image
                        src={RuqyahIcon}
                        alt="Picture of the author"
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        width={35}
                        height={35}
                    />
                    <Image
                        src={commentIcon}
                        alt="Picture of the author"
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        width={35}
                        height={35}
                    />
                    <Image
                        src={bookIcon}
                        alt="Picture of the author"
                        className='hover:scale-125 transition duration-500 cursor-pointer'
                        width={35}
                        height={35}
                    />
                </div>

                <div>
                    <Image
                        src={donateIcon}
                        alt="Picture of the author"
                        className='cursor-pointer'
                        width={80}
                        height={80}
                    />
                </div>
            </div>
        </>
    );
};

export default StaticSidebar;