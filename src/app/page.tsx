'use client'

import { useState } from 'react'

const menuItems = [
  {
    category: 'Starters',
    dishes: [
      { name: 'Burrata e Pomodoro', desc: 'Fresh burrata, heirloom tomatoes, aged balsamic, basil oil', price: '€18' },
      { name: 'Tartare di Tonno', desc: 'Bluefin tuna tartare, avocado cream, citrus zest, sesame', price: '€24' },
      { name: 'Carpaccio Reale', desc: 'Paper-thin beef carpaccio, truffle shavings, aged parmesan', price: '€22' },
    ]
  },
  {
    category: 'Mains',
    dishes: [
      { name: 'Risotto al Tartufo', desc: 'Carnaroli rice, black truffle, 36-month aged parmesan, butter', price: '€42' },
      { name: 'Branzino al Forno', desc: 'Whole roasted sea bass, salmoriglio, capers, olives, fennel', price: '€48' },
      { name: 'Filetto di Manzo', desc: 'Prime beef tenderloin, bone marrow jus, roasted garlic, herb crust', price: '€58' },
    ]
  },
  {
    category: 'Desserts',
    dishes: [
      { name: 'Tiramisù Classico', desc: 'Our signature recipe, Marsala-soaked savoiardi, mascarpone mousse', price: '€14' },
      { name: 'Panna Cotta al Pistacchio', desc: 'Sicilian pistachio cream, honey, bitter orange', price: '€12' },
      { name: 'Soufflé al Cioccolato', desc: 'Dark 70% chocolate soufflé, vanilla gelato — please allow 15 min', price: '€16' },
    ]
  },
]

