"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import introductionIcon from '../../../public/all-images/introduction.png';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import DuaCard from './DuaCard';

const DuaSection = () => {

    const [allCategory, setAllCategory] = useState();

    useEffect(() => {
        fetchAllCategory();
    }, []);

    const fetchAllCategory = async () => {
        try {
            const response = await axios.get('https://alive-stole-fish.cyclic.app/category');

            if (response.data) {
                setAllCategory(response.data);
            } else {
                console.error('No data received');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    // console.log(allCategory);



    const [duaByCat, setDuaByCat] = useState();

    const handleSetCatId = async (id) => {
        try {
            const response = await axios.get(`https://alive-stole-fish.cyclic.app/all_dua_cat/${id}`);

            if (response.data) {
                setDuaByCat(response.data);

                handleSetSubCatId(id)
            } else {
                console.error('No data received');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const [subCat, setSubCat] = useState();

    const handleSetSubCatId = async (id) => {
        try {
            const response = await axios.get(`https://alive-stole-fish.cyclic.app/sub_cat/${id}`);

            if (response.data) {
                setSubCat(response.data);
            } else {
                console.error('No data received');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleDuaBySubCat = async (id) => {
        try {
            const response = await axios.get(`https://alive-stole-fish.cyclic.app/all_dua_subcat/${id}`);

            if (response.data) {
                setDuaByCat(response.data);
            } else {
                console.error('No data received');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // console.log(subCat)


    return (
        <div className='ps-0 lg:ps-4 flex pt-2 gap-4 w-full'>
            <div className='w-80 bg-white rounded-lg overflow-auto'>
                <div className='sticky top-0' >
                    <div className='bg-[#1FA45B] p-3 rounded-t-lg sticky'>
                        <h1 className='text-center'>
                            Categories
                        </h1>
                    </div>
                    <div className='mt-3'>
                        <div className='px-2 '>
                            <div class="relative">
                                <input
                                    class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight outline-none"
                                    id="username"
                                    type="text"
                                    placeholder="Search by Categories"
                                />


                                <div class="absolute left-0 inset-y-0 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* all category */}
                <SimpleBar autoHide={false} style={{ height: '420px' }}>
                    <div className=''>

                        <div className=' flex flex-col gap-5 px-4 mt-2'>

                            <div onClick={() => handleSetCatId(1)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Duas Importance</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 7</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>21</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>
                            {subCat?.map((allSubCat, i) => <div key={i} onClick={() => handleDuaBySubCat(allSubCat?.subcat_id)} className='text-black cursor-pointer '>
                                {allSubCat?.subcat_name_en}
                            </div>)}
                            <div onClick={() => handleSetCatId(2)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Duas Excellence</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 1</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>15</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>
                            <div onClick={() => handleSetCatId(3)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Time of Dua</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 1</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>30</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>
                            <div onClick={() => handleSetCatId(4)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Dua Acceptance</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 1</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>14</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>
                            <div onClick={() => handleSetCatId(5)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Morning & Evening</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 3</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>53</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>
                            <div onClick={() => handleSetCatId(6)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Sleep</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 2</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>35</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>
                            <div onClick={() => handleSetCatId(7)} className='flex flex-row items-center p-2 bg-[#E8F0F5] gap-3 rounded cursor-pointer justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <Image
                                        src={introductionIcon}
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1 className='text-sm font-semibold text-[#1FA45B] '>Sleep</h1>
                                        <h1 className='text-xs text-[#7E7E7E] '>Subcategory: 1</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-sm font-bold text-black '>Cloths</h1>
                                    <h1 className='text-xs text-[#7E7E7E] '>Duas</h1>
                                </div>
                            </div>




                        </div>

                    </div>
                </SimpleBar>
            </div>


            <SimpleBar autoHide={false} style={{ height: '530px' }}>
                <div className='w-[300px] lg:w-[860px] flex flex-col gap-3'>
                    {
                        duaByCat?.map((duaData, i) =>
                            <DuaCard key={i} duaData={duaData} />
                        )
                    }
                </div>
            </SimpleBar>

        </div>
    );
};

export default DuaSection;