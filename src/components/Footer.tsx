import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Sun className="w-8 h-8 text-secondary" />
              <span className="font-anton text-2xl text-white tracking-wider mt-1">
                EMBRACE
              </span>
            </Link>
            <p className="text-slate-300 font-montserrat text-sm leading-relaxed mb-6">
              Empowering homes and businesses with clean, reliable, and
              affordable solar energy solutions. Join the renewable revolution
              today.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-300 hover:text-secondary transition-colors">
                
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-secondary transition-colors">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-secondary transition-colors">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-secondary transition-colors">
                
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-anton text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 font-montserrat text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors">
                  
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-anton text-xl text-white mb-6">Services</h4>
            <ul className="space-y-3 font-montserrat text-sm text-slate-300">
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors">
                  
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors">
                  
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors">
                  
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors">
                  
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors">
                  
                  Energy Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-anton text-xl text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 font-montserrat text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>
                  9 Towobola Jaiyesimi Street,
                  <br />
                  Ebute, Ikorodu, Lagos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+2347061451583"
                    className="hover:text-secondary transition-colors">
                    
                    +234 706 145 1583
                  </a>
                  <a
                    href="tel:+2348078954388"
                    className="hover:text-secondary transition-colors">
                    
                    +234 807 895 4388
                  </a>
                  <a
                    href="tel:+2349110152566"
                    className="hover:text-secondary transition-colors">
                    
                    +234 911 015 2566
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:Support@embracetechng.com"
                  className="hover:text-secondary transition-colors break-all">
                  
                  Support@embracetechng.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 font-montserrat text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Embrace Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400 font-montserrat">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}