import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {

    const pdoducts = [
        {
            name:'product',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sqCoATjBWh3OO1sPxvTrVbkPAhUN9GFsSrGi_IorWSutx2tUP_J7BtnRpF6M1TSuKk&usqp=CAU',
            title:'product',
            discription:'lorem adflk asdf lsfjasdfl dfkljasdkl sdklfj '

        },
        {
            name:'product',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sqCoATjBWh3OO1sPxvTrVbkPAhUN9GFsSrGi_IorWSutx2tUP_J7BtnRpF6M1TSuKk&usqp=CAU',
            title:'product',
            discription:'lorem adflk asdf lsfjasdfl dfkljasdkl sdklfj '

        },
        {
            name:'product',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sqCoATjBWh3OO1sPxvTrVbkPAhUN9GFsSrGi_IorWSutx2tUP_J7BtnRpF6M1TSuKk&usqp=CAU',
            title:'product',
            discription:'lorem adflk asdf lsfjasdfl dfkljasdkl sdklfj '

        },
        {
            name:'product',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sqCoATjBWh3OO1sPxvTrVbkPAhUN9GFsSrGi_IorWSutx2tUP_J7BtnRpF6M1TSuKk&usqp=CAU',
            title:'product',
            discription:'lorem adflk asdf lsfjasdfl dfkljasdkl sdklfj '

        },
        {
            name:'product',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sqCoATjBWh3OO1sPxvTrVbkPAhUN9GFsSrGi_IorWSutx2tUP_J7BtnRpF6M1TSuKk&usqp=CAU',
            title:'product',
            discription:'lorem adflk asdf lsfjasdfl dfkljasdkl sdklfj '

        },
        {
            name:'product',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sqCoATjBWh3OO1sPxvTrVbkPAhUN9GFsSrGi_IorWSutx2tUP_J7BtnRpF6M1TSuKk&usqp=CAU',
            title:'product',
            discription:'lorem adflk asdf lsfjasdfl dfkljasdkl sdklfj '

        },
    ]

    return (
        <div className='md:grid md:grid-cols-4 gap-4 container mx-auto mt-10 mb-3'>
            <div>
                <h1 className='font-medium text-4xl mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            <div className='md:col-span-3 md:grid md:grid-cols-3 gap-3'>
                {
                    pdoducts.map(pd => <SingleProduct pd = {pd}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Product;