import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Services from '../components/services';
import Contact from '../components/contact';

import logo from '../images/logo.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch md:justify-between overflow-hidden mt-8 md:mt-16">
        <div className="flex flex-col items-center md:items-start justify-center">
          <p className="text-4xl leading-10 tracking-tighter font-semibold">
            Count on us
          </p>
          <p className="text-xl mt-4 max-w-xl text-gray-500">
            Worry-free professional home heating, ventilation, and air
            conditioning services.
          </p>
        </div>
        <div className="md:w-3/5 mt-8 md:mt-0">
          <img src={logo} alt="Sentinel Logo" />
        </div>
      </div>
      <Services id="services" />
      <Contact id="contact-us" />
    </Layout>
  );
}

export default IndexPage;
