import React from 'react';
import {
    CloudUploadIcon,
    ShieldCheckIcon,
    CurrencyDollarIcon
} from '@heroicons/react/solid';
import Cloud from '../assets/Laptop.png'

function Start() {
    return (
        <div name="home" className='w-full h-screen bg-zinc-100 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center mt-12 md:m-0 md:items-start w-full px-4 py-8'>
                    {/* <DatabaseIcon className='w-36' /> */}
                    <h3 className='text-xl '>A Cloud for You!</h3>
                    <p className='font-bold text-4xl md:5xl'>BRAND</p>

                    <p className='pb-4 pt-2'>A fast and secure cloud storage with offers the world has never seen</p>

                    <button className='py-2 px-2 sm:w-[50%] hover:bg-transparent hover:text-blue-600'>Get started</button>
                </div>
                <div>
                    <img src={Cloud} alt="cloud" className='w-full lg:w-[80%] ' />
                </div>
                <div className='absolute flex flex-col py-6 md:min-w-[960px] bottom-[-50%] md:bottom-0
                mx-1 md:left-1/2 transform md:-translate-x-1/2  bg-zinc-100 text-center 
                 rounded-xl drop-shadow-md'>
                    <h3>Features</h3>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-1 py-2 text-slate-600'><ShieldCheckIcon className='h-6  text-blue-600 ' />Totally secure</p>
                        <p className='flex px-1 py-2 text-slate-600'><CloudUploadIcon className='h-6  text-blue-600 ' />Quick data transfer</p>
                        <p className='flex px-1 py-2 text-slate-600'><CurrencyDollarIcon className='h-6  text-blue-600 ' />100% money back guarantee</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Start;