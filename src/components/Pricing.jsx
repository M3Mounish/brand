import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

function Pricing() {
    return (
        <div name="pricing" className='w-full text-white my-12'>
            <div className='w-full h-[800px] absolute bg-slate-900 mix-blend-overlay'></div>

            <div className='max-w-[1280px] mx-auto py-8'>
                <div className='py-4 text-center text-slate-200'>
                    <h3 className='uppercase text-xl'>Pricing</h3>
                    <h2 className='text-white font-bold text-4xl py-4'>The right price for your cloud</h2>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed incidunt nesciunt tempore omnis sit quidem quas doloribus quo eius.</p>
                </div>

                <div className='grid md:grid-cols-3'>
                    <div className='bg-white text-slate-800 m-2 p-8 rounded-xl shadow-lg mt-12 relative'>
                        <span className=' bg-blue-300 text-blue-600 rounded-xl px-2 py-1 uppercase text-sm'>Personal</span>

                        <div>
                            <p className='text-3xl py-4 font-bold flex text-slate-800'>$29.9<span className='font-medium text-sm text-slate-600 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-lg py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, saepe?</p>

                        <div className='text-xl'>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-zinc-300' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-zinc-300' />Lorem ipsum dolor.</p>
                            <button className='py-2 w-full mt-8 hover:bg-white hover:text-blue-600'>Get Started!</button>
                        </div>
                    </div>

                    <div className='bg-white text-slate-800 m-2 p-8 rounded-xl shadow-lg mt-12 relative'>
                        <span className=' bg-blue-300 text-blue-600 rounded-xl px-2 py-1 uppercase text-sm'>Standard</span>

                        <div>
                            <p className='text-3xl py-4 font-bold flex text-slate-800'>$49.9<span className='font-medium text-sm text-slate-600 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-lg py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, saepe?</p>

                        <div className='text-xl'>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-zinc-300' />Lorem ipsum dolor.</p>
                            <button className='py-2 w-full mt-8 hover:bg-white hover:text-blue-600'>Get Started!</button>
                        </div>
                    </div>

                    <div className='bg-white text-slate-800 m-2 p-8 rounded-xl shadow-lg mt-12 relative'>
                        <span className=' bg-blue-300 text-blue-600 rounded-xl px-2 py-1 uppercase text-sm'>Enterprise</span>

                        <div>
                            <p className='text-3xl py-4 font-bold flex text-slate-800'>$99.9<span className='font-medium text-sm text-slate-600 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-lg py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, saepe?</p>

                        <div className='text-xl'>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-500' />Lorem ipsum dolor.</p>
                            <button className='py-2 w-full mt-8 hover:bg-white hover:text-blue-600'>Get Started!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;