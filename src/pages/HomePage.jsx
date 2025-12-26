import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Welcome to MyOwnBags</h1>
                        <p className="hero-subtitle">Premium Leather Bags Supplier</p>
                        <p className="hero-description">
                            Handcrafted leather bags for discerning businesses.
                            Quality craftsmanship meets timeless design.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary">Browse Collection</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Why Choose MyOwnBags?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>🎨 Premium Leather</h3>
                            <p>Genuine leather sourced from the finest tanneries. Each bag is crafted with attention to detail.</p>
                        </div>
                        <div className="feature-card">
                            <h3>✋ Handcrafted Quality</h3>
                            <p>Artisan-made bags with traditional techniques. Every piece is unique and built to last.</p>
                        </div>
                        <div className="feature-card">
                            <h3>💼 B2B Solutions</h3>
                            <p>Flexible ordering options for businesses. Custom branding and bulk orders available.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🚚 Reliable Service</h3>
                            <p>Professional service and timely delivery. We're committed to your business success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Elevate Your Product Line?</h2>
                    <p>Contact us today to discuss your requirements and get a custom quote</p>
                    <Link to="/products" className="btn btn-secondary">View Our Collection</Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage
