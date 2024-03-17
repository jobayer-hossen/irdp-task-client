import React from 'react';
import StaticSidebar from '../sidebar/StaticSidebar';
import MainDuaSection from '../maintask/MainDuaSection';

const Layout = () => {
    return (
        <>
            <div className='h-screen fixed w-full flex gap-5  p-5 bg-[#E8F0F5]'>
                    <StaticSidebar />
                    <MainDuaSection />
            </div>

        </>

    );
};

export default Layout;