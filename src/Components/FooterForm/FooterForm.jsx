import React, { useState, useRef } from 'react';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { motion, useInView } from "framer-motion";
import './FooterForm.css';
import ImageFooter from "../../assets/Img/FormfooterImage.png";

function FooterForm() {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedService || !formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields and select a service type.");
      return;
    }

    console.log("Form submitted:", {
      service: selectedService,
      ...formData
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    setSelectedService(null);
  };

  // Scroll-triggered animation hook
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="overflow-x-hidden px-4 sm:px-8 py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container text-white mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5" className="mb-4 text-base lg:text-2xl">
            Let’s Work Together
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Typography variant="h1" className="mb-4 text-3xl lg:text-5xl">
            Hire Me for Your Next Project
          </Typography>
        </motion.div>

        <motion.p
          className="mb-10 font-normal text-lg lg:mb-20 mx-auto max-w-3xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Looking for a passionate developer to bring your ideas to life? Whether it's frontend, backend, or full-stack work — I’m here to help you build something great.
        </motion.p>

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <motion.img
            src={ImageFooter}
            alt="hire me illustration"
            className="w-full h-auto max-w-full object-contain"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 lg:max-w-sm text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typography variant="small" className="font-semibold text-white">
              Select Service Type
            </Typography>
            <div className="flex flex-wrap gap-4 mb-6">
              {["Freelance", "Full-time"].map((type) => (
                <motion.button
                  key={type}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(type)}
                  className={`px-4 py-2 rounded-md border font-semibold transition-all duration-300 ${
                    selectedService === type
                      ? type === "Freelance"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-yellow-500 text-black border-yellow-500"
                      : type === "Freelance"
                      ? "bg-transparent text-blue-400 border-blue-400 hover:bg-blue-600 hover:text-white"
                      : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:text-black"
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  size="lg"
                  placeholder="First Name"
                  className="rounded-md shadow-lg"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  size="lg"
                  placeholder="Last Name"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                placeholder="name@email.com"
                className="rounded-md shadow-lg"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project..."
                className="pt-4 rounded-md shadow-lg"
              />
            </div>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full rounded-lg bg-green-600 hover:bg-green-700 transition-all duration-300"
              >
                Send Request
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default FooterForm;
