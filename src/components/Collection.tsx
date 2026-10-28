import { useState } from 'react';
import { PRODUCTS } from '../data';
import type { Product } from '../data';
import { Plus, Check } from 'lucide-react';

interface CollectionProps {
  onAddToCart: (product: Product, color: string) => void;
}

export function Collection({ onAddToCart }: CollectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Tees' | 'Shirts' | 'Trousers'>('All');
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColors(prev => ({ ...prev, [productId]: color }));
  };

  const handleAdd = (product: Product) => {
    const chosenColor = selectedColors[product.id] || product.colorNames[0];
    onAddToCart(product, chosenColor);
    
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="collection" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] block mb-2">
            The Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--fg)]">
            Everyday Cotton Essentials
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {(['All', 'Tees', 'Shirts', 'Trousers'] as const).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-[var(--fg)] text-white'
                  : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--fg)] border border-[var(--border)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => {
          const activeColor = selectedColors[product.id] || product.colorNames[0];
          const isAdded = addedItems[product.id];

          return (
            <div 
              key={product.id}
              className="bg-[var(--surface)] rounded-lg border border-[var(--border)] p-6 flex flex-col justify-between transition-all hover:shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {product.category}
                  </span>
                  {product.tag && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--border)] text-[var(--fg)]">
                      {product.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif text-[var(--fg)] mb-2">
                  {product.name}
                </h3>

                <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                {/* Color Swatches */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.colors.map((hex, idx) => {
                      const colorName = product.colorNames[idx];
                      const isSelected = activeColor === colorName;
                      return (
                        <button
                          key={hex}
                          title={colorName}
                          onClick={() => handleColorSelect(product.id, colorName)}
                          className={`w-6 h-6 rounded-full border transition-transform ${
                            isSelected ? 'scale-110 ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--surface)]' : 'border-[var(--border)]'
                          }`}
                          style={{ backgroundColor: hex }}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs text-[var(--muted)] font-medium">
                    {activeColor}
                  </span>
                </div>

                {/* Price and Add to Bag */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <span className="text-lg font-serif font-medium text-[var(--fg)]">
                    ${product.price}
                  </span>

                  <button
                    onClick={() => handleAdd(product)}
                    disabled={isAdded}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isAdded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add to Bag
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
