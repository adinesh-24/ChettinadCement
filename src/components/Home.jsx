import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videobg from "../assets/cementvideo.mp4";

import fogoverlay from "../assets/cementfog.jpeg";
import finalcement from "../assets/finalcement.jpg";

import factoryView from "../assets/factory_view.png";
import qualityIcon from "../assets/quality_assurance.png";
import envIcon from "../assets/environmental_commitment.png";
import innovIcon from "../assets/innovative_manufacturing.png";
import customerIcon from "../assets/customer_centric.png";

import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.jpg";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.png";
import client7 from "../assets/clients/client7.png";

const row1Clients = [
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/1.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/2.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/3.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/4.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/5.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/6.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/7.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/8.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/9.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/10.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/11.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/12.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/13.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/15.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/16.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/17.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/18.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/19.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/20.jpg"
];

const row2Clients = [
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/22.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/23.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/24.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/25.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/ITC.png",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/27.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/28.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/29.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/30.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/31.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/32.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/33.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/34.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/35.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/36.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/37.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/38.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/39.jpg",
    "https://www.chettinadcement.com/wp-content/uploads/2024/07/40.jpg"
];

export default function Home() {
    const [stage, setStage] = useState("video");

    useEffect(() => {
        if (stage === "fog") {
            const timer = setTimeout(() => {
                setStage("final");
            }, 3000); 
            return () => clearTimeout(timer);
        }
    }, [stage]);

    const useCounter = (end, duration = 2000) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }, [end, duration]);
        return count;
    };

    const yearsCount = useCounter(64);
    const unitsCount = useCounter(7);
    const teamCount = useCounter(1640);

    return (
        <div style={{ width: "100%", overflowX: "hidden" }} className="animate-fade-in-up">
            <div style={{ width: "100%", height: "85vh", position: "relative", overflow: "hidden", backgroundColor: '#000' }}>

                <div style={{ position: 'absolute', inset: 0, opacity: stage === 'video' ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                    <video
                        src={videobg}
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setStage("fog")}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                <div style={{ position: 'absolute', inset: 0, opacity: stage === 'fog' ? 1 : 0, transition: 'opacity 1s ease-in-out', pointerEvents: 'none' }}>
                    <img
                        src={fogoverlay}
                        alt="fog"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                <div style={{ position: 'absolute', inset: 0, opacity: stage === 'final' ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                    <img
                        src={finalcement}
                        alt="final"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(10, 31, 121, 0.95)', 
                    padding: '20px 0',
                    zIndex: 10 
                }} className="animate-fade-in-up">
                    <div className="container">
                        <div className="row text-center align-items-center">
                            <div className="col-md-3 border-end border-secondary">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>{yearsCount}</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>Years In The Business</small>
                            </div>
                            <div className="col-md-3 border-end border-secondary">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>16.84 MTPA</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>Production Capacity</small>
                            </div>
                            <div className="col-md-3 border-end border-secondary">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>{unitsCount}</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>State Of The Art Manufacturing Units</small>
                            </div>
                            <div className="col-md-3">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>{teamCount.toLocaleString()}+</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>Team Members</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#fff", padding: "80px 0" }}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img
                                src={factoryView}
                                alt="Chettinad Factory"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <h2 className="fw-bold mb-4" style={{ color: "#001f7d", fontSize: "2.5rem" }}>
                                Your Partner in Success and Growth
                            </h2>
                            <p className="text-secondary mb-4" style={{ lineHeight: "1.8", fontSize: "1rem" }}>
                                Chettinad Cement is a prominent cement brand known for its high-quality products.
                                Established in 1962, it offers a range of cement types catering to various construction needs.
                                Renowned for its superior strength and durability, Chettinad Cement ensures long-lasting structures.
                                Its production process follows stringent quality control measures. Trusted by Millions of satisfied Customers,
                                Chettinad Cement stands as a symbol of excellence in the Construction industry and is recognized as the best cement brand in India.
                            </p>
                            <button className="btn btn-primary px-4 py-2" style={{ backgroundColor: '#0a1f79', borderColor: '#0a1f79' }}>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "#0a1f79", padding: "50px 0" }}>
                <div className="container">
                    <h2 className="text-center fw-bold m-0 text-white" style={{ fontSize: "2.5rem" }}>
                        Why <span style={{ color: "#6cbd45" }}>Chettinad Cement</span>
                    </h2>
                </div>
            </div>

            <div style={{ backgroundColor: "#fff", padding: "80px 0" }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="card h-100 border-0 text-center p-4 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
                                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px', padding: '15px' }}>
                                    <img src={qualityIcon} alt="Quality" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-3" style={{ color: "#0a1f79" }}>Quality Assurance</h5>
                                <p className="text-muted small" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                                    Chettinad Cement Corporation Private Limited stands as a hallmark of quality with certifications in IS/ISO 9001:2015, IS/ISO 14001:2015, IS 45001:2018, and IS/ISO 50001:2018. These credentials reflect our unwavering commitment to excellence in quality management, environmental sustainability, occupational health and safety, and energy efficiency.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card h-100 border-0 text-center p-4 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
                                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px', padding: '15px' }}>
                                    <img src={envIcon} alt="Environment" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-3" style={{ color: "#0a1f79" }}>Environmental Commitment</h5>
                                <p className="text-muted small" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                                    Chettinad Cement is dedicated to environmental stewardship, implementing eco-friendly practices across all operations. Our initiatives include reducing carbon emissions, conserving natural resources, and promoting sustainability. With certifications like IS/ISO 14001:2015, we ensure our processes meet the highest environmental standards.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card h-100 border-0 text-center p-4 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
                                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px', padding: '15px' }}>
                                    <img src={innovIcon} alt="Innovation" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-3" style={{ color: "#0a1f79" }}>Innovative Manufacturing</h5>
                                <p className="text-muted small" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                                    Chettinad Cement Corporation Private Limited leads the industry with innovative manufacturing processes that set new standards. Utilizing cutting-edge technology and sustainable practices, we deliver superior quality cement for all your construction needs. Our commitment to innovation ensures consistent excellence and environmental responsibility.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card h-100 border-0 text-center p-4 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
                                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px', padding: '15px' }}>
                                    <img src={customerIcon} alt="Customer" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-3" style={{ color: "#0a1f79" }}>Customer-Centric Approach</h5>
                                <p className="text-muted small" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                                    Chettinad Cement Corporation Private Limited prioritizes customer satisfaction with a dedicated, customer-centric approach. We offer tailored solutions, exceptional service, and consistent quality to meet your needs. Our commitment to excellence ensures every project is a success. Experience the difference with Chettinad Cement, where customers come first.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div style={{ width: "100%", height: "85vh", position: "relative", overflow: "hidden", backgroundColor: '#000' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: '#0a1f79',
                    padding: '15px 0',
                    textAlign: 'center',
                    zIndex: 20
                }}>
                    <h2 className="fw-bold m-0 text-white" style={{ fontSize: "2rem" }}>
                        Building <span style={{ color: "#6cbd45" }}>Excellence</span>
                    </h2>
                </div>

                <div style={{ position: 'absolute', inset: 0 }}>
                    <video
                        src="https://chettinadplants.s3.ap-south-1.amazonaws.com/Videos/Chettinad-homepage.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(10, 31, 121, 0.95)', 
                    color: 'white',
                    padding: '20px 0',
                    zIndex: 10 
                }} className="animate-fade-in-up">
                    <div className="container">
                        <div className="row text-center align-items-center">
                            <div className="col-md-3 border-end border-secondary">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>{yearsCount}</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>Years In The Business</small>
                            </div>
                            <div className="col-md-3 border-end border-secondary">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>16.84 MTPA</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>Production Capacity</small>
                            </div>
                            <div className="col-md-3 border-end border-secondary">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>{unitsCount}</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>State Of The Art Manufacturing Units</small>
                            </div>
                            <div className="col-md-3">
                                <h2 className="fw-bold mb-0" style={{ color: '#6cbd45' }}>{teamCount.toLocaleString()}+</h2>
                                <small className="text-uppercase" style={{ fontSize: '0.8rem' }}>Team Members</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: "#0a1f79", fontSize: "2.5rem" }}>Your Experiences, Our Pride</h2>
                        <p className="text-muted">Hear from our satisfied Clients</p>
                    </div>

                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={2}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={5000}
                        arrows={false}
                        responsive={[
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]}
                    >
                        <div className="p-3">
                            <div className="card border-0 shadow-sm p-4 h-100" style={{ borderRadius: "10px" }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}>
                                        RK
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="fw-bold mb-0" style={{ color: "#0a1f79" }}>Rajesh Kumar</h5>
                                        <small className="text-muted">Chennai, Tamil Nadu</small>
                                    </div>
                                </div>
                                <p className="text-secondary small" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
                                    "I have been using Chettinad Cement for all my construction projects for the past five years. The quality and consistency of their products are unmatched. My clients have always appreciated the durability and finish of the structures built with Chettinad Cement. Today I can confidently say that Chettinad Cement is Best."
                                </p>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="card border-0 shadow-sm p-4 h-100" style={{ borderRadius: "10px" }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}>
                                        PN
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="fw-bold mb-0" style={{ color: "#0a1f79" }}>Priya Nair</h5>
                                        <small className="text-muted">Kochi, Kerala</small>
                                    </div>
                                </div>
                                <p className="text-secondary small" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
                                    "As an architect, I am very particular about the materials I use for my projects. Chettinad Cement has always exceeded my expectations. The strength and reliability of their cement ensure that my designs stand the test of time. I highly recommend Chettinad Cement to anyone looking for top-quality construction materials."
                                </p>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="card border-0 shadow-sm p-4 h-100" style={{ borderRadius: "10px" }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}>
                                        AS
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="fw-bold mb-0" style={{ color: "#0a1f79" }}>Anitha S</h5>
                                        <small className="text-muted">Bangalore, Karnataka</small>
                                    </div>
                                </div>
                                <p className="text-secondary small" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
                                    "Build quality is paramount for our luxury villa projects. We switched to Chettinad Cement two years ago and haven't looked back. The concrete finish is superior."
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div style={{ paddingBottom: "50px" }}>
                <div style={{ backgroundColor: "#0a1f79", padding: "40px 0", marginBottom: "50px" }}>
                    <div className="container text-center">
                        <h2 className="fw-bold m-0" style={{ fontSize: "2.5rem", color: "white" }}>
                            Latest <span style={{ color: "#6cbd45" }}>News & Blog</span>
                        </h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ backgroundColor: "#0a1f79", borderRadius: "10px" }}>
                                <img
                                    src="https://www.chettinadcement.com/wp-content/uploads/2026/01/best_cement_for_concrete-1.jpg"
                                    className="card-img-top"
                                    alt="Best Cement for Concrete"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-white p-4">
                                    <h5 className="card-title fw-bold mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                                        Which Cement Is Best for Concrete? A Complete Guide to Using Supergrade Concrete for Stronger Construction
                                    </h5>
                                    <p className="card-text small opacity-75" style={{ lineHeight: "1.6" }}>
                                        Concrete quality defines the strength, safety, and lifespan of any structure. Whether...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ backgroundColor: "#0a1f79", borderRadius: "10px" }}>
                                <img
                                    src="https://www.chettinadcement.com/wp-content/uploads/2025/12/wholesale-cement-near-me.jpg"
                                    className="card-img-top"
                                    alt="Wholesale Cement Supplier"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-white p-4">
                                    <h5 className="card-title fw-bold mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                                        Which Supplier Offers the Most Reliable Wholesale Cement Near Me?
                                    </h5>
                                    <p className="card-text small opacity-75" style={{ lineHeight: "1.6" }}>
                                        Finding a reliable wholesale cement supplier near you is one of the...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ backgroundColor: "#0a1f79", borderRadius: "10px" }}>
                                <img
                                    src="https://www.chettinadcement.com/wp-content/uploads/2025/11/Best_cement_for_concrete_work.jpeg"
                                    className="card-img-top"
                                    alt="Best Cement for Concrete Work"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-white p-4">
                                    <h5 className="card-title fw-bold mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                                        Best Cement for Concrete Work: Expert Guide to Choosing the Right Cement for Every Projects
                                    </h5>
                                    <p className="card-text small opacity-75" style={{ lineHeight: "1.6" }}>
                                        When it comes to concrete work, the choice of cement is the...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#ffffff", paddingBottom: "50px", overflow: 'hidden' }}>
                <div style={{ backgroundColor: "#0a1f79", padding: "40px 0", marginBottom: "50px", width: "100%" }}>
                    <div className="container text-center">
                        <h2 className="fw-bold m-0 text-white" style={{ fontSize: "2.5rem" }}>
                            Trusted by over <span style={{ color: "#6cbd45" }}>500+ clients</span>
                        </h2>
                    </div>
                </div>

                <div className="marquee-container mb-4">
                    <div className="marquee-content left-scroll">
                        {[...row1Clients, ...row1Clients].map((src, index) => (
                            <div key={`row1-${index}`} className="d-inline-block mx-3 bg-white rounded p-2" style={{ width: '150px', height: '150px', verticalAlign: 'middle' }}>
                                <img
                                    src={src}
                                    alt={`Client ${index}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marquee-container mb-5">
                    <div className="marquee-content right-scroll">
                        {[...row2Clients, ...row2Clients].map((src, index) => (
                            <div key={`row2-${index}`} className="d-inline-block mx-3 bg-white rounded p-2" style={{ width: '150px', height: '150px', verticalAlign: 'middle' }}>
                                <img
                                    src={src}
                                    alt={`Client ${index}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
