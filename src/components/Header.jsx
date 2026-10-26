import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="app-header">
      <div className="brand-block">
        <div className="brand-avatar">
          {/* Authentic Logo */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB496m5YYYWwcqLL8Si5MQ6Or_MHYDR6in_va90gVH-BpkU8OrEsNl2atzu4MCz87UKjB_9ZjjtZdNQ6F4F_FtCu8CYyKXONIF-gdFkpwjgggDkj6HVf49YzZaxp_BdxquSlwO-xYQUXHSTw6gEbN7PdZYKSnuN1reaxfkQQdd32NUm5KQ6lkmlQ1o_3Gh1jBbnhEAZ4Y8PNOAssqGbm3lNXQstobxyF2pDhtG9oec"
            alt="شعار مطعم أبو يونس السوري"
          />
        </div>
        <div className="brand-meta">
          <span className="brand-title">أبو يونس السوري</span>
          <span className="brand-branch">
            <span className="material-symbols-outlined">location_on</span>
            <span>فيصل - شارع العشرين</span>
          </span>
        </div>
      </div>

      <div className="header-actions">
        {/* Direct Call Button */}
        <a
          href="tel:01154857201"
          className="icon-button call-btn"
          aria-label="الاتصال بالفرع"
          title="اتصل بالفرع مباشرة"
        >
          <span className="material-symbols-outlined">call</span>
        </a>

        {/* Cart Trigger */}
        <button
          onClick={onOpenCart}
          className="icon-button"
          aria-label="عرض سلة الطلبات"
          title="سلة الطلبات"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
