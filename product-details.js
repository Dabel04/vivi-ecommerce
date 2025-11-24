// Product data with detailed information
const detailedProducts = {
    1: {
        id: 1,
        name: "Adidas X Pop Polo Shirt",
        price: 69.99,
        originalPrice: 89.99,
        description: "Premium polo shirt with modern design and comfortable fit.",
        fullDescription: "This premium Adidas polo shirt combines classic style with modern performance features. Made from high-quality cotton blend, it offers exceptional comfort and durability. Perfect for casual outings or sporting activities.",
        images: [
            "./img/f3.jpg",
            "./img/f3.jpg", // In real scenario, these would be different images
            "./img/f3.jpg"
        ],
        sizes: [
            { size: "S", inStock: true, stock: 15 },
            { size: "M", inStock: true, stock: 25 },
            { size: "L", inStock: true, stock: 8 },
            { size: "XL", inStock: true, stock: 12 },
            { size: "XXL", inStock: false, stock: 0 }
        ],
        colors: [
            { name: "Navy Blue", value: "#1e3a5f", inStock: true },
            { name: "Royal Blue", value: "#4169e1", inStock: true },
            { name: "Black", value: "#000000", inStock: true },
            { name: "White", value: "#ffffff", inStock: false }
        ],
        specifications: {
            "Material": "92% Cotton, 8% Elastane",
            "Fit": "Regular Fit",
            "Care": "Machine washable",
            "Origin": "Imported",
            "Style": "Casual Polo",
            "Neckline": "Polo Collar",
            "Sleeve": "Short Sleeve"
        },
        category: "men"
    },
    2: {
        id: 2,
        name: "Adidas X Pop TRX Vintage",
        price: 69.99,
        originalPrice: 79.99,
        description: "Vintage-inspired TRX jacket with retro design elements.",
        fullDescription: "Embrace retro style with this vintage-inspired Adidas TRX jacket. Featuring classic design elements and modern comfort, this jacket is perfect for casual wear or light athletic activities.",
        images: [
            "./img/f2.jpg",
            "./img/f2.jpg",
            "./img/f2.jpg"
        ],
        sizes: [
            { size: "S", inStock: true, stock: 10 },
            { size: "M", inStock: true, stock: 18 },
            { size: "L", inStock: true, stock: 5 },
            { size: "XL", inStock: true, stock: 8 }
        ],
        colors: [
            { name: "Navy/White", value: "linear-gradient(45deg, #1e3a5f 50%, #ffffff 50%)", inStock: true },
            { name: "Black/Red", value: "linear-gradient(45deg, #000000 50%, #ff0000 50%)", inStock: true },
            { name: "Grey", value: "#808080", inStock: true }
        ],
        specifications: {
            "Material": "100% Polyester",
            "Fit": "Regular Fit",
            "Care": "Machine wash cold",
            "Origin": "Imported",
            "Style": "Vintage Jacket",
            "Closure": "Zip Front",
            "Pockets": "2 Side Pockets"
        },
        category: "men"
    },
    3: {
        id: 3,
        name: "Adidas X Pop Beckenbauer Track Jacket",
        price: 129.00,
        originalPrice: 159.00,
        description: "Classic Beckenbauer track jacket with iconic design.",
        fullDescription: "The iconic Adidas Beckenbauer track jacket returns with its classic design and modern updates. This jacket features the signature three stripes and comfortable fit that made it a legend.",
        images: [
            "./img/f1.jpg",
            "./img/f1.jpg",
            "./img/f1.jpg"
        ],
        sizes: [
            { size: "S", inStock: true, stock: 6 },
            { size: "M", inStock: true, stock: 12 },
            { size: "L", inStock: true, stock: 3 },
            { size: "XL", inStock: false, stock: 0 }
        ],
        colors: [
            { name: "Navy", value: "#1e3a5f", inStock: true },
            { name: "Black", value: "#000000", inStock: true },
            { name: "Green", value: "#228B22", inStock: true }
        ],
        specifications: {
            "Material": "100% Nylon",
            "Fit": "Classic Fit",
            "Care": "Machine washable",
            "Origin": "Germany",
            "Style": "Track Jacket",
            "Closure": "Zip Front",
            "Collar": "Ribbed Collar"
        },
        category: "men"
    }
    // Add more products as needed
};

// Global variables
let selectedSize = null;
let selectedColor = null;
let currentQuantity = 1;

// Initialize product details page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && detailedProducts[productId]) {
        loadProductDetails(productId);
    } else {
        // Redirect to home page if product not found
        window.location.href = 'index.html';
    }
});

function loadProductDetails(productId) {
    const product = detailedProducts[productId];
    
    // Update page title
    document.title = `${product.name} - Mixtas`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;
    
    // Update product info
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('currentPrice').textContent = `$${product.price}`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('fullDescription').textContent = product.fullDescription;
    
    // Handle pricing
    if (product.originalPrice > product.price) {
        document.getElementById('originalPrice').textContent = `$${product.originalPrice}`;
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        document.getElementById('discountBadge').textContent = `Save ${discount}%`;
    }
    
    // Load images
    loadProductImages(product.images);
    
    // Load sizes
    loadSizeOptions(product.sizes);
    
    // Load colors
    loadColorOptions(product.colors);
    
    // Load specifications
    loadSpecifications(product.specifications);
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

function loadProductImages(images) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnailsContainer = document.getElementById('imageThumbnails');
    
    if (images.length > 0) {
        mainImage.src = images[0];
        mainImage.alt = "Product Image";
        
        thumbnailsContainer.innerHTML = '';
        images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}">`;
            thumbnail.onclick = () => changeMainImage(image, thumbnail);
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
}

