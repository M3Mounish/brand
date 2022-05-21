import React from 'react';
import { ChatIcon, ArrowSmRightIcon } from '@heroicons/react/solid';
import Img from "../assets/support.jpg";

function Support() {
    return (
        <div name="contact" className='w-full mt-24'>

            <div className=' w-full h-[700px] bg-gray-900/90 absolute'>
                <img className=' w-full h-full object-cover mix-blend-overlay' src={Img} alt="support" />
            </div>

            <div className='max-width-[1280px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h3 className=' text-xl  text-slate-200 text-center'>Support</h3>
                    <h2 className='text-3xl font-bold text-center py-4'>Our team would be glad to help you!</h2>
                    <p className='px-2 py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ratione perferendis culpa, voluptatum alias enim eos fugiat ab! Fuga delectus maxime totam neque nostrum necessitatibus quibusdam aliquid vitae blanditiis deserunt.</p>
                </div>

                <div className='grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 py-4 sm:pt-16 text-black'>

                    {/* no 1 */}
                    <div className=' bg-white border rounded-lg shadow-lg '>
                        <div className='p-6'>
                            <ChatIcon className='w-12 p-2 text-white bg-blue-500 rounded-md mt-[-3rem]' />
                            <p className='my-4 font-bold text-2xl'>Contact</p>
                            <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, adipisci?</p>
                        </div>
                        <div className='px-6 my-2'>
                            <p className='flex items-center text-blue-700'>Contact Us <ArrowSmRightIcon className='w-6' /></p>
                        </div>
                    </div>
                    {/* no 2 */}
                    <div className=' bg-white border rounded-lg shadow-lg '>
                        <div className='p-6'>
                            <ChatIcon className='w-12 p-2 text-white bg-blue-500 rounded-md mt-[-3rem]' />
                            <p className='my-4 font-bold text-2xl'>Contact</p>
                            <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, adipisci?</p>
                        </div>
                        <div className='px-6 my-2'>
                            <p className='flex items-center text-blue-700'>Contact Us <ArrowSmRightIcon className='w-6' /></p>
                        </div>
                    </div>

                    {/* no3 */}
                    <div className=' bg-white border rounded-lg shadow-lg '>
                        <div className='p-6'>
                            <ChatIcon className='w-12 p-2 text-white bg-blue-500 rounded-md mt-[-3rem]' />
                            <p className='my-4 font-bold text-2xl'>Contact</p>
                            <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, adipisci?</p>
                        </div>
                        <div className='px-6 my-2'>
                            <p className='flex items-center text-blue-700'>Contact Us <ArrowSmRightIcon className='w-6' /></p>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
}

export default Support;