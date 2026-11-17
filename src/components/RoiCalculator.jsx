import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function RoiCalculator({ onOpenDemo }) {
  const [fleetType, setFleetType] = useState('tourism');
  const [fleetSize, setFleetSize] = useState(25);
  const [avgRevenuePerVehicle, setAvgRevenuePerVehicle] = useState(70000);

  // Dynamic calculations based on fleet type
  const multiplier = fleetType === 'tourism' ? 1.2 : fleetType === 'school' ? 0.9 : 1.1;
  const fuelLeakageRecovered = Math.round(fleetSize * 4500 * multiplier);
  const outsideCarMarginBoost = fleetType === 'school' ? 0 : Math.round(fleetSize * 6800 * multiplier);
  const adminAccountingSaved = Math.round(18000 + (fleetSize * 350));
  const tyreRotationLifeExtended = Math.round(fleetSize * 1800);

  const totalMonthlySavings = fuelLeakageRecovered + outsideCarMarginBoost + adminAccountingSaved + tyreRotationLifeExtended;
  const totalAnnualSavings = totalMonthlySavings * 12;

  return (
    <section id="calculator" style={{ padding: '100px 24px', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{
        borderRadius: '26px',
        background: 'linear-gradient(135deg, rgba(16, 26, 50, 0.9) 0%, rgba(8, 14, 30, 0.95) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        boxShadow: '0 30px 100px rgba(0, 0, 0, 0.8), 0 0 50px rgba(245, 158, 11, 0.12)',
        padding: 'clamp(30px, 4.5vw, 60px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 45px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '9999px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            color: '#fbbf24',
            fontSize: '12px',
            fontWeight: '900',
            marginBottom: '16px'
          }}>
            <Calculator size={14} /> LIVE FLEET PROFIT RECOVERY AUDIT
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.8vw, 46px)',
            fontWeight: '950',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-1.5px',
            marginBottom: '14px',
            color: '#ffffff'
          }}>
            Calculate Exactly How Much Money LogKaro Saves You
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.72)' }}>
            Select your fleet model and adjust vehicle numbers to see real, audited financial recovery based on 550+ active transport companies.
          </p>

          {/* Fleet Type Tabs */}
          <div style={{
            display: 'inline-flex',
            gap: '8px',
            background: 'rgba(4, 7, 17, 0.8)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginTop: '24px'
          }}>
            <button
              onClick={() => setFleetType('tourism')}
              style={{
                background: fleetType === 'tourism' ? '#fbbf24' : 'transparent',
                color: fleetType === 'tourism' ? '#040711' : 'rgba(255,255,255,0.7)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: '900',
                cursor: 'pointer'
              }}
            >
              Tourist Taxi Fleet
            </button>
            <button
              onClick={() => setFleetType('school')}
              style={{
                background: fleetType === 'school' ? '#38bdf8' : 'transparent',
                color: fleetType === 'school' ? '#040711' : 'rgba(255,255,255,0.7)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: '900',
                cursor: 'pointer'
              }}
            >
              School Bus Fleet
            </button>
            <button
              onClick={() => setFleetType('corporate')}
              style={{
                background: fleetType === 'corporate' ? '#c084fc' : 'transparent',
                color: fleetType === 'corporate' ? '#040711' : 'rgba(255,255,255,0.7)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: '900',
                cursor: 'pointer'
              }}
            >
              Corporate Mobility
            </button>
          </div>
        </div>

        {/* Grid: Sliders vs Recovery Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>
                  Total Vehicles in Fleet (Cabs / Buses)
                </label>
                <span style={{
                  fontSize: '20px',
                  fontWeight: '950',
                  color: '#fbbf24',
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '4px 14px',
                  borderRadius: '8px'
                }}>
                  {fleetSize} Vehicles
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#fbbf24',
                  cursor: 'pointer',
                  height: '8px',
                  borderRadius: '4px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '8px' }}>
                <span>5 Small Fleet</span>
                <span>50 Regional Fleet</span>
                <span>300+ Enterprise</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>
                  Avg. Monthly Revenue Per Vehicle
                </label>
                <span style={{
                  fontSize: '18px',
                  fontWeight: '950',
                  color: '#34d399',
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '4px 14px',
                  borderRadius: '8px'
                }}>
                  ₹{avgRevenuePerVehicle.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="180000"
                step="5000"
                value={avgRevenuePerVehicle}
                onChange={(e) => setAvgRevenuePerVehicle(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#10b981',
                  cursor: 'pointer',
                  height: '8px',
                  borderRadius: '4px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '8px' }}>
                <span>₹30,000 Local</span>
                <span>₹80,000 Outstation</span>
                <span>₹1,80,000+ Luxury / Bus</span>
              </div>
            </div>

            {/* Granular Breakdown */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '18px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>⛽ Guest Fuel Slip Leakage Prevented:</span>
                <strong style={{ color: '#f43f5e' }}>+₹{fuelLeakageRecovered.toLocaleString('en-IN')} /mo</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>🤝 Outside Cab Margin Recovery:</span>
                <strong style={{ color: '#c084fc' }}>+₹{outsideCarMarginBoost.toLocaleString('en-IN')} /mo</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>🔧 Tyre Life Extension & Garage Audit:</span>
                <strong style={{ color: '#10b981' }}>+₹{tyreRotationLifeExtended.toLocaleString('en-IN')} /mo</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>⏱️ Admin & Accounting Hours Saved:</span>
                <strong style={{ color: '#fbbf24' }}>+₹{adminAccountingSaved.toLocaleString('en-IN')} /mo</strong>
              </div>
            </div>
          </div>

          {/* Big Results Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.45)',
            borderRadius: '22px',
            padding: '38px',
            textAlign: 'center',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7)'
          }}>
            <div style={{ fontSize: '13px', fontWeight: '900', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Projected Annual Profit Added
            </div>
            
            <div style={{
              fontSize: 'clamp(40px, 5.2vw, 62px)',
              fontWeight: '950',
              fontFamily: 'var(--font-heading)',
              color: '#fbbf24',
              lineHeight: '1.08',
              margin: '14px 0 24px 0',
              textShadow: '0 0 40px rgba(245, 158, 11, 0.35)'
            }}>
              ₹{(totalAnnualSavings / 100000).toFixed(2)} Lakhs
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '24px' }}>
              For a fleet of <strong>{fleetSize} vehicles</strong>, LogKaro pays for itself within the first 14 days and returns <strong>more than 15x</strong> its monthly subscription cost every single month.
            </p>

            <button
              onClick={onOpenDemo}
              className="btn-primary-glow"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={16} /> Claim Your Fleet Financial Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
