import React from 'react';
import { Car, Fuel, CreditCard, Landmark, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function TaxiFleetPage({ onOpenDemo }) {
  return (
    <div style={{ padding: '60px 24px 100px 24px', maxWidth: '1360px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#fbbf24', fontSize: '12px', fontWeight: '900', marginBottom: '16px' }}>
          🚖 COMMERCIAL TAXI & TOUR OPERATIONS
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: '950', fontFamily: 'var(--font-heading)', color: '#ffffff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
          The Operating System for Outstation & Tourist Cabs
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.65' }}>
          Run your commercial fleet with zero blind spots. From autonomous guest fuel deductions to protected outside car network sourcing, LogKaro handles every rupee with absolute transparency.
        </p>
      </div>

      {/* Feature 1: Autonomous Guest Fuel Deduction */}
      <div className="glass-panel-glow" style={{ padding: 'clamp(28px, 4vw, 48px)', borderRadius: '24px', marginBottom: '36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span style={{ background: '#f59e0b', color: '#040711', fontSize: '11px', fontWeight: '950', padding: '3px 10px', borderRadius: '6px' }}>
              PATENTED ARCHITECTURE
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: '950', color: '#ffffff', marginTop: '12px', marginBottom: '14px' }}>
              Autonomous Guest Fuel Deductions
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.7', marginBottom: '22px' }}>
              When outstation tourists pay petrol pumps directly via cash or UPI, driver disputes and manual ledger calculation errors commonly destroy operator profits. 
              With LogKaro, the driver simply snaps a photo of the fuel pump slip. LogKaro extracts the bill, ties it to the exact vehicle plate, and automatically recalculates the net balance due in real time.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginBottom: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#fbbf24" /> Instant fuel receipt photo capture via driver mobile browser
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#fbbf24" /> Auto-deducted from package fare with verified vehicle plate proof
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#fbbf24" /> Zero billing disputes during final hotel guest checkout
              </div>
            </div>
            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 28px', fontSize: '14px' }}>
              Schedule Live Walkthrough
            </button>
          </div>

          {/* High Fidelity UI Diagram */}
          <div style={{ background: 'rgba(10, 16, 32, 0.95)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: '900', color: '#fbbf24' }}>Digital Client Billing Ledger</span>
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '800' }}>● Auto-Reconciled</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Outstation 4D/3N Tour Package</span>
                <strong style={{ color: '#ffffff' }}>₹15,000</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(16,185,129,0.08)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                <span style={{ color: '#34d399' }}>Advance Collected (Bank UPI Ref #LK-9941)</span>
                <strong style={{ color: '#34d399' }}>- ₹2,000</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(245,158,11,0.15)', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.4)' }}>
                <div>
                  <strong style={{ color: '#fbbf24' }}>Fuel Paid by Guest (Pump Slip #4492)</strong>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>IOCL Highway • DL-01-AB-1001</div>
                </div>
                <strong style={{ color: '#fbbf24', fontSize: '15px' }}>- ₹3,500</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontWeight: '800', color: '#ffffff' }}>Net Reconciled Balance Due</span>
                <strong style={{ color: '#34d399', fontSize: '18px' }}>₹9,500</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Outside Car & Vendor Network */}
      <div className="glass-panel-glow" style={{ padding: 'clamp(28px, 4vw, 48px)', borderRadius: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px', alignItems: 'center' }}>
          {/* Left Diagram */}
          <div style={{ background: 'rgba(20, 14, 40, 0.95)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '18px', padding: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: '900', color: '#c084fc' }}>Partner Fleet Exchange Slip</span>
              <span style={{ fontSize: '11px', background: 'rgba(168,85,247,0.2)', color: '#c084fc', padding: '2px 8px', borderRadius: '4px', fontWeight: '800' }}>MARGIN PROTECTED</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Client Billed Tariff (Branded Voucher)</span>
                <strong style={{ color: '#ffffff' }}>₹5,000</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(244,63,94,0.08)', borderRadius: '8px' }}>
                <span style={{ color: '#f87171' }}>Contracted Partner Payout (Pankaj Cab)</span>
                <strong style={{ color: '#f87171' }}>- ₹3,100</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', background: 'rgba(168,85,247,0.18)', borderRadius: '8px', border: '1px solid rgba(168,85,247,0.5)' }}>
                <span style={{ fontWeight: '900', color: '#ffffff' }}>Net Operator Margin Kept</span>
                <strong style={{ color: '#c084fc', fontSize: '18px' }}>+₹1,900 (38% Margin)</strong>
              </div>
            </div>
          </div>

          <div>
            <span style={{ background: '#a855f7', color: '#ffffff', fontSize: '11px', fontWeight: '950', padding: '3px 10px', borderRadius: '6px' }}>
              MARKET SOURCING
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: '950', color: '#ffffff', marginTop: '12px', marginBottom: '14px' }}>
              Outside Car & Partner Fleet Exchange
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.7', marginBottom: '22px' }}>
              Fleet 100% busy during wedding season or holiday peaks? Never turn down high-value customer bookings again. 
              In 3 clicks, assign verified market partner vehicles. LogKaro issues your company-branded voucher to the guest without exposing vendor payout rates, while tracking driver advances and vendor balances in your ledger.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginBottom: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Client receives your branded company voucher with customer fare
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Partner vendor receives separate contracted assignment slip
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Automatic vendor statement generation and 1-click bank settlement
              </div>
            </div>
            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 28px', fontSize: '14px' }}>
              Book Interactive VIP Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
