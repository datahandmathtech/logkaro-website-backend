import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Car, 
  GraduationCap, 
  Building2, 
  Wrench, 
  Sparkles, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Platform Overview', icon: null },
    { path: '/taxi-fleet', label: 'Taxi Fleet OS', icon: <Car size={13} color="#fbbf24" /> },
    { path: '/eduride-schools', label: 'EduRide Schools', icon: <GraduationCap size={13} color="#38bdf8" /> },
    { path: '/corpdrive', label: 'CorpDrive', icon: <Building2 size={13} color="#a855f7" /> },
    { path: '/fleet-maintenance', label: 'Fleet Maintenance', icon: <Wrench size={13} color="#10b981" /> },
    { path: '/pricing', label: 'Pricing', icon: null }
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #92400e 0%, #b45309 50%, #78350f 100%)',
        color: '#fef3c7',
        fontSize: '12px',
        fontWeight: '750',
        padding: '7px 16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        borderBottom: '1px solid rgba(251, 191, 36, 0.25)',
        flexWrap: 'wrap'
      }}>
        <span style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '2px 8px',
          borderRadius: '9999px',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          color: '#fbbf24',
          fontWeight: '900',
          whiteSpace: 'nowrap'
        }}>
          🔥 2026 FLEET ARCHITECTURE
        </span>
        <span style={{ whiteSpace: 'normal' }}>
          Now live with <strong>Autonomous Guest Fuel Deductions</strong>, <strong>Outside Fleet Exchange</strong> & <strong>EduRide RFID Campus Telemetry</strong>.
        </span>
        <button 
          onClick={onOpenDemo}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '850',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
            whiteSpace: 'nowrap'
          }}
        >
          Book Live VIP Tour <ChevronRight size={13} />
        </button>
      </div>

      {/* Main Glass Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(3, 6, 17, 0.95)' : 'rgba(3, 6, 17, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '9px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'nowrap'
        }}>
          {/* Brand Logo */}
          <Link 
            to="/"
            style={{
              background: 'transparent',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: 0,
              flexShrink: 0
            }}
          >
            <img 
              src="/logkaro_512.png" 
              alt="LogKaro Logo" 
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                objectFit: 'contain',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.35)'
              }} 
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: '950', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
                  Log<span style={{ color: '#fbbf24' }}>Karo</span>
                </span>
                <span style={{
                  fontSize: '9px',
                  fontWeight: '900',
                  color: '#fbbf24',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '1px 5px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  OS 2.8
                </span>
              </div>
              <div style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                Enterprise Transport Platform
              </div>
            </div>
          </Link>

          {/* Nav Links - Guaranteed Single Line on all desktop viewports */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px', 
            flexWrap: 'nowrap',
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    background: isActive ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                    color: isActive ? '#fbbf24' : 'rgba(255,255,255,0.75)',
                    border: isActive ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid transparent',
                    borderRadius: '7px',
                    padding: '5px 9px',
                    fontSize: '11.5px',
                    fontWeight: '850',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <a 
              href="https://logkaro.com/login" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary-glow"
              style={{
                padding: '6px 12px',
                fontSize: '11.5px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap'
              }}
            >
              Sign In <ExternalLink size={11} color="rgba(255,255,255,0.5)" />
            </a>

            <button
              onClick={onOpenDemo}
              className="btn-primary-glow"
              style={{
                padding: '7px 14px',
                fontSize: '11.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                whiteSpace: 'nowrap'
              }}
            >
              <Sparkles size={12} /> Book VIP Demo
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
