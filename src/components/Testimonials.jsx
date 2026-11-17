import React from 'react';
import { Star, Quote, Building2, Car, GraduationCap } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vikram Singh Sisodia',
      role: 'Managing Director',
      company: 'Yatree Destination Cabs (New Delhi NCR & Rajasthan)',
      text: 'LogKaro completely transformed our tourist transport business. The guest fuel deduction feature alone saved us more than ₹3.5 Lakhs in our first 3 months. Our drivers love the mobile app and our clients get invoices directly on WhatsApp.',
      type: 'Taxi Fleet Operator',
      fleet: '48 Cabs & Travellers',
      rating: 5
    },
    {
      name: 'Dr. Radhika Sen',
      role: 'Director of Student Welfare',
      company: 'Heritage Academy Group of Schools (Delhi NCR)',
      text: 'With 35 buses ferrying 2,200 students daily, parents used to constantly call our reception. Since deploying EduRide with RFID tap-in, parent inquiries dropped by 95%. Automated WhatsApp alerts give parents complete peace of mind.',
      type: 'School Transport Head',
      fleet: '35 Buses',
      rating: 5
    },
    {
      name: 'Karan Mehra',
      role: 'VP Operations',
      company: 'AeroConnect Mobility (Mumbai & Pune Airport Routes)',
      text: 'When we have 50 corporate cabs booked and need 20 more from the open market, LogKaro Outside Car network routes everything seamlessly without leaking our margins. We closed our monthly bank reconciliation in 15 minutes instead of 4 days.',
      type: 'Corporate Fleet VP',
      fleet: '110 Vehicles',
      rating: 5
    }
  ];

  return (
    <section style={{ padding: '100px 24px', maxWidth: '1360px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
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
          ⭐ PROVEN OPERATIONAL IMPACT
        </div>
        <h2 style={{
          fontSize: 'clamp(30px, 4vw, 48px)',
          fontWeight: '950',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1px',
          marginBottom: '18px',
          color: '#ffffff'
        }}>
          Loved by Fleet Founders & School Principals
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255, 255, 255, 0.7)' }}>
          See how Indian fleet operators run leaner, faster, and more profitable enterprises with LogKaro.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px'
      }}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass-panel-glow" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
              <div style={{ fontWeight: '900', color: '#ffffff', fontSize: '15px' }}>
                {t.name}
              </div>
              <div style={{ fontSize: '12px', color: '#fbbf24', fontWeight: '750' }}>
                {t.role}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                {t.company}
              </div>
              <div style={{ display: 'inline-block', marginTop: '10px', fontSize: '11px', fontWeight: '800', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px', color: '#93c5fd' }}>
                Fleet: {t.fleet}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
