import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {

    const [menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);

    return (
        <div className='w-screen h-[5rem] z-10 fixed bg-zinc-100 drop-shadow-md '>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h3 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</h3>
                    <ul className="hidden md:flex">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            <li>Home</li>
                        </Link>


                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>

                            <li>About</li>
                        </Link>

                        <Link to="pricing" spy={true} smooth={true} offset={-100} duration={500}>
                            <li>Pricing</li>
                        </Link>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                            <li className='pointer'>Contact Us</li>
                        </Link>

                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='bg-transparent border-none text-black'>Sign In</button>
                    <button className='px-6 py-4 m-2 hover:bg-transparent hover:text-blue-600'>Sign Up</button>
                </div>
                <div className='md:hidden'>
                    {menu ? <XIcon className='w-5' onClick={handleClick} /> : <MenuIcon className='w-5' onClick={handleClick} />}
                </div>

            </div>
            {menu && <ul className='md:hidden absolute bg-zinc-100 w-full px-6'>
                <li className='w-full border-b-2 border-zinc-200 '><Link onClick={handleClick} to="home" spy={true} smooth={true} offset={-100} duration={500}>
                    Home
                </Link></li>
                <li className='w-full border-b-2 border-zinc-200 '> <Link onClick={handleClick} to="about" spy={true} smooth={true} offset={-100} duration={500}>
                    About
                </Link></li>
                <li className='w-full border-b-2 border-zinc-200 '><Link onClick={handleClick} to="pricing" spy={true} smooth={true} offset={-100} duration={500}>
                    Pricing
                </Link></li>
                <li className='w-full border-b-2 border-zinc-200 '><Link onClick={handleClick} to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    Contact Us
                </Link></li>
                <div className='flex flex-col my-4 md:hidden '>
                    <button className='bg-transparent border-none text-black'>Sign In</button>
                    <button className='px-6 py-2 m-2'>Sign Up</button>
                </div>
            </ul>}

        </div>

    );
}

export default Navbar;