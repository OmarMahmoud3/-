import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onClearCart
}) {
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'pickup'
  const [notes, setNotes] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = orderType === 'delivery' ? 15 : 0;
  const total = subtotal + deliveryFee;

  // Generate WhatsApp Order URL
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*طلب جديد من موقع أبو يونس السوري* 🌯🔥\n\n`;
    message += `*تفاصيل الطلب:*\n`;

    cartItems.forEach((item, index) => {
      const variantText = item.variantName ? ` (${item.variantName})` : '';
      message += `${index + 1}. *${item.name}${variantText}*\n`;
      message += `   الكمية: ${item.quantity} × ${item.price} ج.م = *${item.quantity * item.price} ج.م*\n`;
    });

    message += `\n-----------------------\n`;
    message += `*طريقة الاستلام:* ${orderType === 'delivery' ? 'توصيل للمنزل' : 'استلام من فرع العشرين'}\n`;
    
    if (orderType === 'delivery' && address.trim()) {
      message += `*العنوان بالتفصيل:* ${address.trim()}\n`;
    }

    if (notes.trim()) {
      message += `*ملاحظات الزبون:* ${notes.trim()}\n`;
    }

    message += `-----------------------\n`;
    message += `*المجموع الفرعي:* ${subtotal} ج.م\n`;
    if (orderType === 'delivery') {
      message += `*رسوم التوصيل التقديرية:* ${deliveryFee} ج.م\n`;
    }
    message += `*الإجمالي المطلوب:* *${total} ج.م*\n\n`;
    message += `برجاء تأكيد الطلب ووقت التوصيل المتوقع. شكراً لكم!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-handle" />

        <div className="drawer-header">
          <div className="drawer-title-wrap">
            <span className="material-symbols-outlined" style={{ color: 'var(--accent-ember)' }}>
              shopping_bag
            </span>
            <h2 className="drawer-title">سلة الطلبات</h2>
            <span className="drawer-count">({cartItems.length} صنف)</span>
          </div>

          <button
            onClick={onClose}
            className="drawer-close"
            aria-label="إغلاق السلة"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                  shopping_basket
                </span>
              </div>
              <h3 className="empty-title">السلة فارغة حالياً</h3>
              <p className="empty-desc">
                تصفح منيو أبو يونس السوري وأضف ما تشتهيه من أشهى الشاورما والمشويات.
              </p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cartItems.map((item) => (
                  <div key={item.cartId} className="cart-item">
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      {item.variantName && (
                        <div className="cart-item-variant">{item.variantName}</div>
                      )}
                      <div className="cart-item-price">
                        {item.price} ج.م × {item.quantity} = {item.price * item.quantity} ج.م
                      </div>
                    </div>

                    <div className="stepper">
                      <button
                        onClick={() => onUpdateQty(item.cartId, -1)}
                        className="stepper-btn remove-btn"
                        aria-label="إنقاص الكمية"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                          {item.quantity === 1 ? 'delete' : 'remove'}
                        </span>
                      </button>
                      <span className="stepper-val">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.cartId, 1)}
                        className="stepper-btn add-main"
                        aria-label="زيادة الكمية"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery vs Pickup Selector */}
              <div style={{ marginTop: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  طريقة الاستلام:
                </label>
                <div className="delivery-selector">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`delivery-opt ${orderType === 'delivery' ? 'active' : ''}`}
                  >
                    <span className="material-symbols-outlined">moped</span>
                    <span>توصيل للمنزل</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`delivery-opt ${orderType === 'pickup' ? 'active' : ''}`}
                  >
                    <span className="material-symbols-outlined">store</span>
                    <span>استلام من الفرع</span>
                  </button>
                </div>
              </div>

              {/* Delivery Address Input */}
              {orderType === 'delivery' && (
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    عنوان التوصيل:
                  </label>
                  <input
                    type="text"
                    className="cart-notes-input"
                    placeholder="المنطقة، اسم الشارع، رقم العمارة والدور..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              )}

              {/* Notes Input */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  ملاحظات خاصة على الأكل:
                </label>
                <input
                  type="text"
                  className="cart-notes-input"
                  placeholder="مثال: بدون شطة، زيادة تومية، مخلل إكسترا..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="order-summary-row">
              <span>المجموع الفرعي:</span>
              <span className="font-number">{subtotal} ج.م</span>
            </div>

            {orderType === 'delivery' && (
              <div className="order-summary-row">
                <span>خدمة التوصيل (تقديرية):</span>
                <span className="font-number">{deliveryFee} ج.م</span>
              </div>
            )}

            <div className="order-summary-row total">
              <span>الإجمالي المطلوب:</span>
              <span className="sum-val">{total} ج.م</span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="checkout-btn"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                chat
              </span>
              <span>تأكيد الطلب عبر واتساب ({total} ج.م)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
