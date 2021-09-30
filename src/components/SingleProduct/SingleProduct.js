import React from 'react';
import './SimgleProduct.css'

const SingleProduct = (props) => {
    const { name, title, discription, img } = props.pd;
    return (
        <div className='bg-yellow-200 lg:mt-3  mt-7 rounded-md p-3 overflow-hidden cursor-pointer custom'>
            <img src={img} className='w-full rounded-md ' alt="" />
            <div className='overflow-hidden'>
                <h1>{name}</h1>
                <p>{title}</p>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default SingleProduct;