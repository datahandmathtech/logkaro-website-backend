import React from 'react';
import Pricing from '../components/Pricing';
import RoiCalculator from '../components/RoiCalculator';
import ComparisonTable from '../components/ComparisonTable';
import Faq from '../components/Faq';

export default function PricingPage({ onOpenDemo }) {
  return (
    <div style={{ paddingBottom: '90px' }}>
      <Pricing onOpenDemo={onOpenDemo} />
      <RoiCalculator onOpenDemo={onOpenDemo} />
      <ComparisonTable onOpenDemo={onOpenDemo} />
      <Faq />
    </div>
  );
}
