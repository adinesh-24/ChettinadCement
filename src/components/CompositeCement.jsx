import React from 'react';
import Products from './ProductsMain';
import { productsData } from './ProductData';

const CompositeCement = () => {
    return (
        <Products products={productsData} />
    );
};

export default CompositeCement;
