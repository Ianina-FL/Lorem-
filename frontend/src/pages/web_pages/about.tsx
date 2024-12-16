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
  AboutUsDesigns,
  TestimonialsDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const testimonials = [
    {
      text: '${projectName} has been a transformative tool for our firm. The seamless integration and user-friendly interface have made our operations more efficient.',
      company: 'Legal Pioneers Inc.',
      user_name: 'Anna Roberts, Managing Partner',
    },
    {
      text: 'The insights we gain from ${projectName} are invaluable. It has helped us make data-driven decisions that have significantly improved our client relations.',
      company: 'Justice Innovators',
      user_name: 'James Carter, Head of Client Services',
    },
    {
      text: "With ${projectName}, our team collaboration has reached new heights. The platform's features are perfectly tailored to our needs.",
      company: 'Advocate Solutions',
      user_name: 'Laura Smith, Operations Director',
    },
    {
      text: "Implementing ${projectName} was one of the best decisions we've made. It has streamlined our processes and improved our overall productivity.",
      company: 'Barrister Group',
      user_name: 'Tom Wilson, CEO',
    },
    {
      text: 'The customer support from ${projectName} is outstanding. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Counsel Connectors',
      user_name: 'Emily Johnson, IT Manager',
    },
    {
      text: '${projectName} has revolutionized our marketing strategies. The detailed analytics have allowed us to tailor our campaigns effectively.',
      company: 'Legal Marketers',
      user_name: 'David Lee, Marketing Lead',
    },
  ];

  const faqs = [
    {
      question: 'What features does ${projectName} offer for law firms?',
      answer:
        '${projectName} provides features like lead management, role-based access, performance analytics, and seamless integration between departments to enhance efficiency and collaboration.',
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        '${projectName} employs advanced security measures, including role-based access controls and encryption, to protect sensitive information and ensure only authorized personnel can access specific data.',
    },
    {
      question: "Can ${projectName} be customized for our firm's needs?",
      answer:
        "Yes, ${projectName} is highly customizable. You can tailor user roles, permissions, and features to align with your firm's specific requirements and workflows.",
    },
    {
      question: 'How does ${projectName} improve lead management?',
      answer:
        '${projectName} allows you to track leads in real-time, categorize them, and update their statuses, helping you prioritize sales efforts and improve conversion rates.',
    },
    {
      question: 'Is there customer support available for ${projectName}?',
      answer:
        'Absolutely! Our dedicated support team is available to assist you with any questions or issues you may encounter, ensuring you get the most out of ${projectName}.',
    },
    {
      question: 'How can ${projectName} enhance our marketing strategies?',
      answer:
        '${projectName} provides detailed analytics and insights, allowing you to tailor marketing campaigns effectively and track their success to optimize future strategies.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Discover ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and the team dedicated to transforming the law industry with innovative CRM solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'Lorem '} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Lorem '}
          image={['Team brainstorming session']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the story and mission of ${projectName}, the innovative CRM solution crafted to revolutionize the law industry. Join us on our journey to connect and empower legal professionals.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Learn More`}
        />

        <AboutUsSection
          projectName={'Lorem '}
          image={['Team discussing project goals']}
          mainText={`Our Mission and Vision at ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the legal industry with cutting-edge CRM solutions. Our mission is to enhance connectivity and efficiency for law firms worldwide.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Our Story`}
        />

        <TestimonialsSection
          projectName={'Lorem '}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied ${projectName} Clients `}
        />

        <FaqSection
          projectName={'Lorem '}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Lorem '} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
