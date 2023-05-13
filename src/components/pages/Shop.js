import React from 'react';
import ShopHeader from '../ShopHeader';
import ShopMerch from '../ShopMerch';
import ShopCart from '../ShopCart';
import FooterSec from '../FooterSec';


function Shop() {
    return (
        <>
        <ShopHeader />

        <div className='row'>
            <div className='col-md-9'>
                <ShopMerch />
            </div>
            <div className='col-md-3'>
                <ShopCart />
            </div>
        </div>

        <FooterSec />
        </>
    );
}
export default Shop;