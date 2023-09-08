// eslint-disable-next-line no-unused-vars
import React from 'react';
import SideNav from '../components/Nav/SideNav';
import { Outlet } from 'react-router-dom';
import MainNav from '../components/Nav/MainNav';

const MainLayout = () => {
    return (
        <div className='bg-body-black text-white'>
            <main className='container mx-auto px-4 py-20'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-12 relative'>

                <div className='h-fit md:sticky md:top-0 col-span-12 md:col-span-3 border-2 border-nav-blue rounded-lg'>
                <SideNav></SideNav>
                </div>
                <div className='col-span-12 md:col-span-9 border-2 border-nav-blue rounded-lg'>
                  
               
                    <MainNav></MainNav>
                    
                  
                    <Outlet></Outlet>

                </div>
                

            </div>
        </main>
        </div>
    );
};

export default MainLayout;