const testimonials = [
  { name: 'Isabella M.', text: 'Ardente redefined what a dinner out means to me. Every dish tells a story.', stars: 5 },
  { name: 'James R.', text: 'The tuna tartare was unlike anything I\'ve had in Europe. Impeccable service.', stars: 5 },
  { name: 'Chloé D.', text: 'Booked for our anniversary — the team surprised us with a custom dessert. Extraordinary.', stars: 5 },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Fine dining plating' },
  { src: 'https://images.unsplash.com/photo-1600565193348-f74bd3960b0a?w=800&q=80', alt: 'Interior ambiance' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'Chef at work' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Wine selection' },
  { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80', alt: 'Dessert plating' },
  { src: 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=800&q=80', alt: 'Table setting' },
]

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <main className="bg-cream text-espresso overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-cream/90 backdrop-blur-sm border-b border-gold/20">
        <div className="font-display text-2xl tracking-widest text-espresso">ARDENTE</div>
        <div className="hidden md:flex gap-10 font-sans text-sm tracking-widest uppercase text-espresso/70">
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a href="#reserve" className="hidden md:block border border-gold text-gold font-sans text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-gold hover:text-cream transition-all duration-300">
          Reserve
        </a>
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden text-espresso">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="fixed inset-0 z-40 bg-espresso flex flex-col items-center justify-center gap-10 md:hidden">
          {['Menu', 'About', 'Gallery', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}
              className="font-display text-3xl italic text-cream hover:text-gold transition-colors">
              {item}
            </a>
          ))}
          <a href="#reserve" onClick={() => setNavOpen(false)}
            className="mt-4 border border-gold text-gold font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold hover:text-cream transition-all">
            Reserve a Table
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/20 via-transparent to-espresso/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in">Est. 2018 · Milano</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-none mb-6 text-shadow-gold">
            Where Every<br />
            <em className="text-gold">Bite</em> is a<br />
            Memory
          </h1>
          <p className="font-body text-cream/70 text-xl md:text-2xl italic mt-8 mb-12 leading-relaxed">
            Seasonal Italian cuisine crafted with passion,<br className="hidden md:block" />
            served in a space designed for togetherness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#reserve" className="bg-gold text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-all duration-300">
              Reserve Your Table
            </a>
            <a href="#menu" className="border border-cream/40 text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300">
              Explore Menu
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gold/50 animate-pulse" />
        </div>
      </section>

      {/* ── TAGLINE STRIP ── */}
      <section className="bg-espresso py-8 overflow-hidden">
        <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-display italic text-gold text-xl shrink-0">
              Fine Dining · <span className="text-cream/40">·</span> Seasonal Menus · <span className="text-cream/40">·</span> Handcrafted Cocktails · <span className="text-cream/40">·</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
              Born from a <em>love</em><br />of Italian tradition
            </h2>
            <p className="font-body text-espresso/70 text-xl leading-relaxed mb-6">
              Chef Marco Ardenti grew up watching his grandmother transform humble ingredients into extraordinary meals. After training at Le Cordon Bleu and working under Michelin-starred chefs across Rome and Florence, he returned to create a restaurant that honours that legacy.
            </p>
            <p className="font-body text-espresso/70 text-xl leading-relaxed mb-10">
              At Ardente, we source from local farmers, change our menu with the seasons, and believe the best ingredient is always time — time spent at the table, with the people you love.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/20">
              {[['12+', 'Years of Service'], ['3', 'Michelin Stars'], ['200+', 'Wine Labels']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-4xl text-gold">{num}</div>
                  <div className="font-sans text-xs tracking-widest uppercase text-espresso/50 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3960b0a?w=700&q=80"
              alt="Chef Marco"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold p-8 hidden md:block">
              <p className="font-display italic text-cream text-lg">"Cooking is an act of love."</p>
              <p className="font-sans text-cream/70 text-xs tracking-widest uppercase mt-2">— Chef Marco Ardenti</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-28 bg-espresso">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">Seasonal Selection</p>
            <h2 className="font-display text-5xl md:text-6xl text-cream">Our Menu</h2>
          </div>

          <div className="flex justify-center gap-2 mb-14 flex-wrap">
            {menuItems.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveMenu(i)}
                className={`font-sans text-xs tracking-widest uppercase px-8 py-3 transition-all duration-300 ${
                  activeMenu === i
                    ? 'bg-gold text-cream'
                    : 'border border-cream/20 text-cream/50 hover:border-gold hover:text-gold'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {menuItems[activeMenu].dishes.map((dish) => (
              <div key={dish.name} className="flex justify-between items-start pb-8 border-b border-cream/10 group">
                <div className="flex-1 pr-8">
                  <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">{dish.name}</h3>
                  <p className="font-body italic text-cream/50 text-lg mt-1">{dish.desc}</p>
                </div>
                <div className="font-sans text-gold text-lg whitespace-nowrap">{dish.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a href="#" className="border border-gold text-gold font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-cream transition-all duration-300 inline-block">
              Download Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">Visual Journey</p>
            <h2 className="font-display text-5xl md:text-6xl">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? 'h-80 md:h-full' : 'h-56 md:h-64'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-espresso/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">Guest Voices</p>
            <h2 className="font-display text-5xl">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream border border-gold/20 p-10 hover:border-gold transition-colors">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="font-body italic text-espresso/80 text-xl leading-relaxed mb-8">"{t.text}"</p>
                <p className="font-sans text-xs tracking-widest uppercase text-espresso/40">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVATION ── */}
      <section id="reserve" className="py-28 px-6 bg-espresso">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">Join Us</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-6">Reserve a Table</h2>
          <p className="font-body italic text-cream/50 text-xl mb-14">We look forward to welcoming you. For groups of 8+, please call us directly.</p>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-sans text-sm px-6 py-4 focus:border-gold outline-none transition-colors w-full" />
              <input type="text" placeholder="Last Name" className="bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-sans text-sm px-6 py-4 focus:border-gold outline-none transition-colors w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-sans text-sm px-6 py-4 focus:border-gold outline-none transition-colors w-full" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="bg-transparent border border-cream/20 text-cream/50 font-sans text-sm px-6 py-4 focus:border-gold outline-none transition-colors w-full" />
              <select className="bg-espresso border border-cream/20 text-cream/50 font-sans text-sm px-6 py-4 focus:border-gold outline-none transition-colors w-full">
                <option>Guests: 2</option>
                <option>Guests: 3</option>
                <option>Guests: 4</option>
                <option>Guests: 5</option>
                <option>Guests: 6</option>
                <option>Guests: 7</option>
              </select>
            </div>
            <textarea placeholder="Special requests or dietary requirements..." rows={3} className="bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-sans text-sm px-6 py-4 focus:border-gold outline-none transition-colors w-full resize-none" />
            <button className="w-full bg-gold text-cream font-sans text-xs tracking-widest uppercase py-5 hover:bg-gold-light transition-colors duration-300 mt-2">
              Confirm Reservation
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-espresso border-t border-cream/10 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-cream tracking-widest mb-4">ARDENTE</div>
            <p className="font-body italic text-cream/40 text-lg leading-relaxed mb-6">
              Fine dining in the heart of the city.<br />Reservations recommended.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
                <a key={s} href="#" className="font-sans text-xs tracking-widest uppercase text-cream/30 hover:text-gold transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Visit Us</h4>
            <p className="font-body text-cream/50 text-lg leading-relaxed">
              Via Montenapoleone 12<br />
              20121 Milano, Italy<br /><br />
              +39 02 8765 4321<br />
              hello@ardente.it
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Hours</h4>
            <div className="space-y-3 font-body text-cream/50 text-lg">
              <div className="flex justify-between"><span>Mon – Thu</span><span>18:00 – 23:00</span></div>
              <div className="flex justify-between"><span>Fri – Sat</span><span>18:00 – 00:00</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>12:00 – 22:00</span></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/20 tracking-widest">© 2025 Ardente Ristorante. All rights reserved.</p>
          <p className="font-sans text-xs text-cream/20 tracking-widest">Privacy Policy · Terms of Service</p>
        </div>
      </footer>
    </main>
  )
}
