import React from 'react';
import { Building2, Users, FileText, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function CorpDrivePage({ onOpenDemo }) {
  return (
    <div style={{ padding: '60px 24px 100px 24px', maxWidth: '1360px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '9999px', background: 'rgba(168, 85, 247, 0.12)', border: '1px solid rgba(168, 85, 247, 0.4)', color: '#c084fc', fontSize: '12px', fontWeight: '900', marginBottom: '16px' }}>
          🏢 CORPDRIVE ENTERPRISE MOBILITY
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: '950', fontFamily: 'var(--font-heading)', color: '#ffffff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
          Automated Shift Rostering & Corporate B2B Invoicing
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.65' }}>
          Streamline multi-shift employee transportation for IT parks, BPOs, and factories. Maximize vehicle occupancy, ensure night escort security, and generate audit-ready GST tax invoices.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '30px' }}>
        <div className="glass-panel-glow" style={{ padding: '36px', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <Users size={24} color="#c084fc" />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
            Dynamic Route Clustering & Cab Pooling
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.65', marginBottom: '20px' }}>
            Intelligent AI algorithms group employees by geographical location to maximize seat occupancy, cutting corporate monthly leasing and fuel bills by up to 28%.
          </p>
          <div style={{ fontSize: '13px', color: '#c084fc', fontWeight: '800' }}>
            ✓ Self-service shift changes via employee mobile PWA
          </div>
        </div>

        <div className="glass-panel-glow" style={{ padding: '36px', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <FileText size={24} color="#c084fc" />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
            B2B Invoicing with GPS & Fastag Toll Audits
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.65', marginBottom: '20px' }}>
            Generate monthly corporate tax invoices compliant with multinational enterprise audits. Automatically links Fastag electronic toll receipts, parking slips, and GPS trip logs.
          </p>
          <div style={{ fontSize: '13px', color: '#c084fc', fontWeight: '800' }}>
            ✓ 1-Click direct export to SAP, Tally Prime, and Zoho Books
          </div>
        </div>
      </div>
    </div>
  );
}
