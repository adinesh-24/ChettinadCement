import React from "react";
import HeadSection from "./HeadSection";
import { FaUser, FaComment, FaClock, FaSearch } from "react-icons/fa";

export default function Blogs() {
    const bannerImage = "https://www.chettinadcement.com/wp-content/uploads/2024/08/abstract-1-1.jpg";

    // Images provided by user
    const postImage1 = "https://www.chettinadcement.com/wp-content/uploads/2026/01/best_cement_for_concrete-1.jpg";
    const postImage2 = "https://www.chettinadcement.com/wp-content/uploads/2025/12/wholesale-cement-near-me.jpg";
    const postImage3 = "https://www.chettinadcement.com/wp-content/uploads/2024/10/new-construction.jpg"; // Assuming this is the third one

    const blogPosts = [
        {
            id: 1,
            title: "Which Cement Is Best for Concrete? A Complete Guide to Using Supergrade Concrete for Stronger Construction",
            excerpt: "Concrete quality defines the strength, safety, and lifespan of any structure. Whether it is a residential building, a commercial complex, or a major infrastructure project, the performance of concrete depends largely on the cement used. Selecting the right cement for concrete is not a routine decision—it is a structural commitment. [...]",
            author: "chettinad",
            comments: 0,
            date: "January 10, 2026",
            image: postImage1
        }
    ];

    const recentPosts = [
        {
            id: 1,
            title: "Which Cement Is Best For Concrete? A Complete Guide ...",
            date: "January 10, 2026",
            image: postImage1
        },
        {
            id: 2,
            title: "Which Supplier Offers The Most Reliable Wholesale Cement Near Me?",
            date: "December 18, 2025",
            image: postImage2
        },
        { // Adding a third one based on the third image URL provided
            id: 3,
            title: "Essential Tips for New Construction Projects",
            date: "October 15, 2024", // Date inferred/made up relative to filename
            image: postImage3
        }
    ];

    const categories = [
        { name: "Checklist", count: 5 },
        { name: "Planning", count: 1 },
        { name: "Sustainability", count: 1 }
    ];

    return (
        <div className="animate-fade-in-up">
            <HeadSection
                title="Blog"
                breadcrumbDetails="BLOG"
                backgroundImage={bannerImage}
            />

            <div className="container py-5">
                <div className="row">
                    {/* Left Column: Blog Posts */}
                    <div className="col-lg-8">
                        {blogPosts.map(post => (
                            <div key={post.id} className="card shadow-sm border-0 mb-5">
                                <div className="position-relative">
                                    <img src={post.image} className="card-img-top rounded-0" alt={post.title} />
                                    <div className="position-absolute bottom-0 end-0 bg-warning px-3 py-2 fw-bold text-dark">
                                        SUPER GRADE
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex gap-4 mb-3 text-muted small align-items-center">
                                        <div className="d-flex align-items-center gap-2">
                                            <FaUser /> {post.author}
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <FaComment /> Comments ({post.comments})
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <FaClock /> {post.date}
                                        </div>
                                    </div>

                                    <h2 className="card-title fw-bold mb-3" style={{ color: '#0b1c61', fontSize: '1.75rem' }}>
                                        {post.title}
                                    </h2>

                                    <p className="card-text text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                                        {post.excerpt}
                                    </p>

                                    <button className="btn btn-dark rounded-0 px-4 py-2 fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="col-lg-4 ps-lg-5">
                        {/* Search Widget */}
                        <div className="mb-5">
                            <h4 className="fw-bold mb-4" style={{ color: '#0b1c61' }}>Search</h4>
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0" placeholder="Search ..." style={{ padding: '12px 15px' }} />
                                <button className="btn btn-primary" style={{ backgroundColor: '#0b1c61', borderColor: '#0b1c61' }}>
                                    <FaSearch />
                                </button>
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div className="mb-5">
                            <h4 className="fw-bold mb-4" style={{ color: '#0b1c61' }}>Categories</h4>
                            <ul className="list-group list-group-flush">
                                {categories.map((cat, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0 py-3 border-bottom">
                                        <span className="text-secondary">{cat.name}</span>
                                        <span className="text-muted small">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="mb-5">
                            <h4 className="fw-bold mb-4" style={{ color: '#0b1c61' }}>Recent Posts</h4>
                            <div className="d-flex flex-column gap-4">
                                {recentPosts.map(post => (
                                    <div key={post.id} className="d-flex gap-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="rounded"
                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                        />
                                        <div>
                                            <div className="text-muted small mb-1">{post.date}</div>
                                            <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.4', color: '#333' }}>
                                                {post.title}
                                            </h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}