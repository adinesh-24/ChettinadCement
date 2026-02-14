import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Products.css';
import HeadSection from './HeadSection';

const Products = ({ products }) => {
    const location = useLocation();

    // Default mock logic same as before...
    const defaultProducts = []; // (Omitted for brevity, data comes from props usually)
    const dataToUse = products && products.length > 0 ? products : defaultProducts;

    // Safety check
    if (!dataToUse || dataToUse.length === 0) return <div>No products available</div>;

    // Find active product based on current path, or default to the first one
    const activeProduct = dataToUse.find(p => p.path === location.pathname) || dataToUse[0];

    const [loading, setLoading] = useState(false);

    // Effect to trigger loading spinner on route change
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [location.pathname]); // Re-run when path changes

    return (
        <div className="products-page-wrapper animate-fade-in-up">
            {/* 1. Header Section using the shared component */}
            <HeadSection
                title={activeProduct.title}
                breadcrumbDetails={`PRODUCTS > ${activeProduct.name}`}
                backgroundImage={activeProduct.headerImg}
            />

            <div className="products-container">
                <div className="container">
                    <div className="row">
                        {/* Left Sidebar */}
                        <div className="col-md-3">
                            <div className="products-sidebar">
                                <h3 className="sidebar-title">Other Products</h3>
                                <ul className="product-list">
                                    {dataToUse.map((product) => (
                                        <li key={product.id}>
                                            <Link
                                                to={product.path}
                                                className={`product-item d-block text-decoration-none ${activeProduct.id === product.id ? 'active' : ''}`}
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-md-9">
                            {loading ? (
                                <div className="spinner-container">
                                    <div className="spinner-green"></div>
                                </div>
                            ) : (
                                <div className="product-content">

                                    {/* 2. Banner Image Section */}
                                    <div className="product-highlight-banner p-0 " style={{ background: 'none', border: 'none' }}>
                                        {activeProduct.bannerImg ? (
                                            <img
                                                src={activeProduct.bannerImg}
                                                alt={activeProduct.title}
                                                className="w-100 h-auto rounded"
                                            />
                                        ) : (
                                            /* Fallback if no banner image exists, purely for layout stability */
                                            <div className="bg-light p-5 text-center">
                                                <img src={activeProduct.img} alt={activeProduct.name} style={{ maxHeight: '200px' }} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Description (Moved Text here if needed, or keep below) */}
                                    <div className="product-description-text mt-1 mb-4">
                                        {activeProduct.description}
                                    </div>

                                    {/* Buttons Container */}
                                    <div className="d-flex flex-column align-items-start gap-3 mb-5">
                                        <a href="#" className="download-btn-green">
                                            <span className="me-2 fs-4">↓</span>
                                            DOWNLOAD BROCHURE
                                        </a>
                                    </div>

                                    <hr className="my-5" style={{ opacity: 0.1 }} />

                                    {/* Advantages & Applications */}
                                    {activeProduct.advantages && (
                                        <div className="mb-5">
                                            <h3 className="section-heading-green">{activeProduct.name.split(' ')[0]} <span>Advantages</span></h3>
                                            <ul className="custom-list">
                                                {activeProduct.advantages.map((adv, index) => (
                                                    <li key={index}>{adv}</li>
                                                ))}
                                            </ul>

                                            {/* Product Diagram Image */}
                                            {activeProduct.img && (
                                                <div className="mt-4 text-center">
                                                    <img
                                                        src={activeProduct.img}
                                                        alt={`${activeProduct.name} Details`}
                                                        className="img-fluid w-100 rounded shadow-sm"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {activeProduct.applications && (
                                        <div className="mb-5">
                                            <h3 className="section-heading-green">{activeProduct.name.split(' ')[0]} <span>Applications</span></h3>
                                            <ul className="custom-list">
                                                {activeProduct.applications.map((app, index) => (
                                                    <li key={index}>{app}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;