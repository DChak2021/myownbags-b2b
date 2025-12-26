import { useCart } from '../context/CartContext'
import './CartPage.css'

function CartPage() {
    const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <h1>Shopping Cart</h1>
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <a href="/products" className="btn btn-primary">Browse Products</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                <div className="cart-content">
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-category">{item.category}</p>
                                    <p className="item-price">${item.price.toFixed(2)} per unit</p>
                                </div>
                                <div className="item-quantity">
                                    <label>Quantity:</label>
                                    <input
                                        type="number"
                                        min={item.minOrder}
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="item-total">
                                    <p className="total-label">Subtotal:</p>
                                    <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary checkout-btn">
                            Request Quote
                        </button>
                        <p className="note">
                            * Final pricing and shipping will be confirmed in your quote
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
