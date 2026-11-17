import React from 'react';
import { Wrench, CheckCircle2, Landmark, Sparkles, ShieldCheck } from 'lucide-react';

export default function MaintenancePage({ onOpenDemo }) {
  return (
    <div style={{ padding: '60px 24px 100px 24px', maxWidth: '1360px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', fontSize: '12px', fontWeight: '900', marginBottom: '16px' }}>
          🔧 FLEET HEALTH & GARAGE VENDOR LEDGER
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: '950', fontFamily: 'var(--font-heading)', color: '#ffffff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
          Tyre Lifecycle, Garage Ledger & Bank Settlement
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.65' }}>
          Track tyre rotations by serial number, mechanical repairs, and spare parts. Reconcile workshop credit balances with 1-click corporate bank payments.
        </p>
      </div>

      <div className="glass-panel-glow" style={{ padding: 'clamp(28px, 4vw, 48px)', borderRadius: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span style={{ background: '#10b981', color: '#040711', fontSize: '11px', fontWeight: '950', padding: '3px 10px', borderRadius: '6px' }}>
              PREVENTATIVE FLEET CARE
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: '950', color: '#ffffff', marginTop: '12px', marginBottom: '14px' }}>
              Dedicated Workshop & Vendor Ledgers
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.7', marginBottom: '22px' }}>
              Maintain comprehensive financial statements with authorized garages and tyre dealers. Track wheel replacements, oil shifts, and mechanical overhauls. 
              Settle outstanding vendor dues directly through linked corporate accounts (HDFC, ICICI, SBI) with instant transaction logging.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginBottom: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10b981" /> Tyre rotation schedules & serial number lifespan tracking
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10b981" /> 1-Click vendor dues settlement with automated bank sync
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10b981" /> Document vault for RTO fitness, insurance & road permits
              </div>
            </div>
            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 28px', fontSize: '14px' }}>
              Schedule Maintenance Walkthrough
            </button>
          </div>

          <div style={{ background: 'rgba(12, 22, 40, 0.95)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: '900', color: '#34d399' }}>Tyre & Chassis Health Radar</span>
              <span style={{ fontSize: '11px', background: 'rgba(16,185,129,0.2)', color: '#34d399', padding: '2px 8px', borderRadius: '4px', fontWeight: '800' }}>4 WHEELS MONITORED</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Front Left Tyre</div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#10b981' }}>88% Wear Life</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Front Right Tyre</div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#10b981' }}>92% New Fitted</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Rear Left Tyre</div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#f59e0b' }}>68% Rotation Due</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Rear Right Tyre</div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#f59e0b' }}>65% Rotation Due</div>
              </div>
            </div>
            <div style={{ padding: '12px', background: 'rgba(16,185,129,0.08)', borderRadius: '8px', fontSize: '12px', color: '#34d399', textAlign: 'center', fontWeight: '800' }}>
              ✓ Next Alignment & Tyre Rotation Scheduled at 1,50,000 KM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
