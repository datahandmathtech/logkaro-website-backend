import React, { useState } from 'react';
import { 
  Sun, 
  Clock, 
  MapPin, 
  Fuel, 
  Wrench, 
  Landmark, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Radio,
  FileText
} from 'lucide-react';

export default function DayInLifeWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      time: '06:00 AM',
      phase: 'Dawn Dispatch',
      title: 'Automated Fleet & School Bus Morning Ignition',
      desc: 'Drivers open the LogKaro Driver Mobile PWA. No app store download required. They punch in their starting odometer reading with a tamper-resistant GPS timestamp. Vehicles are matched to guest hotel pickups and school morning routes instantly.',
      badge: 'Zero Tampering GPS',
      highlightColor: '#fbbf24',
      screenPreview: {
        heading: 'Morning Inspection & Odometer Sync',
        items: [
          'Driver Rajesh Kumar: Punch In Odometer: 1,42,850 KM (GPS Verified)',
          'Bus-14 (DL-01-EA-4902): 42 Student Pickup Stops Assigned',
          'Vehicle Health: Fuel Level 85% • Fastag Balance ₹2,450 • Fitness Valid'
        ]
      }
    },
    {
      time: '07:30 AM',
      phase: 'Student Transit',
      title: 'Smart RFID Student Tap-in & Instant WhatsApp Alerts',
      desc: 'As students step onto the school bus, they tap their smart RFID ID cards on the driver terminal. In under 800 milliseconds, parents receive a branded WhatsApp alert with a live GPS tracking link.',
      badge: '800ms WhatsApp Dispatch',
      highlightColor: '#38bdf8',
      screenPreview: {
        heading: 'Live RFID Attendance Feed',
        items: [
          'Aarav Sharma (Class 7-B): Boarded Green Valley Stop at 07:42 AM',
          'Automated Parent WhatsApp: "Aarav has safely boarded Bus #14"',
          'Route Geofence Check: Bus within 40 km/h safe school corridor'
        ]
      }
    },
    {
      time: '11:15 AM',
      phase: 'Demand Surge',
      title: 'Outside Car Network Sourcing (Zero Profit Leakage)',
      desc: 'Your own fleet of 35 cabs is 100% occupied for wedding guests. A customer requests an urgent Innova Crysta for Agra Expressway Fort. In 3 clicks, source a verified partner car (Pankaj Travels) while locking your ₹1,980 operator margin.',
      badge: 'Protected Net Margins',
      highlightColor: '#a855f7',
      screenPreview: {
        heading: 'Vendor Fleet Assignment Slip',
        items: [
          'Client Fare Quoted: ₹5,000 (Branded WhatsApp Voucher Issued)',
          'Vendor Contract Fare: ₹3,020 (Pankaj Travels Account Credited)',
          'Net Operator Profit: +₹1,980 locked into Monthly Profit & Loss'
        ]
      }
    },
    {
      time: '02:45 PM',
      phase: 'Mid-Tour Fueling',
      title: 'Autonomous Guest Fuel Deduction (Zero Bill Disputes)',
      desc: 'During the outstation tour, the guest pays ₹4,689 directly at an Indian Oil pump. Driver snaps the receipt photo on his phone. LogKaro automatically deducts ₹4,689 from the client balance due in real-time.',
      badge: 'Autonomous Ledger Deduction',
      highlightColor: '#f43f5e',
      screenPreview: {
        heading: 'Fuel Slip OCR Verification',
        items: [
          'Pump Receipt: IOCL Highway Station • ₹4,689 Paid by Guest',
          'Total Package Fare: ₹13,000 | Advance Paid: ₹500',
          'Auto-Adjusted Balance Due: ₹7,811 (Updated on Client WhatsApp)'
        ]
      }
    },
    {
      time: '06:30 PM',
      phase: 'Maintenance',
      title: 'Garage & SpeedLine Tyres & Service Hub Settlement via Linked Bank',
      desc: 'Vehicle KA-03-EF-3030 receives 2 new front tyres at SpeedLine Tyres & Service Hub garage. The ₹4,500 bill is logged in the maintenance ledger and settled in 1 click directly via company HDFC current account.',
      badge: '1-Click Bank Reconciliation',
      highlightColor: '#10b981',
      screenPreview: {
        heading: 'Vendor Ledger — SpeedLine Tyres & Service Hub',
        items: [
          'Service: 2 Front Tyres Replaced • Serial #MRF-9023 & #MRF-9024',
          'Outstanding Bill: ₹4,500 Settle via HDFC Bank (A/C ending in 6187)',
          'Bank Transaction #LK-99482 created • Garage balance cleared'
        ]
      }
    },
    {
      time: '10:00 PM',
      phase: 'Day Close',
      title: 'Cash Drawer vs Bank Book 100% Balanced',
      desc: 'No more frantic late-night accounting diaries. LogKaro closes the day with exact cash in hand counting, driver petty cash audit, bank statement sync, and CA-ready P&L export.',
      badge: '100% Balanced Ledgers',
      highlightColor: '#fbbf24',
      screenPreview: {
        heading: 'Daily Closing Financial Summary',
        items: [
          'Total Duties Dispatched: 56 Trips | Revenue: ₹8,37,538',
          'Cash Drawer Balance: ₹38,200 | HDFC Current A/C: ₹4,82,310',
          'CA Ready GST & P&L Statement Generated in Excel / PDF'
        ]
      }
    }
  ];

  const curr = steps[activeStep];

  return (
    <section style={{ padding: '100px 24px', background: '#040714', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '9999px',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            fontSize: '12px',
            fontWeight: '900',
            marginBottom: '16px'
          }}>
            ⚡ 24-HOUR OPERATIONAL BLUEPRINT
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '950',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-1.5px',
            marginBottom: '18px',
            color: '#ffffff'
          }}>
            A Day in the Life with LogKaro OS
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.6' }}>
            From 6:00 AM morning fleet ignition to midnight bank book balancing — witness how LogKaro removes 100% of human error from transport operations.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '36px'
        }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              style={{
                background: activeStep === idx ? 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(13,22,44,0.9) 100%)' : 'rgba(13,22,44,0.6)',
                border: activeStep === idx ? `1px solid ${s.highlightColor}` : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '14px',
                padding: '16px 14px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.25s',
                boxShadow: activeStep === idx ? `0 0 25px ${s.highlightColor}30` : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '950', color: s.highlightColor, fontFamily: 'var(--font-mono)' }}>
                  {s.time}
                </span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  Step 0{idx + 1}
                </span>
              </div>
              <div style={{ fontSize: '13px', fontWeight: '850', color: '#ffffff' }}>
                {s.phase}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="glass-panel-glow" style={{
          padding: 'clamp(28px, 4vw, 48px)',
          borderRadius: '24px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{
                background: curr.highlightColor,
                color: '#040711',
                fontSize: '11px',
                fontWeight: '950',
                padding: '3px 10px',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)'
              }}>
                {curr.time} • {curr.phase.toUpperCase()}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '11px',
                fontWeight: '800',
                padding: '3px 10px',
                borderRadius: '6px'
              }}>
                {curr.badge}
              </span>
            </div>

            <h3 style={{
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: '950',
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              lineHeight: '1.2',
              marginBottom: '16px'
            }}>
              {curr.title}
            </h3>

            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: '1.7',
              marginBottom: '28px'
            }}>
              {curr.desc}
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                className="btn-primary-glow"
                style={{ padding: '12px 24px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Next Workflow Stage <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Simulated Terminal */}
          <div style={{
            background: '#070c1a',
            border: `1px solid ${curr.highlightColor}50`,
            borderRadius: '18px',
            padding: '24px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px', marginBottom: '18px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '12px', fontWeight: '850', color: curr.highlightColor, marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>
                {curr.screenPreview.heading}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {curr.screenPreview.items.map((item, i) => (
                <div key={i} style={{
                  padding: '12px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <CheckCircle2 size={16} color={curr.highlightColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
