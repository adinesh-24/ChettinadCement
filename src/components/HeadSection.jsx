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
            {!backgroundImage && <div className="bg-diagonal"></div>}

          
            {!backgroundImage && <div className="decoration-arrow-top"></div>}

       
            {!backgroundImage && <div className="decoration-arrow-bottom"></div>}


            <div className="container h-100 position-relative">
                <div className="row h-100 align-items-center">

                    <div className="col-md-6 text-section">
                        <h1 className="page-title">{title}</h1>
                        <nav className="breadcrumb-nav">
                            <span className="company-name">CHETTINAD CEMENT</span>
                            <span className="breadcrumb-arrow">&gt;</span>
                            <span className="page-name">{breadcrumbDetails.toUpperCase()}</span>
                        </nav>
                    </div>

                    <div className="col-md-6 position-relative h-50">
                    </div>

                </div>
            </div>

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
