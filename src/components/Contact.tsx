import { Mail, MapPin, Globe } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--fg)]">
            We would love to hear from you
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)]">
            Whether you have questions about our cotton basics, sizing guidance, or wholesale inquiries, our studio team is always here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Email */}
          <div className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--border)] text-center space-y-4 hover:border-[var(--accent)] transition-colors">
            <div className="w-12 h-12 mx-auto rounded-full bg-[var(--bg)] flex items-center justify-center text-[var(--accent)]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[var(--fg)]">Email Us</h3>
            <p className="text-sm text-[var(--muted)]">
              For customer care and general inquiries:
            </p>
            <a
              href="mailto:hello@loomandlane1028.com"
              className="inline-block text-sm font-medium text-[var(--accent)] hover:underline"
            >
              hello@loomandlane1028.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--border)] text-center space-y-4 hover:border-[var(--accent)] transition-colors">
            <div className="w-12 h-12 mx-auto rounded-full bg-[var(--bg)] flex items-center justify-center text-[var(--accent)]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[var(--fg)]">Studio Location</h3>
            <p className="text-sm text-[var(--muted)]">
              Visit our workshop showroom by appointment:
            </p>
            <p className="text-sm font-medium text-[var(--fg)]">
              412 Artisan Way, Suite 2B<br />
              Portland, OR 97209
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--border)] text-center space-y-4 hover:border-[var(--accent)] transition-colors">
            <div className="w-12 h-12 mx-auto rounded-full bg-[var(--bg)] flex items-center justify-center text-[var(--accent)]">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[var(--fg)]">Social</h3>
            <p className="text-sm text-[var(--muted)]">
              Follow our daily journal and new drops:
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-[var(--accent)] hover:underline"
            >
              @loomandlane1028
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
