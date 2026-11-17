import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  CircleDashed, 
  Landmark, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Disc
} from 'lucide-react';

export default function MaintenancePage({ onOpenDemo }) {
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
          backgroundImage: 'url(/images/garage_maintenance.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
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
            <span style={{ color: '#34d399' }}>Solutions</span>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>Fleet Maintenance & Tyres</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '900',
              color: '#34d399',
              marginBottom: '20px'
            }}>
              <Wrench size={14} /> FLEET HEALTH & WORKSHOP AUDIT OS
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
              Autonomous <span style={{ color: '#34d399' }}>Tyre Wear Monitoring</span> & Garage Settlement
            </h1>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '32px'
            }}>
              Never get overcharged for tyres or vehicle servicing again. Track 4-wheel wear lifecycles, detect duplicate maintenance claims, and settle verified vendor invoices with 1-click bank payouts.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} /> Schedule Maintenance Demo
              </button>
              <a href="https://logkaro.com/login" target="_blank" rel="noreferrer" className="btn-secondary-glow" style={{ padding: '14px 24px', fontSize: '15px', textDecoration: 'none' }}>
                Workshop & Garage Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split: Tyre Service & Garage Photo */}
      <section style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <div className="feature-split-grid">
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#34d399',
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}>
              <Disc size={14} /> 4-Wheel Wear Radar
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '950', color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              Tyre Serial Tracking, Tread Depth & Alignment Telemetry
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              LogKaro tags each individual tyre serial number to its exact axle position (FL, FR, RL, RR, Spare). Receive predictive alerts when tyre tread wears below safety limits or when wheel rotation is due.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>Duplicate Invoice Blocker:</strong> System alerts if a vendor bills for the same spare part or tyre within 45 days.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  <strong>1-Click Bank Settlement:</strong> Reconcile verified garage bills and disburse directly via HDFC/ICICI Corporate Banking API.
                </span>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '12px 22px', fontSize: '13.5px' }}>
              See Tyre Radar Live <ArrowRight size={14} />
            </button>
          </div>

          <div className="photo-frame" style={{ height: '420px' }}>
            <img src="/images/tyre_wheel_service.jpg" alt="Fleet Tyre Wheel Maintenance" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge">
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#34d399' }}>RADIAL WEAR RADAR</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Innova Crysta • Front Left: 82% Life Remaining</div>
              </div>
              <span style={{ background: '#10b981', color: '#000000', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>
                HEALTHY
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
