import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactForm from './components/ContactForm'
import Logo from './components/Logo'

function App() {
    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <div className="container">
                        <div className="nav-content">
                            <Link to="/" className="logo-link">
                                <Logo />
                            </Link>
                            <div className="nav-links">
                                <Link to="/">Home</Link>
                                <Link to="/products">Collection</Link>
                                <Link to="/contact" className="contact-link">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/contact" element={
                            <div className="contact-page">
                                <div className="container">
                                    <ContactForm />
                                </div>
                            </div>
                        } />
                    </Routes>
                </main>

                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <h3>MyOwnBags</h3>
                                <p>Premium handcrafted leather bags for businesses worldwide.</p>
                            </div>
                            <div className="footer-section">
                                <h4>Contact</h4>
                                <p>Email: myownbags@gmail.com</p>
                                <p>For inquiries and bulk orders</p>
                            </div>
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <Link to="/products">Our Collection</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2024 MyOwnBags. All rights reserved. | Premium Leather Bags Supplier</p>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    )
}

export default App
