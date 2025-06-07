// ./src/components/ProductPrice.jsx
import React from 'react';
import './ProductPrice.css'

function ProductPrice({price}) {
    return (
        <div>
            <strong className='price m-price'>
                {price}<span>원</span>
            </strong>
        </div>
    );
}

export default ProductPrice;