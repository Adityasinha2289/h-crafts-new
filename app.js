// Application Data
const appData = {
  products: [
    {
      id: 1,
      name: "Blue Warli-Inspired Mirror Art Plate",
      price: 2500,
      image: "img/p1.jpg",
      category: "Paintings",
      artist: "Sita Devi",
      region: "Bihar",
      description: "A stunning decorative wall plate featuring a deep indigo base adorned with intricate mirror work and hand-painted motifs. The design showcases concentric circles of dancing human figures in a style reminiscent of the traditional Warli art form, creating a sense of rhythmic celebration. Sparkling mirrors of various shapes frame the artwork, catching the light beautifully.",
      story: "This piece is a soulful fusion of two timeless Indian art traditions. The simple, powerful stick figures are drawn from the Warli art of Maharashtra, traditionally used to depict scenes of music, harvest, and community bonding. Combined with the shimmering mirror work of Kutch, which is believed to ward off evil and attract prosperity, this plate tells a story of joyous unity and protective light. It is a modern artisan's tribute to the collective spirit and celebratory soul of rural India.",
      stock: 5
    },
    {
      id: 2,
      name: "Framed Kutch Lippan Mirror Artwork",
      price: 1800,
      image: "img/p2.jpg",
      category: "Paintings",
      artist: "Meera Sharma",
      region: "Rajasthan",
      description: "An exquisite piece of framed Lippan art, a traditional mud and mirror-work craft from the Kutch region of Gujarat. This artwork features stunning geometric patterns handcrafted from a clay mixture on a rich, crimson red base. The intricate designs are meticulously embellished with shimmering mirrors, creating a dazzling play of light and texture, all enclosed in an elegant black and silver frame.",
      story: "Born from the barren deserts of Kutch, Lippan Kaam is an art form traditionally practiced by women to beautify their circular mud huts (Bhungas). The patterns are inspired by the rich embroidery motifs of the local communities. The mirrors, or aabhla, are believed to reflect away the evil eye and bring light into their homes. This piece carries the story of resilience and creativity, a slice of desert heritage that turns humble materials like mud and mirror into a masterpiece of sparkling elegance.",
      stock: 3
    },
    {
      id: 3,
      name: "Yellow Floral Mirror Mosaic Wall Art",
      price: 800,
      image: "img/p3.jpg",
      category: "Paintings",
      artist: "Kamala Kumari",
      region: "West Bengal",
      description: "A bright and cheerful circular wall art piece that radiates sunny warmth. Set on a vibrant yellow base, this artwork features a stunning central grid of flower-shaped mirrors that create a captivating mosaic. The piece is bordered by concentric circles of textured clay work and various geometric mirror shapes, adding depth and a delightful sparkle.",
      story: "This artwork is a contemporary celebration of traditional mirror craft. Inspired by the joy of a blooming spring garden, the artisan has reimagined a classic technique with a modern aesthetic. Each mirror is carefully placed by hand, telling a story of patience and precision. This piece is designed to be a focal point of happiness, bringing the life-affirming energy of sunshine and flowers into your home.",
      stock: 8
    },
    {
      id: 4,
      name: "Hand-Painted Floral Mirror Frame",
      price: 3200,
      image: "img/p4.jpg",
      category: "Paintings",
      artist: "Home Decor",
      region: "Maharashtra",
      description: "An elegant and artistic round mirror framed in deep black. The frame is beautifully hand-painted with delicate leaves in ethereal shades of white and soft pink, creating a gentle contrast. Small, round mirrors are interspersed between the leaves, adding a subtle, magical glimmer to this functional piece of art.",
      story: "This mirror tells a story of serene reflection. It combines the practicality of a mirror with the gentle beauty of nature. The artist was inspired by the quiet grace of leaves catching the moonlight, translating that vision into soft brushstrokes. It’s a piece that encourages a moment of peaceful introspection, reflecting not just your image, but also a sense of calm and natural elegance.",
      stock: 4
    },
    {
      id: 5,
      name: "Handcrafted Metal Tree of Life",
      price: 1200,
      image: "img/p5.jpg",
      category: "Home Decor",
      artist: "Sunita Das",
      region: "Assam",
      description: "A beautifully detailed, handcrafted Tree of Life wall hanging made from metal. The intricate branches of the tree are finished in rustic shades of red, green, and bronze. Perched playfully among the leaves are four charming squirrels, each with a unique, sparkling finish, adding a touch of life and whimsy to the piece.",
      story: "The Tree of Life is a universal symbol of connection, growth, and ancient wisdom. This piece, created by skilled metal artisans, tells this timeless story. It represents the grounding strength of family roots and the beauty of continuous growth. The lively squirrels remind us of nature's playful spirit and the harmonious dance of all living creatures, making this more than just a decorative item, but a symbol of life's interconnected beauty.",
      stock: 6
    },
    {
      id: 6,
      name: "Rustic Jute and Mirror Frame",
      price: 1500,
      image: "img/p6.jpg",
      category: "Mirror",
      artist: "Radha Devi",
      region: "Uttar Pradesh",
      description: "A round mirror that perfectly captures a rustic-chic aesthetic. The frame is meticulously hand-wrapped with thick, natural jute rope, giving it an earthy and textural appeal. It is tastefully embellished with six star-shaped mirror pieces that add a hint of sparkle to the organic design.",
      story: "This mirror tells a story of finding beauty in simplicity and nature. Crafted from humble jute, it speaks to a desire for sustainable, grounded living. The design is inspired by a blend of coastal calm and bohemian spirit, where natural materials create a sense of warmth and tranquility. Each wrap of the rope and every placed mirror is a testament to the artisan's hand, creating a piece that brings an authentic, earthy touch to any space.",
      stock: 12
    },
    {
      id: 7,
      name: "Pink Mirror Mosaic Planter Pot",
      price: 1500,
      image: "img/p7.jpg",
      category: "Jewelry",
      artist: "Radha Devi",
      region: "Uttar Pradesh",
      description: "A charming and vibrant handcrafted pot, perfect for holding a small plant or serving as a decorative accent. Painted in a cheerful hot pink, the pot is adorned with delightful mirror mosaic work. The mirrors are arranged in simple floral and geometric patterns around the pot, catching the light and adding a festive sparkle.",
      story: "This little pot is a celebration of handmade joy. It began its life as a simple vessel, which was then transformed by an artisan's touch into a tiny work of art. The story behind it is one of creativity and care—the patient process of painting, designing, and placing each small mirror to bring a burst of color and light to the everyday. It's a reminder that even the smallest objects can be imbued with personality and charm.",
      stock: 12
    },
    {
      id: 8,
      name: "Evil Eye: Protective Mirror Talisman",
      price: 1500,
      image: "img/p8.jpg",
      category: "Mirror",
      artist: "Radha Devi",
      region: "Uttar Pradesh",
      description: "A unique and symbolic decorative mirror crafted in the shape of a protective eye. Set on an earthy, tan-colored base, this piece features a central round mirror surrounded by an intricate mosaic of teardrop, round, and semi-circular mirrors that define the eye's form.",
      story: "Inspired by the ancient (Nazar) or (Evil Eye) talisman found across many cultures, this mirror is a modern amulet for the home. The story behind this symbol is one of protection; it is believed to watch over the home and its inhabitants, reflecting away negative energy and ill-will. Handcrafted with intention, this piece serves as both a unique decorative object and a guardian, bringing a sense of safety and positive vibes to your space.",
      stock: 12
    }
  ],
  artists: [
    {
      id: 1,
      name: "Sita Devi",
      image: "img/w1.jpg",
      region: "Bihar",
      craft: "Madhubani Painting",
      story: "Sita Devi has been practicing Madhubani art for over 20 years. Born in a small village in Bihar, she learned the art from her mother and grandmother. Her paintings have been exhibited in galleries across India and have helped support her family and community.",
      background: "Coming from a farming family, Sita turned to art when traditional farming became challenging. She now teaches Madhubani painting to other women in her village, creating a sustainable livelihood for many families.",
      products: [1]
    },
    {
      id: 2,
      name: "Meera Sharma",
      image: "img/w2.jpg",
      region: "Rajasthan",
      craft: "Handloom Weaving",
      story: "Meera comes from a family of traditional weavers in Rajasthan. She specializes in silk weaving and has been working on handlooms since she was 16. Her work preserves the ancient weaving traditions of Rajasthan.",
      background: "Despite facing economic challenges, Meera has kept the traditional weaving techniques alive. She now leads a cooperative of 15 women weavers and has helped revive the dying art of traditional silk weaving in her region.",
      products: [2]
    },
    {
      id: 3,
      name: "Kamala Kumari",
      image: "kamala_kumari.jpg",
      region: "West Bengal",
      craft: "Terracotta Art",
      story: "Kamala is a master terracotta artist from West Bengal with over 25 years of experience. Her work ranges from traditional sculptures to contemporary decorative pieces, all handcrafted using ancient techniques.",
      background: "Born into a potter's family, Kamala learned the craft from her father. She has modernized traditional designs while keeping the essence of Bengali terracotta art alive. Her work supports 8 families in her village.",
      products: [3]
    },
    {
      id: 4,
      name: "Parvati Kokni",
      image: "parvati_kokni.jpg",
      region: "Maharashtra",
      craft: "Warli Art",
      story: "Parvati is a renowned Warli artist who has dedicated her life to preserving this ancient tribal art form. She has trained over 100 women in Warli painting and has exhibited her work internationally.",
      background: "From the Warli tribe of Maharashtra, Parvati has taken the traditional wall paintings to canvas and paper, making this ancient art accessible to modern homes while ensuring fair compensation for tribal artists.",
      products: [4]
    },
    {
      id: 5,
      name: "Sunita Das",
      image: "sunita_das.jpg",
      region: "Assam",
      craft: "Bamboo Craft",
      story: "Sunita is an expert in bamboo crafts from Assam. She creates everything from furniture to decorative items using traditional techniques passed down through generations of Assamese craftspeople.",
      background: "Growing up in rural Assam surrounded by bamboo forests, Sunita learned the craft from village elders. She now runs a small enterprise that employs 20 women and promotes sustainable bamboo crafts.",
      products: [5]
    },
    {
      id: 6,
      name: "Radha Devi",
      image: "radha_devi.jpg",
      region: "Uttar Pradesh",
      craft: "Silver Thread Jewelry",
      story: "Radha specializes in traditional silver thread jewelry making, a craft that has been in her family for four generations. Her intricate work preserves the heritage of Indian jewelry craftsmanship.",
      background: "Learning from her mother-in-law, Radha has mastered the delicate art of silver thread work. She has trained 25 women in her community and has helped establish a jewelry-making cooperative.",
      products: [6]
    }
  ],
  categories: ["Paintings", "Pottery", "Home Decor","Mirror"],
  indianStates: [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Andaman and Nicobar Islands"
  ],
  stats: {
    productsSold: "108",
    communitiesImpacted: "25",
    artisansSupported: "6",
    countriesReached: "1"
  }
};

