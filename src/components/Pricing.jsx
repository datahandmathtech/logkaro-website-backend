import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter Fleet',
      desc: 'Perfect for local tourist cab operators & regional transport owners.',
      priceMonthly: 1999,
      priceAnnual: 1599,
      fleetLimit: 'Up to 10 Vehicles',
      badge: null,
      features: [
        'Live DRS & Calendar Matrix',
        'Guest Fuel Deduction Ledger',
        'WhatsApp Invoice & Voucher PDF Generation',
        'Driver Mobile App (PWA)',
        'Cash & Bank Book Reconciliation',
        'Up to 10 Registered Cabs / Travellers',
        'Email & WhatsApp Support'
      ]
    },
    {
      name: 'Growth Transport OS',
      desc: 'Built for scaling fleet operators, tour agencies & regional school routes.',
      priceMonthly: 4999,
      priceAnnual: 3999,
      fleetLimit: 'Up to 35 Vehicles',
      badge: '🔥 MOST POPULAR',
      features: [
        'Everything in Starter Fleet',
        'Outside Car & Vendor Network Dispatch',
        'Garage & SpeedLine Tyres & Service Hub Maintenance Ledger',
        'EduRide RFID Student Attendance Module',
        'Speed Governor & Route Geofencing Radar',
        'Multi-Admin Roles (Accounts, Dispatcher, Manager)',
        'Direct HDFC/Axis Bank Account Integration',
        'Dedicated 24/7 Priority Ops Manager'
      ]
    },
    {
      name: 'Enterprise Multi-City',
      desc: 'For multi-depot operators, major private schools & corporate mobility providers.',
      priceMonthly: 9999,
      priceAnnual: 7999,
      fleetLimit: 'Unlimited Vehicles',
      badge: 'ENTERPRISE SLA',
      features: [
        'Everything in Growth Transport OS',
        'Unlimited Vehicles, Drivers & School Buses',
        'CorpDrive Corporate Shift Rostering & Cab Pooling',
        'B2B Monthly GST Invoicing with Toll Audits',
        'Custom Domain & Whitelabel Branding',
        'Full REST API & SAP / Tally ERP Sync',
        'Dedicated On-Premise / Cloud Deployment',
        'SLA 99.99% Guaranteed Uptime'
      ]
    }
  ];

  return (
    <section id="pricing" style={{ padding: '100px 24px', background: '#050914' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 14px',
            borderRadius: '9999px',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            fontSize: '12px',
            fontWeight: '800',
            marginBottom: '16px'
          }}>
            💎 TRANSPARENT INVESTMENT
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '950',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-1px',
            marginBottom: '18px',
            color: '#ffffff'
          }}>
            Fair, Predictable Fleet Pricing
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Start with our 14-day zero-risk trial. No credit card required. Upgrade or cancel anytime.
          </p>

          {/* Billing Switcher */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(13, 22, 40, 0.8)',
            padding: '6px 14px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '28px'
          }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: !isAnnual ? '#fbbf24' : 'rgba(255,255,255,0.6)' }}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '46px',
                height: '24px',
                borderRadius: '9999px',
                background: isAnnual ? '#fbbf24' : 'rgba(255,255,255,0.2)',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#040711',
                position: 'absolute',
                top: '3px',
                left: isAnnual ? '24px' : '3px',
                transition: 'all 0.25s'
              }} />
            </button>
            <span style={{ fontSize: '13px', fontWeight: '800', color: isAnnual ? '#fbbf24' : 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Annual Billing <span style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {plans.map((p, idx) => {
            const price = isAnnual ? p.priceAnnual : p.priceMonthly;
            const isFeatured = p.badge === '🔥 MOST POPULAR';

            return (
              <div
                key={idx}
                className="glass-panel-glow"
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  position: 'relative',
                  border: isFeatured ? '2px solid rgba(245, 158, 11, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isFeatured ? '0 0 50px rgba(245, 158, 11, 0.2)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {p.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: '#050811',
                    fontSize: '11px',
                    fontWeight: '950',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    letterSpacing: '0.6px'
                  }}>
                    {p.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '8px' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5', minHeight: '40px', marginBottom: '20px' }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '16px', color: '#fbbf24', fontWeight: '800' }}>₹</span>
                    <span style={{ fontSize: '42px', fontWeight: '950', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                      {price.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>/ month</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: '750', marginBottom: '24px' }}>
                    {p.fleetLimit}
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', marginBottom: '32px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '14px' }}>
                      Included Capabilities:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {p.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                          <Check size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className={isFeatured ? 'btn-primary-glow' : 'btn-secondary-glow'}
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Sparkles size={16} /> Start 14-Day Free Trial
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
