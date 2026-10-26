import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function ContactView() {
  const branch = RESTAURANT_INFO.branches[0];

  return (
    <div className="contact-view" style={{ padding: 'var(--gutter)' }}>
      {/* Branch Main Card */}
      <div className="branch-card" style={{ margin: '0 0 16px 0' }}>
        <div className="branch-header">
          <div className="branch-title">
            <span className="material-symbols-outlined" style={{ color: 'var(--accent-ember)', fontSize: '22px' }}>
              storefront
            </span>
            <span>{branch.name}</span>
          </div>
          <span className="status-pill">
            <span className="status-dot" />
            <span>{branch.status}</span>
          </span>
        </div>

        <div className="branch-detail">
          <span className="material-symbols-outlined">location_on</span>
          <span>{branch.address}</span>
        </div>

        <div className="branch-detail">
          <span className="material-symbols-outlined">schedule</span>
          <span>{branch.hours}</span>
        </div>

        <div className="branch-detail">
          <span className="material-symbols-outlined">moped</span>
          <span>مناطق التغطية السريعة: {RESTAURANT_INFO.deliveryAreas}</span>
        </div>

        {/* Hotlines */}
        <div style={{ marginTop: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
            أرقام الدليفري والخط الساخن:
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {RESTAURANT_INFO.phoneNumbers.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="btn-primary"
                style={{
                  backgroundColor: 'var(--bg-surface-elevated)',
                  color: 'var(--text-cream)',
                  border: '1px solid var(--border-subtle)',
                  justifyContent: 'space-between',
                  padding: '0 16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--accent-ember)', fontSize: '18px' }}>
                    phone
                  </span>
                  <span className="font-number" style={{ fontSize: '15px' }}>{phone.display}</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--accent-ember)', fontWeight: 700 }}>اتصال فوري</span>
              </a>
            ))}
          </div>
        </div>

        {/* WhatsApp & Location Action Buttons */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('مرحباً مطعم أبو يونس السوري، أود الاستفسار والتواصل مع الإدارة')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ flex: 1 }}
          >
            <span className="material-symbols-outlined">chat</span>
            <span>محادثة واتساب</span>
          </a>

          <a
            href={branch.mapQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              flex: 1,
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-cream)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <span className="material-symbols-outlined" style={{ color: 'var(--accent-ember)' }}>
              directions
            </span>
            <span>اتجاهات الخريطة</span>
          </a>
        </div>
      </div>

      {/* Hospitality & Quality Commitment */}
      <div className="story-card" style={{ margin: 0 }}>
        <div className="story-head">
          <div className="story-icon">
            <span className="material-symbols-outlined">health_and_safety</span>
          </div>
          <div>
            <span className="story-tag">ضمان الجودة والنظافة</span>
            <h4 className="story-title">معايير مطبخ أبو يونس</h4>
          </div>
        </div>
        <p className="story-p">
          نلتزم بأعلى معايير سلامة الأغذية، دجاج مبرد طازج مذبوح يومياً، ولحوم بلدية ممتازة بدون خلطات مجهولة. تجهيز الوجبات يتم فورياً أمام عين الزبون في مطبخ مفتوح ونظيف.
        </p>
      </div>
    </div>
  );
}
