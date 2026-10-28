import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[var(--fg)] text-[var(--bg)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[var(--muted)]/30">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl tracking-wide text-white">
              Loom & Lane 1028
            </h3>
            <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">
              Sustainable everyday cotton basics designed with care, built for comfort, and made to last a lifetime.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#collection" className="text-[var(--muted)] hover:text-white transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#about" className="text-[var(--muted)] hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[var(--muted)] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              Join the Journal
            </h4>
            <p className="text-sm text-[var(--muted)]">
              Receive updates on new cotton drops, private sales, and workshop stories.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[var(--accent)] py-2">
                <Check className="w-4 h-4" /> Thank you for subscribing.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-[var(--muted)]/20 border border-[var(--muted)]/40 rounded px-4 py-2 text-sm text-white placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] flex-1"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 rounded transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--muted)] space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Loom & Lane 1028. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
