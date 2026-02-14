import React from 'react';
import Products from './ProductsMain';
import { productsData } from './ProductData';

const HollowBlockCement = () => {
    return (
        <Products products={productsData} />
    );
};

export default HollowBlockCement;
