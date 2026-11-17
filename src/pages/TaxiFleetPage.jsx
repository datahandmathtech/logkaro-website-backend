import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Fuel, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  MapPin, 
  PhoneCall, 
  FileText,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import RoiCalculator from '../components/RoiCalculator';

export default function TaxiFleetPage({ onOpenDemo }) {
  const [fuelDeducted, setFuelDeducted] = useState(true);

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Page Hero with Real Photography */}
      <section style={{
        position: 'relative',
        padding: '90px 24px 70px 24px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Background photo with cyber gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/taxi_fleet_hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.18,
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
            <span style={{ color: '#fbbf24' }}>Solutions</span>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>Commercial Taxi Fleet OS</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '900',
              color: '#fbbf24',
              marginBottom: '20px'
            }}>
              <Car size={14} /> FLAGSHIP COMMERCIAL FLEET PLATFORM
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: '950',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              The Operating System for <span className="text-gradient-gold">Commercial Taxi & Outstation</span> Tour Fleets
            </h1>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '32px'
            }}>
              End spreadsheet chaos, eliminate driver cash disputes, and reconcile guest fuel pump receipts directly into trip ledgers. Built specifically for India’s premium travel and transport operators.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} /> Schedule 1-on-1 Fleet Demo
              </button>
              <a href="https://logkaro.com/login" target="_blank" rel="noreferrer" className="btn-secondary-glow" style={{ padding: '14px 24px', fontSize: '15px', textDecoration: 'none' }}>
                Sign In to Operator Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Telemetry Bar */}
      <section style={{ background: '#060a19', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '28px 24px' }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>₹120Cr+</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Tour & Duty Volume Dispatched</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>28,500+</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Sedans & MPVs Active on Cloud</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#10b981', fontFamily: 'var(--font-heading)' }}>99.8%</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Billing & Ledger Settlement Accuracy</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '950', color: '#a855f7', fontFamily: 'var(--font-heading)' }}>+18.4%</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>Average Fleet Net Profit Surge</div>
          </div>
        </div>
      </section>

      {/* FEATURE DEEP-DIVE 1: Live DRS Dispatch with Real Photography */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid">
          {/* Left Column: Text & Features */}
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
              <Clock size={14} /> Mission-Critical Dispatch
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Autonomous Live DRS & Real-Time Driver Manifests
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              Replace chaotic phone calls and WhatsApp groups with a real-time Daily Running Sheet (DRS). Assign drivers, track start and end odometers, monitor GPS routes, and lock booking fares instantly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Real-Time Calendar Drawer:</strong> Instant month-to-date and daily breakdown with pending balance highlights.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Driver Mobile App Integration:</strong> Automated duty push notifications with guest pickup coordinates and duty vouchers.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Odometer & Toll Auto-Capture:</strong> Tamper-evident start/end readings with photo receipt uploads.
                </span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              See DRS Live in Action <ArrowRight size={14} />
            </button>
          </div>

          {/* Right Column: Real Photo Frame */}
          <div className="photo-frame" style={{ height: '420px' }}>
            <img src="/images/chauffeur_highway.jpg" alt="Commercial Highway Chauffeur" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge">
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#fbbf24' }}>LIVE ON-ROUTE TELEMETRY</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>GPS & Odometer Tracked Across 28+ States</div>
              </div>
              <span style={{ background: '#10b981', color: '#000000', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE DEEP-DIVE 2: Direct Guest Fuel Netting with Interior Photo */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid" style={{ gridTemplateColumns: '0.95fr 1.05fr' }}>
          {/* Left Column: Real Photo Frame */}
          <div className="photo-frame" style={{ height: '420px' }}>
            <img src="/images/luxury_sedan_interior.jpg" alt="Luxury Sedan Guest Experience" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge">
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#38bdf8' }}>EXECUTIVE GUEST EXPERIENCE</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Seamless In-Tour Fuel Settlement</div>
              </div>
              <span style={{ background: 'rgba(56,189,248,0.2)', color: '#38bdf8', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>
                ZERO DISPUTES
              </span>
            </div>
          </div>

          {/* Right Column: Text & Fuel Ledger Simulator */}
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
              <Fuel size={14} /> Autonomous Ledger Mathematics
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Direct Guest Fuel Deductions & Automated Balancing
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              When a guest pays at the petrol pump during an outstation tour, LogKaro automatically nets the amount from their package balance due. Zero manual math, zero lost paper receipts.
            </p>

            {/* Interactive Live Mini-Ledger Card */}
            <div style={{
              background: 'rgba(11, 19, 38, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '13px', fontWeight: '900', color: '#ffffff' }}>Client Ledger Simulation</span>
                <button
                  onClick={() => setFuelDeducted(!fuelDeducted)}
                  style={{
                    background: fuelDeducted ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.1)',
                    color: fuelDeducted ? '#34d399' : 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: '850',
                    cursor: 'pointer'
                  }}
                >
                  {fuelDeducted ? '✓ Pump Slip Applied' : '+ Apply Fuel Slip (-₹3,500)'}
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Tour Package Price:</span>
                <span style={{ fontWeight: '800', color: '#ffffff' }}>₹15,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Advance Received (Bank Transfer):</span>
                <span style={{ fontWeight: '800', color: '#38bdf8' }}>-₹2,000</span>
              </div>
              {fuelDeducted && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#fbbf24', fontWeight: '800' }}>⛽ Guest Fuel Paid (IndianOil Slip):</span>
                  <span style={{ fontWeight: '800', color: '#fbbf24' }}>-₹3,500</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', padding: '10px 0 0 0', fontWeight: '950' }}>
                <span style={{ color: '#ffffff' }}>Net Balance Due:</span>
                <span style={{ color: '#10b981' }}>{fuelDeducted ? '₹9,500' : '₹13,000'}</span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              Automate Your Fuel Netting <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE DEEP-DIVE 3: Outside Fleet Exchange with City Night Photo */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid">
          {/* Left Column: Text & Features */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#c084fc',
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}>
              <Share2 size={14} /> Partner Fleet Synergy
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Outside Fleet Exchange with Guaranteed Margin Protection
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              When all your own vehicles are booked, outsource extra bookings to verified partner operators without losing control. LogKaro automatically locks your operator margin and generates separate B2B vendor settlement vouchers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#a855f7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Automatic Margin Locking:</strong> Set your protected profit (e.g. +₹1,900) before handing over the booking.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#a855f7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Digital Partner Ledger:</strong> Independent running ledger for every vendor showing past payouts, pending dues, and TDS deductions.
                </span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              Explore Partner Exchange <ArrowRight size={14} />
            </button>
          </div>

          {/* Right Column: Real Photo Frame */}
          <div className="photo-frame" style={{ height: '420px' }}>
            <img src="/images/night_city_dispatch.jpg" alt="Partner Fleet Night Operations" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge">
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#c084fc' }}>INTER-CITY PARTNER NETWORK</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>24/7 Outstation Duty Handover</div>
              </div>
              <span style={{ background: '#a855f7', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>
                MARGIN SECURED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded ROI Calculator */}
      <RoiCalculator onOpenDemo={onOpenDemo} />

      {/* CTA Box */}
      <section style={{ maxWidth: '1080px', margin: '70px auto 0 auto', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(3, 6, 17, 0.95) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '20px',
          padding: '48px 36px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '30px', fontWeight: '950', color: '#ffffff', marginBottom: '14px' }}>
            Ready to Modernize Your Commercial Taxi Fleet?
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
            Join 28,500+ commercial vehicles powered by LogKaro. Schedule a personalized walkthrough tailored to your fleet size.
          </p>
          <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '14px 32px', fontSize: '15px' }}>
            <Sparkles size={16} /> Book Your VIP Demo Now
          </button>
        </div>
      </section>
    </div>
  );
}
