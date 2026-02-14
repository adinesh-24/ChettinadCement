import React from 'react';
import './HeadSection.css';

const HeadSection = ({ title, breadcrumbDetails, imageSrc, backgroundImage }) => {
    return (
        <div
            className="head-section-container"
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : {}}
        >
            {/* Background Layer */}
            {!backgroundImage && <div className="bg-diagonal"></div>}

            {/* Geometric Shapes */}
            {/* Top Blue */}
            {!backgroundImage && <div className="decoration-arrow-top"></div>}

            {/* Bottom Green */}
            {!backgroundImage && <div className="decoration-arrow-bottom"></div>}

            {/* Main Content */}
            <div className="container h-100 position-relative">
                <div className="row h-100 align-items-center">

                    {/* Left Side: Text */}
                    <div className="col-md-6 text-section">
                        <h1 className="page-title">{title}</h1>
                        <nav className="breadcrumb-nav">
                            <span className="company-name">CHETTINAD CEMENT</span>
                            <span className="breadcrumb-arrow">&gt;</span>
                            <span className="page-name">{breadcrumbDetails.toUpperCase()}</span>
                        </nav>
                    </div>

                    {/* Right Side: Image comes from absolute positioning in CSS, but included here for semantic if needed or just div anchor */}
                    <div className="col-md-6 position-relative h-50">
                        {/* Image handled via absolute positioning to break out of grid if needed, or inside here */}
                    </div>

                </div>
            </div>

            {/* Support Image (Absolute positioned relative to container) */}
            <div className="support-image-container d-none d-lg-block">
                {imageSrc && !backgroundImage && (
                    <img
                        src={imageSrc}
                        alt="Page Graphic"
                        className="support-image"
                    />
                )}
            </div>
        </div>
    );
};

export default HeadSection;
