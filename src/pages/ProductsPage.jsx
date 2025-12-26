import { useState } from 'react'
import { products, categories } from '../data/products'
import ContactForm from '../components/ContactForm'
import './ProductsPage.css'

function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Products')
    const [showContactForm, setShowContactForm] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(p => p.category === selectedCategory)

    const handleInquire = (product) => {
        setSelectedProduct(product)
        setShowContactForm(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (showContactForm) {
        return (
            <div className="products-page">
                <div className="container">
                    <button
                        className="back-btn"
                        onClick={() => setShowContactForm(false)}
                    >
                        ← Back to Products
                    </button>
                    <ContactForm productName={selectedProduct?.name} />
                </div>
            </div>
        )
    }

    return (
        <div className="products-page">
            <div className="container">
                <h1>Premium Leather Bags Collection</h1>
                <p className="page-subtitle">Handcrafted leather bags for discerning businesses</p>

                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="product-category">{product.category}</p>
                                <p className="product-description">{product.description}</p>

                                <div className="product-features">
                                    {product.features.map((feature, idx) => (
                                        <span key={idx} className="feature-tag">{feature}</span>
                                    ))}
                                </div>

                                <div className="product-details">
                                    <p><strong>Size:</strong> {product.dimensions}</p>
                                </div>

                                <button
                                    className="btn btn-primary inquire-btn"
                                    onClick={() => handleInquire(product)}
                                >
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bulk-inquiry-section">
                    <h2>Interested in Bulk Orders?</h2>
                    <p>Contact us for special pricing and customization options</p>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            setSelectedProduct(null)
                            setShowContactForm(true)
                        }}
                    >
                        General Inquiry
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage
