import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  ShieldCheck, 
  Bell, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  Smartphone,
  Compass
} from 'lucide-react';

export default function EduRidePage({ onOpenDemo }) {
  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Page Hero with Real Photography */}
      <section style={{
        position: 'relative',
        padding: '90px 24px 70px 24px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/school_bus_students.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.22,
          filter: 'blur(1px)'
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(3, 6, 17, 0.85) 0%, rgba(3, 6, 17, 0.98) 100%)'
        }} />

        <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', textAlign: 'left' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '18px', fontWeight: '750' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#38bdf8' }}>Solutions</span>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>EduRide School Transit</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: '900',
                color: '#38bdf8',
                marginBottom: '20px'
              }}
            >
              <GraduationCap size={14} /> CAMPUS MOBILITY & STUDENT SAFETY OS
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: 'clamp(32px, 5vw, 54px)',
                fontWeight: '950',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '20px',
                letterSpacing: '-1px'
              }}
            >
              Zero-Compromise <span style={{ color: '#38bdf8' }}>Student Safety</span> & School Bus Telemetry
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.75)',
                marginBottom: '32px'
              }}
            >
              Smart RFID tap cards, instant WhatsApp alerts for parents, speed governor enforcement, and AI campus route optimization. Trusted by over 450+ educational institutions across India.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} /> Request School Demo & Pilot
              </button>
              <a href="https://logkaro.com/login" target="_blank" rel="noreferrer" className="btn-secondary-glow" style={{ padding: '14px 24px', fontSize: '15px', textDecoration: 'none' }}>
                Principal & Transport Login
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Telemetry Bar */}
      <section style={{ background: '#060a19', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '28px 24px' }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>1.2M+</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Students Safely Commuted Daily</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#10b981', fontFamily: 'var(--font-heading)' }}>450+</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Affiliated K-12 & Higher Ed Campuses</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>99.98%</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Instant WhatsApp Alert Delivery SLA</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#a855f7', fontFamily: 'var(--font-heading)' }}>-22%</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Diesel Saved via AI Route Clustering</div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: RFID Tap Card & Real Smartphone WhatsApp Alert Mockup */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid" style={{ gridTemplateColumns: '1fr 0.9fr' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}>
              <Smartphone size={14} /> Instant Parent Reassurance
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Smart RFID Boarding Tap & Live WhatsApp Delivery
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              Eliminate anxious parent calls. The exact second a student boards or deboards the school bus, an automated WhatsApp notification is dispatched directly to the parents' phone with bus number, time stamp, and location map.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Conductor RFID Scanner App:</strong> Works seamlessly even in low-bandwidth cellular conditions.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>No App Download Required for Parents:</strong> Alerts delivered directly via official verified WhatsApp Business API.
                </span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              Schedule Live School Demo <ArrowRight size={14} />
            </button>
          </div>

          {/* Smartphone WhatsApp Alert Vector Mockup */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '340px', width: '100%' }}>
              <img src="/images/mockups/parent_whatsapp_alert.svg" alt="LogKaro School Bus Parent WhatsApp Alert Mockup" style={{ width: '100%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))' }} />
            </div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-10px',
                background: 'rgba(3,6,17,0.92)',
                border: '1px solid rgba(56,189,248,0.5)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.6), 0 0 15px rgba(56,189,248,0.3)',
                borderRadius: '8px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 10
              }}
            >
              <span style={{ fontSize: '12px' }}>📱</span>
              <span style={{ fontSize: '11px', fontWeight: '900', color: '#38bdf8' }}>WhatsApp Alert Sent: 07:42 AM</span>
              <span style={{ background: '#25d366', color: '#000', fontSize: '9px', fontWeight: '900', padding: '2px 5px', borderRadius: '4px' }}>DELIVERED</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: Campus Geofencing & Speed Governor with Real Photo */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid" style={{ gridTemplateColumns: '0.95fr 1.05fr' }}>
          <div className="photo-frame" style={{ height: '420px' }}>
            <img src="/images/school_campus.jpg" alt="Modern School Campus" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge">
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#fbbf24' }}>CAMPUS GEOFENCE RADAR</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Gate 2 Entry Verified • Speed 36 km/h</div>
              </div>
              <span style={{ background: '#10b981', color: '#000000', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>
                SAFE ZONE
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#fbbf24',
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}>
              <Compass size={14} /> Strict Safety Enforcement
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Campus Geofencing, Speed Governor & Stoppage Delays
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              School administration command centers receive real-time telemetry alerts if any bus exceeds safety limits (40 km/h) or halts at an unauthorized stop.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Digital Campus Gates:</strong> Automatic entrance and exit logging for school administration security audits.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Route Deviation Triggers:</strong> Instant alert to transport head if a bus veers off scheduled route.
                </span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              Request Campus Safety Audit <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
