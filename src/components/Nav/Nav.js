import React, { useState } from 'react';
import NavTop from '../NavTop/NavTop';
import Logo from '../../images/tap_logo-01.jpg';

const Nav = () => {
    const [isopen, setOpen] = useState(false)
    return (
        <div >
            <NavTop/>
            <div className='p-4 bg-gray-100 sticky top-0'>
                <nav className='container px-4 mx-auto flex flex-wrap items-center justify-between '>
                    <div className='flex flex-row items-center justify-between w-full lg:w-auto'>
                        <img className='w-12 rounded rounded-md' src={Logo} alt="" />
                        <button className="lg:hidden" onClick={() => { setOpen(!isopen) }}>Click</button>
                    </div>

                    <div className={'lg:flex ' + (isopen ? 'flex' : 'hidden')}>
                        <div className='flex-col lg:flex-row  flex lg:mt-0 mt-3'>
                            <a className='mr-5 font-w-700 py-1 font-medium hover:text-red-700' href="">Home</a>
                            <a className='mr-5 py-1 font-medium hover:text-red-700' href="#">Product</a>
                            <a className='mr-5 py-1 font-medium hover:text-red-700' href="#">Gallery</a>
                            <a className='mr-5 py-1 font-medium hover:text-red-700' href="#">About</a>
                            <a className='mr-5 py-1 font-medium hover:text-red-700' href="#">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;