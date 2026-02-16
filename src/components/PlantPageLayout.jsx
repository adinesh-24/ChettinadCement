import React, { useEffect } from 'react';
import HeadSection from './HeadSection';
import { Link } from 'react-router-dom';

const PlantPageLayout = ({ stateName, plants, headImage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbDetails = stateName;

    const allLocations = [
        {
            name: "Tamil Nadu",
            link: "/plant/tamil-nadu",
            text: "Visit our cement manufacturing plant in Tamilnadu"
        },
        {
            name: "Andhra Pradesh",
            link: "/plant/andhra-pradesh",
            text: "Check out our cement unit in Andhra Pradesh"
        },
        {
            name: "Karnataka",
            link: "/plant/karnataka",
            text: "See our cement manufacturing plant in Karnataka"
        },
        {
            name: "Maharashtra",
            link: "/plant/maharashtra",
            text: "Discover our production facilities in Maharashtra"
        },
        {
            name: "Telangana",
            link: "/plant/telangana",
            text: "View our cement manufacturing industry in Telangana"
        }
    ];

    const otherLocations = allLocations.filter(loc => loc.name !== stateName);

    return (
        <div className="page-wrapper animate-fade-in-up">
            <HeadSection
                title={stateName}
                breadcrumbDetails={breadcrumbDetails}
                backgroundImage={headImage}
            />

            <div className="container my-5">
                {plants.map((plant, index) => (
                    <div key={index} className="mb-5">
                        <h2 className="mb-3" style={{ color: '#0a1f79', fontWeight: '600' }}>
                            {plant.title}
                        </h2>
                        <p className="mb-4 text-justify" style={{ color: '#555', fontSize: '1rem' }}>
                            {plant.description}
                        </p>

                        <div className="row g-4 justify-content-center">
                            {plant.images.map((imgSrc, imgIndex) => (
                                <div key={imgIndex} className={`${plant.images.length === 1 ? 'col-md-8 mx-auto' : 'col-md-4'}`}>
                                    <div className="plant-image-container h-100 shadow-sm rounded overflow-hidden">
                                        <img
                                            src={imgSrc}
                                            alt={`${plant.title} - ${imgIndex + 1}`}
                                            className="img-fluid w-100 h-100"
                                            style={{ objectFit: 'cover', minHeight: '250px' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {index < plants.length - 1 && <hr className="my-5" />}
                    </div>
                ))}

                <div className="mt-5 p-4 bg-light rounded">
                    <h3 className="mb-4" style={{ color: '#0a1f79' }}>Our Cement Plants Across India</h3>
                    <p className="mb-4">From sourcing the finest raw materials to producing high-performance cement, Chettinad Cement operates with precision, sustainability, and strength across every region we serve, building trust and transforming skylines nationwide.</p>
                    <div className="row">
                        {otherLocations.map((loc, idx) => (
                            <div key={idx} className="col-md-6 mb-2">
                                <Link to={loc.link} className="text-decoration-none d-flex align-items-center arrow-link" style={{ color: '#0a1f79', fontWeight: '500' }}>
                                    <span className="me-2">→</span>
                                    {loc.text}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantPageLayout;
