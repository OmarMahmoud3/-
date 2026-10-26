import React, { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS, SPOTLIGHT_DEAL } from '../data/menuData';

export default function MenuView({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  cartItems,
  onUpdateQty
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVariants, setSelectedVariants] = useState({});

  // Filter items based on Category & Search Query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle variant selection on a card
  const handleVariantChange = (itemId, variant) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [itemId]: variant
    }));
  };

  // Helper to get active variant of an item
  const getActiveVariant = (item) => {
    if (!item.variants || item.variants.length === 0) return null;
    return selectedVariants[item.id] || item.variants[0];
  };

  // Helper to get quantity for a specific item & variant in cart
  const getCartQuantity = (item, variant) => {
    const variantId = variant ? variant.id : 'default';
    const cartId = `${item.id}_${variantId}`;
    const found = cartItems.find((i) => i.cartId === cartId);
    return found ? found.quantity : 0;
  };

  return (
    <div className="menu-view">
      {/* 1. Live Search Bar */}
      <section className="search-container">
        <div className="search-box">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="search"
            className="search-input"
            placeholder="ابحث في منيو أبو يونس (شاورما، بوكس، فتة، ماريا...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="search-clear"
              aria-label="مسح البحث"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                close
              </span>
            </button>
          )}
        </div>
      </section>

      {/* 2. Sticky Category Bar */}
      <nav className="category-nav-wrap">
        <div className="category-nav no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              <span className="material-symbols-outlined">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Bento Spotlight Deal (Shown when on "all" or "boxes" and no active search) */}
      {(selectedCategory === 'all' || selectedCategory === 'boxes') && !searchQuery && (
        <section className="spotlight-deal" style={{ marginTop: '12px' }}>
          <div className="deal-header">
            <span className="deal-badge">
              <span className="material-symbols-outlined">local_fire_department</span>
              <span>{SPOTLIGHT_DEAL.badge}</span>
            </span>
            <span className="deal-tag">{SPOTLIGHT_DEAL.tag}</span>
          </div>

          <div className="deal-body">
            <div className="deal-info">
              <h3 className="deal-title">{SPOTLIGHT_DEAL.name}</h3>
              <p className="deal-desc">{SPOTLIGHT_DEAL.description}</p>
              <div className="deal-pricing">
                <span className="deal-price">{SPOTLIGHT_DEAL.price}</span>
                <span className="deal-currency">ج.م</span>
                <span className="deal-orig-price">{SPOTLIGHT_DEAL.originalPrice} ج.م</span>
              </div>
            </div>

            <div className="deal-image">
              <img src={SPOTLIGHT_DEAL.image} alt={SPOTLIGHT_DEAL.name} loading="lazy" />
            </div>
          </div>

          <button
            onClick={() => onAddToCart(SPOTLIGHT_DEAL)}
            className="deal-btn"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              add_shopping_cart
            </span>
            <span>أضف بوكس أبو يونس للسلة (300 ج.م)</span>
          </button>
        </section>
      )}

      {/* 4. Filtered Meals Count / Header */}
      <div className="section-head" style={{ paddingTop: '10px' }}>
        <h3 className="section-title">
          <span>قائمة الأصناف</span>
        </h3>
        <span className="section-sub">
          {filteredItems.length} صنف متوفر
        </span>
      </div>

      {/* 5. Food List */}
      {filteredItems.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
              search_off
            </span>
          </div>
          <h4 className="empty-title">لم نجد وجبة مطابقة للبحث!</h4>
          <p className="empty-desc">
            جرب البحث بكلمات أخرى مثل: شاورما، بوكس، فتة، تومية، ماريا.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('all');
            }}
            className="btn-primary"
            style={{ minHeight: '38px', padding: '0 20px', fontSize: '13px', marginTop: '4px' }}
          >
            <span>عرض المنيو كامل</span>
          </button>
        </div>
      ) : (
        <div className="food-list">
          {filteredItems.map((item) => {
            const activeVariant = getActiveVariant(item);
            const currentPrice = activeVariant ? activeVariant.price : item.price;
            const currentCartId = `${item.id}_${activeVariant ? activeVariant.id : 'default'}`;
            const qty = getCartQuantity(item, activeVariant);

            return (
              <article key={item.id} className="food-card-horizontal">
                <div className="card-top">
                  <div className="card-image-wrap">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    {item.badge && <span className="card-badge">{item.badge}</span>}
                  </div>

                  <div className="card-content">
                    <div>
                      <h4 className="card-title">{item.name}</h4>
                      <p className="card-desc">{item.description}</p>
                    </div>

                    {/* Variant Selector Pills if available */}
                    {item.variants && item.variants.length > 0 && (
                      <div className="variant-selector">
                        {item.variants.map((v) => (
                          <button
                            key={v.id}
                            type="button"
                            onClick={() => handleVariantChange(item.id, v)}
                            className={`variant-btn ${activeVariant?.id === v.id ? 'active' : ''}`}
                          >
                            {v.name}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="card-bottom">
                      <div className="card-price-wrap">
                        <span className="card-price">{currentPrice}</span>
                        <span className="card-currency">ج.م</span>
                      </div>

                      {qty > 0 ? (
                        <div className="stepper">
                          <button
                            onClick={() => onUpdateQty(currentCartId, -1)}
                            className="stepper-btn remove-btn"
                            aria-label="إنقاص"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                              {qty === 1 ? 'delete' : 'remove'}
                            </span>
                          </button>
                          <span className="stepper-val">{qty}</span>
                          <button
                            onClick={() => onAddToCart(item, activeVariant)}
                            className="stepper-btn add-main"
                            aria-label="زيادة"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                              add
                            </span>
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(item, activeVariant)}
                          className="add-single-btn"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                            add
                          </span>
                          <span>أضف للطلب</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
