import React from 'react';
import { 
  Compass, 
  Car, 
  Fuel, 
  Wrench, 
  Landmark, 
  FileCheck2, 
  ShieldCheck, 
  BarChart3, 
  Radio, 
  BellRing, 
  Users, 
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function FeatureBreakdown({ onOpenDemo }) {
  const features = [
    {
      number: '01',
      category: 'Taxi Fleet Operations',
      title: 'Live DRS (Daily Running Sheet) & Tamper-Proof Odometer',
      desc: 'Replaces physical diaries with a real-time calendar matrix. Logs duty booking status (Open, Confirmed, On Trip, Completed), vehicle plate, driver batta, and client payment balance dues.',
      bullets: [
        'Tamper-resistant GPS vs Odometer discrepancy check',
        'Multi-day tour itinerary tracking with hotel pickup times',
        '1-Click Accounts drawer to inspect guest billing ledger'
      ],
      icon: Compass,
      color: '#fbbf24'
    },
    {
      number: '02',
      category: 'Market Cab Sourcing',
      title: 'Outside Car Network (Zero Margin Leakage)',
      desc: 'When customer demand outstrips your own fleet, source partner market cabs in 3 clicks. LogKaro issues branded client vouchers without exposing vendor rates, locks your net profit margin, and manages vendor payouts.',
      bullets: [
        'Client pays your full tariff; vendor receives agreed contract payout',
        'Operator keeps 15% to 30% risk-free profit margin',
        'Dedicated vendor ledger with payment settlement tracking'
      ],
      icon: Car,
      color: '#c084fc'
    },
    {
      number: '03',
      category: 'Automated Accounting',
      title: 'Autonomous Guest Fuel Deductions',
      desc: 'Eliminate the biggest accounting dispute in outstation tourism. When guests pay petrol pumps directly, drivers upload receipt photos. LogKaro itemizes the deduction and recalculates balance dues in real time.',
      bullets: [
        'Driver snaps pump bill receipt via basic phone camera',
        'Auto-deducted from total client package fare with car plate proof',
        'Prevents client overbilling disputes during final hotel checkout'
      ],
      icon: Fuel,
      color: '#f43f5e'
    },
    {
      number: '04',
      category: 'Fleet Health & Maintenance',
      title: 'Garage, Tyres & Mechanical Ledger (SpeedLine Tyres & Service Hub)',
      desc: 'Complete financial ledger for spare parts, tyre dealers (e.g. SpeedLine Tyres & Service Hub), oil changes, and mechanic labor. Settle outstanding garage balances in 1 click directly via linked company bank accounts.',
      bullets: [
        'Tyre serial number tracking, rotation history & puncture log',
        '1-Click Settle Vendor Dues via HDFC / Axis Bank integration',
        'Automated bank transaction created with balance deduction'
      ],
      icon: Wrench,
      color: '#10b981'
    },
    {
      number: '05',
      category: 'Double-Entry Bookkeeping',
      title: 'Dual Bank & Cash Drawer Reconciler',
      desc: 'Dual-entry financial ledger engineered specifically for transport companies. Automatically reconciles company current bank accounts (HDFC, ICICI, SBI) alongside office physical cash drawer and driver advances.',
      bullets: [
        'Real-time cash in hand counter updated on every cash trip',
        'Automatic bank transaction entries created on payment settlement',
        'Download CA-ready monthly transaction statements in Excel/PDF'
      ],
      icon: Landmark,
      color: '#38bdf8'
    },
    {
      number: '06',
      category: 'Client Experience',
      title: '1-Click WhatsApp Invoices, Vouchers & Payment QR',
      desc: 'Generate professional, GST-compliant tax invoices, client ledger statements, and driver duty slips with your company logo and signature in 1 click. Dispatch directly to guest WhatsApp in seconds.',
      bullets: [
        'Branded PDFs with digital signature & company stamp',
        'Integrated WhatsApp Cloud API for automated dispatch',
        'Instant payment links with UPI QR code for fast collections'
      ],
      icon: FileCheck2,
      color: '#fbbf24'
    },
    {
      number: '07',
      category: 'RTO Compliance',
      title: 'Vehicle Document Expiry Radar',
      desc: 'Never get fined at interstate toll checkpoints again. Proactive radar alerts warn admins 30, 15, and 3 days before commercial permit, insurance, PUC, fitness, or road tax expires.',
      bullets: [
        'Automatic WhatsApp & SMS reminder alerts for renewing admins',
        'Centralized digital document vault for all car RC & permits',
        'Driver DL expiry and police verification tracking'
      ],
      icon: ShieldCheck,
      color: '#10b981'
    },
    {
      number: '08',
      category: 'Business Intelligence',
      title: 'Vehicle-Wise & Driver-Wise Profit Analytics',
      desc: 'Know exactly which car makes you money and which driver burns extra fuel. Deep telemetry reports per-kilometer profitability, monthly earnings, maintenance costs, and net ROI per vehicle.',
      bullets: [
        'Per-vehicle monthly revenue vs fuel & garage expense report',
        'Driver fuel-efficiency scoring and incentive calculation',
        'Comprehensive monthly P&L statement ready for directors'
      ],
      icon: BarChart3,
      color: '#c084fc'
    },
    {
      number: '09',
      category: 'School Mobility',
      title: 'EduRide: Smart RFID Student Attendance',
      desc: 'Instant swipe-and-go student boarding for school buses. Driver terminal chimes with student photo confirmation. Works 100% offline in underground basement pickups and syncs automatically when signal resumes.',
      bullets: [
        'Audible sound alert on wrong bus or wrong stop boarding',
        'Offline-first SQLite memory prevents data loss in remote areas',
        'Instant sync with school ERP attendance ledger'
      ],
      icon: Radio,
      color: '#38bdf8'
    },
    {
      number: '10',
      category: 'Parent Peace of Mind',
      title: 'EduRide: Automated WhatsApp Alerts & Live Bus Radar',
      desc: 'Parents receive 3 automated WhatsApp notifications daily: Bus Departure, Student Boarding, and Student Drop-off with 1-click live GPS tracking link. No mobile app download needed for parents.',
      bullets: [
        'Dispatched in under 800 milliseconds upon RFID student tap',
        'Live tracking map link with speed & real-time ETA',
        'Speed governor alerts if bus exceeds 40 km/h in school zone'
      ],
      icon: BellRing,
      color: '#34d399'
    },
    {
      number: '11',
      category: 'Corporate Fleet',
      title: 'CorpDrive: Shift Rostering & Cab Pooling Algorithm',
      desc: 'Automate multi-shift employee transportation for IT parks, BPOs, and factories. Intelligent AI algorithms group employees by route to maximize cab occupancy and reduce leasing expenses by 28%.',
      bullets: [
        'Automated shift change requests via employee mobile PWA',
        'Female employee first-pickup & last-drop escort compliance',
        'Tamper-proof OTP verification at boarding'
      ],
      icon: Users,
      color: '#c084fc'
    },
    {
      number: '12',
      category: 'Enterprise Audit',
      title: 'CorpDrive: B2B Invoicing with GPS & Fastag Toll Audits',
      desc: 'Generate monthly corporate GST tax invoices compliant with multinational procurement audits. Automatically links Fastag toll receipts, parking slips, and GPS trip logs.',
      bullets: [
        'Itemized employee trip logs with GPS timestamp proofs',
        '1-Click export to SAP, Tally Prime, and Zoho Books',
        '24/7 Panic SOS guard with silent audio bridge for night shifts'
      ],
      icon: ShieldAlert,
      color: '#f43f5e'
    }
  ];

  return (
    <section id="features" style={{ padding: '100px 24px', background: '#030612' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#34d399',
            fontSize: '12px',
            fontWeight: '900',
            marginBottom: '16px'
          }}>
            🎯 12-PILLAR SOFTWARE ENCYCLOPEDIA
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: '950',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-1.5px',
            marginBottom: '18px',
            color: '#ffffff'
          }}>
            Every Operational Detail Covered with Surgical Precision
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.6' }}>
            Built after thousands of hours inside dispatch rooms, tourist cabs, tyre repair garages, and school transport offices.
          </p>
        </div>

        {/* 12-Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '26px'
        }}>
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-panel-glow"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${feat.color}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={22} color={feat.color} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '11px', color: feat.color, fontWeight: '850', background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '4px' }}>
                        {feat.category}
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: '950', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}>
                        {feat.number}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '12px', lineHeight: '1.3' }}>
                    {feat.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.65', marginBottom: '22px' }}>
                    {feat.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.07)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {feat.bullets.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)' }}>
                        <CheckCircle2 size={15} color={feat.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center'
        }}>
          <button
            onClick={onOpenDemo}
            className="btn-primary-glow"
            style={{ padding: '18px 44px', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            <Zap size={18} /> Schedule Custom Software Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
}
