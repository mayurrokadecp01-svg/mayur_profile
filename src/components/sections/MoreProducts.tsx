import React from 'react';

const products = [
  { name: 'My Safe Pune', platform: 'Android / iOS', desc: 'Civic safety and emergency assistance application for citizens.', category: 'Civic Safety' },
  { name: 'Zylem', platform: 'Android', desc: 'Enterprise operations and asset logging application.', category: 'Enterprise Operations' },
  { name: 'Farmers Basket', platform: 'Android', desc: 'Agri-commerce and fresh produce supply chain application.', category: 'Agri-Commerce' },
  { name: 'Baav', platform: 'Mobile', desc: 'Localized marketplace and merchant listings platform.', category: 'Local Marketplace' },
  { name: 'NexMoney', platform: 'Android / iOS', desc: 'Digital wallet and multi-utility payment application.', category: 'Fintech & Payments' },
  { name: 'NexShopping', platform: 'Android', desc: 'Consumer e-commerce and shopping experience mobile app.', category: 'Consumer E-Commerce' },
  { name: 'NexMoney Merchant', platform: 'Android', desc: 'Retailer QR code and transaction management interface.', category: 'Merchant Retail' },
  { name: 'Lisungui', platform: 'Mobile', desc: 'Community healthcare and referral management workflow.', category: 'Community Health' },
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
            <div key={idx} className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl flex flex-col justify-between hover:border-on-surface transition-colors">
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-mono-sm text-[10px] px-space-xs py-0.5 rounded bg-surface-container text-tertiary uppercase">{product.platform}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">{product.name}</h3>
                <p className="font-body-sm text-body-sm text-secondary leading-snug">{product.desc}</p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-surface-container-highest font-label-mono-sm text-[11px] text-primary">
                {product.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;
