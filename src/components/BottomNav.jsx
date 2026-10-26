import React from 'react';

export default function BottomNav({ currentTab, onChangeTab, cartCount, onOpenCart }) {
  const tabs = [
    { id: 'home', label: 'الرئيسية', icon: 'home' },
    { id: 'menu', label: 'المنيو', icon: 'restaurant_menu' },
    { id: 'cart', label: 'السلة', icon: 'shopping_bag', isCart: true },
    { id: 'contact', label: 'الفروع', icon: 'storefront' }
  ];

  return (
    <nav className="bottom-nav" aria-label="التنقل الرئيسي">
      {tabs.map((tab) => {
        if (tab.isCart) {
          return (
            <button
              key={tab.id}
              onClick={onOpenCart}
              className={`nav-item ${currentTab === 'cart' ? 'active' : ''}`}
              aria-label="سلة الطلبات"
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              {cartCount > 0 && <span className="nav-cart-badge">{cartCount}</span>}
              <span>{tab.label}</span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`nav-item ${currentTab === tab.id ? 'active' : ''}`}
            aria-current={currentTab === tab.id ? 'page' : undefined}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
