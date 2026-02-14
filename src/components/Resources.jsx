import React, { useState } from "react";
import HeadSection from "./HeadSection";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Resources() {
    // Banner image placeholder or a generic one if not provided. 
    // Using a relevant Chettinad banner if available, otherwise blank or reusing one.
    // The screenshot shows a specific "construction workers with question mark" banner. 
    // Since I don't have the URL, I'll use a placeholder or reuse one for now.
    // I will use a high quality concrete/construction image as a placeholder.
    const bannerImage = "https://www.chettinadcement.com/wp-content/uploads/2024/08/faq-banner2.jpg";

    // FAQ Data
    const faqData = [
        {
            question: "What is Chettinad Cement?",
            answer: "Chettinad Cement is a leading manufacturer of cement in South India, known for its high-quality products and sustainable practices."
        },
        {
            question: "Where are Chettinad Cement manufacturing plants located?",
            answer: "We have manufacturing plants located across Tamil Nadu, Andhra Pradesh, and Karnataka, ensuring efficient distribution across the region."
        },
        {
            question: "What types of cement does Chettinad produce?",
            answer: "We produce a wide range of cements including Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), Portland Slag Cement (PSC), and Composite Cement, catering to various construction needs."
        },
        {
            question: "What are the key features of Chettinad Cement?",
            answer: "Our cement is known for its high compressive strength, durability, low heat of hydration, and resistance to chemical attacks, making it ideal for diverse applications."
        },
        {
            question: "How can I purchase Chettinad Cement products?",
            answer: "You can purchase our products through our extensive network of authorized dealers and retailers. Please visit our 'Get in Touch' page to find a dealer near you."
        },
        {
            question: "Is Chettinad Cement suitable for all types of construction?",
            answer: "Yes, we offer different grades and types of cement suitable for everything from residential foundation to high-rise buildings, dams, and industrial structures."
        },
        {
            question: "What quality standards does Chettinad Cement adhere to?",
            answer: "We strictly adhere to Bureau of Indian Standards (BIS) specifications and follow rigorous quality control processes to ensure consistency and superior performance."
        }
    ];

    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="animate-fade-in-up">
            <HeadSection
                title="FAQ's"
                breadcrumbDetails="FAQ's"
                imageSrc={bannerImage}
            />

            <div className="container my-5">
                <h2 className="text-center mb-5" style={{ color: '#0b1c61', fontWeight: 'bold' }}>
                    Frequently Asked <br /> Questions
                </h2>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="accordion-custom">
                            {faqData.map((item, index) => (
                                <div key={index} className="faq-item mb-3 p-3 shadow-sm rounded bg-white">
                                    <div
                                        className="d-flex align-items-center cursor-pointer"
                                        onClick={() => toggleFAQ(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="icon-container me-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                minWidth: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: '#f8f9fa',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                            }}>
                                            {openIndex === index ? (
                                                <FaMinus size={14} color="#000" />
                                            ) : (
                                                <FaPlus size={14} color="#000" />
                                            )}
                                        </div>
                                        <h5 className="m-0" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333' }}>
                                            {item.question}
                                        </h5>
                                    </div>

                                    {openIndex === index && (
                                        <div className="faq-answer mt-3 ps-5 ms-2">
                                            <p className="text-muted mb-0">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Adding WhatsApp widget if implied globally or just keeping page clean */}
        </div>
    );
}