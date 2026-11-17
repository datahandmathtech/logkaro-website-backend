import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Car, 
  Fuel, 
  GraduationCap, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Radio, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  CreditCard,
  FileText
} from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('drs');
  const [fuelDeducted, setFuelDeducted] = useState(true);
  const [drsFilter, setDrsFilter] = useState('all');

  const totalPackageFare = 15000;
  const advancePayment = 2000;
  const pumpFuelAmount = 3500;
  const netBalance = fuelDeducted ? (totalPackageFare - advancePayment - pumpFuelAmount) : (totalPackageFare - advancePayment);

  return (
    <section style={{
      position: 'relative',
      padding: '60px 24px 90px 24px',
      overflow: 'hidden'
    }}>
      {/* Background Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1200px',
        height: '520px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)',
        filter: 'blur(95px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Floating Innovation Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '6px 20px',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.14) 0%, rgba(6, 182, 212, 0.12) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.2)'
          }}>
            <span className="radar-dot" />
            <span style={{ color: '#fbbf24', fontSize: '13px', fontWeight: '900', letterSpacing: '0.5px' }}>
              LOGKARO ENTERPRISE MOBILITY OS 2.8
            </span>
            <span style={{
              fontSize: '11px',
              padding: '2px 8px',
              background: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              color: '#ffffff',
              fontWeight: '800'
            }}>
              Now Live Across 550+ Fleets
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: 'center', maxWidth: '1120px', margin: '0 auto 40px auto' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            fontWeight: '950',
            lineHeight: '1.08',
            letterSpacing: '-1.5px',
            marginBottom: '22px'
          }}>
            The Intelligent Operating System for{' '}
            <span className="text-gradient-gold">Taxi Fleets</span>,{' '}
            <span className="text-gradient-cyan">School Transit</span> &{' '}
            <span className="text-gradient-purple">Corporate Mobility</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 21px)',
            color: 'rgba(241, 245, 249, 0.85)',
            lineHeight: '1.65',
            maxWidth: '940px',
            margin: '0 auto 34px auto',
            fontWeight: '500'
          }}>
            Eliminate Excel errors, guest petrol slip disputes, missing driver odometer logs, and WhatsApp confusion. 
            <strong> LogKaro</strong> unifies Live DRS Dispatch, Outside Car Sourcing, Autonomous Fuel Deductions, 
            RFID School Bus Geofencing, and Dual Bank Reconciliation into one unified mission-critical cockpit.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={onOpenDemo}
              className="btn-primary-glow"
              style={{
                padding: '17px 38px',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={18} /> Schedule 1-on-1 VIP Live Tour
            </button>

            <button
              onClick={() => {
                setActivePage('taxi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary-glow"
              style={{
                padding: '17px 30px',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Explore Commercial Taxi OS <ArrowRight size={16} />
            </button>
          </div>

          {/* Trust Checkmarks */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '26px',
            marginTop: '30px',
            flexWrap: 'wrap',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '13px',
            fontWeight: '700'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> 15-Minute Fleet Migration
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> No Credit Card Required
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> Works on Any Basic Smartphone
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> 24/7 Dedicated Indian Operations Desk
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        
        {/* Real Fleet & Transit Photo Showcase Strip */}
        <div style={{
          marginTop: '36px',
          marginBottom: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          <div className="photo-frame" style={{ height: '170px' }}>
            <img src="/images/taxi_fleet_hero.jpg" alt="Commercial Taxi & Outstation Fleet" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge" style={{ bottom: '10px', left: '10px', right: '10px', padding: '6px 10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: '#fbbf24' }}>🚗 28,500+ Active Tour Sedans</span>
              <span style={{ fontSize: '10px', color: '#10b981', fontWeight: '800' }}>GPS LIVE</span>
            </div>
          </div>

          <div className="photo-frame" style={{ height: '170px' }}>
            <img src="/images/school_bus_students.jpg" alt="School Transit Bus Fleets" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge" style={{ bottom: '10px', left: '10px', right: '10px', padding: '6px 10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: '#38bdf8' }}>🎓 1.2M+ Students Safe Daily</span>
              <span style={{ fontSize: '10px', color: '#38bdf8', fontWeight: '800' }}>RFID TAP</span>
            </div>
          </div>

          <div className="photo-frame" style={{ height: '170px' }}>
            <img src="/images/corporate_techpark.jpg" alt="Corporate Tech Park Commuter Cabs" />
            <div className="photo-overlay-gradient" />
            <div className="photo-floating-badge" style={{ bottom: '10px', left: '10px', right: '10px', padding: '6px 10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: '#c084fc' }}>🏢 350+ Enterprise IT Parks</span>
              <span style={{ fontSize: '10px', color: '#c084fc', fontWeight: '800' }}>ROSTER POOL</span>
            </div>
          </div>
        </div>

        {/* HIGH-FIDELITY LIVE OS COCKPIT MOCKUP */}
        {/* ------------------------------------------------------------------ */}
        <div style={{
          marginTop: '40px',
          borderRadius: '24px',
          padding: '2px',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.5) 0%, rgba(6, 182, 212, 0.35) 50%, rgba(168, 85, 247, 0.4) 100%)',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(245, 158, 11, 0.2)'
        }}>
          <div style={{
            background: '#060a17',
            borderRadius: '22px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Window Top Controls */}
            <div style={{
              padding: '16px 24px',
              background: 'rgba(11, 18, 36, 0.98)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}>
              {/* Traffic Lights */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '7px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '800',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>logkaro.cloud/command-center</span>
                  <span style={{
                    fontSize: '10px',
                    padding: '2px 7px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#34d399',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 185, 129, 0.4)'
                  }}>
                    ● 28,500 Fleets Synced
                  </span>
                </div>
              </div>

              {/* 4 Interactive Switcher Tabs */}
              <div style={{
                display: 'flex',
                gap: '6px',
                background: 'rgba(4, 7, 17, 0.85)',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <button
                  onClick={() => setActiveTab('drs')}
                  style={{
                    background: activeTab === 'drs' ? '#fbbf24' : 'transparent',
                    color: activeTab === 'drs' ? '#040711' : 'rgba(255, 255, 255, 0.75)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                >
                  <Car size={14} /> Live DRS Dispatch
                </button>

                <button
                  onClick={() => setActiveTab('fuel')}
                  style={{
                    background: activeTab === 'fuel' ? '#fbbf24' : 'transparent',
                    color: activeTab === 'fuel' ? '#040711' : 'rgba(255, 255, 255, 0.75)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                >
                  <Fuel size={14} /> Guest Fuel Deduction
                </button>

                <button
                  onClick={() => setActiveTab('school')}
                  style={{
                    background: activeTab === 'school' ? '#38bdf8' : 'transparent',
                    color: activeTab === 'school' ? '#040711' : 'rgba(255, 255, 255, 0.75)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                >
                  <GraduationCap size={14} /> EduRide School Bus
                </button>

                <button
                  onClick={() => setActiveTab('maintenance')}
                  style={{
                    background: activeTab === 'maintenance' ? '#10b981' : 'transparent',
                    color: activeTab === 'maintenance' ? '#040711' : 'rgba(255, 255, 255, 0.75)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                >
                  <Wrench size={14} /> Garage Maintenance
                </button>
              </div>
            </div>

            {/* ============================================================== */}
            {/* TAB 1: LIVE DRS FLEET CONTROL BOARD */}
            {/* ============================================================== */}
            {activeTab === 'drs' && (
              <div style={{ padding: '28px', background: '#070c1a' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '950', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="radar-dot" /> Live DRS Operations Matrix — Real-Time Fleet Telemetry
                    </h3>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                      Synchronized duty rosters, tamper-proof GPS odometer tracking, and outside partner vehicle sourcing.
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setDrsFilter('all')}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: drsFilter === 'all' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.04)',
                        color: drsFilter === 'all' ? '#fbbf24' : 'rgba(255,255,255,0.7)',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      All Duties (56)
                    </button>
                    <button
                      onClick={() => setDrsFilter('outside')}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: drsFilter === 'outside' ? 'rgba(168,85,247,0.3)' : 'rgba(255,255,255,0.04)',
                        color: drsFilter === 'outside' ? '#c084fc' : 'rgba(255,255,255,0.7)',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      Outside Partner Network (9)
                    </button>
                  </div>
                </div>

                {/* DRS Table UI */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.6px' }}>
                        <th style={{ textAlign: 'left', padding: '10px 14px' }}>Duty ID & Guest</th>
                        <th style={{ textAlign: 'left', padding: '10px 14px' }}>Vehicle Plate & Model</th>
                        <th style={{ textAlign: 'left', padding: '10px 14px' }}>Tour Itinerary</th>
                        <th style={{ textAlign: 'left', padding: '10px 14px' }}>Assigned Driver</th>
                        <th style={{ textAlign: 'right', padding: '10px 14px' }}>Total Package</th>
                        <th style={{ textAlign: 'right', padding: '10px 14px' }}>Balance Due</th>
                        <th style={{ textAlign: 'center', padding: '10px 14px' }}>Live Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(drsFilter === 'all' || drsFilter === 'fleet') && (
                        <tr style={{ background: 'rgba(13, 22, 44, 0.85)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <td style={{ padding: '14px', fontWeight: '900', color: '#ffffff' }}>
                            <span style={{ color: '#fbbf24', background: 'rgba(245,158,11,0.15)', padding: '2px 6px', borderRadius: '4px', marginRight: '6px' }}>#10/39</span>
                            Tour Booking (4D/3N)
                          </td>
                          <td style={{ padding: '14px' }}>
                            <span className="vehicle-plate" style={{ background: '#0a1122', border: '1px solid rgba(245,158,11,0.5)', color: '#fbbf24' }}>
                              🚗 DL-01-AB-1001 • Dzire
                            </span>
                          </td>
                          <td style={{ padding: '14px', color: 'rgba(255,255,255,0.85)' }}>
                            New Delhi ➔ Agra Expressway ➔ Jaipur
                          </td>
                          <td style={{ padding: '14px', color: '#93c5fd', fontWeight: '750' }}>
                            Rohan Sharma (GPS Active)
                          </td>
                          <td style={{ padding: '14px', textAlign: 'right', fontWeight: '850', color: '#ffffff' }}>
                            ₹14,500
                          </td>
                          <td style={{ padding: '14px', textAlign: 'right', fontWeight: '950', color: '#34d399' }}>
                            ₹8,200 <span style={{ fontSize: '10px', color: '#fbbf24', display: 'block' }}>(Fuel Deducted)</span>
                          </td>
                          <td style={{ padding: '14px', textAlign: 'center' }}>
                            <span style={{ background: 'rgba(16,185,129,0.2)', color: '#10b981', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '900' }}>
                              ON ROUTE
                            </span>
                          </td>
                        </tr>
                      )}

                      {(drsFilter === 'all' || drsFilter === 'fleet') && (
                        <tr style={{ background: 'rgba(13, 22, 44, 0.85)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <td style={{ padding: '14px', fontWeight: '900', color: '#ffffff' }}>
                            <span style={{ color: '#fbbf24', background: 'rgba(245,158,11,0.15)', padding: '2px 6px', borderRadius: '4px', marginRight: '6px' }}>#11/71</span>
                            Airport VIP Transfer
                          </td>
                          <td style={{ padding: '14px' }}>
                            <span className="vehicle-plate" style={{ background: '#0a1122', border: '1px solid rgba(56,189,248,0.5)', color: '#38bdf8' }}>
                              🚗 MH-02-CD-2020 • Crysta
                            </span>
                          </td>
                          <td style={{ padding: '14px', color: 'rgba(255,255,255,0.85)' }}>
                            Mumbai Airport ➔ Nariman Point Business Bay
                          </td>
                          <td style={{ padding: '14px', color: '#93c5fd', fontWeight: '750' }}>
                            Vikram Singh (Available)
                          </td>
                          <td style={{ padding: '14px', textAlign: 'right', fontWeight: '850', color: '#ffffff' }}>
                            ₹5,000
                          </td>
                          <td style={{ padding: '14px', textAlign: 'right', fontWeight: '950', color: '#34d399' }}>
                            ₹1,500 <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block' }}>(Adv ₹3,500)</span>
                          </td>
                          <td style={{ padding: '14px', textAlign: 'center' }}>
                            <span style={{ background: 'rgba(56,189,248,0.2)', color: '#38bdf8', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '900' }}>
                              DISPATCHED
                            </span>
                          </td>
                        </tr>
                      )}

                      {(drsFilter === 'all' || drsFilter === 'outside') && (
                        <tr style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168,85,247,0.3)' }}>
                          <td style={{ padding: '14px', fontWeight: '900', color: '#ffffff' }}>
                            <span style={{ color: '#c084fc', background: 'rgba(168,85,247,0.2)', padding: '2px 6px', borderRadius: '4px', marginRight: '6px' }}>#08/14</span>
                            Golden Triangle Luxury MPV
                            <span style={{ display: 'block', fontSize: '11px', color: '#c084fc', marginTop: '2px' }}>
                              🤝 Partner Fleet: Metro Express Mobility
                            </span>
                          </td>
                          <td style={{ padding: '14px' }}>
                            <span className="vehicle-plate" style={{ background: '#1c1033', border: '1px solid rgba(168,85,247,0.5)', color: '#c084fc' }}>
                              🚐 HR-26-GH-4040 • Innova
                            </span>
                          </td>
                          <td style={{ padding: '14px', color: 'rgba(255,255,255,0.85)' }}>
                            Delhi ➔ Agra ➔ Jaipur
                          </td>
                          <td style={{ padding: '14px', color: '#c084fc', fontWeight: '750' }}>
                            Partner Driver (Contracted)
                          </td>
                          <td style={{ padding: '14px', textAlign: 'right', fontWeight: '850', color: '#ffffff' }}>
                            ₹22,000
                          </td>
                          <td style={{ padding: '14px', textAlign: 'right', fontWeight: '950', color: '#a855f7' }}>
                            +₹1,900 Margin <span style={{ fontSize: '10px', color: '#34d399', display: 'block' }}>(B2B Settlement Lock)</span>
                          </td>
                          <td style={{ padding: '14px', textAlign: 'center' }}>
                            <span style={{ background: 'rgba(168,85,247,0.25)', color: '#c084fc', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '900' }}>
                              EXCHANGE ACTIVE
                            </span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '10px', padding: '12px 18px' }}>
                  <div style={{ fontSize: '12px', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={15} /> <strong>Outside Partner Exchange:</strong> Sourced market cars generate branded customer vouchers while vendor payouts are tracked separately — protecting your 20-30% operator margin.
                  </div>
                  <button onClick={onOpenDemo} className="btn-primary-glow" style={{ padding: '6px 14px', fontSize: '12px' }}>
                    See Live Demo
                  </button>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB 2: AUTONOMOUS GUEST FUEL DEDUCTION SIMULATOR */}
            {/* ============================================================== */}
            {activeTab === 'fuel' && (
              <div style={{ padding: '28px', background: '#070c1a' }}>
                <div style={{
                  marginBottom: '20px',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: 'linear-gradient(90deg, rgba(245,158,11,0.18) 0%, rgba(16,185,129,0.1) 100%)',
                  border: '1px solid rgba(245,158,11,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#040711', fontWeight: '950' }}>
                      <Fuel size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '950', color: '#ffffff' }}>
                        Autonomous Fuel Netting Simulator
                      </h4>
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                        Click the button to simulate a live petrol pump bill paid directly by a guest!
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setFuelDeducted(!fuelDeducted)}
                    style={{
                      background: fuelDeducted ? '#10b981' : '#f59e0b',
                      color: '#040711',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '12px',
                      fontWeight: '900',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Zap size={14} /> {fuelDeducted ? 'Deduction Applied (Click to Revert)' : 'Simulate Fuel Slip (-₹3,500)'}
                  </button>
                </div>

                <div style={{ maxWidth: '820px', margin: '0 auto', background: 'rgba(13, 22, 44, 0.95)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '18px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '850', textTransform: 'uppercase' }}>
                        Autonomous Ledger Reconciliation
                      </span>
                      <h4 style={{ fontSize: '19px', fontWeight: '950', color: '#ffffff' }}>
                        Client Billing & Payment Statement
                      </h4>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                        Vehicle: Executive Sedan (DL-01-AB-1001) • Tour Dates: 13 Nov - 16 Nov 2026
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Total Package Fare</div>
                      <div style={{ fontSize: '22px', fontWeight: '950', color: '#ffffff' }}>₹{totalPackageFare.toLocaleString('en-IN')}</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '11px', color: '#34d399', fontWeight: '750' }}>Total Received</div>
                      <div style={{ fontSize: '18px', fontWeight: '950', color: '#34d399' }}>
                        ₹{fuelDeducted ? (advancePayment + pumpFuelAmount).toLocaleString('en-IN') : advancePayment.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '750' }}>Net Balance Due</div>
                      <div style={{ fontSize: '18px', fontWeight: '950', color: '#fbbf24' }}>
                        ₹{netBalance.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.25)', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '11px', color: '#f43f5e', fontWeight: '750' }}>Direct Fuel Netting</div>
                      <div style={{ fontSize: '18px', fontWeight: '950', color: '#f43f5e' }}>
                        {fuelDeducted ? `₹${pumpFuelAmount.toLocaleString('en-IN')}` : '₹0'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '13px' }}>
                      <span>Outstation Tour Package Booking Fare</span>
                      <strong style={{ color: '#ffffff' }}>₹{totalPackageFare.toLocaleString('en-IN')}</strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(16,185,129,0.06)', borderRadius: '8px', fontSize: '13px', borderLeft: '3px solid #10b981' }}>
                      <div>
                        <span style={{ color: '#34d399', fontWeight: '800' }}>Advance Payment Received</span>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>Bank Current A/C • UPI Ref #LK-9941</div>
                      </div>
                      <strong style={{ color: '#34d399' }}>- ₹{advancePayment.toLocaleString('en-IN')}</strong>
                    </div>

                    {fuelDeducted && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'linear-gradient(90deg, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.06) 100%)', border: '1px solid rgba(245,158,11,0.5)', borderRadius: '8px', fontSize: '13px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ background: '#f59e0b', color: '#040711', fontSize: '10px', fontWeight: '950', padding: '2px 6px', borderRadius: '4px' }}>
                              AUTONOMOUS
                            </span>
                            <strong style={{ color: '#fbbf24' }}>Fuel Paid by Guest (Deducted from Balance)</strong>
                          </div>
                          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                            Highway Fuel Station Slip #4492 • Photo attached by driver • Auto-reconciled
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <strong style={{ color: '#fbbf24', fontSize: '15px' }}>- ₹{pumpFuelAmount.toLocaleString('en-IN')}</strong>
                          <div style={{ fontSize: '11px', color: '#34d399' }}>Remaining Due: ₹{netBalance.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB 3: EDURIDE SCHOOL BUS COMMAND */}
            {/* ============================================================== */}
            {activeTab === 'school' && (
              <div style={{ padding: '28px', background: '#070c1a' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
                  <div style={{ background: 'rgba(13, 22, 44, 0.85)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div>
                        <span className="vehicle-plate" style={{ background: '#0369a1', color: '#ffffff', marginRight: '8px' }}>
                          🚌 BUS-14 (DL-01-EA-4902)
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff' }}>
                          Morning Route: Sector 62 ➔ Campus Gate 2
                        </span>
                      </div>
                      <span style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '11px', fontWeight: '900', padding: '3px 8px', borderRadius: '9999px' }}>
                        38 KM/H (SAFE)
                      </span>
                    </div>

                    <div style={{ marginBottom: '18px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                        <span>Stop 4 of 7: Green Valley Park</span>
                        <span style={{ color: '#38bdf8', fontWeight: '800' }}>Campus ETA: 08:10 AM</span>
                      </div>
                      <div style={{ height: '7px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #38bdf8 0%, #06b6d4 100%)' }} />
                      </div>
                    </div>

                    <div style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
                      Recent RFID Student Boardings (Live Feed)
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                        <span>Aarav S. (Class 7-B • RFID #8841)</span>
                        <span style={{ color: '#34d399', fontWeight: '850' }}>07:42 AM • Boarded</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                        <span>Ananya V. (Class 4-A • RFID #8890)</span>
                        <span style={{ color: '#34d399', fontWeight: '850' }}>07:45 AM • Boarded</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(6, 78, 59, 0.25)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '20px' }}>💬</span>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '950', color: '#34d399' }}>
                          Automated WhatsApp to Parents
                        </div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                          Dispatched in under 800ms upon student RFID card tap
                        </div>
                      </div>
                    </div>

                    <div style={{ background: '#0b141a', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '12px', lineHeight: '1.6', color: '#e9edef' }}>
                      <div style={{ fontWeight: '800', color: '#25d366', marginBottom: '4px' }}>
                        🟢 Heritage Campus Transit Alert
                      </div>
                      <p>
                        Dear Mr. Sharma, your ward <strong>Aarav Sharma</strong> has safely boarded <strong>Bus #14</strong> at <strong>Green Valley Stop</strong> at <strong>07:42 AM</strong>.
                      </p>
                      <div style={{ marginTop: '8px', padding: '6px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', fontSize: '11px', color: '#38bdf8' }}>
                        📍 Live Track Bus: <span style={{ color: '#38bdf8', textDecoration: 'underline' }}>logkaro.com/track/bus14</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB 4: FLEET MAINTENANCE & TYRES */}
            {/* ============================================================== */}
            {activeTab === 'maintenance' && (
              <div style={{ padding: '28px', background: '#070c1a' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
                  <div style={{ background: 'rgba(13, 22, 44, 0.85)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div>
                        <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '850', textTransform: 'uppercase' }}>
                          Authorized Garage Ledger
                        </span>
                        <h4 style={{ fontSize: '17px', fontWeight: '950', color: '#ffffff' }}>
                          Workshop Maintenance & Tyres
                        </h4>
                      </div>
                      <span style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399', fontSize: '11px', fontWeight: '900', padding: '3px 8px', borderRadius: '6px' }}>
                        HDFC SETTLED
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                        <span>KA-03-EF-3030 (2 Front Tyres Replaced)</span>
                        <strong style={{ color: '#ffffff' }}>₹4,500 Bill</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(16,185,129,0.08)', borderRadius: '6px' }}>
                        <span style={{ color: '#34d399' }}>1-Click Corporate Bank Settlement (A/C ending in 6187)</span>
                        <strong style={{ color: '#34d399' }}>✓ Settled</strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(13, 22, 44, 0.85)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div>
                        <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '850', textTransform: 'uppercase' }}>
                          Dual-Entry Reconciler
                        </span>
                        <h4 style={{ fontSize: '17px', fontWeight: '950', color: '#ffffff' }}>
                          Bank & Cash Drawer Ledgers
                        </h4>
                      </div>
                      <span style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399', fontSize: '11px', fontWeight: '900', padding: '3px 8px', borderRadius: '6px' }}>
                        100% BALANCED
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                        <span>Company Current Account</span>
                        <strong style={{ color: '#34d399' }}>₹4,82,310 Cr</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                        <span>Office Cash Drawer (Physical Cash)</span>
                        <strong style={{ color: '#fbbf24' }}>₹38,200</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
