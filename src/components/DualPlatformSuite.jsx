import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  GraduationCap, 
  Building2, 
  Check, 
  ArrowRight, 
  Radio, 
  Fuel, 
  FileText, 
  CreditCard, 
  Bell, 
  Users, 
  ShieldAlert, 
  Sparkles,
  Compass,
  Wrench,
  Smartphone,
  Landmark,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function DualPlatformSuite({ onOpenDemo }) {
  const [platform, setPlatform] = useState('taxi');

  return (
    <section id="suite" style={{ padding: '100px 24px', maxWidth: '1380px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px auto' }}>
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
          ⚡ THREE DEDICATED MOBILITY VERTICALS
        </div>
        <h2 style={{
          fontSize: 'clamp(32px, 4.2vw, 52px)',
          fontWeight: '950',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1.5px',
          marginBottom: '18px',
          color: '#ffffff'
        }}>
          Engineered for Deep Industry Realities
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.6' }}>
          LogKaro is not a generic GPS tracker. It is a full-stack Operating System with tailor-made workflows for outstation tourist cabs, private school buses, and enterprise corporate fleets.
        </p>

        {/* 3 Main Switchers */}
        <div style={{
          display: 'inline-flex',
          gap: '10px',
          background: 'rgba(11, 19, 38, 0.85)',
          padding: '6px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '36px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          <button
            onClick={() => setPlatform('taxi')}
            style={{
              padding: '14px 26px',
              borderRadius: '12px',
              background: platform === 'taxi' ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' : 'transparent',
              color: platform === 'taxi' ? '#040711' : '#ffffff',
              border: 'none',
              fontWeight: '950',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.25s'
            }}
          >
            <Car size={16} /> Commercial Taxi & Tour OS
          </button>

          <button
            onClick={() => setPlatform('school')}
            style={{
              padding: '14px 26px',
              borderRadius: '12px',
              background: platform === 'school' ? 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)' : 'transparent',
              color: platform === 'school' ? '#040711' : '#ffffff',
              border: 'none',
              fontWeight: '950',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.25s'
            }}
          >
            <GraduationCap size={16} /> EduRide School Fleet OS
          </button>

          <button
            onClick={() => setPlatform('corp')}
            style={{
              padding: '14px 26px',
              borderRadius: '12px',
              background: platform === 'corp' ? 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)' : 'transparent',
              color: platform === 'corp' ? '#ffffff' : '#ffffff',
              border: 'none',
              fontWeight: '950',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.25s'
            }}
          >
            <Building2 size={16} /> CorpDrive Enterprise
          </button>
        </div>
      </div>

      {/* ================================================================== */}
      {/* VERTICAL 1: TAXI & TOUR FLEET OS (BENTO GRID) */}
      {/* ================================================================== */}
      {platform === 'taxi' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Bento Row 1: Large Feature Card + Secondary Card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
            {/* Card 1: Live DRS Matrix */}
            <div className="glass-panel-glow" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Radio size={24} color="#fbbf24" />
                </div>
                <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                  CORE ENGINE
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
                Live DRS (Daily Running Sheet) & Odometer Radar
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '14px', lineHeight: '1.65', marginBottom: '22px' }}>
                Full month calendar matrix tracking every booking, multi-day outstation itinerary, driver duty logs, and balance dues across your own and vendor fleet. Zero tampering GPS vs odometer audits prevent unauthorized personal trips.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#fbbf24" /> Instant month/date jumping & daily total package calculations
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#fbbf24" /> Real-time balance due indicator with color-coded status
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#fbbf24" /> 1-click accounts drawer for instantaneous guest billing
                </div>
              </div>
            </div>

            {/* Card 2: Autonomous Guest Fuel Deduction */}
            <div className="glass-panel-glow" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Fuel size={24} color="#f43f5e" />
                </div>
                <span style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                  PATENTED MECHANISM
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
                Autonomous Guest Fuel Slip Deductions
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '14px', lineHeight: '1.65', marginBottom: '22px' }}>
                The #1 source of dispute in Indian tourism transport. When guests pay petrol pumps on outstation tours, LogKaro extracts the bill photo, ties it to the vehicle plate, and automatically recalculates the net balance due.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#f43f5e" /> Driver uploads petrol slip photo via smartphone browser
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#f43f5e" /> Itemized deduction with car plate proof on client voucher
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#f43f5e" /> Zero ledger discrepancy during final hotel checkout
                </div>
              </div>
            </div>
          </div>

          {/* Bento Row 2: 3 Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Card 3: Outside Car Sourcing */}
            <div className="glass-panel-glow" style={{ padding: '32px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <CreditCard size={22} color="#c084fc" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '10px' }}>
                Outside Car & Vendor Network
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '16px' }}>
                Fleet fully booked during wedding or tourist season? Attach market cabs in 3 clicks. Guest receives your company voucher while vendor gets exact vendor payout slip. Your margin is locked!
              </p>
              <div style={{ fontSize: '12px', color: '#c084fc', fontWeight: '800' }}>
                ✓ Preserves 20-30% operator margin on market cabs
              </div>
            </div>

            {/* Card 4: Garage & SpeedLine Tyres & Service Hub Ledger */}
            <div className="glass-panel-glow" style={{ padding: '32px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Wrench size={22} color="#10b981" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '10px' }}>
                Garage & Tyres Maintenance Ledger
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '16px' }}>
                Track mechanics, tyre shops (SpeedLine Tyres & Service Hub), battery replacements, and oil change dues. Settle payments in 1 click via HDFC/Axis current account with timestamped receipts.
              </p>
              <div style={{ fontSize: '12px', color: '#34d399', fontWeight: '800' }}>
                ✓ 1-click Bank settlement with automated ledger entry
              </div>
            </div>

            {/* Card 5: Dual Bank & Cash Reconciler */}
            <div className="glass-panel-glow" style={{ padding: '32px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Landmark size={22} color="#fbbf24" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '10px' }}>
                Dual Bank & Cash Drawer Book
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '16px' }}>
                Double-entry bookkeeping designed for fleet enterprises. Automatically reconciles company bank accounts (HDFC, SBI, Axis) alongside physical office cash drawer and driver advances.
              </p>
              <div style={{ fontSize: '12px', color: '#fbbf24', fontWeight: '800' }}>
                ✓ 100% Balanced cash book ready for Chartered Accountant
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* VERTICAL 2: EDURIDE SCHOOL FLEET (BENTO GRID) */}
      {/* ================================================================== */}
      {platform === 'school' && (
        <div id="eduride" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
            {/* Card 1: Smart RFID Tap-in */}
            <div className="glass-panel-glow glass-panel-cyan" style={{ padding: '36px', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Radio size={24} color="#38bdf8" />
                </div>
                <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                  CAMPUS HARDWARE READY
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
                Smart RFID Student Attendance & Offline Cache
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '14px', lineHeight: '1.65', marginBottom: '22px' }}>
                Students tap their RFID smart cards upon entering and exiting the bus. The driver console chimes with instant student photo identification. Works 100% offline in underground basement pickups and syncs automatically when signal resumes.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#38bdf8" /> Audible sound alert on wrong bus or wrong stop boarding
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#38bdf8" /> Offline-first SQLite memory prevents data loss in remote areas
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#38bdf8" /> Instant sync with school ERP attendance ledger
                </div>
              </div>
            </div>

            {/* Card 2: Automated WhatsApp to Parents */}
            <div className="glass-panel-glow glass-panel-cyan" style={{ padding: '36px', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bell size={24} color="#34d399" />
                </div>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                  ZERO PARENT COMPLAINTS
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
                Automated Parent WhatsApp Broadcasts (No App Needed)
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '14px', lineHeight: '1.65', marginBottom: '22px' }}>
                Parents do not want to download another bulky mobile app. EduRide sends real-time WhatsApp updates with 1-click live bus tracking links at every major transit milestone.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" /> "Bus has departed campus" morning route notification
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" /> "Student safely boarded at Green Valley Stop at 07:42 AM"
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" /> 1-Click live map tracking link with live speed & ETA
                </div>
              </div>
            </div>
          </div>

          {/* Bento Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="glass-panel-glow" style={{ padding: '32px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldAlert size={22} color="#f43f5e" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '10px' }}>
                Speed Governor & Geofence Sirens
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '16px' }}>
                Automatic siren alert if bus exceeds 40 km/h in school corridors. Live geofence rings around student stops alert drivers if any designated stop is skipped.
              </p>
              <div style={{ fontSize: '12px', color: '#f43f5e', fontWeight: '800' }}>
                ✓ Strict Child Safety Protocol Compliance
              </div>
            </div>

            <div className="glass-panel-glow" style={{ padding: '32px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Compass size={22} color="#38bdf8" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '10px' }}>
                AI Route Optimization & Fee Tracking
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '16px' }}>
                Re-order student pickup sequences to save 22% monthly diesel. Track term-wise school bus fees, bus pass renewals, and transport dues per student.
              </p>
              <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: '800' }}>
                ✓ Cuts average route transit time by 18 minutes
              </div>
            </div>

            <div className="glass-panel-glow" style={{ padding: '32px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck size={22} color="#10b981" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', marginBottom: '10px' }}>
                Principal & Transport Head SOS Console
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '16px' }}>
                Single-pane command dashboard showing all 40+ school buses simultaneously with real-time passenger counts, speed telemetry, and driver contact hotlinks.
              </p>
              <div style={{ fontSize: '12px', color: '#34d399', fontWeight: '800' }}>
                ✓ 100% Audit trail for CBSE & State Transport norms
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* VERTICAL 3: CORPDRIVE ENTERPRISE (BENTO GRID) */}
      {/* ================================================================== */}
      {platform === 'corp' && (
        <div id="corpdrive" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
            <div className="glass-panel-glow glass-panel-purple" style={{ padding: '36px', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={24} color="#c084fc" />
                </div>
                <span style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                  CORPORATE IT & BPO
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
                Automated Shift Rostering & Dynamic Cab Pooling
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '14px', lineHeight: '1.65', marginBottom: '22px' }}>
                Manage 3-shift employee commutes for IT parks and manufacturing campuses. AI route clustering groups employees by geographical proximity, cutting company cab lease costs by 28%.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#c084fc" /> Automated shift change requests directly via employee mobile PWA
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#c084fc" /> Female employee first-pickup & last-drop escort compliance
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#c084fc" /> Tamper-proof OTP verification at boarding
                </div>
              </div>
            </div>

            <div className="glass-panel-glow glass-panel-purple" style={{ padding: '36px', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={24} color="#c084fc" />
                </div>
                <span style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                  ENTERPRISE AUDIT READY
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
                B2B Corporate Invoicing with Fastag & GPS Toll Audits
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '14px', lineHeight: '1.65', marginBottom: '22px' }}>
                Generate monthly corporate GST tax invoices compliant with multinational procurement audits. Automatically links Fastag toll receipts, parking slips, and GPS trip logs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#c084fc" /> Itemized employee trip logs with GPS timestamp proofs
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#c084fc" /> 1-Click export to SAP, Tally Prime, and Zoho Books
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#c084fc" /> Automated monthly corporate account credit statements
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
