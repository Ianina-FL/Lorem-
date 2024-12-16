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
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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

  const faqs = [
    {
      question: 'What is ${projectName} and how does it work?',
      answer:
        '${projectName} is a CRM solution designed for law firms to streamline operations and enhance collaboration. It integrates various departments, providing tools for lead management, analytics, and more.',
    },
    {
      question: 'How can ${projectName} benefit my law firm?',
      answer:
        '${projectName} offers features like lead tracking, role-based access, and performance analytics, helping your firm improve efficiency, client relations, and decision-making processes.',
    },
    {
      question: 'Is ${projectName} secure for handling sensitive data?',
      answer:
        "Yes, ${projectName} employs advanced security measures, including encryption and access controls, to ensure your firm's data is protected and only accessible to authorized users.",
    },
    {
      question: "Can I customize ${projectName} to fit my firm's needs?",
      answer:
        "Absolutely! ${projectName} is highly customizable, allowing you to tailor user roles, dashboards, and features to align with your firm's specific workflows and requirements.",
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        '${projectName} provides comprehensive support, including email and phone assistance. Our dedicated team is ready to help you with any questions or issues you may encounter.',
    },
    {
      question: 'How do I get started with ${projectName}?',
      answer:
        'To get started, contact our team through the contact form. We will guide you through the setup process and help you customize the solution for your firm.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and support options. Contact us for further assistance.`}
        />
      </Head>
      <WebSiteHeader projectName={'Lorem '} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Lorem '}
          image={['FAQ section illustration']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn more about our features, pricing, and support options.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Lorem '}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Lorem '}
          design={ContactFormDesigns.HIGHLIGHTED_DIVERSITY || ''}
          image={['Support team ready to assist']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have more questions? Contact our support team at ${projectName} for assistance. We are here to help and will respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'Lorem '} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
