import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Academy',
    path: '/academy'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'About',
    path: '/'
  },
  {
    name: 'Contact',
    path: '/'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
      
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/embrace-logo.jpeg"
            alt="Embrace Technologies logo"
            title="Embrace Technologies"
            className="w-16 h-16 rounded-full object-cover border-2 border-secondary shadow-sm"
          />
          <span className="font-anton text-2xl text-primary tracking-wider">
            EMBRACE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className={`font-montserrat font-medium text-sm transition-colors hover:text-secondary ${location.pathname === link.path && link.path !== '/' || location.pathname === '/' && link.name === 'Home' ? 'text-secondary' : 'text-primary'}`}>
            
              {link.name}
            </Link>
          )}
          <Link
            to="/"
            className="bg-secondary text-primary font-bold font-poppins px-6 py-2.5 rounded-sm hover:bg-yellow-400 transition-colors shadow-sm">
            
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">
          
          {isMobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-white border-t border-slate-100 overflow-hidden">
          
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className="font-montserrat font-medium text-lg text-primary py-2 border-b border-slate-50">
              
                  {link.name}
                </Link>
            )}
              <Link
              to="/"
              className="bg-secondary text-primary font-bold font-poppins px-6 py-3 rounded-sm text-center mt-2">
              
                Get a Quote
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}