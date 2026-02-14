import React from 'react';
import Products from './ProductsMain';
import { productsData } from './ProductData';

const ClassicSlagCement = () => {
    return (
        <Products products={productsData} />
    );
};

export default ClassicSlagCement;
