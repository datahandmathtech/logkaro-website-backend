import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ComparisonTable({ onOpenDemo }) {
  const comparisons = [
    {
      feature: 'Guest Fuel Deduction Tracking',
      oldWay: 'Manual slips, phone calls with drivers, frequent billing mismatches',
      logkaro: 'Autonomous deduction from client balance due with pump photo receipt'
    },
    {
      feature: 'Fleet Dispatch & Odometer Check',
      oldWay: 'Paper registers or Excel sheets easily altered by drivers',
      logkaro: 'Live digital DRS matrix with tamper-resistant GPS odometer telemetry'
    },
    {
      feature: 'Outside / Market Car Sourcing',
      oldWay: 'Messy WhatsApp groups, forgotten vendor dues, lost commission',
      logkaro: 'Built-in 3-click sourcing, protected operator margins, vendor statements'
    },
    {
      feature: 'Garage & Tyre Maintenance Ledger',
      oldWay: 'Unorganized paper bills, disputed garage balances (e.g. SpeedLine Tyres & Service Hub)',
      logkaro: 'Dedicated vendor ledger with 1-click HDFC/Bank payment settlement'
    },
    {
      feature: 'Bank & Cash Reconciler',
      oldWay: 'Cash in drawer never matches bank book; CA charges hefty reconciliation fees',
      logkaro: 'Full dual-entry reconciliation for HDFC, Axis, UPI & Cash in hand'
    },
    {
      feature: 'School Bus & Student Safety',
      oldWay: 'Manual paper registers, anxious parent calls asking "Where is the bus?"',
      logkaro: 'Smart RFID tap-in, live GPS parent link & automated WhatsApp alerts'
    },
    {
      feature: 'Client Invoicing & Payment Links',
      oldWay: 'Word templates, handwritten receipts, slow payment recovery',
      logkaro: '1-click branded WhatsApp PDF with instant UPI payment QR code'
    },
    {
      feature: 'RTO Compliance & Permitting',
      oldWay: 'Missed fitness or insurance dates leading to heavy interstate toll fines',
      logkaro: 'Proactive 30/15/3-day expiry radar on admin WhatsApp dashboard'
    },
    {
      feature: 'Driver Mobile Experience',
      oldWay: 'Installing bulky apps from Play Store requiring 500MB phone storage',
      logkaro: 'Ultra-fast lightweight Progressive Web App (PWA) under 15MB'
    },
    {
      feature: 'Corporate Shift Rostering',
      oldWay: 'Manual Excel seat planning, empty deadhead return trips',
      logkaro: 'AI dynamic clustering maximizing occupancy & reducing leasing by 28%'
    },
    {
      feature: 'Night Commute Escort Protocol',
      oldWay: 'Unverified paper signatures, zero female employee security proof',
      logkaro: 'Mandatory guard check-in, live SOS radar & silent audio bridge'
    },
    {
      feature: 'Accounting & CA Export',
      oldWay: 'Spending 5 days at end-of-month collating crumpled cash receipts',
      logkaro: 'Instant 1-click export directly to Tally Prime, Zoho Books, or Excel'
    }
  ];

  return (
    <section style={{ padding: '100px 24px', background: 'rgba(6, 10, 22, 0.85)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '9999px',
            background: 'rgba(244, 63, 94, 0.1)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            color: '#f43f5e',
            fontSize: '12px',
            fontWeight: '900',
            marginBottom: '16px'
          }}>
            ⚖️ HEAD-TO-HEAD COMPARISON
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '950',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-1.5px',
            marginBottom: '16px',
            color: '#ffffff'
          }}>
            Excel & WhatsApp Chaos vs. LogKaro Intelligent OS
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255, 255, 255, 0.72)' }}>
            Why leading transport operators, school boards, and corporate mobility heads are leaving legacy manual tools behind.
          </p>
        </div>

        {/* Table */}
        <div style={{
          overflowX: 'auto',
          borderRadius: '22px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: 'rgba(9, 15, 30, 0.9)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'rgba(13, 22, 44, 0.98)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <th style={{ padding: '22px 24px', color: '#ffffff', fontWeight: '950', width: '28%' }}>
                  Operational Capability
                </th>
                <th style={{ padding: '22px 24px', color: '#f87171', fontWeight: '950', width: '36%' }}>
                  ❌ Traditional Excel & WhatsApp Chaos
                </th>
                <th style={{ padding: '22px 24px', color: '#fbbf24', fontWeight: '950', width: '36%', background: 'rgba(245, 158, 11, 0.1)' }}>
                  ⚡ LogKaro Intelligent OS
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={idx} style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)'
                }}>
                  <td style={{ padding: '18px 24px', fontWeight: '850', color: '#ffffff' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '18px 24px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <XCircle size={16} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.oldWay}</span>
                    </div>
                  </td>
                  <td style={{ padding: '18px 24px', color: '#f1f5f9', fontWeight: '650', fontSize: '13px', background: 'rgba(245, 158, 11, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.logkaro}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
