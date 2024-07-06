// src/components/Internship.jsx
import React, { useState ,useEffect} from 'react';
import CardTemp from './CardTemp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazyload';
import frontEndImg from '../assets/internship_array/FrontEnd.webp';
import backendImg from '../assets/internship_array/BackendDevelopment.webp';
import mobileAppImg from '../assets/internship_array/Mobile App Developer.webp';
import logoDesignerImg from '../assets/internship_array/logo-designer-working-computer-desktop.webp';
import cloudImg from '../assets/internship_array/cloud.webp';
import portraitWomanImg from '../assets/internship_array/portrait-woman-customer-service-worker.webp';
import chatbotImg from '../assets/internship_array/chatbotDevelopment.webp';
import figmaImg from '../assets/internship_array/figma.png';
import analysisImg from '../assets/internship_array/analysis.webp';

const Internship = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  const [intern, setIntern] = useState([
    {
      img: frontEndImg,
      title: 'Front End Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: backendImg,
      title: 'Back End Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: mobileAppImg,
      title: 'Mobile App Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: logoDesignerImg,
      title: 'Logo Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: cloudImg,
      title: 'Cloud Computing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: mobileAppImg,
      title: 'Mobile App Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: logoDesignerImg,
      title: 'Logo Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: portraitWomanImg,
      title: 'Graphic Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: chatbotImg,
      title: 'Chatbot Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: figmaImg,
      title: 'Figma Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: analysisImg,
      title: 'Data Analytics Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: logoDesignerImg,
      title: 'Logo Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    }
  ]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadImage = src => new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
    });

    Promise.all(intern.map(intern => loadImage(intern.img)))
      .then(() => setIsLoading(false));
  }, [intern]);


  return (
    <div className="internships flex flex-col items-center gap-10 mt-10">
    <h1 className="text-lg font-bold w-3/4 m-auto text-center" data-aos="fade-right">👇 Click Below and grab your internship now 👇</h1>
    {isLoading ? (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader">Loading...</div>
      </div>
    ) : (
    <>
    <div className="flex flex-wrap justify-center">
      {intern.map((intern, index) => (
        <CardTemp key={index} img={intern.img} title={intern.title} description={intern.description} />
      ))}
    </div>
    </>
    )}
    </div>
  );
};

export default Internship;
