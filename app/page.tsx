// pages/index.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// ============================================================
// MAIN COMPONENT - No external icon libraries needed! 🎯
// ============================================================
export default function KaizenGaming() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("solo");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const packages = {
    solo: { name: "Solo Session", price: "$25", duration: "1 Hour", features: ["Private Pod", "RTX 4090", "240Hz Display"] },
    team: { name: "Team Booth", price: "$80", duration: "2 Hours", features: ["5 Players", "Team Comms", "Private Space"] },
    tournament: { name: "Tournament", price: "$150", duration: "4 Hours", features: ["Stage Access", "Prize Pool", "Streaming"] },
    vip: { name: "VIP Package", price: "$300", duration: "Full Day", features: ["All Access", "Premium Support", "Refreshments"] },
  };

  const rigs = [
    {
      name: "The Silent",
      image: "https://www.pcworld.com/wp-content/uploads/2025/04/pcw08_Asus-Gaming-PC.jpg?quality=50&strip=all",
      cpu: "Ryzen 9 7950X",
      gpu: "RTX 4090",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      price: "$25/hr",
      color: "from-amber-100 to-rose-100",
    },
    {
      name: "The Focus",
      image: "https://d1q3zw97enxzq2.cloudfront.net/images/high-performance-gaming-pc-desk-.width-1500.format-webp.webp",
      cpu: "Intel i9 14900K",
      gpu: "RTX 4080",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      price: "$20/hr",
      color: "from-slate-100 to-amber-100",
    },
    {
      name: "The Pure",
      image: "https://images.prismic.io/leetdesk/c5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg?auto=compress,format&rect=0,374,4000,2250&w=1920&h=1080",
      cpu: "Ryzen 9 7900X",
      gpu: "RTX 4070 Ti",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      price: "$18/hr",
      color: "from-rose-100 to-stone-100",
    },
    {
      name: "The Zenith",
      image: "https://www.pcworld.com/wp-content/uploads/2025/04/pcw08_Asus-Gaming-PC.jpg?quality=50&strip=all",
      cpu: "Ryzen 9 7950X3D",
      gpu: "RTX 4090",
      ram: "64GB DDR5",
      storage: "4TB NVMe",
      price: "$35/hr",
      color: "from-amber-100 to-stone-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] font-sans overflow-x-hidden">
      
      {/* ==========================================================
          HEADER
          ========================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-black/20 rounded-full flex items-center justify-center font-serif text-lg group-hover:border-black/40 transition">
              𓃥
            </div>
            <span className="text-xl font-light tracking-[0.3em] uppercase">KAIZEN</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "Services", "Rigs", "Tournaments", "Community", "Testimonials", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider text-black/50 hover:text-black transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 right-0 h-2px bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-5 py-2 text-sm font-light text-black/50 hover:text-black transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-light tracking-wider hover:bg-black/80 transition-all duration-300 hover:scale-95">
              Join Now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-2xl"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden fixed top-[73px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 transition-all duration-500 ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="p-6 space-y-4">
            {["Home", "Services", "Rigs", "Tournaments", "Community", "Testimonials", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm tracking-wider text-black/50 hover:text-black transition-colors py-2 border-b border-black/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 rounded-full bg-black text-white text-sm font-light tracking-wider hover:bg-black/80 transition">
              Join Now
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================================
          SECTION 1: HERO
          ========================================================== */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-2px bg-black/20"></span>
                <span className="text-xs tracking-[0.3em] uppercase text-black/40 font-light">
                  Est. 2026 • Premium Gaming
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light leading-tight">
                <span className="block text-2xl md:text-3xl text-black/40 mb-2">Where</span>
                <span className="block">Precision</span>
                <span className="block bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Meets Calm</span>
              </h1>
              <p className="mt-6 text-lg text-black/50 max-w-md">
                Premium gaming sanctuary with RTX 4090 rigs, 240Hz displays, and fiber internet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition flex items-center gap-2">
                  Book Now
                  <span className="group-hover:translate-x-1 transition">→</span>
                </button>
                <button className="px-8 py-4 border border-black/10 rounded-full hover:bg-black/5 transition">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex gap-8">
                <div><div className="text-2xl font-light">500+</div><div className="text-xs text-black/40">👥 Members</div></div>
                <div><div className="text-2xl font-light">50+</div><div className="text-xs text-black/40">🏆 Tournaments</div></div>
                <div><div className="text-2xl font-light">100+</div><div className="text-xs text-black/40">👑 Pro Players</div></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-3xl bg-linear-to-br from-amber-100/50 to-rose-100/50 flex items-center justify-center relative overflow-hidden">
                <span className="text-9xl text-black/5">◈</span>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-white/60 to-transparent">
                  <div className="text-sm font-light">Premium Gaming Sanctuary</div>
                  <div className="text-xs text-black/40">Minimalist. Luxurious. Focused.</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm flex items-center justify-center animate-float text-3xl">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm flex items-center justify-center animate-float-delayed text-2xl">
                🎯
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: PHILOSOPHY
          ========================================================== */}
      <section id="philosophy" className="py-20 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light">
            <span className="italic text-black/40"></span>
            Excellence is not an act,
            <br />
            <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">but a habit</span>
            <span className="italic text-black/40"></span>
          </h2>
          <p className="mt-6 text-lg text-black/50 max-w-2xl mx-auto">
            We believe the best gaming experiences emerge from clarity, not chaos.
            Our spaces eliminate distraction and amplify focus.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "Clarity", desc: "Minimalist environments that sharpen your mind" },
              { icon: "💻", title: "Precision", desc: "Top-tier hardware tuned to perfection" },
              { icon: "❤️", title: "Tranquility", desc: "A space where you can truly perform" },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white/80 transition">
                <div className="text-4xl mx-auto">{item.icon}</div>
                <div className="mt-3 text-xl font-light">{item.title}</div>
                <div className="mt-2 text-sm text-black/40">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: STATS
          ========================================================== */}
      <section id="stats" className="py-20 px-6 bg-white/30 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Built for <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Peak Performance</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "⚡", value: "10Gb/s", label: "Fiber Speed" },
              { icon: "🖥️", value: "240Hz", label: "Refresh Rate" },
              { icon: "💻", value: "RTX 4090", label: "GPU Power" },
              { icon: "🎯", value: "0.5ms", label: "Input Lag" },
              { icon: "🏆", value: "24/7", label: "Tournaments" },
              { icon: "👑", value: "100+", label: "Pro Players" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition">
                <div className="text-3xl">{stat.icon}</div>
                <div className="mt-2 text-xl font-light">{stat.value}</div>
                <div className="text-xs text-black/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: SERVICES
          ========================================================== */}
      <section id="services" className="py-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-2 text-center text-black/50">Everything you need for the ultimate gaming session</p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Pro Hardware", desc: "RTX 4090, Ryzen 9, 64GB RAM", price: "From $25/hr" },
              { icon: "🎧", title: "Sound Pods", desc: "Fully soundproofed private booths", price: "From $40/hr" },
              { icon: "🏆", title: "Tournaments", desc: "Pro competition stages", price: "From $150/event" },
              { icon: "📷", title: "Streaming", desc: "Green screen & 4K cameras", price: "From $60/hr" },
            ].map((service) => (
              <div key={service.title} className="p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition hover:-translate-y-1">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-3 text-lg font-light">{service.title}</h3>
                <p className="text-sm text-black/40">{service.desc}</p>
                <div className="mt-3 text-sm font-light text-amber-600">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 5: RIGS
          ========================================================== */}
      <section id="rigs" className="py-20 px-6 bg-white/30 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Our <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Power Rigs</span>
          </h2>
          <p className="mt-2 text-center text-black/50">Premium hardware tuned for competitive gaming</p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rigs.map((rig) => (
              <div 
                key={rig.name} 
                className="group bg-white/50 rounded-2xl overflow-hidden border border-black/5 hover:border-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
              >
                <div className={`relative h-52 bg-linear-to-br ${rig.color} overflow-hidden`}>
                  <Image
                    src={rig.image}
                    alt={rig.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-xs font-light text-white">
                    {rig.price}
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-light text-white drop-shadow-lg">{rig.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    <div>
                      <div className="text-xs text-black/30">CPU</div>
                      <div className="font-light text-sm truncate">{rig.cpu}</div>
                    </div>
                    <div>
                      <div className="text-xs text-black/30">GPU</div>
                      <div className="font-light text-sm">{rig.gpu}</div>
                    </div>
                    <div>
                      <div className="text-xs text-black/30">RAM</div>
                      <div className="font-light text-sm">{rig.ram}</div>
                    </div>
                    <div>
                      <div className="text-xs text-black/30">Storage</div>
                      <div className="font-light text-sm">{rig.storage}</div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2.5 rounded-full bg-black/5 text-sm font-light hover:bg-black/10 transition-colors flex items-center justify-center gap-2">
                    <span>📦</span>
                    Book This Rig
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: TECHNOLOGY
          ========================================================== */}
      <section id="tech" className="py-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Technology</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { icon: "🌐", title: "Fiber Network", desc: "10Gb/s enterprise-grade internet", detail: "<10ms ping to all servers" },
              { icon: "🖥️", title: "Display Tech", desc: "240Hz OLED with 0.5ms response", detail: "G-Sync Ultimate" },
              { icon: "🎧", title: "Audio System", desc: "Dolby Atmos surround sound", detail: "Noise-cancelling headsets" },
              { icon: "⚙️", title: "Smart Lighting", desc: "Adaptive RGB lighting", detail: "Custom profiles per player" },
            ].map((tech) => (
              <div key={tech.title} className="p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition">
                <div className="flex gap-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div>
                    <h3 className="font-light">{tech.title}</h3>
                    <p className="text-sm text-black/50">{tech.desc}</p>
                    <div className="mt-1 text-xs text-black/30">{tech.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 7: TOURNAMENTS
          ========================================================== */}
      <section id="tournaments" className="py-20 px-6 bg-white/30 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Upcoming <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Tournaments</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎮", name: "Valorant Championship", prize: "$10,000", date: "Aug 30, 2026", slots: "12/16" },
              { icon: "🔫", name: "CS2 Pro League", prize: "$15,000", date: "Sep 5, 2026", slots: "8/16" },
              { icon: "🏗️", name: "Fortnite Cup", prize: "$8,000", date: "Sep 12, 2026", slots: "15/20" },
              { icon: "⚔️", name: "League of Legends", prize: "$12,000", date: "Sep 20, 2026", slots: "5/10" },
              { icon: "🗡️", name: "Dota 2 Invitational", prize: "$20,000", date: "Sep 28, 2026", slots: "3/8" },
            ].map((tournament) => (
              <div key={tournament.name} className="p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition hover:-translate-y-1">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tournament.icon}</span>
                    <div>
                      <h3 className="font-light">{tournament.name}</h3>
                      <div className="text-sm text-black/40">{tournament.date}</div>
                    </div>
                  </div>
                  <div className="text-sm font-light text-amber-600">{tournament.prize}</div>
                </div>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-black/40">{tournament.slots} slots</span>
                  <button className="px-4 py-1 rounded-full border border-black/10 text-xs hover:bg-black/5 transition flex items-center gap-1">
                    Register <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 8: COMMUNITY
          ========================================================== */}
      <section id="community" className="py-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Our <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="mt-2 text-center text-black/50">Meet our professional players and content creators</p>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { name: "Sarah Chen", role: "Pro Valorant", rank: "Radiant" },
              { name: "Marcus Rivera", role: "CS2 Pro", rank: "Global Elite" },
              { name: "Alex Kim", role: "League Player", rank: "Challenger" },
              { name: "Jordan Taylor", role: "Fortnite Pro", rank: "World Cup" },
            ].map((member) => (
              <div key={member.name} className="text-center p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition hover:-translate-y-2">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-100 to-rose-100 mx-auto flex items-center justify-center text-2xl font-light">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-light">{member.name}</h3>
                <div className="text-sm text-black/40">{member.role}</div>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-black/5 text-xs">{member.rank}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 9: TESTIMONIALS
          ========================================================== */}
      <section id="testimonials" className="py-20 px-6 bg-white/30 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            What Players <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { quote: "The minimalist environment helped me focus like never before. No distractions, just performance.", author: "Sarah Kim", role: "Pro Player" },
              { quote: "Finally a gaming space that feels premium without the sensory overload. Pure class.", author: "James Park", role: "Content Creator" },
              { quote: "The hardware is insane but the calm atmosphere is what keeps me coming back.", author: "Emily Watson", role: "Streamer" },
              { quote: "Best investment I made for my competitive career. The focus here is unmatched.", author: "Daniel Lee", role: "CS2 Pro" },
            ].map((testimonial) => (
              <div key={testimonial.author} className="p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition">
                <div className="text-4xl text-black/5 font-serif"></div>
                <p className="mt--1.5rem text-sm font-light leading-relaxed">{testimonial.quote}</p>
                <div className="mt-4">
                  <div className="font-light">{testimonial.author}</div>
                  <div className="text-sm text-black/40">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 10: PARTNERS
          ========================================================== */}
      <section id="partners" className="py-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Our <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Partners</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["NVIDIA", "Intel", "Logitech", "Razer", "ASUS", "Corsair"].map((partner) => (
              <div key={partner} className="p-6 bg-white/50 rounded-2xl border border-black/5 text-center hover:bg-white transition">
                <div className="text-4xl text-black/10">◈</div>
                <div className="mt-3 text-sm font-light text-black/40">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 11: BOOKING
          ========================================================== */}
      <section id="book" className="py-20 px-6 bg-white/30 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Book Your <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Sanctuary</span>
          </h2>
          
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {Object.entries(packages).map(([key, pkg]) => (
              <button
                key={key}
                onClick={() => setSelectedPackage(key)}
                className={`px-6 py-3 rounded-full text-sm font-light transition flex items-center gap-2 ${
                  selectedPackage === key ? "bg-black text-white" : "bg-black/5 hover:bg-black/10"
                }`}
              >
                <span>📦</span>
                {pkg.name}
              </button>
            ))}
          </div>

          <div className="mt-6 p-6 bg-white/50 rounded-2xl border border-black/5">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <div className="text-xl font-light">{packages[selectedPackage as keyof typeof packages].name}</div>
                <div className="text-sm text-black/40 flex items-center gap-1">
                  <span>🕐</span>
                  {packages[selectedPackage as keyof typeof packages].duration}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {packages[selectedPackage as keyof typeof packages].features.map((feature) => (
                    <span key={feature} className="px-3 py-1 rounded-full bg-white/50 text-xs flex items-center gap-1">
                      <span>✓</span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-3xl font-light">{packages[selectedPackage as keyof typeof packages].price}</div>
            </div>
          </div>

          <form className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30">👤</span>
                <input type="text" placeholder="Full Name" className="w-full p-4 pl-12 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30">✉️</span>
                <input type="email" placeholder="Email" className="w-full p-4 pl-12 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
              </div>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30">📱</span>
              <input type="tel" placeholder="Phone Number" className="w-full p-4 pl-12 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30">📅</span>
              <input type="date" className="w-full p-4 pl-12 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
            </div>
            <button type="submit" className="p-4 rounded-xl bg-black text-white hover:bg-black/80 transition flex items-center justify-center gap-2">
              <span>✈️</span>
              Secure Your Space
            </button>
          </form>
        </div>
      </section>

      {/* ==========================================================
          SECTION 12: FAQ
          ========================================================== */}
      <section id="faq" className="py-20 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center">
            Frequently Asked <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="mt-12 space-y-4">
            {[
              { q: "What are the operating hours?", a: "We're open 24/7, 365 days a year. Competitive gaming never sleeps." },
              { q: "Do I need to bring my own equipment?", a: "No, all rigs come with premium peripherals. You're welcome to bring your own gear." },
              { q: "Is there a minimum age requirement?", a: "16+ for solo sessions, 13+ with guardian supervision for tournaments." },
              { q: "Can I book for a team?", a: "Absolutely! We have dedicated team booths for up to 5 players." },
              { q: "What games are available?", a: "All major titles are pre-installed. We support Valorant, CS2, LoL, Dota 2, and more." },
            ].map((faq) => (
              <div key={faq.q} className="p-6 bg-white/50 rounded-2xl border border-black/5 hover:bg-white transition">
                <h3 className="font-light flex items-center gap-2">
                  <span>❓</span>
                  {faq.q}
                </h3>
                <p className="mt-1 text-sm text-black/40 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 13: CONTACT
          ========================================================== */}
      <section id="contact" className="py-20 px-6 bg-white/30 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-5xl font-light">
                Get in <span className="bg-linear-to-r from-amber-600 to-rose-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="mt-4 text-black/50">Have questions? Were here to help.</p>
              <div className="mt-8 space-y-3 text-sm text-black/50">
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  hello@kaizen.gg
                </div>
                <div className="flex items-center gap-3">
                  <span>📱</span>
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  123 Calm Street, Metropolis
                </div>
              </div>
            </div>
            <div className="bg-white/50 rounded-2xl p-6 border border-black/5">
              <form className="grid gap-4">
                <input type="text" placeholder="Name" className="p-3 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
                <input type="email" placeholder="Email" className="p-3 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
                <textarea placeholder="Message" rows={3} className="p-3 rounded-xl bg-white border border-black/10 focus:border-black/30 focus:outline-none" />
                <button type="submit" className="p-3 rounded-xl bg-black text-white hover:bg-black/80 transition flex items-center justify-center gap-2">
                  <span>✈️</span>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          FOOTER
          ========================================================== */}
      <footer className="py-12 px-6 border-t border-black/5 bg-white/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-black/20 rounded-full flex items-center justify-center font-serif text-sm">𓃥</div>
              <span className="text-sm font-light tracking-[0.3em] uppercase">KAIZEN</span>
            </div>
            <div className="text-xs text-black/30 mt-1">Premium Gaming Sanctuary</div>
          </div>
          <div className="flex gap-6 text-sm text-black/40">
            <a href="#" className="hover:text-black transition">Terms</a>
            <a href="#" className="hover:text-black transition">Privacy</a>
            <a href="#" className="hover:text-black transition">Contact</a>
            <a href="#" className="hover:text-black transition">Careers</a>
          </div>
          <div className="text-sm text-black/30">© 2026 KAIZEN</div>
        </div>
      </footer>
    </div>
  );
}