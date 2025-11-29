import React, { useState } from "react"
import LandingPage from "./Components/pages/LandingPage"
import ProductDetails from "./Components/pages/ProductDetails"
import { Route, Routes } from "react-router-dom"
import Header from "./Components/pages/Header"
import Notification from "./Components/pages/Notification"

function App() {
    const [cartItems, setCartItems] = useState([])
      const [notification, setNotification] = useState(null) 
    
    function updateCart(item) {
      setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, image: item.image, quantity: 1 }]
    })
    showNotification(`${item.name} added to cart!`)
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(p => p.id !== id))
  }

    function showNotification(message) {
    setNotification(message)
  }

  const cartNumber = cartItems.reduce((s, i) => s + (i.quantity || 0), 0)
  const cartTotal = cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0).toFixed(2)
  return (
    <>
          <Header cartNumber={cartNumber} cartTotal={cartTotal} cartItems={cartItems} notification={notification} setNotification={setNotification}/>
          <Routes>
            <Route path="/" element={<LandingPage updateCart={updateCart} cartNumber={cartNumber} cartTotal={cartTotal} cartItems={cartItems}/>} />
            <Route path="/products/:Id" element={<ProductDetails updateCart={updateCart} cartNumber={cartNumber} cartTotal={cartTotal} cartItems={cartItems}/>} />
          </Routes>
      </>
  )
}

export default App
