// ./src/pages/HomePage/HomePage.jsx
import React from 'react';
import {data} from '../../database/data'
import ProductCard from '../../components/ProductCard/ProductCard';
import './homePage.css'

function HomePage() {
    return (
        <div>
            <main className='product'>
                <h1>장르를 선택하세요!</h1>
            </main>
                <ul className='product-list'>
                    {data.map(item=><ProductCard 
                            key={item.id} 
                            productName={item.productName} 
                            price={item.price}
                            thumbnailImg={item.thumbnailImg}
                    />)}
                </ul>
        </div>
    );
}

export default HomePage;