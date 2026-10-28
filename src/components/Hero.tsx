export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] border-b border-[var(--border)] pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--border)] text-[var(--muted)] text-xs font-medium tracking-wider uppercase">
            Sustainable Everyday Essentials
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[var(--fg)] tracking-tight leading-tight">
            Thoughtfully woven <br />
            <span className="italic text-[var(--accent)]">cotton basics</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto font-sans leading-relaxed">
            Welcome to Loom & Lane 1028. We craft enduring tees, relaxed shirts, and tailored trousers designed for effortless daily living.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#collection"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-md transition-colors text-center shadow-sm"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[var(--border)] text-[var(--fg)] font-medium rounded-md transition-colors text-center border border-[var(--border)]"
            >
              Our Story
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
