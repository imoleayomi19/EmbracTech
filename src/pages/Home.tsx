import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sun,
  Battery,
  Leaf,
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Wrench,
  CheckCircle2,
  Quote } from
'lucide-react';
const fadeIn = {
  initial: {
    opacity: 0,
    y: 20
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: '-100px'
  },
  transition: {
    duration: 0.6
  }
};
const staggerContainer = {
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1
  },
  viewport: {
    once: true,
    margin: '-100px'
  },
  transition: {
    staggerChildren: 0.2
  }
};
export function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <Sun className="w-4 h-4 text-secondary" />
                <span className="text-white font-poppins text-sm font-medium tracking-wide uppercase">
                  Leading Solar Provider
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] text-balance">
                Power Your Future With{' '}
                <span className="text-secondary">The Sun</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 font-montserrat mb-10 max-w-2xl leading-relaxed">
                Embrace Technologies delivers premium solar solutions for homes
                and businesses. Save money, increase property value, and protect
                the environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="bg-secondary text-primary font-bold font-poppins px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors text-center text-lg shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group">
                  
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold font-poppins px-8 py-4 rounded-sm hover:bg-white/20 transition-colors text-center text-lg">
                  
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md border-t border-white/10 py-6">
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-between items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <span className="text-secondary font-anton text-3xl">15+</span>
                <span className="text-slate-300 font-poppins text-sm uppercase leading-tight">
                  Years in
                  <br />
                  Business
                </span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-anton text-3xl">10k+</span>
                <span className="text-slate-300 font-poppins text-sm uppercase leading-tight">
                  Successful
                  <br />
                  Installs
                </span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-anton text-3xl">50MW</span>
                <span className="text-slate-300 font-poppins text-sm uppercase leading-tight">
                  Clean Energy
                  <br />
                  Deployed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeIn}>
            
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose Embrace</h2>
            <p className="text-slate-600 font-montserrat text-lg">
              We combine industry-leading technology with expert installation to
              deliver solar systems that perform better and last longer.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView">
            
            {[
            {
              icon: ShieldCheck,
              title: 'Certified Installers',
              desc: 'Our team of NABCEP-certified professionals ensures flawless execution.',
              color: 'text-primary'
            },
            {
              icon: Sun,
              title: 'Premium Panels',
              desc: 'We use tier-1 monocrystalline panels with industry-leading efficiency.',
              color: 'text-secondary'
            },
            {
              icon: Battery,
              title: 'Lifetime Support',
              desc: '25-year comprehensive warranties and ongoing maintenance support.',
              color: 'text-primary'
            },
            {
              icon: Leaf,
              title: 'Eco-Friendly',
              desc: 'Reduce your carbon footprint and contribute to a sustainable future.',
              color: 'text-alternative'
            }].
            map((prop, idx) =>
            <motion.div
              key={idx}
              variants={fadeIn}
              className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group">
              
                <div
                className={`w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                
                  <prop.icon className={`w-7 h-7 ${prop.color}`} />
                </div>
                <h3 className="text-xl mb-3">{prop.title}</h3>
                <p className="text-slate-600 font-montserrat text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY ORGANISATIONS */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <p className="font-poppins text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
              Trusted By Leading Organisations
            </p>
            <div className="w-16 h-0.5 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 items-center max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView">
            
            {[
            {
              name: 'Deye',
              src: "/embrace-trusted.png"
            },
            {
              name: 'Lado Oil',
              src: "/embrace-trusted1.png"
            },
            {
              name: 'Felicity Solar',
              src: "/embrace-trusted2.jpg"
            },
            {
              name: 'Prado Power',
              src: "/embrace-trusted3.png"
            }].
            map((org, idx) =>
            <motion.div
              key={idx}
              variants={fadeIn}
              className="flex items-center justify-center h-20 px-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
              
                <img
                src={org.src}
                alt={`${org.name} logo`}
                title={`${org.name} logo`}
                className="max-h-full max-w-full object-contain" />
              
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div className="max-w-2xl" {...fadeIn}>
              <h2 className="text-4xl md:text-5xl mb-4">Our Solutions</h2>
              <p className="text-slate-600 font-montserrat text-lg">
                Tailored solar energy systems designed to meet your specific
                energy needs and financial goals.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-poppins font-bold text-primary hover:text-secondary transition-colors">
                
                View All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView">
            
            {[
            {
              icon: HomeIcon,
              title: 'Residential Solar',
              img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
              desc: "Power your home with clean energy, reduce utility bills, and increase your property's value."
            },
            {
              icon: Building2,
              title: 'Commercial Solar',
              img: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca4?auto=format&fit=crop&w=800&q=80',
              desc: 'Maximize ROI, take advantage of tax incentives, and showcase your corporate sustainability.'
            },
            {
              icon: Wrench,
              title: 'Solar Maintenance',
              img: 'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?auto=format&fit=crop&w=800&q=80',
              desc: 'Keep your system running at peak efficiency with our comprehensive maintenance plans.'
            }].
            map((service, idx) =>
            <motion.div
              key={idx}
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                  src={service.img}
                  alt={service.title}
                  title={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                  <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-full shadow-md">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-slate-600 font-montserrat mb-6 line-clamp-3">
                    {service.desc}
                  </p>
                  <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-primary group-hover:text-secondary transition-colors">
                  
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            {...fadeIn}>
            
            <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
            <p className="text-slate-600 font-montserrat text-lg">
              A simple, transparent process from your first consultation to
              flipping the switch.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView">
              
              {[
              {
                step: '01',
                title: 'Consultation',
                desc: "We assess your energy needs and evaluate your property's solar potential."
              },
              {
                step: '02',
                title: 'Custom Design',
                desc: 'Our engineers design a system optimized for your specific roof and usage.'
              },
              {
                step: '03',
                title: 'Installation',
                desc: 'Certified professionals install your system with minimal disruption.'
              },
              {
                step: '04',
                title: 'Activation',
                desc: 'We handle all permits and inspections. You turn on the power and save.'
              }].
              map((item, idx) =>
              <motion.div
                key={idx}
                variants={fadeIn}
                className="relative flex flex-col items-center text-center">
                
                  <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 relative z-10">
                    <span className="font-anton text-3xl text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-montserrat text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT / STATS */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Abstract sun rays background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-alternative/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView">
            
            {[
            {
              num: '25M+',
              label: 'kWh Generated'
            },
            {
              num: '18k',
              label: 'Tons CO2 Offset',
              color: 'text-alternative'
            },
            {
              num: '5,000+',
              label: 'Homes Powered'
            },
            {
              num: '99%',
              label: 'Happy Customers'
            }].
            map((stat, idx) =>
            <motion.div key={idx} variants={fadeIn} className="p-6">
                <div
                className={`font-anton text-5xl md:text-6xl mb-4 ${stat.color || 'text-secondary'}`}>
                
                  {stat.num}
                </div>
                <div className="font-poppins text-white uppercase tracking-wider text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeIn}>
            
            <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 font-montserrat text-lg">
              Don't just take our word for it. Hear from the homeowners and
              businesses we've helped.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView">
            
            {[
            {
              name: 'Adewale O.',
              role: 'CEO, A Startup — Ibadan, Oyo State',
              quote:
              'Embrace Technologies really impressed me with their professionalism. From the site inspection to the final installation, everything was well explained and neatly done. My power has been stable since the installation, and I honestly wish I had done it earlier.'
            },
            {
              name: 'Mrs. Kemi Balogun',
              role: 'Co-Founder, HCM — Lagos',
              quote:
              'I was worried about spending money on solar, but Embrace Technologies helped me choose the right system for my home without overselling. The system has been working perfectly, and their after-installation support is excellent.'
            },
            {
              name: 'Sadiq A.',
              role: 'Entrepreneur — Lagos',
              quote:
              'My shop used to suffer from frequent power outages until Embrace Technologies upgraded my inverter setup. The difference is clear — my equipment runs smoothly now, and I no longer panic when NEPA takes light.'
            }].
            map((testimonial, idx) =>
            <motion.div
              key={idx}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm relative">
              
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />
                <div className="flex gap-1 mb-6 text-secondary">
                  {[...Array(5)].map((_, i) =>
                <Sun key={i} className="w-5 h-5 fill-current" />
                )}
                </div>
                <p className="text-slate-700 font-montserrat italic mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-anton text-lg tracking-normal normal-case text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-montserrat">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-cta-pattern bg-cover bg-center relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-2xl border border-white/20 shadow-2xl"
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Ready to Embrace Clean Energy?
            </h2>
            <p className="text-xl text-slate-200 font-montserrat mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation quote and see how much you could save by
              switching to solar today.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-bold font-poppins px-10 py-5 rounded-sm hover:bg-yellow-400 transition-colors text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
              
              Schedule Free Assessment
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>);

}