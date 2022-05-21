import React from 'react';
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full mt-12 px-4 py-4 bg-gray-800 text-gray-300'>
            <div className='max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 border-b-2 border-b-gray-600'>
                <div>
                    <h3 className='font-bold uppercase m-2 text-gray-50'>Products</h3>
                    <ul>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>thing</li>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Something</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold uppercase m-2 text-gray-50'>Products</h3>
                    <ul>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Some</li>
                        <li className='py-1 text-sm'>thing</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold uppercase m-2 text-gray-50'>Products</h3>
                    <ul>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>mething</li>
                        <li className='py-1 text-sm'>Something</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold uppercase m-2 text-gray-50'>Products</h3>
                    <ul>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Something</li>
                        <li className='py-1 text-sm'>Something</li>
                    </ul>
                </div>

                <div className=' col-span-2 pt-8 md:pt-2'>

                    <p className='uppercase py-4'>Subscribe to our newsletter!</p>
                    <form>
                        <input className='rounded-sm p-1 mr-2 md:w-full md:mb-2 text-gray-500' type="email" placeholder='enter your email' /><button className='rounded-sm p-1 md:m-auto hover:bg-transparent hover:text-blue-600'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='text-center'>
                <div className='flex flex-row justify-center mb-4'>
                    <FaInstagram className='mt-3 mx-3' />
                    <FaGithub className='mt-3 mx-3' />
                    <FaTwitter className='mt-3 mx-3' />
                </div>

                <p className='text-sm font-extralight'>2022 Brand,LLC. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;