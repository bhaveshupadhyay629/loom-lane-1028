import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ShoppingBag, X, Check, Trash2 } from 'lucide-react';
import type { Product } from './data';

interface CartItem {
  product: Product;
  selectedColor: string;
  quantity: number;
}

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleAddToCart = (product: Product, selectedColor: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedColor, quantity: 1 }];
    });
    setIsCartOpen(true);
    setCheckoutComplete(false);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
      <title>Loom & Lane 1028</title>

      <Header cartCount={totalItemsCount} onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1">
        <Hero />
        <div id="collection">
          <Collection onAddToCart={handleAddToCart} />
        </div>
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Slide-over Shopping Bag Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl flex flex-col">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between bg-[var(--surface)]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[var(--accent)]" />
                  <h2 className="font-serif text-lg text-[var(--fg)]">Your Shopping Bag ({totalItemsCount})</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                  className="p-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {checkoutComplete ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[var(--surface)] text-[var(--accent)] flex items-center justify-center border border-[var(--border)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl text-[var(--fg)]">Order Confirmed</h3>
                    <p className="text-sm text-[var(--muted)]">
                      Thank you for shopping with Loom & Lane 1028. We are preparing your cotton basics with care.
                    </p>
                    <button
                      onClick={() => {
                        setCartItems([]);
                        setCheckoutComplete(false);
                        setIsCartOpen(false);
                      }}
                      className="mt-6 px-6 py-3 bg-[var(--accent)] text-white rounded-md text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : cartItems.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <ShoppingBag className="w-12 h-12 mx-auto text-[var(--muted)]/40" />
                    <p className="font-serif text-lg text-[var(--fg)]">Your bag is empty</p>
                    <p className="text-sm text-[var(--muted)]">Explore our everyday cotton pieces and add your favorites.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item, idx) => (
                      <div
                        key={`${item.product.id}-${item.selectedColor}-${idx}`}
                        className="flex gap-4 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] items-center"
                      >
                        <div className="w-16 h-16 rounded bg-[var(--border)] flex items-center justify-center shrink-0">
                          <span className="font-serif text-xs text-[var(--muted)]">L&L</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm text-[var(--fg)] truncate">{item.product.name}</h4>
                          <p className="text-xs text-[var(--muted)] mt-0.5">Color: {item.selectedColor}</p>
                          <p className="text-xs text-[var(--muted)] mt-0.5">Qty: {item.quantity}</p>
                          <p className="text-sm font-medium text-[var(--accent)] mt-1">${item.product.price * item.quantity}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(idx)}
                          aria-label="Remove item"
                          className="p-2 text-[var(--muted)] hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {!checkoutComplete && cartItems.length > 0 && (
                <div className="p-6 border-t border-[var(--border)] bg-[var(--surface)] space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--muted)]">Subtotal</span>
                    <span className="font-serif text-lg font-medium text-[var(--fg)]">${subtotal} USD</span>
                  </div>
                  <p className="text-xs text-[var(--muted)]">Shipping and taxes calculated at checkout.</p>
                  <button
                    onClick={() => setCheckoutComplete(true)}
                    className="w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-md transition-colors text-center shadow-sm"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
