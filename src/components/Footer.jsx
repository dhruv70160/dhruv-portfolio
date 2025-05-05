import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-black/80 text-white py-12 mt-20"
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-gold text-xl font-bold mb-4">Get in Touch</h3>
          <p>📞 +91 70160 76757</p>
          <p>📧 gabanidhruv204@gmail.com</p>
          <p>📍 Surat, Gujarat</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-gold text-xl font-bold mb-4">Quick Links</h3>
          <a href="#about" className="block hover:text-gold transition">About Me</a>
          <a href="#projects" className="block hover:text-gold transition">Projects</a>
          <a href="#contact" className="block hover:text-gold transition">Contact</a>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-gold text-xl font-bold mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank">
              <FiGithub className="text-2xl hover:text-gold transition"/>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FiLinkedin className="text-2xl hover:text-gold transition"/>
            </a>
            <a href="mailto:gabanidhruv204@gmail.com">
              <FiMail className="text-2xl hover:text-gold transition"/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-gold/20">
        <p>© 2024 Dhruv Gabani. All rights reserved</p>
      </div>
    </motion.footer>
  );
}