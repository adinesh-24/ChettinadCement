import React from 'react';
import HeadSection from './HeadSection';
import visionImage from '../assets/vision.png';

export default function VisionMission() {
    return (
        <div className="animate-fade-in-up">
            <HeadSection
                title="Vision & Mission"
                breadcrumbDetails="Vision & Mission"
                imageSrc="" 
            />

            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 style={{ color: "#001f7d", fontWeight: "bold", marginBottom: "20px" }}>
                            Our Vision
                        </h2>
                        <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1rem", textAlign: "justify" }}>
                            At Chettinad Cement, our vision is to be a leader in the cement industry by driving innovation, sustainability, and excellence in all our operations. We aim to set new benchmarks in quality and performance, delivering products that meet the evolving needs of the construction sector. Our commitment to environmental stewardship and community development guides our efforts to minimize our ecological footprint and contribute to a better future. By fostering a culture of continuous improvement and customer-centricity, we strive to build enduring partnerships and empower our clients to create resilient, long-lasting structures. Together, we envision a world where our high-quality cement products play a pivotal role in shaping sustainable and thriving communities.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={visionImage}
                            alt="Our Vision"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
