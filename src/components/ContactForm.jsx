import { useState } from 'react'
import './ContactForm.css'

function ContactForm({ productName }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: productName || '',
        quantity: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Create mailto link
        const subject = `Inquiry for ${formData.product || 'Leather Bags'} - MyOwnBags`
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Product Interest: ${formData.product}
Quantity: ${formData.quantity}

Message:
${formData.message}
    `.trim()

        const mailtoLink = `mailto:myownbags@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        // Open email client
        window.location.href = mailtoLink

        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div className="contact-form-container">
            <h2>Request a Quote</h2>
            <p className="form-subtitle">Fill out the form below and we'll get back to you with pricing and availability</p>

            {submitted && (
                <div className="success-message">
                    ✓ Your inquiry has been sent! We'll contact you soon.
                </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="product">Product of Interest</label>
                        <input
                            type="text"
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            placeholder="e.g., Amber Crossbody Satchel"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Estimated Quantity</label>
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g., 100 units"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Additional Details</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about your requirements, customization needs, or any questions..."
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                    Send Inquiry
                </button>

                <p className="form-note">
                    * Required fields. We'll respond within 24 hours.
                </p>
            </form>
        </div>
    )
}

export default ContactForm
