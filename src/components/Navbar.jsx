import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/80 backdrop-blur-lg z-50 py-4 px-8"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Your Name/Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-gold">
          Dhruv Gabani
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white">
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
    </motion.nav>
  );
}