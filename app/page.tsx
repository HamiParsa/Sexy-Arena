// pages/index.tsx
"use client";

import Image from "next/image";

export default function GamingSexyLandingFull() {
 

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-[#0a0a0a] via-[#111111] to-[#000000] text-white font-sans relative overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight drop-shadow-[0_0_40px#ff00dd]">
          SΞXY ARENA
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl opacity-80 max-w-2xl">
          Ultimate Gaming Experience • 240Hz rigs • Pro Tournaments • Fiber
          Internet
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button className="px-8 py-3 bg-linear-to-r from-[#ff00dd] to-[#00f1ff] text-black font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform">
            Enter Arena
          </button>
          <button className="px-8 py-3 border border-white/20 backdrop-blur-md rounded-2xl font-semibold hover:scale-105 transition-transform">
            Book a Slot
          </button>
        </div>

        {/* Neon Floating Orbs */}
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-60 h-60 bg-cyan-500 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>
      </section>

      {/* Features / Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            title: "Network",
            value: "Fiber 10Gb",
            desc: "Ping <10ms to all major servers",
            color: "#00f1ff",
          },
          {
            title: "Hardware",
            value: "RTX 4090 • Ryzen 9",
            desc: "240Hz monitors • Pro peripherals",
            color: "#ff00dd",
          },
          {
            title: "Arena",
            value: "Team & Solo Pods",
            desc: "Soundproof booths, ergonomic chairs",
            color: "#8fff00",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-lg"
          >
            <div
              className="text-sm font-semibold uppercase"
              style={{ color: item.color }}
            >
              {item.title}
            </div>
            <div className="mt-3 text-3xl font-bold">{item.value}</div>
            <div className="mt-2 text-sm opacity-80">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Gallery / Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
          Arena Highlights
        </h2>
        <p className="mt-2 text-center opacity-80">
          A sneak peek at our rigs, booths and tournament stages.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Pro Pod Setup",
              image:
                "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/clients/asm-sanantonio/battlefortexas_182_6bcb89f5-6ebe-404e-be9b-57c76cecb1a7.jpg",
            },
            {
              title: "Tournament Stage",
              image:
                "https://cdn1.matadornetwork.com/blogs/1/2022/02/Computer-Stockholm-Sweden-Space-gaming-entertainment-center.jpg.jpg",
            },
            {
              title: "Team Booth",
              image:
                "https://www.visitdubai.com/-/media/gathercontent/poi/t/the-city-gaming-center/the-city-gaming-center-3-poi-supplied-july-2025.jpg",
            },
            {
              title: "VR Corner",
              image:
                "https://www.harrisburgu.edu/wp-content/uploads/21-05-28_3671_19_S_3rd_St_Interior_2-1600x686.jpg",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="block rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_#ff00dd] transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-center font-semibold">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* System Specs Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Our Power Rigs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Neon Beast",
              image: "https://www.pcworld.com/wp-content/uploads/2025/04/pcw08_Asus-Gaming-PC.jpg?quality=50&strip=all",
              specs: {
                CPU: "Ryzen 9 7950X",
                GPU: "RTX 4090",
                RAM: "64GB DDR5",
                Monitor: '240Hz 27"',
                Peripherals: "Pro Keyboard & Mouse",
              },
              color: "#ff00dd",
            },
            {
              name: "Cyber Phantom",
              image: "https://d1q3zw97enxzq2.cloudfront.net/images/high-performance-gaming-pc-desk-.width-1500.format-webp.webp",
              specs: {
                CPU: "Intel i9 14900K",
                GPU: "RTX 4080",
                RAM: "32GB DDR5",
                Monitor: '240Hz 24"',
                Peripherals: "Pro Keyboard & Mouse",
              },
              color: "#00f1ff",
            },
            {
              name: "Vortex Core",
              image: "https://images.prismic.io/leetdesk/c5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg?auto=compress,format&rect=0,374,4000,2250&w=1920&h=1080",
              specs: {
                CPU: "Ryzen 9 7900X",
                GPU: "RTX 4070 Ti",
                RAM: "32GB DDR5",
                Monitor: '240Hz 27"',
                Peripherals: "Pro Keyboard & Mouse",
              },
              color: "#8fff00",
            },
          ].map((rig) => (
            <div
              key={rig.name}
              className="bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
            >
              <div className="relative h-56">
                <Image
                  src={rig.image}
                  alt={rig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold" style={{ color: rig.color }}>
                  {rig.name}
                </h3>
                <ul className="mt-2 text-sm opacity-80 space-y-1">
                  {Object.entries(rig.specs).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          What Players Say
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-lg">
            <p className="text-lg">
              Best rigs I’ve touched — tournament ready and zero lag. The vibe
              is unmatched.
            </p>
            <footer className="mt-3 text-sm opacity-80">
              — Ava, Pro Player
            </footer>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-lg">
            <p className="text-lg">
              Booked a team slot for training. Soundproof pods and 240Hz
              monitors were game changers.
            </p>
            <footer className="mt-3 text-sm opacity-80">— Team Nova</footer>
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20 bg-black/30 rounded-3xl backdrop-blur-md border border-white/10">
        <h3 className="text-2xl font-bold text-center">Reserve Your Station</h3>
        <p className="mt-2 text-center opacity-80">
          Instant booking, group discounts, and pro setups ready on arrival.
        </p>
        <form className="mt-6 grid gap-4">
          <input
            className="p-3 rounded-lg bg-black/50 border border-white/10"
            placeholder="Full Name"
          />
          <input
            className="p-3 rounded-lg bg-black/50 border border-white/10"
            placeholder="Email or Phone"
          />
          <select className="p-3 rounded-lg bg-black/50 border border-white/10">
            <option>Solo Pod (1 hour)</option>
            <option>Team Booth (2 hours)</option>
            <option>Tournament Slot</option>
          </select>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-linear-to-r from-[#ff00dd] to-[#00f1ff] text-black font-bold hover:scale-105 transition-transform"
          >
            Book Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-20 bg-black/50 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div
              className="text-2xl font-bold"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              SΞXY ARENA
            </div>
            <div className="mt-2 text-sm opacity-80">
              123 Pulse St • Metropolis • (555) 123-4567
            </div>
          </div>
          <div className="flex gap-4">
            <a className="text-sm opacity-80 hover:opacity-100 cursor-pointer">
              T&C
            </a>
            <a className="text-sm opacity-80 hover:opacity-100 cursor-pointer">
              Privacy
            </a>
            <a className="text-sm opacity-80 hover:opacity-100 cursor-pointer">
              Careers
            </a>
          </div>
        </div>
      </footer>

      {/* Scoped Styles */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 3rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
