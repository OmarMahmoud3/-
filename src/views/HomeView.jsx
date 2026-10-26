import React from 'react';
import { CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';

export default function HomeView({
  onSelectCategory,
  onAddToCart,
  cartItems,
  onUpdateQty
}) {
  const bestsellers = MENU_ITEMS.filter((item) => item.popular).slice(0, 4);

  // Helper to get quantity in cart
  const getItemQty = (itemId) => {
    const found = cartItems.filter((i) => i.id === itemId);
    return found.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  return (
    <div className="home-view">
      {/* 1. Hero Card */}
      <section className="hero-card">
        <div className="hero-image-wrap">
          {/* Authentic Syrian Roasted Spit Photography */}
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
            alt="سيخ شاورما سوري مشوي على أصوله"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-tag">
              <span className="material-symbols-outlined">local_fire_department</span>
              <span>شاورما وفراخ مشوية على الفحم</span>
            </div>

            <h1 className="hero-title">
              أصل الشاورما السورية <span>ونكهة الشام الحقيقية</span>
            </h1>

            <p className="hero-desc">
              تتبيلة شامية متوارثة، سيخ شاورما طازج يومياً، وفراخ مشوية ومقرمشة ببهاراتنا الخاصة في قلب فيصل.
            </p>

            <div className="hero-ctas">
              <button
                onClick={() => onSelectCategory('all')}
                className="btn-primary"
              >
                <span className="material-symbols-outlined">restaurant_menu</span>
                <span>تصفح المنيو والأسعار</span>
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('مرحباً مطعم أبو يونس السوري، أود الاستفسار والطلب')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>اطلب واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="trust-strip">
        <div className="trust-item">
          <span className="material-symbols-outlined">verified</span>
          <span>تتبيلة شامية أصيلة</span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <span className="material-symbols-outlined">moped</span>
          <span>دليفري سريع فيصل والهرم</span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span>ناصية الأنصاري - العشرين</span>
        </div>
      </section>

      {/* 3. Quick Categories Strip */}
      <section style={{ marginTop: '14px' }}>
        <div className="section-head">
          <h2 className="section-title">
            <span>أقسام المنيو</span>
          </h2>
          <button
            onClick={() => onSelectCategory('all')}
            className="section-link"
          >
            <span>عرض الكل</span>
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
              arrow_back
            </span>
          </button>
        </div>

        <div className="category-nav no-scrollbar" style={{ padding: '0 var(--gutter)' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="cat-pill"
            >
              <span className="material-symbols-outlined">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Best Sellers (The Curated Highlights) */}
      <section style={{ marginTop: '8px' }}>
        <div className="section-head">
          <h2 className="section-title">
            <span>الأكثر طلباً هذا الأسبوع</span>
          </h2>
          <span className="section-sub">أصناف مختارة بعناية 🔥</span>
        </div>

        <div className="food-list">
          {bestsellers.map((item) => {
            const qty = getItemQty(item.id);

            return (
              <div key={item.id} className="food-card-horizontal">
                <div className="card-top">
                  <div className="card-image-wrap">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    {item.badge && <span className="card-badge">{item.badge}</span>}
                  </div>

                  <div className="card-content">
                    <div>
                      <h3 className="card-title">{item.name}</h3>
                      <p className="card-desc">{item.description}</p>
                    </div>

                    <div className="card-bottom">
                      <div className="card-price-wrap">
                        <span className="card-price">{item.price}</span>
                        <span className="card-currency">ج.م</span>
                      </div>

                      {qty > 0 ? (
                        <div className="stepper">
                          <button
                            onClick={() => onUpdateQty(`${item.id}_${item.defaultVariant || 'default'}`, -1)}
                            className="stepper-btn remove-btn"
                            aria-label="إنقاص"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                              {qty === 1 ? 'delete' : 'remove'}
                            </span>
                          </button>
                          <span className="stepper-val">{qty}</span>
                          <button
                            onClick={() => onAddToCart(item)}
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
                          onClick={() => onAddToCart(item)}
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
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. The Syrian Craft Story */}
      <section className="story-card">
        <div className="story-head">
          <div className="story-icon">
            <span className="material-symbols-outlined">kebab_dining</span>
          </div>
          <div>
            <span className="story-tag">سر الصنعة السورية</span>
            <h3 className="story-title">أبو يونس.. نكهة الشام الحقيقية</h3>
          </div>
        </div>

        <p className="story-p">
          تتبيلة سورية أصيلة بلبن وزيت زيتون وبهارات حلبية خاصة، دجاج طازج يومياً، خبز صاج رقيق ومحمص على النار، وثومية سورية نقية مخفوقة يومياً بدون أي إضافات صناعية.
        </p>

        <div className="story-grid">
          <div className="story-stat">
            <span className="story-stat-num">100%</span>
            <span className="story-stat-lbl">دجاج ولحم بلدي</span>
          </div>
          <div className="story-stat">
            <span className="story-stat-num">يومي</span>
            <span className="story-stat-lbl">سيخ طازج عالفحم</span>
          </div>
          <div className="story-stat">
            <span className="story-stat-num">أصيل</span>
            <span className="story-stat-lbl">تومية وعيش صاج</span>
          </div>
        </div>
      </section>

      {/* 6. Branch Info Card */}
      <section className="branch-card">
        <div className="branch-header">
          <div className="branch-title">
            <span className="material-symbols-outlined" style={{ color: 'var(--accent-ember)' }}>
              storefront
            </span>
            <span>فرع فيصل الرئيسي</span>
          </div>
          <span className="status-pill">
            <span className="status-dot" />
            <span>مفتوح الآن</span>
          </span>
        </div>

        <div className="branch-detail">
          <span className="material-symbols-outlined">location_on</span>
          <span>50 شارع العشرين الرئيسي ناصية الأنصاري - فيصل، الجيزة</span>
        </div>

        <div className="branch-detail">
          <span className="material-symbols-outlined">schedule</span>
          <span>يومياً من 11:00 صباحاً حتى 04:00 فجراً</span>
        </div>

        <div className="branch-detail">
          <span className="material-symbols-outlined">call</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>أرقام التوصيل والدليفري السريع:</span>
            <div className="hotline-pills">
              {RESTAURANT_INFO.phoneNumbers.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="hotline-pill"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--accent-ember)' }}>
                    phone
                  </span>
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
