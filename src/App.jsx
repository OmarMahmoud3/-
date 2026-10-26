import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CartDrawer from './components/CartDrawer';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import ContactView from './views/ContactView';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([
    // Initial sample state for delight preview
    {
      cartId: '101_chicken',
      id: 101,
      name: 'شاورما صاروخ سوري XL',
      variantId: 'chicken',
      variantName: 'فراخ',
      price: 75,
      quantity: 1
    },
    {
      cartId: '201_chicken',
      id: 201,
      name: 'وجبة شاورما عربي دبل',
      variantId: 'chicken',
      variantName: 'فراخ',
      price: 150,
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Total items in cart
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Show Toast Helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Add Item to Cart
  const handleAddToCart = (item, variant = null) => {
    const variantId = variant ? variant.id : (item.defaultVariant || 'default');
    const variantName = variant ? variant.name : (item.defaultVariant === 'chicken' ? 'فراخ' : null);
    const price = variant ? variant.price : item.price;
    const cartId = `${item.id}_${variantId}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            cartId,
            id: item.id,
            name: item.name,
            variantId,
            variantName,
            price,
            quantity: 1
          }
        ];
      }
    });

    showToast(`تمت إضافة ${item.name} إلى السلة!`);
  };

  // Update Item Quantity
  const handleUpdateQty = (cartId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.cartId === cartId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigate to category in Menu
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setCurrentTab('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-pill" role="status" aria-live="polite">
          <span className="material-symbols-outlined">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content View with padding for fixed header & nav */}
      <main className="pt-safe pb-safe" style={{ flex: 1 }}>
        {currentTab === 'home' && (
          <HomeView
            onSelectCategory={handleSelectCategory}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onUpdateQty={handleUpdateQty}
          />
        )}

        {currentTab === 'menu' && (
          <MenuView
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onUpdateQty={handleUpdateQty}
          />
        )}

        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Floating Bottom Quick Cart Beacon */}
      {totalCartCount > 0 && !isCartOpen && (
        <aside className="floating-cart-bar">
          <div className="floating-cart-left">
            <div className="cart-icon-bubble">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <div className="floating-cart-details">
              <span className="floating-cart-title">
                {totalCartCount} {totalCartCount === 1 ? 'صنف مختار' : 'أصناف مختارة'}
              </span>
              <span className="floating-cart-price">{cartSubtotal} ج.م</span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="floating-cart-cta"
          >
            <span>مراجعة الطلب</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_back
            </span>
          </button>
        </aside>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onClearCart={handleClearCart}
      />

      {/* Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onChangeTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </>
  );
}
