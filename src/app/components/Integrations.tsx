import React from 'react';

const Integrations: React.FC = () => {
  const integrations = [
    'Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Amazon', 'SAP', 'Oracle', 'NetSuite'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Seamless Integrations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with your favorite platforms and tools
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {integrations.map((platform, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              {/* Replace with actual logos */}
              <div className="h-12 text-gray-400 font-medium">{platform}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            And many more platforms supported through our API
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;