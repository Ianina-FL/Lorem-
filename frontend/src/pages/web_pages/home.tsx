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
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Lead Management',
      description:
        'Efficiently track and manage leads with real-time status updates and categorization. Prioritize your sales efforts and boost conversion rates.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Role-Based Access',
      description:
        'Control access with customizable user roles and permissions. Ensure data security and streamline operations across departments.',
      icon: 'mdiLock',
    },
    {
      name: 'Performance Analytics',
      description:
        'Generate comprehensive reports to analyze company performance. Make informed decisions with data-driven insights.',
      icon: 'mdiChartLine',
    },
  ];

  const testimonials = [
    {
      text: "Since implementing ${projectName}, our firm's efficiency has skyrocketed. The seamless integration between departments has been a game-changer.",
      company: 'Lexington Legal Solutions',
      user_name: 'Emily Carter, Operations Manager',
    },
    {
      text: '${projectName} has transformed our lead management process. We can now prioritize and convert leads more effectively than ever before.',
      company: 'Justice Partners LLC',
      user_name: 'Michael Thompson, Sales Director',
    },
    {
      text: 'The role-based access feature in ${projectName} ensures our data is secure while allowing easy collaboration across teams.',
      company: 'Advocate Alliance',
      user_name: 'Sarah Johnson, IT Specialist',
    },
    {
      text: 'With ${projectName}, generating performance reports is a breeze. We can make informed decisions quickly and confidently.',
      company: 'Barrister \u0026 Co.',
      user_name: 'David Lee, CEO',
    },
    {
      text: 'Our marketing campaigns have become more targeted and successful thanks to the insights provided by ${projectName}.',
      company: 'Legal Innovators',
      user_name: 'Jessica Brown, Marketing Manager',
    },
    {
      text: 'The customer service team loves ${projectName} for its intuitive interface and comprehensive customer interaction logs.',
      company: 'Counsel Connect',
      user_name: 'Robert Wilson, Customer Service Lead',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Solutions for the Law Industry`}</title>
        <meta
          name='description'
          content={`Discover our CRM app designed for the law industry, connecting departments and streamlining operations with features for sales, customer service, and marketing.`}
        />
      </Head>
      <WebSiteHeader projectName={'Lorem '} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Lorem '}
          image={['Law firm CRM dashboard interface']}
          mainText={`Revolutionize Your Law Firm with ${projectName}`}
          subTitle={`Streamline operations and connect departments with our CRM app tailored for the law industry. Enhance collaboration and efficiency across sales, customer service, and marketing.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Lorem '}
          image={['CRM features overview dashboard']}
          withBg={1}
          features={features_points}
          mainText={`Unlock Efficiency with ${projectName} Features`}
          subTitle={`Explore the powerful features of ${projectName} designed to streamline your law firm's operations and enhance departmental collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Lorem '}
          image={['Team collaborating on CRM development']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the way law firms operate. Our CRM solution connects departments, enhances collaboration, and drives efficiency, tailored specifically for the legal industry.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'Lorem '}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Lorem '}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is here to assist you and will respond promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Lorem '} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
