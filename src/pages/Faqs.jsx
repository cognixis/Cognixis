import React, { useState } from 'react';
import './Faqs.css';

const faqData = [
  {
    question: "What services does Cognixis provide?",
    answer: "Cognixis offers a wide range of services including modern website and mobile app development, UI/UX design, e-commerce solutions with secure payments, and AI & data science services such as predictive analytics, automation tools, and real-time insights."
  },
  {
    question: "Does Cognixis offer internships?",
    answer: "Yes! Cognixis provides hands-on internships and project-based learning opportunities in areas like web development, mobile app development, AI/ML, and data science for students and professionals."
  },
  {
    question: "How can businesses benefit from Cognixis?",
    answer: "Businesses can enhance their online presence with custom-built websites, mobile-first responsive designs, optimized performance, secure e-commerce platforms, and smart data-driven insights to boost sales and operational efficiency."
  },
  {
    question: "What makes Cognixis’s web and mobile solutions unique?",
    answer: "Our solutions focus on performance optimization, mobile-first design, and intuitive user experiences to ensure fast, scalable, and user-friendly digital products across all devices."
  },
  {
    question: "What kind of e-commerce services does Cognixis provide?",
    answer: "We build custom online storefronts with secure payment integration, product management features, and user experience enhancements designed to maximize your online sales potential."
  },
  {
    question: "How does Cognixis use AI and data science to help businesses?",
    answer: "We provide predictive analytics, automation tools, and real-time dashboards to help businesses make smarter decisions, personalize customer experiences, and streamline workflows."
  },
  {
    question: "How do I apply for an internship at Cognixis?",
    answer: "Just Navigate to Internships page, you'll get all insights about our Internship Program for college students and job professionals.  "
  },
  {
  question: "Will I get certification after completing an internship?",
  answer: "Yes, upon successful completion of your internship tasks, you will receive a Cognixis certification validating your experience and skills. In the future, you will also be able to verify your certificate using a unique certification reference ID."
}
,
  {
    question: "Can professionals also avail Cognixis services?",
    answer: "Absolutely! Our internships and professional services are available to both students and working professionals looking to advance their skills or grow their businesses."
  },
  {
    question: "How can I contact Cognixis for support or inquiries?",
    answer: "You can reach us anytime via the 'Contact Us' page on our website or email cognixisbusiness@gmail.com for assistance or business inquiries."
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1 className='faq-heading' ><h1>Frequently</h1> Asked Questions (FAQ)</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <button
            className={`faq-question ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleIndex(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            {item.question}
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`faq-answer ${openIndex === index ? 'open' : ''}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </section>
  );
}
