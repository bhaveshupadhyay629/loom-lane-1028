export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--fg)] leading-tight">
              Honest garments made to live in, season after season.
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              At Loom & Lane 1028, we believe that true style lies in simplicity and quality craftsmanship. We started with a single mission: to create the ultimate everyday cotton basics without compromise.
            </p>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Every tee, shirt, and trouser in our collection is crafted from 100% natural, sustainable cotton fibers sourced responsibly. We partner with small-scale textile mills that share our commitment to fair labor practices and timeless design.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border)]">
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[var(--fg)]">100%</p>
                <p className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider">Natural Cotton</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[var(--fg)]">Small</p>
                <p className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider">Batch Dyeing</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[var(--fg)]">Zero</p>
                <p className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider">Plastic Packaging</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg bg-[var(--border)] overflow-hidden relative flex items-center justify-center p-8 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--fg)]/10 mix-blend-multiply" />
              <div className="relative z-10 space-y-4 max-w-sm">
                <span className="font-serif text-6xl text-[var(--accent)]">“</span>
                <p className="font-serif text-xl sm:text-2xl text-[var(--fg)] italic leading-snug">
                  Clothing should feel like a natural extension of yourself. Soft, durable, and unpretentious.
                </p>
                <p className="text-xs font-sans tracking-widest text-[var(--muted)] uppercase">
                  — Loom & Lane Studio
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
