import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, PhoneCall, Building2, Car, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [fleetType, setFleetType] = useState('taxi');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [fleetSize, setFleetSize] = useState('10-25 Vehicles');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#070c1a',
        border: '1px solid rgba(245, 158, 11, 0.4)',
        borderRadius: '24px',
        maxWidth: '560px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(245, 158, 11, 0.2)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', marginBottom: '12px' }}>
              <Sparkles size={12} /> EXCLUSIVE VIP WALKTHROUGH
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '950', fontFamily: 'var(--font-heading)', color: '#ffffff', marginBottom: '6px' }}>
              Book Your 1-on-1 Software Demo
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '24px' }}>
              Experience the live software in action with your own fleet requirements.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Fleet Type Selector */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '6px', display: 'block' }}>
                  Select Your Operation Type:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setFleetType('taxi')}
                    style={{
                      background: fleetType === 'taxi' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: fleetType === 'taxi' ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '10px 6px',
                      color: fleetType === 'taxi' ? '#fbbf24' : '#ffffff',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    Taxi / Tours
                  </button>
                  <button
                    type="button"
                    onClick={() => setFleetType('school')}
                    style={{
                      background: fleetType === 'school' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: fleetType === 'school' ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '10px 6px',
                      color: fleetType === 'school' ? '#38bdf8' : '#ffffff',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    School Bus
                  </button>
                  <button
                    type="button"
                    onClick={() => setFleetType('corp')}
                    style={{
                      background: fleetType === 'corp' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: fleetType === 'corp' ? '1px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '10px 6px',
                      color: fleetType === 'corp' ? '#a855f7' : '#ffffff',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    Corporate
                  </button>
                </div>
              </div>

              {/* Input: Full Name */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px', display: 'block' }}>
                  Your Name / Agency Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Abhay Sharma / Royal Rajputana Cabs"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Input: Phone Number */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px', display: 'block' }}>
                  WhatsApp Mobile Number (for Instant Demo Access)
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Row: City & Fleet Size */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px', display: 'block' }}>
                    Operating City
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. New Delhi NCR, Delhi"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px', display: 'block' }}>
                    Fleet Size
                  </label>
                  <select
                    value={fleetSize}
                    onChange={(e) => setFleetSize(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: '#0d1628',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  >
                    <option value="1-10 Vehicles">1-10 Vehicles</option>
                    <option value="10-25 Vehicles">10-25 Vehicles</option>
                    <option value="25-50 Vehicles">25-50 Vehicles</option>
                    <option value="50-100 Vehicles">50-100 Vehicles</option>
                    <option value="100+ Enterprise">100+ Enterprise</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-glow"
                style={{
                  marginTop: '8px',
                  padding: '14px',
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Sparkles size={16} /> Confirm & Reserve Demo Slot
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={36} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: '950', fontFamily: 'var(--font-heading)', color: '#ffffff', marginBottom: '10px' }}>
              VIP Slot Reserved!
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '24px' }}>
              Thank you, <strong>{fullName}</strong>. Our Senior Fleet Architect will contact your WhatsApp at <strong>{phone}</strong> within 15 minutes to initiate your custom live tour.
            </p>
            <button
              onClick={onClose}
              className="btn-primary-glow"
              style={{ padding: '12px 28px', fontSize: '14px' }}
            >
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
