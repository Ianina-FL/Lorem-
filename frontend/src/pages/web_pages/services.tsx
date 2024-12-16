import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  PricingDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Lorem ';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Integrated Workflow',
      description:
        "Streamline your firm's operations with seamless integration across departments. Enhance communication and efficiency with a unified platform.",
      icon: 'mdiSync',
    },
    {
      name: 'Advanced Analytics',
      description:
        'Gain valuable insights with our advanced analytics tools. Make informed decisions and track performance metrics effortlessly.',
      icon: 'mdiChartBar',
    },
    {
      name: 'Customizable Dashboards',
      description:
        'Tailor your experience with customizable dashboards. Access the information you need quickly and efficiently, personalized to your role.',
      icon: 'mdiViewDashboard',
    },
  ];

  const pricing_features = {
    standard: {
      features: ['Lead Management', 'Role-Based Access', 'Basic Analytics'],
      limited_features: ['Limited Customization', 'Email Support'],
    },
    premium: {
      features: [
        'Lead Management',
        'Role-Based Access',
        'Advanced Analytics',
        'Customizable Dashboards',
      ],
      also_included: ['Priority Support', 'Enhanced Security Features'],
    },
    business: {
      features: [
        'Lead Management',
        'Role-Based Access',
        'Advanced Analytics',
        'Customizable Dashboards',
        'Full Customization',
        'Dedicated Account Manager',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is ideal for individual practitioners or small firms looking to streamline basic operations with essential CRM features.',
    premium:
      'The Premium plan is perfect for small to medium-sized businesses seeking advanced analytics and enhanced customization options to boost productivity.',
    business:
      'The Business plan is designed for large enterprises requiring comprehensive CRM solutions with full customization and dedicated support.',
  };

  const testimonials = [
    {
      text: '${projectName} has significantly improved our workflow. The integration across departments is seamless, and our team collaboration has never been better.',
      company: 'Legal Innovators Group',
      user_name: 'Sophia Turner, Operations Manager',
    },
    {
      text: "The analytics provided by ${projectName} are top-notch. We can now make data-driven decisions that have positively impacted our firm's growth.",
      company: 'Justice Solutions LLC',
      user_name: 'Liam Johnson, Data Analyst',
    },
    {
      text: "Our client interactions have become more personalized and efficient thanks to ${projectName}. It's a must-have tool for any law firm.",
      company: 'Advocate Partners',
      user_name: 'Olivia Brown, Client Relations Specialist',
    },
    {
      text: "The customizable dashboards in ${projectName} allow us to access critical information quickly. It's tailored perfectly to our needs.",
      company: 'Barrister Associates',
      user_name: 'Noah Davis, IT Director',
    },
    {
      text: "With ${projectName}, our lead management process is more organized and effective. We've seen a noticeable increase in conversions.",
      company: 'Counsel Connectors',
      user_name: 'Emma Wilson, Sales Lead',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to help and ensure we get the most out of the platform.',
      company: 'Legal Pioneers',
      user_name: 'James Smith, Support Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName}, designed to enhance efficiency and collaboration in the law industry. Discover our features, pricing, and client testimonials.`}
        />
      </Head>
      <WebSiteHeader projectName={'Lorem '} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Lorem '}
          image={['Law firm services overview']}
          mainText={`Transform Your Practice with ${projectName}`}
          subTitle={`Discover the innovative services offered by ${projectName} to streamline your law firm's operations. Enhance collaboration, efficiency, and client satisfaction with our tailored solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'Lorem '}
          image={['CRM features in action']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Features for Success`}
          subTitle={`Unlock the full potential of your law firm with ${projectName}'s comprehensive features designed to enhance productivity and collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'Lorem '}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <TestimonialsSection
          projectName={'Lorem '}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`Client Success Stories with ${projectName} `}
        />

        <ContactFormSection
          projectName={'Lorem '}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is ready to assist you and will respond promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Lorem '} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
