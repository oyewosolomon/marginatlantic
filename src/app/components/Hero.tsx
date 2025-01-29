"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Link from 'next/link';

const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -12,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -6,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-white mt-16">
      <Navbar />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f7ff_33%,transparent_33%)]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="lg:col-span-7"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                <motion.span 
                  className="block"
                  variants={itemVariants}
                >
                  Transform Your
                </motion.span>
                <motion.span 
                  className="block text-blue-600"
                  variants={itemVariants}
                >
                  Supply Chain
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Provide a superior solution for your customers with our trio of powerful tools. 
                Automate your pick/pack processes, expand your carrier options, and access 
                real-time delivery analytics.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/schedule-demo" className="inline-flex items-center px-6 py-3 border border-transparent text-base 
                    font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 
                    transition-colors duration-200">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                
                <motion.button 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 
                    rounded-md shadow-sm text-base font-medium text-gray-700 bg-white 
                    hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                variants={trustBadgeVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p 
                  className="text-sm font-semibold text-gray-400 tracking-wide uppercase"
                  variants={itemVariants}
                >
                  Trusted by industry leaders
                </motion.p>
                <motion.div 
                  className="mt-4 flex justify-center lg:justify-start space-x-8"
                  variants={trustBadgeVariants}
                >
                  {[1, 2, 3].map((index) => (
                    <motion.div
                      key={index}
                      className="h-8 w-24 bg-gray-200 rounded-md"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="mt-16 lg:mt-0 lg:col-span-5">
              <div className="relative h-64 sm:h-72 md:h-96">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 
                    rounded-2xl shadow-xl"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.div 
                  className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                    border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="absolute inset-0 grid place-items-center">
                    <motion.div 
                      className="space-y-4 w-4/5"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {[3/4, 1, 2/3].map((width, index) => (
                        <motion.div
                          key={index}
                          className={`h-3 bg-gray-200 rounded-full`}
                          style={{ width: `${width * 100}%` }}
                          variants={itemVariants}
                        />
                      ))}
                      <motion.div
                        className="h-24 bg-gray-200 rounded-lg w-full mt-6"
                        variants={itemVariants}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;