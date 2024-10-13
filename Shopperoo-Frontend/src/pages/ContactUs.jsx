/* eslint-disable */
import React from 'react';

import Layout from '../components/Layout';
import HeroImage from '../components/ContactUs/HeroImage';
import ContactSection from '../components/ContactUs/ContactSection';
import FeatureSection from '../components/FeatureSection/FeatureSection';

function ContactUs() {
  return (
    <Layout>
    <div className="flex overflow-hidden flex-col bg-white">
      
      <HeroImage />
      <ContactSection />
      <FeatureSection />
      
    </div>
    </Layout>
  );
}

export default ContactUs;