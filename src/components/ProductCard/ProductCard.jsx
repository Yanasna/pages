// ./src/components/ProductCard.jsx
import React, {useRef} from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductName from '../ProductName/ProductName';
import ProductPrice from '../ProductPrice/ProductPrice';
import './ProductCard.css'

function ProductCard({productName, price, thumbnailImg}) {
    const likeBtn = useRef();
    const handleLikeClick = e => e.currentTarget.classList.toggle('on');
    
    return (
        <li className='product-item'>
            <div className='product-img'>
                <ProductImage 
                    thumbnailImg = {thumbnailImg}
                    productName = {productName}
                />
            </div>
            <div>
                <ProductName productName={productName}/>
                <button className='like-btn' ref={likeBtn}
                onClick={handleLikeClick}></button>
            </div>
            <div><ProductPrice price={price}/></div>
        </li>
    );
}

export default ProductCard;