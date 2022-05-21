import React from 'react';

function Info() {
    return (
        <div name="about" className='my-12 mt-64 md:mt-12 w-full'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='text-center'>
                    <h3 className=' text-4xl font-bold py-16'>Trusted by users all around the world</h3>
                    <p className=' text-2xl text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci commodi dolorem dicta perspiciatis voluptate neque </p>
                </div>
                <div className='my-4 grid md:grid-cols-3 gap-1 px-1 text-center '>
                    <div className='border rounded-xl shadow-lg py-8 mx-4 '>
                        <p className=' text-6xl text-blue-500 font'>100% </p>
                        <p className=' text-gray-500 '>Satisfied customers</p>
                    </div>
                    <div className='border rounded-xl shadow-lg py-8 mx-4'>
                        <p className=' text-6xl text-blue-500 font'>50k+</p>
                        <p className=' text-gray-500 '>Active users</p>
                    </div>
                    <div className='border rounded-xl shadow-lg py-8 mx-4'>
                        <p className=' text-6xl text-blue-500 font'>24/7</p>
                        <p className=' text-gray-500 '>Cutomer support</p>
                    </div>

                </div>
            </div>
        </div>);
}

export default Info;