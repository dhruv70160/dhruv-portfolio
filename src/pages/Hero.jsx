import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import dprofile from '../assets/dprofile.jpg';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-gold/10 to-maroon/10"
      />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 space-y-8 px-4"
      >
        {/* Profile Photo */}
         
        <motion.img 
         src={dprofile}
         alt="Dhruv Gabani"
         className="w-32 h-32 rounded-full mx-auto border-4 border-gold"
         whileHover={{ scale: 1.1 }}
       />

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold to-maroon bg-clip-text text-transparent">
          Dhruv Gabani
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'MERN Stack Specialist',
            2000,
            'Tech Enthusiast',
            2000
          ]}
          wrapper="div"
          className="text-xl md:text-3xl text-gray-400"
          repeat={Infinity}
        />

        {/* CTA Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="mt-12"
        >
          <a 
            href="#contact"
            className="bg-gradient-to-r from-gold to-maroon text-black px-8 py-3 rounded-full font-bold hover:shadow-glow transition-all"
          >
            Let's Collaborate →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}