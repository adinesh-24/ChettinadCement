import React from "react";
import HeadSection from "./HeadSection";

export default function TechMobileVan() {
    const bannerImage = "https://www.chettinadcement.com/wp-content/uploads/2024/08/chettinad-mobile-bus.png";
    const vanImage = "https://www.chettinadcement.com/wp-content/uploads/2024/08/chettinav-service-van-2048x1176.png";

    return (
        <div className="animate-fade-in-up">
            {/* Header Section */}
            <HeadSection
                title="Tech Mobile Van"
                breadcrumbDetails="Tech Mobile Van"
                imageSrc={bannerImage}
            />

            {/* Blue Section */}
            <div className="container-fluid py-5" style={{ backgroundColor: '#0b1c61', color: 'white' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <p className="lead" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Chettinad Cement is the first Cement company to launch a Customer-centric
                                Mobile testing laboratory services in India, which offers one-stop solution for
                                testing a variety of building materials and concrete at your door-step.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                It's a free value-added service that helps clients by offering technical support
                                to guarantee the quality of the material and constructions.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                Our knowledgeable engineering staff tests the materials on site before
                                recommending the best choice for construction to assure the durability of the
                                structures.
                            </p>
                        </div>
                        <div className="col-lg-6 text-center">
                            {/* Re-using the banner image bus part if possible or the whole thing. 
                                Since we don't have a separate bus image, we'll use the banner image again 
                                but it might look repetitive. However, the requirement is to use the provided images.
                                The prompt provided "chettinad-mobile-bus.png" and "chettinav-service-van...png". 
                                The first one is the bus+van combo used in banner. I will use it here too.
                            */}
                            <img
                                src={bannerImage}
                                alt="Mobile Testing Lab Bus"
                                className="img-fluid"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Green Section */}
            <div className="container-fluid py-5" style={{ backgroundColor: '#6cbd45', color: 'white' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1 text-center">
                            <img
                                src={vanImage}
                                alt="Technical Services Van"
                                className="img-fluid"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                            <p className="lead" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
                                With the assistance of our Technical Services Team, Customers can avail
                                various good construction practices advise along with Testing of different
                                building materials and Concrete at their site location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
