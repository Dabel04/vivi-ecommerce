import React, { useState } from "react"
import LandingPage from "./Components/pages/LandingPage"
import ProductDetails from "./Components/pages/ProductDetails"
import { Route, Routes } from "react-router-dom"
import Header from "./Components/pages/Header"

function App() {
    const [cartItems, setCartItems] = useState([])
    const [notification, setNotification] = useState(null) 
      const [favorites, setFavorites] = useState(new Set())

  const toggleFavorite = (id) => {
    const updatedFavorites = new Set(favorites)
    if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id)
    } else {
        updatedFavorites.add(id)
    }
    setFavorites(updatedFavorites)
  }
    
    function updateCart(item, quantitys) {
      const qty = Number(quantitys) || 1
      setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + qty } : p)
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, image: item.image, quantity: qty }]
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
          <Header cartNumber={cartNumber} cartTotal={cartTotal} cartItems={cartItems} notification={notification} setNotification={setNotification} removeFromCart={removeFromCart} favorites={favorites}/>
          <Routes>
            <Route path="/" element={<LandingPage updateCart={updateCart} toggleFavorite={toggleFavorite} setFavorites={setFavorites} favorites={favorites}/>} />
            <Route path="/products/:Id" element={<ProductDetails updateCart={updateCart} toggleFavorite={toggleFavorite} favorites={favorites}/>} />
          </Routes>
      </>
  )
}

export default App
