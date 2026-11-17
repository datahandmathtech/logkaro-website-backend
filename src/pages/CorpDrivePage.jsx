import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  FileSpreadsheet, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Layers
} from 'lucide-react';

export default function CorpDrivePage({ onOpenDemo }) {
  return (
    <div style={{ paddingBottom: '90px' }}>
      <section style={{
        position: 'relative',
        padding: '90px 24px 70px 24px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/corporate_techpark.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          opacity: 0.22,
          filter: 'blur(1px)'
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(3, 6, 17, 0.85) 0%, rgba(3, 6, 17, 0.98) 100%)'
        }} />

        <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '18px', fontWeight: '750' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#c084fc' }}>Solutions</span>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>CorpDrive Enterprise</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '900',
              color: '#c084fc',
              marginBottom: '20px'
            }}>
              <Building2 size={14} /> ENTERPRISE EMPLOYEE MOBILITY OS
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: '950',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              Autonomous Employee Commute, <span style={{ color: '#c084fc' }}>Cab Pooling</span> & B2B GST Invoicing
            </h1>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '32px'
            }}>
              Automate corporate shift rosters, maximize employee cab seat utilization, and generate 100% compliant B2B tax invoices with GPS route and digital toll audit proofs.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} /> Schedule Enterprise Pilot
              </button>
              <a href="https://logkaro.com/login" target="_blank" rel="noreferrer" className="btn-secondary-glow" style={{ padding: '14px 24px', fontSize: '15px', textDecoration: 'none' }}>
                Corporate Admin Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split 1: Shift Rosters & Tech Park Photo */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid">
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#c084fc',
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}>
              <Users size={14} /> Shift Rosters & Cab Pooling
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Dynamic Shift Rostering & Intelligent Employee Pooling
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              LogKaro groups employees living in nearby neighborhoods into shared premium sedans and MPVs. Cut corporate transport budgets by 34% without compromising employee comfort.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Female Commuter Safety Protocol:</strong> Verified drivers, automatic first-pickup/last-drop security rules, and digital escort logs.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Employee Mobile Pass:</strong> One-tap digital boarding pass with driver live ETA.
                </span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              Schedule Corporate Tour <ArrowRight size={14} />
            </button>
          </div>

          <div className="photo-frame" style={{ height: '420px' }}>
            <img src="/images/corporate_techpark.jpg" alt="Corporate Tech Park Campus" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge">
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#c084fc' }}>ENTERPRISE COMMUTE POOL</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Shift 22:00 Inbound • 8 Cabs Pooled (92% Fill Rate)</div>
              </div>
              <span style={{ background: '#a855f7', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>
                OPTIMIZED
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
