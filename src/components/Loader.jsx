import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="animate-pulse text-4xl text-gold font-bold">
        DHRUV GABANI
      </div>
    </motion.div>
  );
}