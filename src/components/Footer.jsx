import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, Mail, ArrowUp, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Floating 24/7 WhatsApp Concierge Widget */}
      <a
        href="https://wa.me/911800-200-5645?text=Hello%20LogKaro%20Team!%20I%20want%20to%20see%20a%20live%20demo%20of%20the%20Fleet%20and%20School%20OS."
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '9px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          fontWeight: '900',
          fontSize: '12px',
          border: '1px solid rgba(255,255,255,0.3)',
          transition: 'all 0.25s'
        }}
      >
        <span style={{ fontSize: '18px' }}>💬</span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Main Footer */}
      <footer style={{
        background: '#020409',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '70px 24px 36px 24px',
        color: 'rgba(255, 255, 255, 0.7)'
      }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}>
            {/* Col 1: Brand & Bio */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <img 
                  src="/logkaro_512.png" 
                  alt="LogKaro" 
                  style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain' }}
                />
                <span style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Log<span style={{ color: '#fbbf24' }}>Karo</span>
                </span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '18px', textAlign: 'left' }}>
                India's foremost Next-Gen fleet operating platform unifying commercial taxi operations, school bus telemetry, and corporate employee mobility into one mission-critical cloud.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#10b981', fontWeight: '800' }}>
                <CheckCircle2 size={16} /> ISO 27001 Certified • Bank-Grade Security
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', textAlign: 'left' }}>
                Platform Solutions
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13px', textAlign: 'left', padding: 0 }}>
                <li>
                  <Link to="/taxi-fleet" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    Commercial Taxi Fleet OS
                  </Link>
                </li>
                <li>
                  <Link to="/eduride-schools" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    EduRide School Bus Command
                  </Link>
                </li>
                <li>
                  <Link to="/corpdrive" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    CorpDrive Enterprise Shifts
                  </Link>
                </li>
                <li>
                  <Link to="/fleet-maintenance" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    Fleet Maintenance & Tyres
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    Pricing & Plans
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Head Office */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', textAlign: 'left' }}>
                Headquarters & Support
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>LogKaro Technologies, Cyber City Tech Park, Tower B, Phase II, Gurugram, NCR 122002</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PhoneCall size={18} color="#fbbf24" />
                  <span>+91 1800-200-5645 / +91 98100 23456</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={18} color="#fbbf24" />
                  <span>support@logkaro.com • sales@logkaro.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '12px'
          }}>
            <div>
              © 2026 LogKaro Technologies Private Limited. All Rights Reserved. Built with pride for Indian Mobility.
            </div>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px'
              }}
            >
              Top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
