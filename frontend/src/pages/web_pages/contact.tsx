import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  FaqDesigns,
  HeroDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

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

  const faqs = [
    {
      question: 'How can I get started with ${projectName}?',
      answer:
        "To get started, simply contact our team through the form above. We will guide you through the setup process and help tailor the solution to your firm's needs.",
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        '${projectName} offers comprehensive support, including email and phone support. Our team is dedicated to ensuring you have a smooth experience with our platform.',
    },
    {
      question: 'Can ${projectName} be integrated with other tools?',
      answer:
        "Yes, ${projectName} is designed to integrate seamlessly with various tools and platforms, enhancing your firm's existing workflows and systems.",
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        'We offer a trial period for new users to explore the features and benefits of ${projectName}. Contact us to learn more about starting your trial.',
    },
    {
      question: 'How does ${projectName} handle data security?',
      answer:
        "Data security is a top priority for ${projectName}. We use advanced encryption and access controls to protect your firm's sensitive information.",
    },
    {
      question: 'What are the pricing options for ${projectName}?',
      answer:
        '${projectName} offers flexible pricing plans to suit different firm sizes and needs. Visit our pricing page or contact us for more details.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Get in touch with the ${projectName} team for inquiries, support, or feedback. We're here to help and answer any questions you may have.`}
        />
      </Head>
      <WebSiteHeader projectName={'Lorem '} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Lorem '}
          image={['Customer support team assisting']}
          mainText={`Reach Out to ${projectName} Today`}
          subTitle={`We're here to assist you with any questions or support you need. Connect with the ${projectName} team and let us help you enhance your law firm's operations.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Contact Us`}
        />

        <FaqSection
          projectName={'Lorem '}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Lorem '}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Email communication illustration']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Feel free to reach out to us anytime. Our team at ${projectName} is ready to assist you and will respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'Lorem '} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
