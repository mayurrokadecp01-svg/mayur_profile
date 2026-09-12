import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { name: 'My Safe Pune', platform: 'Android / iOS', desc: 'Civic safety and emergency assistance application for citizens.', category: 'Civic Safety', slug: 'my-safe-pune' },
  { name: 'Zylem', platform: 'Android', desc: 'Enterprise operations and asset logging application.', category: 'Enterprise Operations', slug: 'zylem' },
  { name: 'Farmers Basket', platform: 'Android', desc: 'Agri-commerce and fresh produce supply chain application.', category: 'Agri-Commerce', slug: 'farmers-basket' },
  { name: 'Baav', platform: 'Mobile', desc: 'Localized marketplace and merchant listings platform.', category: 'Local Marketplace', slug: 'baav' },
  { name: 'NexMoney', platform: 'Android / iOS', desc: 'Digital wallet and multi-utility payment application.', category: 'Fintech & Payments', slug: 'nexmoney' },
  { name: 'NexShopping', platform: 'Android', desc: 'Consumer e-commerce and shopping experience mobile app.', category: 'Consumer E-Commerce', slug: 'nexshopping' },
  { name: 'NexMoney Merchant', platform: 'Android', desc: 'Retailer QR code and transaction management interface.', category: 'Merchant Retail', slug: 'nexmoney-merchant' },
  { name: 'Lisungui', platform: 'Mobile', desc: 'Community healthcare and referral management workflow.', category: 'Community Health', slug: 'lisungui' },
];

const MoreProducts = () => {
  return (
    <section className="w-full py-space-3xl px-gutter" id="more-products">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-space-2xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Shipped Works</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-2xs">More Mobile Products</h2>
          <p className="font-body-md text-body-md text-secondary">Additional applications and products delivered across different domains.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {products.map((product, idx) => (
            <Link key={idx} to={`/work/${product.slug}`} className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl flex flex-col justify-between hover:border-on-surface transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-mono-sm text-[10px] px-space-xs py-0.5 rounded bg-surface-container text-tertiary uppercase">{product.platform}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">{product.name}</h3>
                <p className="font-body-sm text-body-sm text-secondary leading-snug mb-space-sm">{product.desc}</p>
              </div>
              <div>
                <div className="mt-space-md pt-space-xs border-t border-surface-container-highest font-label-mono-sm text-[11px] text-primary mb-space-sm">
                  {product.category}
                </div>
                <div className="inline-flex items-center gap-space-xs text-primary font-label-mono-sm text-[11px] hover:translate-x-1 transition-transform">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;
