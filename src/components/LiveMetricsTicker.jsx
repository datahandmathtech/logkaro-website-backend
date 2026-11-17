import React from 'react';
import { TrendingUp, Users, ShieldCheck, Fuel, Award } from 'lucide-react';

export default function LiveMetricsTicker() {
  const metrics = [
    {
      label: 'Total Value Dispatched',
      value: '₹120+ Crore',
      subtext: 'Across 550+ Active Fleets',
      icon: TrendingUp,
      color: '#fbbf24'
    },
    {
      label: 'Commercial & School Fleets',
      value: '28,500+',
      subtext: 'Cabs, Buses & Travellers',
      icon: Users,
      color: '#38bdf8'
    },
    {
      label: 'Safe Student Boardings',
      value: '1.2 Million+',
      subtext: 'Zero RFID Mismatches',
      icon: ShieldCheck,
      color: '#10b981'
    },
    {
      label: 'Fuel & Leakage Recovered',
      value: '₹4.8 Crore',
      subtext: 'Autonomous Pump Audits',
      icon: Fuel,
      color: '#f43f5e'
    },
    {
      label: 'On-Time SLA Dispatch',
      value: '99.98%',
      subtext: 'Enterprise Grade Reliability',
      icon: Award,
      color: '#a855f7'
    }
  ];

  return (
    <div style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(8, 13, 28, 0.65)',
      backdropFilter: 'blur(20px)',
      padding: '36px 24px'
    }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 16px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${m.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon size={22} color={m.color} />
              </div>
              <div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '950',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.5px'
                }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '12px', fontWeight: '750', color: 'rgba(255, 255, 255, 0.85)' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', marginTop: '2px' }}>
                  {m.subtext}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
