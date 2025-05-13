import React, { useState, useRef } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { motion, useInView } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageFooter from "../assets/Img/FormfooterImage.png";

function HireMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // You can process the form data here, for example, log it or send it to a server.
    console.log("Form Data Submitted:", formData);

    // Reset the form after submission
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    alert("Your message has been sent successfully!");
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const handleBack = () => window.history.back();

  return (
    <section ref={sectionRef} className="overflow-x-hidden min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <nav className="fixed top-0 left-0 w-full py-4 px-4 md:px-10 z-30 backdrop-blur-lg md:backdrop-blur-none md:bg-transparent">
        <button onClick={handleBack} className="p-2.5 md:p-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all" aria-label="Go Back">
          <ArrowBackIcon className="text-xl md:text-2xl" />
        </button>
      </nav>

      <div className="container mt-32 mx-auto sm:mt-40 max-w-7xl px-4 sm:px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center "
        >
          <Typography variant="h5" className="text-base sm:text-lg lg:text-2xl mb-2">
            Let’s Work Together
          </Typography>
          <Typography variant="h1" className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
            Hire Me for Your Next Project
          </Typography>
          <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mb-10 sm:mb-12">
            Looking for a passionate developer to bring your ideas to life? Whether it's frontend, backend, or full-stack work — I’m here to help you build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          <motion.img
            src={ImageFooter}
            alt="hire me"
            className="w-full max-w-full object-contain mx-auto lg:mx-0"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ willChange: "opacity, transform" }}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-md shadow-lg text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ willChange: "opacity, transform" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-sm mb-1 block">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} size="lg" className="shadow-md rounded-md" />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm mb-1 block">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} size="lg" className="shadow-md rounded-md" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="text-sm mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} size="lg" className="shadow-md rounded-md" />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="text-sm mb-1 block">
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="rounded-md shadow-md pt-4" />
            </div>

            <motion.div className="mt-6" whileTap={{ scale: 0.97 }}>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 rounded-md transition-all duration-300">
                Send Request
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