function changeMainImage(imageSrc, clickedThumbnail) {
    document.getElementById('mainProductImage').src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    clickedThumbnail.classList.add('active');
}

function loadSizeOptions(sizes) {
    const sizesContainer = document.getElementById('sizeOptions');
    sizesContainer.innerHTML = '';
    
    sizes.forEach(size => {
        const sizeElement = document.createElement('div');
        sizeElement.className = `size-option ${!size.inStock ? 'disabled' : ''}`;
        sizeElement.textContent = size.size;
        sizeElement.title = size.inStock ? `${size.stock} in stock` : 'Out of stock';
        
        if (size.inStock) {
            sizeElement.onclick = () => selectSize(size, sizeElement);
        }
        
        sizesContainer.appendChild(sizeElement);
    });
    
    // Auto-select first available size
    const firstAvailable = sizes.find(size => size.inStock);
    if (firstAvailable) {
        selectSize(firstAvailable, sizesContainer.querySelector('.size-option:not(.disabled)'));
    }
}

function selectSize(size, element) {
    selectedSize = size;
    
    // Update UI
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    
    updateStockInfo();
}

function loadColorOptions(colors) {
    const colorsContainer = document.getElementById('colorOptions');
    colorsContainer.innerHTML = '';
    
    colors.forEach(color => {
        const colorElement = document.createElement('div');
        colorElement.className = `color-option ${!color.inStock ? 'disabled' : ''}`;
        colorElement.style.background = color.value;
        colorElement.title = `${color.name} ${color.inStock ? '(Available)' : '(Out of stock)'}`;
        
        if (color.inStock) {
            colorElement.onclick = () => selectColor(color, colorElement);
        }
        
        colorsContainer.appendChild(colorElement);
    });
    
    // Auto-select first available color
    const firstAvailable = colors.find(color => color.inStock);
    if (firstAvailable) {
        selectColor(firstAvailable, colorsContainer.querySelector('.color-option:not(.disabled)'));
    }
}

function selectColor(color, element) {
    selectedColor = color;
    
    // Update UI
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

function updateStockInfo() {
    const stockInfo = document.getElementById('stockInfo');
    if (selectedSize) {
        if (selectedSize.stock > 10) {
            stockInfo.textContent = `${selectedSize.stock} in stock`;
            stockInfo.className = 'stock-info in-stock';
        } else if (selectedSize.stock > 0) {
            stockInfo.textContent = `Only ${selectedSize.stock} left in stock!`;
            stockInfo.className = 'stock-info low-stock';
        } else {
            stockInfo.textContent = 'Out of stock';
            stockInfo.className = 'stock-info out-of-stock';
        }
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const max = selectedSize ? Math.min(selectedSize.stock, 10) : 10;
    if (currentQuantity < max) {
        currentQuantity++;
        quantityInput.value = currentQuantity;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;
    }
}

function loadSpecifications(specs) {
    const specsGrid = document.getElementById('specsGrid');
    specsGrid.innerHTML = '';
    
    for (const [key, value] of Object.entries(specs)) {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <div class="spec-label">${key}</div>
            <div class="spec-value">${value}</div>
        `;
        specsGrid.appendChild(specItem);
    }
}

function loadRelatedProducts(category, currentProductId) {
    const relatedGrid = document.getElementById('relatedGrid');
    relatedGrid.innerHTML = '';
    
    // Get related products (same category, excluding current product)
    const relatedProducts = Object.values(detailedProducts).filter(
        product => product.category === category && product.id !== currentProductId
    ).slice(0, 4);
    
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `
            <a href="product-details.html?id=${product.id}" class="card-link">
                <div class="img">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="title">${product.name.split(' ')[0].toUpperCase()}<span class="small">${product.name}</span></div>
                <div class="price">$${product.price}</div>
            </a>
            <div class="card-actions">
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        relatedGrid.appendChild(productCard);
    });
}

// Tab functionality
function openTab(tabName) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Remove active class from all tab headers
    document.querySelectorAll('.tab-header').forEach(header => {
        header.classList.remove('active');
    });
    
    // Show selected tab pane and activate header
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Cart functionality for product details
function addToCartFromDetails() {
    if (!selectedSize || !selectedColor) {
        showNotification('Please select size and color');
        return;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = detailedProducts[productId];
    
    if (product) {
        const cartItem = {
            ...product,
            selectedSize: selectedSize.size,
            selectedColor: selectedColor.name,
            quantity: currentQuantity
        };
        
        addToCart(cartItem);
        showNotification('Product added to cart!');
    }
}

function buyNow() {
    addToCartFromDetails();
    // In a real application, this would redirect to checkout
    setTimeout(() => {
        openCart();
    }, 1000);
}

function addToWishlist() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        // Add to favorites logic
        showNotification('Added to wishlist!');
    }
}

// Include the existing cart and utility functions from script.js
// These would be shared between both pages