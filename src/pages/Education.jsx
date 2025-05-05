import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const educationData = [
  {
    year: "2022-2025",
    degree: "Bachelor of Computer Applications",
    institution: "V.T. Podar BCA College (VNSGU-Surat)",
    score: "CGPA: 6.81",
    icon: <FiBookOpen className="text-2xl text-gold" />
  },
  {
    year: "2021-2022",
    degree: "12th Commerce",
    institution: "Gadhpur Vidhyalya",
    score: "71.60%",
    icon: <FiBookOpen className="text-2xl text-gold" />
  },
  {
    year: "2019-2020",
    degree: "10th SSC",
    institution: "Gadhpur Vidhyalya",
    score: "82.86%",
    icon: <FiBookOpen className="text-2xl text-gold" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gold mb-16 text-center"
        >
          Education Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            className="absolute left-1/2 w-1 bg-gold/20 h-full origin-top"
          />

          {/* Timeline items */}
          <div className="grid gap-16">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative grid grid-cols-5 items-center"
              >
                {/* Timeline dot */}
                <div className="col-span-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 rounded-full bg-gold flex items-center justify-center"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`col-span-4 p-6 bg-gray-900 rounded-xl ${index % 2 === 0 ? 'md:col-start-2' : ''}`}>
                  <div className="flex gap-4 items-center mb-4">
                    <span className="text-gold font-bold text-xl">{item.year}</span>
                    <div className="h-px bg-gold flex-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-gray-400 mb-2">{item.institution}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-px bg-gold" />
                    <span className="text-gold font-medium">{item.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}