import React from 'react';
import traced from '../../../public/all-images/allah 1 (Traced).png';
import copyIcon from '../../../public/all-images/coppy.png';
import bookmarkIcon from '../../../public/all-images/bookmark (2).png';
import lightIcon from '../../../public/all-images/light.png';
import shareIcon from '../../../public/all-images/share 1.png';
import reportIcon from '../../../public/all-images/report 1.png';

import Image from 'next/image';
import AudioPlayer from './AudioPlayer';
import Tooltip from './Tooltip';

const DuaCard = ({ duaData }) => {
    const { dua_id, dua_name_en, top_en, dua_arabic, transliteration_en, translation_en, refference_en, audio } = duaData;
    return (
        <>
            {dua_arabic && <div className='  px-5 py-2 rounded-lg bg-white flex flex-col gap-3'>
                <div className='flex flex-row gap-2 items-center'>
                    <Image
                        src={traced}
                        alt="Picture of the author"
                        className='cursor-pointer'
                        width={30}
                        height={30}
                    />
                    <h1 className='text-[#1FA45B]'>
                        {dua_id} {dua_name_en}
                    </h1>
                </div>
                <div>
                    <h1 className='text-[#393939]'>
                        {top_en}
                    </h1>
                </div>
                <div>
                    <h1 className='text-[#393939] text-xl text-right'>
                        {dua_arabic}
                    </h1>
                </div>
                {transliteration_en && <div>
                    <h1 className='text-[#393939] text-base font-semibold'>
                        Transliteration: <span className='italic font-normal'>{transliteration_en}</span>
                    </h1>
                </div>}
                {translation_en && <div>
                    <h1 className='text-[#393939] text-base font-semibold'>
                        Transliteration: <span className=' font-normal'>{translation_en}</span>
                    </h1>
                </div>}

                <div>
                    <h1 className='text-[#1FA45B] '>
                        Reference:
                    </h1>
                    <h1 className='text-[#393939] '>
                        {refference_en}
                    </h1>

                </div>
                <div className='flex items-center justify-between'>

                    <AudioPlayer audioSrc={audio} />
                    <div className='flex items-center gap-5'>

                        <Tooltip tooltipText="Copy">
                            <Image
                                src={copyIcon}
                                alt="Picture of the author"
                                className='cursor-pointer'
                                width={25}
                                height={25}
                            />
                        </Tooltip>
                        <Tooltip tooltipText="Bookmark">
                            <Image
                                src={bookmarkIcon}
                                alt="Picture of the author"
                                className='cursor-pointer'
                                width={25}
                                height={25}
                            />
                        </Tooltip>
                        <Tooltip tooltipText="Memorize">
                            <Image
                                src={lightIcon}
                                alt="Picture of the author"
                                className='cursor-pointer'
                                width={25}
                                height={25}
                            />
                        </Tooltip>
                        <Tooltip tooltipText="Shear">
                            <Image
                                src={shareIcon}
                                alt="Picture of the author"
                                className='cursor-pointer'
                                width={25}
                                height={25}
                            />
                        </Tooltip>
                        <Tooltip tooltipText="Report">
                            <Image
                                src={reportIcon}
                                alt="Picture of the author"
                                className='cursor-pointer'
                                width={25}
                                height={25}
                            />
                        </Tooltip>

                    </div>
                </div>
            </div>}
        </>
    );
};

export default DuaCard;