// Application State
let currentUser = null;
let cart = [];
let currentPage = 'home';
let selectedProduct = null;
let selectedArtist = null;
let selectedPaymentMethod = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Load cart from localStorage if available
  const savedCart = localStorage.getItem('artisan-cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
  }

  // Load saved user
  const savedUser = localStorage.getItem('artisan-user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateAuthDisplay();
  }

  // Setup navigation
  setupNavigation();

  // Load initial content
  loadHomePage();
  loadShopPage();
  loadArtistsPage();
  loadCategoryFilters();

  // Load statistics
  loadStatistics();
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      showPage(page);
    });
  });
}

function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show selected page
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update navigation
  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });

  currentPage = page;
}

function loadHomePage() {
  const featuredGrid = document.getElementById('featured-products-grid');
  const featuredProducts = appData.products.slice(0, 3);
  
  featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function loadShopPage() {
  const shopGrid = document.getElementById('shop-products-grid');
  shopGrid.innerHTML = appData.products.map(product => createProductCard(product)).join('');
  
  // Setup filters
  setupShopFilters();
}

function setupShopFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const searchInput = document.getElementById('search-input');
  const priceFilter = document.getElementById('price-filter');

  // Add event listeners
  categoryFilter.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', filterProducts);
  priceFilter.addEventListener('change', filterProducts);
}

