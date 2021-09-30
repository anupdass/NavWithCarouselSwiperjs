import React from 'react';

const NavTop = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <div className='py-2 flex-col lg:flex-row justify-items-center flex lg:justify-between items-center container mx-auto px-4'>
                <div className='flex flex-row '>
                    <p className='hidden lg:block mr-2 text-gray-400'>Have any question !</p>
                    <h5 className='mr-2 font-medium'>01458987889</h5>
                    <h5 className='mr-2 font-medium'>01458987889</h5>
                </div>
                <div>
                    <a href="" className='mr-2'>icon1</a>
                    <a href="" className='mr-2'>icon1</a>
                    <a href="" className='mr-2'>icon1</a>
                    <a href="" className='mr-2'>icon1</a>
                </div>
            </div>
        </div>
    );
};

export default NavTop;