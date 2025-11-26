// import React, { useState, useEffect } from 'react'

// function Cart({ isOpen, onClose, cart, setCart }) {
//   // const [cartItems, setCartItems] = useState([])
//   const [cartCount, setCartCount] = useState(0)
//   const [cartTotal, setCartTotal] = useState(0)

//   // useEffect(() => {
//   //   updateCartDisplay()
//   // }, [cart])

//   const updateCartDisplay = () => {
//     setCartCount(cart.reduce((total, item) => total + item.quantity, 0))
//     setCartTotal(cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2))
//   }

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId)
//       return
//     }

//     const updatedCart = cart.map(item =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     )
//     setCart(updatedCart)
//   }

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId))
//   }

//   return (
//     <div id="cartOverlay" className={`cart-overlay ${isOpen ? 'active' : ''}`}>
//       <div className="cart-sidebar">
//         <div className="cart-header">
//           <h3>Your Cart (<span id="cartCount">{cartCount}</span>)</h3>
//           <button className="close-cart" onClick={onClose}>×</button>
//         </div>

//         <div className="cart-items" id="cartItems">
//           {cart.length === 0 ? (
//             <p className="empty-cart">Your cart is empty</p>
//           ) : (
//             cart.map(item => (
//               <div className="cart-item" key={item.id}>
//                 <img src={item.image} alt={item.name} />
//                 <div className="item-details">
//                   <h4>{item.name}</h4>
//                   <p>${item.price}</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                   </div>
//                 </div>
//                 <button className="remove-item" onClick={() => removeFromCart(item.id)}>×</button>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="cart-footer">
//           <div className="cart-total">
//             <strong>Total: $<span id="cartTotal">{cartTotal}</span></strong>
//           </div>
//           <button className="checkout-btn">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart