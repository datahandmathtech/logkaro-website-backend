import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does LogKaro calculate Guest Fuel Deductions automatically?',
      a: 'When an outstation tour guest pays a petrol pump directly, the driver uploads the fuel slip photo into the LogKaro Driver Web App. LogKaro instantly records the expense against that exact booking, displays the car plate badge, and automatically deducts that amount from the client total balance due. No more manual subtraction errors or WhatsApp disputes during final checkout.'
    },
    {
      q: 'Can we source outside vendor cabs without them seeing our guest rates?',
      a: 'Absolutely! LogKaro has an integrated Outside Car Network module. When you attach a vendor cab, the client receives your branded company trip voucher with the agreed customer fare, while the vendor receives a separate vendor assignment slip with the contracted vendor payout. Your operator margin is automatically locked in your ledger.'
    },
    {
      q: 'How does EduRide School Bus RFID work if there is no internet in basement stops?',
      a: 'The EduRide driver terminal operates on an offline-first SQLite cache. Students can tap their RFID ID cards instantly with zero delay. As soon as the bus exits the basement or re-enters cell coverage, all timestamped boarding logs sync to the cloud and parent WhatsApp alerts trigger automatically.'
    },
    {
      q: 'Can we settle garage bills (like SpeedLine Tyres & Service Hub) directly through LogKaro?',
      a: 'Yes. The Maintenance & Vendor Ledger allows you to record tyre purchases, wheel alignment, oil changes, and mechanic labour under each garage vendor name. When settling, select your linked bank account (such as HDFC or Axis) and LogKaro creates the transaction, updates your bank balance, and marks vendor dues as cleared with a timestamped receipt.'
    },
    {
      q: 'How difficult is it to migrate our existing fleet from Excel sheets?',
      a: 'It takes less than 15 minutes! LogKaro includes a smart Excel & CSV import engine. Simply upload your current list of vehicles, drivers, and pending client balances. Our dedicated onboarding specialist assists you through a live screen-share session at zero extra charge.'
    },
    {
      q: 'Do drivers need expensive Android smartphones or app store downloads?',
      a: 'No. The LogKaro Driver Console is built as an ultra-fast Progressive Web App (PWA). Drivers can access it from any basic smartphone browser (Chrome, Safari, Firefox) using secure OTP login. It consumes less than 15MB of data per day.'
    }
  ];

  return (
    <section id="faq" style={{ padding: '100px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 14px',
          borderRadius: '9999px',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: '#fbbf24',
          fontSize: '12px',
          fontWeight: '800',
          marginBottom: '16px'
        }}>
          <HelpCircle size={14} /> CLARITY & ANSWERS
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: '950',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1px',
          marginBottom: '16px',
          color: '#ffffff'
        }}>
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>
          Got questions about implementing LogKaro in your fleet? We have got you covered.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {faqs.map((f, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '16px',
                border: isOpen ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                transition: 'all 0.25s'
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '850',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '16px'
                }}
              >
                <span>{f.q}</span>
                <ChevronDown
                  size={20}
                  color="#fbbf24"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.25s',
                    flexShrink: 0
                  }}
                />
              </button>

              {isOpen && (
                <div style={{
                  padding: '0 24px 22px 24px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                  paddingTop: '16px'
                }}>
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
