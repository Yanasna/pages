// ./src/components/ProductName.jsx
import React from 'react';
import './productName.css'

function ProductName({productName}) {
    return (
        <div>
            <strong>{productName}</strong>
        </div>
    );
}

export default ProductName;