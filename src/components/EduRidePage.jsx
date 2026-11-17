import React from 'react';
import { GraduationCap, Radio, BellRing, ShieldAlert, CheckCircle2, Sparkles, MapPin, Compass } from 'lucide-react';

export default function EduRidePage({ onOpenDemo }) {
  return (
    <div style={{ padding: '60px 24px 100px 24px', maxWidth: '1360px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '9999px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#38bdf8', fontSize: '12px', fontWeight: '900', marginBottom: '16px' }}>
          🎒 EDURIDE CAMPUS TRANSIT OS
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: '950', fontFamily: 'var(--font-heading)', color: '#ffffff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
          Smart RFID Student Safety & Bus Command
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.65' }}>
          Empower your school with tamper-proof RFID student attendance, zero-latency automated WhatsApp alerts to parents, and real-time speed governor radar.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '40px' }}>
        <div className="glass-panel-glow" style={{ padding: '36px', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <Radio size={24} color="#38bdf8" />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
            Smart RFID Student Tap-in
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.65', marginBottom: '20px' }}>
            Students tap their smart ID card when boarding and de-boarding. The terminal chimes with visual photo confirmation and sounds an immediate audio alert if a child boards the wrong bus or gets off at the wrong stop.
          </p>
          <div style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '800' }}>
            ✓ 100% Offline SQLite caching for basement and rural stops
          </div>
        </div>

        <div className="glass-panel-glow" style={{ padding: '36px', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <BellRing size={24} color="#34d399" />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
            Instant Parent WhatsApp Alerts
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.65', marginBottom: '20px' }}>
            Parents do not need to download another bulky mobile app. EduRide automatically dispatches branded WhatsApp notifications with live tracking links when the bus departs campus, when the student boards, and when they arrive home.
          </p>
          <div style={{ fontSize: '13px', color: '#34d399', fontWeight: '800' }}>
            ✓ Reduces 95% of anxious parent calls to the school front desk
          </div>
        </div>

        <div className="glass-panel-glow" style={{ padding: '36px', borderColor: 'rgba(244, 63, 94, 0.3)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <ShieldAlert size={24} color="#f43f5e" />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff', marginBottom: '12px' }}>
            Speed Governor & Campus Geofencing
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.65', marginBottom: '20px' }}>
            Proactive speed monitoring alerts the transport director immediately if any bus exceeds 40 km/h in school corridors. Digital geofence safety rings alert drivers if any student stop is skipped.
          </p>
          <div style={{ fontSize: '13px', color: '#f43f5e', fontWeight: '800' }}>
            ✓ 100% CBSE & State Transport Safety Board Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
