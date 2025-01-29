"use client"

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

// Type definitions
interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
}

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  // Team data with TypeScript typing
  const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/assets/john-doe.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'mailto:john@example.com',
      },
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: '/assets/john-doe.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'mailto:jane@example.com',
      },
    },
    {
      name: 'Mike Johnson',
      role: 'COO',
      image: '/assets/john-doe.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'mailto:mike@example.com',
      },
    },
  ];

  // Values data
  const values: ValueItem[] = [
    {
      number: '1',
      title: 'Innovation',
      description: 'We constantly seek new ways to improve and innovate.',
    },
    {
      number: '2',
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all we do.',
    },
    {
      number: '3',
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do.',
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
    <div className="relative bg-white mt-16">
      <Navbar />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f7ff_33%,transparent_33%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        {/* About Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            About Margin Atlantic
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Transforming supply chains with innovative solutions that drive efficiency and growth.
            Empowering businesses to succeed in competitive markets through cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            To revolutionize supply chain management through automation, analytics, and 
            multi-carrier integration solutions.
          </p>
        </motion.div>

        {/* Team Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="initial"
                whileInView="animate"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <Image                 
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={member.social.linkedin}
                      className="text-white hover:text-blue-400 transition-colors p-2 rounded-full bg-black/20 hover:bg-black/30"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-white hover:text-gray-400 transition-colors p-2 rounded-full bg-black/20 hover:bg-black/30"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.email}
                      className="text-white hover:text-red-400 transition-colors p-2 rounded-full bg-black/20 hover:bg-black/30"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">{value.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>      
    </div>
      <Footer />
      </>
  );
};

export default About;