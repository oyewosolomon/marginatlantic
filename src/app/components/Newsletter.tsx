import React, { useState } from 'react';

// Types
interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

interface NewsletterFormData {
  email: string;
  agreedToTerms: boolean;
}

// ContactLink component
const ContactLink: React.FC<ContactLinkProps> = ({ href, children }) => (
  <a 
    href={href}
    className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
  >
    {children}
  </a>
);

// Additional Contact Section
const AdditionalContact: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Additional Contact Information
      </h2>
      <ul className="space-y-4 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <p>
            For media inquiries please email{' '}
            <ContactLink href="mailto:press@flexport.com">
              press@flexport.com
            </ContactLink>
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <p>
            Interested in becoming a partner?{' '}
            <ContactLink href="/submit-inquiry">
              Submit an inquiry
            </ContactLink>
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <p>
            Have a security issue?{' '}
            <ContactLink href="/security">
              Tell us about it here
            </ContactLink>
          </p>
        </li>
      </ul>
    </section>
  );
};

// Newsletter Section
const NewsletterSignup: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    agreedToTerms: false,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter form submitted:', formData);
  };

  return (
    <section className="bg-[#0A2533] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 rounded-full bg-[#5CEAD4] opacity-20 animate-pulse"></div>
             {/* <Image src="/assets/logo.png" alt='Logo' width={120} height={60} /> */}
           
          </div>
          <h2 className="text-3xl font-bold">
            Sign Up for Newsletter<br /> and Market Updates
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-gray-300">
            Why search for updates when we can send them to you?
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="workEmail" className="block text-sm mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="workEmail"
                placeholder="Enter your work email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{' '}
                <ContactLink href="/terms">Terms of Service</ContactLink>
                {' '}and{' '}
                <ContactLink href="/privacy">Privacy Policy</ContactLink>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-400">*Required field</p>
        </div>
      </div>
    </section>
  );
};

// Export both components
export { AdditionalContact, NewsletterSignup };