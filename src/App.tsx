/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  Video, 
  Sparkles, 
  Award, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Target,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react';
import { useState, useRef } from 'react';

const SERVICES = [
  {
    id: 'talent',
    icon: <Users className="w-8 h-8" />,
    title: 'Talent Management',
    description: 'We represent and develop actors and creative talents, guiding their careers strategically.',
    tasks: ['Talent representation', 'Career strategy & development', 'Contract negotiation', 'Talent placement & casting', 'Brand partnerships'],
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop' // Black model portrait
  },
  {
    id: 'creative',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Creative & Advertising',
    description: 'Full-scale creative solutions for brands, companies, and organizations.',
    tasks: ['Creative concept development', 'Advertising campaign strategy', 'Scriptwriting and storytelling', 'Brand identity and messaging'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop' // Diverse team collab
  },
  {
    id: 'production',
    icon: <Video className="w-8 h-8" />,
    title: 'Production Services',
    description: 'Complete production process from concept to delivery.',
    tasks: ['Commercial and advertisement production', 'Video production (digital & broadcast)', 'Casting and talent sourcing', 'Directing and cinematography', 'Post-production'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop' // Film set
  }
];

const VALUES = [
  { rank: '01', title: 'Excellence', desc: 'Committed to work at the highest standard.', icon: <Award /> },
  { rank: '02', title: 'Creativity', desc: 'Pushing boundaries and embracing originality.', icon: <Zap /> },
  { rank: '03', title: 'Integrity', desc: 'Operating with transparency and professional accountability.', icon: <ShieldCheck /> },
  { rank: '04', title: 'Growth', desc: 'Dedicated to continuous learning and innovation.', icon: <TrendingUp /> },
  { rank: '05', title: 'Impact', desc: 'Meaningful and lasting impressions through our work.', icon: <Target /> }
];

const TALENTS = [
  {
    name: "Stephnora Boniface",
    role: "Seasoned Actress & Creative Leader",
    bio: "A seasoned actress with over a decade of experience across performance, production, and creative leadership, she brings depth, precision, and commanding presence to every role. Naturally versatile, she seamlessly embodies characters ranging from strong maternal figures to complex modern women, delivering performances that are both authentic and compelling.",
    extra: "Beyond acting, her background as a producer and entrepreneur gives her a unique understanding of storytelling, execution, and on-set excellence.",
    image: "/input_file_0.png"
  },
  {
    name: "Charisma Dauda",
    role: "Dynamic Performer & Afrocentric Icon",
    bio: "A striking and dynamic performer with a distinct Afrocentric presence, she is known for her emotional depth and transformative range. Her strength lies in bringing to life stories rooted in African identity, culture, and lived realities, delivering performances that are both powerful and deeply resonant.",
    extra: "With a natural ability to adapt across roles, she continues to stand out as a bold and authentic voice in contemporary storytelling.",
    image: "/input_file_1.png"
  }
];

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle?: string, number?: string }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-4">
      {number && <span className="font-display text-brand-gold text-lg tracking-widest">{number}</span>}
      <div className="h-[1px] w-12 bg-brand-gold/30" />
      {subtitle && <span className="uppercase tracking-[0.3em] text-xs text-white/50">{subtitle}</span>}
    </div>
    <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight uppercase tracking-tight">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative bg-brand-black min-h-screen selection:bg-brand-gold selection:text-black font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-gradient-to-b from-brand-black/80 to-transparent backdrop-blur-sm pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <span className="font-display text-2xl font-black tracking-tighter uppercase">
            Altior<span className="text-brand-gold">.</span>
          </span>
        </motion.div>

        <div className="hidden md:flex gap-12 pointer-events-auto items-center">
          {['About', 'Talents', 'Services', 'Vision', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, color: '#D4AF37' }}
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-black transition-all duration-300"
          >
            Work With Us
          </motion.button>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden pointer-events-auto text-white p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['About', 'Talents', 'Services', 'Vision', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-display uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=2000&auto=format&fit=crop" // High-end Lagos vibe/Black models
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 border border-brand-gold/50 text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-8">
              A Forward Thinking Creative Agency
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-[10rem] font-display font-black leading-[0.85] uppercase tracking-tighter mb-12 text-white"
          >
            Shaping<br/>
            <span className="text-stroke">Narratives.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-light mb-12"
          >
            Elevating talent and delivering high-impact visual experiences at the intersection of creativity and strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="group relative px-10 py-5 bg-brand-gold text-black uppercase tracking-widest font-black flex items-center gap-4 mx-auto overflow-hidden">
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-brand-black overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionHeader 
                number="01" 
                subtitle="About Us" 
                title="Creators at the Core." 
              />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-8 italic">
                "We are a forward-thinking creative agency and talent management company dedicated to delivering high-impact visual and brand experiences."
              </p>
              <p className="text-white/50 leading-relaxed mb-12 max-w-lg">
                Operating at the intersection of creativity and strategy, we provide end-to-end solutions across talent representation, advertising production, and brand storytelling.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-brand-gold mb-2 tracking-tighter">GLOBAL</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Reach & Vision</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-gold mb-2 tracking-tighter">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Creative Integrity</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] perspective-1000 group"
            >
              <div className="absolute -inset-4 border border-brand-gold/20 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" // Professional creative team
                className="w-full h-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Altior Studio"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 right-8 bg-brand-gold p-8 max-w-[200px]">
                <span className="text-black font-display font-black text-xs uppercase tracking-widest">
                  Nigeria's Leading Talent Powerhouse
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Talents Section */}
      <section id="talents" className="py-32 px-6 md:px-12 relative overflow-hidden bg-brand-black">
        <div className="container mx-auto">
          <SectionHeader 
            number="02" 
            subtitle="The Roster" 
            title="Exceptional Talent." 
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {TALENTS.map((talent, idx) => (
              <motion.div
                key={talent.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col gap-8 group"
              >
                <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={talent.image} 
                    alt={talent.name}
                    className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-2">{talent.name}</h3>
                    <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">{talent.role}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed font-light">
                    {talent.bio}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed italic border-l-2 border-brand-gold/30 pl-6">
                    {talent.extra}
                  </p>
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-brand-gold text-[10px] uppercase tracking-widest font-black"
                  >
                    View Full Portfolio <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 md:px-12 bg-brand-gray/30">
        <div className="container mx-auto">
          <SectionHeader 
            number="03" 
            subtitle="Our Services" 
            title="Comprehensive Solutions." 
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="group relative bg-brand-black border border-white/5 hover:border-brand-gold/30 transition-all duration-500 overflow-hidden"
              >
                <div className="h-64 overflow-hidden relative">
                   <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
                  <div className="absolute top-6 left-6 p-4 bg-brand-gold text-black rounded-sm shadow-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight group-hover:text-brand-gold transition-colors">{service.title}</h3>
                  <p className="text-white/40 mb-6 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.tasks.map((task, tidx) => (
                      <div key={tidx} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/60">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-32 px-6 md:px-12 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] -z-10" />
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <SectionHeader 
              number="04" 
              subtitle="The Blueprint" 
              title="Vision & Mission." 
            />
            
            <div className="grid md:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="text-brand-gold uppercase tracking-[0.3em] font-black text-sm">Vision</h4>
                <p className="text-3xl font-display leading-[1.2] font-medium italic">
                  "To become a leading creative and talent powerhouse, recognized globally for excellence in storytelling and brand impact."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-brand-gold uppercase tracking-[0.3em] font-black text-sm">Mission</h4>
                <ul className="space-y-4">
                  {[
                    "Discover, develop, and manage exceptional talent",
                    "Create compelling visual and brand-driven content",
                    "Deliver innovative creative solutions for modern businesses",
                    "Build a platform where creativity meets opportunity"
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/70">
                      <ArrowRight className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                      <span className="font-light">{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Horizontal Scroll feel */}
      <section className="py-32 bg-brand-black border-y border-white/5">
        <div className="px-6 md:px-12 mb-16">
          <SectionHeader 
            number="05" 
            subtitle="The DNA" 
            title="Core Values." 
          />
        </div>
        
        <div className="flex gap-4 px-6 md:px-12 overflow-x-auto no-scrollbar pb-12">
          {VALUES.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-80 bg-brand-gray p-10 border border-white/5 hover:bg-brand-gold group transition-all duration-500"
            >
              <div className="text-6xl font-display font-black text-white/5 group-hover:text-black/10 transition-colors mb-4">{v.rank}</div>
              <div className="w-12 h-12 bg-brand-gold/10 group-hover:bg-black/10 flex items-center justify-center p-3 mb-6 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase group-hover:text-black transition-colors">{v.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-black/60 transition-colors">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="pt-32 pb-12 px-6 md:px-12 bg-brand-black border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12"> Ready for <span className="text-brand-gold italic">Impact?</span></h2>
              <p className="text-white/50 text-xl font-light mb-12">
                We're always looking for exceptional talent and strategic partners. Let's create something meaningful together.
              </p>
              
              <div className="flex gap-8 items-center">
                <a href="#" className="p-4 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all"><Instagram size={20} /></a>
                <a href="#" className="p-4 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all"><Linkedin size={20} /></a>
                <a href="#" className="p-4 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all"><Twitter size={20} /></a>
              </div>
            </div>

            <div className="w-full md:w-96 p-10 bg-brand-gray border border-white/5">
              <h3 className="text-xl font-display font-bold uppercase mb-8 tracking-widest text-brand-gold">Inquire</h3>
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 block mb-2">FullName</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-brand-gold outline-none py-2 transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 block mb-2">EmailAddress</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-brand-gold outline-none py-2 transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 block mb-2">Interest</label>
                  <select className="w-full bg-transparent border-b border-white/20 focus:border-brand-gold outline-none py-2 transition-colors appearance-none">
                    <option className="bg-brand-gray">Talent Management</option>
                    <option className="bg-brand-gray">Creative/Ads</option>
                    <option className="bg-brand-gray">Production</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-brand-gold text-black uppercase tracking-widest font-black text-xs hover:bg-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
            <div className="font-display text-lg font-black tracking-tighter uppercase">
              Altior<span className="text-brand-gold">.</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              © 2026 Altior Creatives & Entertainment. Built for Nigeria. Driven Globally.
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
