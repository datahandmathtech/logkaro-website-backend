import React from 'react';
import Hero from '../components/Hero';
import LiveMetricsTicker from '../components/LiveMetricsTicker';
import DayInLifeWorkflow from '../components/DayInLifeWorkflow';
import DualPlatformSuite from '../components/DualPlatformSuite';
import FeatureBreakdown from '../components/FeatureBreakdown';
import RoiCalculator from '../components/RoiCalculator';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';

export default function HomePage({ onOpenDemo }) {
  return (
    <>
      <Hero onOpenDemo={onOpenDemo} />
      <LiveMetricsTicker />
      <DayInLifeWorkflow onOpenDemo={onOpenDemo} />
      <DualPlatformSuite onOpenDemo={onOpenDemo} />
      <FeatureBreakdown onOpenDemo={onOpenDemo} />
      <RoiCalculator onOpenDemo={onOpenDemo} />
      <ComparisonTable onOpenDemo={onOpenDemo} />
      <Testimonials />
      <Pricing onOpenDemo={onOpenDemo} />
      <Faq />
    </>
  );
}
