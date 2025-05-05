import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_z4sggzl', // Your Service ID
        'template_5xq38wo', // Your Template ID
        formRef.current,
        'PXbCR0CBlZp31f1cU' // Your Public Key
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gold mb-16 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border-b border-gold py-2 px-4 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border-b border-gold py-2 px-4 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gold rounded-lg py-2 px-4 focus:outline-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold text-black px-8 py-3 rounded-full font-bold flex items-center gap-2"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500"
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-gold mt-1">
                <FiMapPin className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">Location</h3>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-gold mt-1">
                <FiPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">Phone</h3>
                <a href="tel:+917016076757" className="hover:text-gold transition">
                  +91 70160 76757
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-gold mt-1">
                <FiMail className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">Email</h3>
                <a href="mailto:gabanidhruv204@gmail.com" className="hover:text-gold transition">
                  gabanidhruv204@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-bold text-gold mb-4">Connect With Me</h3>
              <div className="flex gap-6">
                <a 
                  href="https://github.com/dhruv70160" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gold transition"
                >
                  <FiGithub className="text-2xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dhruv-gabani-b0062925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gold transition"
                >
                  <FiLinkedin className="text-2xl" />
                </a>
                <a 
                  href="https://www.instagram.com/im._dhruvv?igsh=MXJndXdxOTF3dndpMA==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gold transition"
                >
                  <FiTwitter className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}