function loadCategoryFilters() {
  const categoryFilter = document.getElementById('category-filter');
  categoryFilter.innerHTML = '<option value="">All Categories</option>' + 
    appData.categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

function filterProducts() {
  const category = document.getElementById('category-filter').value;
  const search = document.getElementById('search-input').value.toLowerCase();
  const price = document.getElementById('price-filter').value;

  let filtered = appData.products.filter(product => {
    const matchesCategory = !category || product.category === category;
    const matchesSearch = !search || 
      product.name.toLowerCase().includes(search) ||
      product.artist.toLowerCase().includes(search) ||
      product.region.toLowerCase().includes(search);
    
    let matchesPrice = true;
    if (price) {
      if (price === '0-1000') matchesPrice = product.price <= 1000;
      else if (price === '1000-2000') matchesPrice = product.price > 1000 && product.price <= 2000;
      else if (price === '2000-3000') matchesPrice = product.price > 2000 && product.price <= 3000;
      else if (price === '3000+') matchesPrice = product.price > 3000;
    }

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const shopGrid = document.getElementById('shop-products-grid');
  shopGrid.innerHTML = filtered.length > 0 
    ? filtered.map(product => createProductCard(product)).join('')
    : '<div class="empty-state"><h3>No products found</h3><p>Try adjusting your filters</p></div>';
}

function createProductCard(product) {
  return `
    <div class="product-card" onclick="showProductModal(${product.id})">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="product-card__content">
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__artist">by ${product.artist}</p>
        <div class="product-card__price">₹${product.price.toLocaleString()}</div>
      </div>
    </div>
  `;
}

function showProductModal(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');

  content.innerHTML = `
    <div class="product-modal__content">
      <div class="product-modal__header">
  <div class="product-modal__image">
    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
        <div class="product-modal__info">
          <h2>${product.name}</h2>
          <div class="product-modal__price">₹${product.price.toLocaleString()}</div>
          <div class="product-modal__artist">
            by <span class="artist-link" onclick="showArtistProfile('${product.artist}')">${product.artist}</span>
          </div>
          <div class="product-modal__region">${product.region}</div>
        </div>
      </div>
      <div class="product-modal__description">
        <h3>About This Product</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-modal__story">
        <h3>The Story Behind</h3>
        <p>${product.story}</p>
      </div>
      <div class="product-modal__actions">
        <button class="btn btn--primary" onclick="addToCart(${product.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 5.5 11 7.5 0-2-8H8"></path>
          </svg>
          Add to Cart
        </button>
        <button class="btn btn--secondary" onclick="buyNow(${product.id})">Buy Now</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

function loadArtistsPage() {
  const artistsGrid = document.getElementById('artists-grid');
  artistsGrid.innerHTML = appData.artists.map(artist => createArtistCard(artist)).join('');
}

function createArtistCard(artist) {
  return `
    <div class="artist-card" onclick="showArtistProfile('${artist.name}')">
      <div class="artist-card__image">
        <img src="${artist.image}" alt="${artist.name}" style="width: 100%; height: auto; border-radius: 8px;">
      </div>
      <div class="artist-card__content">
        <h3>${artist.name}</h3>
        <p>${artist.region}</p>
      </div>
    </div>
  `;
}

function showArtistProfile(artistName) {
  const artist = appData.artists.find(a => a.name === artistName);
  if (!artist) return;

  selectedArtist = artist;
  const content = document.getElementById('artist-profile-content');
  const artistProducts = appData.products.filter(p => artist.products.includes(p.id));

  content.innerHTML = `
    <div class="artist-profile__header">
      <div class="artist-profile__image">
        ${artist.name}
      </div>
      <div class="artist-profile__info">
        <h1>${artist.name}</h1>
        <div class="artist-profile__craft">${artist.craft}</div>
        <div class="artist-profile__region">${artist.region}</div>
        <p class="artist-profile__story">${artist.story}</p>
        <p class="artist-profile__story">${artist.background}</p>
      </div>
    </div>
    <div class="artist-products">
      <h2>Products by ${artist.name}</h2>
      <div class="products-grid">
        ${artistProducts.map(product => createProductCard(product)).join('')}
      </div>
    </div>
  `;

  showPage('artist-profile');
}

function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      artist: product.artist,
      quantity: 1
    });
  }

  updateCartDisplay();
  saveCart();
  
  // Show success feedback
  showNotification('Product added to cart!');
}

function updateCartDisplay() {
  const cartCount = document.querySelector('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart sidebar
  const cartContent = document.getElementById('cart-content');
  if (cart.length === 0) {
    cartContent.innerHTML = '<div class="empty-state"><h3>Your cart is empty</h3><p>Add some beautiful handicrafts!</p></div>';
  } else {
    cartContent.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item__image">${item.name}</div>
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__price">₹${item.price.toLocaleString()}</div>
          <div class="cart-item__controls">
            <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
            <span class="cart-item__quantity">${item.quantity}</span>
            <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
            <button onclick="removeFromCart(${item.id})" style="margin-left: 8px; background: #ff6b6b; color: white;">×</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update cart total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('cart-total').textContent = `Total: ₹${total.toLocaleString()}`;
}

function updateCartQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartDisplay();
      saveCart();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
  saveCart();
}

function saveCart() {
  localStorage.setItem('artisan-cart', JSON.stringify(cart));
}

function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.toggle('active');
}

function buyNow(productId) {
  addToCart(productId);
  closeModal();
  proceedToCheckout();
}

function proceedToCheckout() {
  if (!currentUser) {
    showAuthModal();
    return;
  }

  if (cart.length === 0) {
    showNotification('Your cart is empty!');
    return;
  }

  showCheckoutModal();
}

function showAuthModal() {
  const modal = document.getElementById('auth-modal');
  const content = document.getElementById('auth-modal-content');
  
  content.innerHTML = `
    <div class="auth-form">
      <h2>Login to Continue</h2>
      <form id="login-form">
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn--primary btn--full-width">Login</button>
      </form>
      <div class="auth-toggle">
        <p>Don't have an account? <button onclick="showSignupForm()">Sign up</button></p>
      </div>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', handleLogin);
  modal.classList.add('active');
}

function showSignupForm() {
  const content = document.getElementById('auth-modal-content');
  
  content.innerHTML = `
    <div class="auth-form">
      <h2>Create Account</h2>
      <form id="signup-form">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn--primary btn--full-width">Create Account</button>
      </form>
      <div class="auth-toggle">
        <p>Already have an account? <button onclick="showAuthModal()">Login</button></p>
      </div>
    </div>
  `;

  document.getElementById('signup-form').addEventListener('submit', handleSignup);
}

function handleLogin(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
  const password = formData.get('password') || e.target.querySelector('input[type="password"]').value;

  // Simulate login
  currentUser = {
    id: 1,
    name: 'User',
    email: email
  };

  localStorage.setItem('artisan-user', JSON.stringify(currentUser));
  updateAuthDisplay();
  closeAuthModal();
  showNotification('Login successful!');
}

function handleSignup(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input');
  const name = inputs[0].value;
  const email = inputs[1].value;
  const password = inputs[2].value;

  // Simulate signup
  currentUser = {
    id: 1,
    name: name,
    email: email
  };

  localStorage.setItem('artisan-user', JSON.stringify(currentUser));
  updateAuthDisplay();
  closeAuthModal();
  showNotification('Account created successfully!');
}

function updateAuthDisplay() {
  const authButton = document.querySelector('.header__actions .btn--outline');
  if (currentUser) {
    authButton.textContent = currentUser.name;
    authButton.onclick = logout;
  } else {
    authButton.textContent = 'Login';
    authButton.onclick = showAuthModal;
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('artisan-user');
  updateAuthDisplay();
  showNotification('Logged out successfully!');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('active');
}

function showCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const content = document.getElementById('checkout-modal-content');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  content.innerHTML = `
    <div class="checkout-form">
      <h2>Checkout</h2>
      
      <div class="checkout-section">
        <h3>Order Summary</h3>
        <div class="order-summary">
          ${cart.map(item => `
            <div class="order-summary__item">
              <span>${item.name} x ${item.quantity}</span>
              <span>₹${(item.price * item.quantity).toLocaleString()}</span>
            </div>
          `).join('')}
          <div class="order-summary__item order-summary__total">
            <span>Total</span>
            <span>₹${total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <form id="checkout-form">
        <div class="checkout-section">
          <h3>Shipping Address</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="tel" class="form-control" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">House/Building No.</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label class="form-label">Street/Area</label>
              <input type="text" class="form-control" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">City</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label class="form-label">State</label>
              <select class="form-control" required>
                <option value="">Select State</option>
                ${appData.indianStates.map(state => `<option value="${state}">${state}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">PIN Code</label>
              <input type="text" class="form-control" pattern="[0-9]{6}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Country</label>
              <input type="text" class="form-control" value="India" readonly>
            </div>
          </div>
        </div>

        <div class="checkout-section">
          <h3>Payment Method</h3>
          <div class="payment-methods">
            <div class="payment-method" onclick="selectPaymentMethod('razorpay')">
              <h4>Razorpay</h4>
              <p>Pay securely with Razorpay</p>
            </div>
            <div class="payment-method" onclick="selectPaymentMethod('paytm')">
              <h4>Paytm</h4>
              <p>Pay with Paytm wallet</p>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn--primary btn--full-width">Complete Order</button>
      </form>
    </div>
  `;

  document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
  modal.classList.add('active');
}

function selectPaymentMethod(method) {
  selectedPaymentMethod = method;
  document.querySelectorAll('.payment-method').forEach(pm => pm.classList.remove('selected'));
  event.target.closest('.payment-method').classList.add('selected');
}

function handleCheckout(e) {
  e.preventDefault();
  
  if (!selectedPaymentMethod) {
    showNotification('Please select a payment method');
    return;
  }

  // Simulate payment processing
  const orderId = 'AMP' + Date.now();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Clear cart
  cart = [];
  updateCartDisplay();
  saveCart();
  
  // Show success
  closeCheckoutModal();
  showOrderConfirmation(orderId, total);
}

function showOrderConfirmation(orderId, total) {
  const modal = document.getElementById('checkout-modal');
  const content = document.getElementById('checkout-modal-content');
  
  content.innerHTML = `
    <div class="checkout-form">
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 3rem; color: var(--color-sage-green); margin-bottom: 1rem;">✓</div>
        <h2 style="color: var(--color-sage-green);">Order Confirmed!</h2>
        <p style="margin: 1rem 0;">Thank you for supporting our artisans!</p>
        <div style="background: var(--color-surface); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Total:</strong> ₹${total.toLocaleString()}</p>
          <p><strong>Payment Method:</strong> ${selectedPaymentMethod}</p>
        </div>
        <p style="color: var(--color-text-secondary); font-size: 0.9rem;">
          You will receive a confirmation email shortly. Your order will be processed within 2-3 business days.
        </p>
        <button class="btn btn--primary" onclick="closeCheckoutModal(); showPage('home');">Continue Shopping</button>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('active');
}

function loadStatistics() {
  document.getElementById('stat-products').textContent = appData.stats.productsSold;
  document.getElementById('stat-communities').textContent = appData.stats.communitiesImpacted;
  document.getElementById('stat-artisans').textContent = appData.stats.artisansSupported;
  document.getElementById('stat-countries').textContent = appData.stats.countriesReached;
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-sage-green);
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Close modals when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    closeModal();
    closeAuthModal();
    closeCheckoutModal();
  }
});

// Close cart when clicking outside
document.addEventListener('click', function(e) {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartIcon = document.querySelector('.cart-icon');
  
  if (cartSidebar.classList.contains('active') && 
      !cartSidebar.contains(e.target) && 
      !cartIcon.contains(e.target)) {
    toggleCart();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeAuthModal();
    closeCheckoutModal();
    if (document.getElementById('cart-sidebar').classList.contains('active')) {
      toggleCart();
    }
  }
});

// Global functions for HTML onclick handlers
window.showPage = showPage;
window.showProductModal = showProductModal;
window.closeModal = closeModal;
window.showArtistProfile = showArtistProfile;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.toggleCart = toggleCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.proceedToCheckout = proceedToCheckout;
window.showAuthModal = showAuthModal;
window.showSignupForm = showSignupForm;
window.closeAuthModal = closeAuthModal;
window.selectPaymentMethod = selectPaymentMethod;
window.closeCheckoutModal = closeCheckoutModal;