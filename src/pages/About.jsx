import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

// Education timeline data
const education = [
  {
    year: "2022-2025",
    degree: "B.C.A (Computer Application)",
    institution: "V.T. Podar BCA College (VNSGU-Surat)",
    score: "CGPA: 6.81"
  },
  {
    year: "2021-2022",
    degree: "12th Commerce",
    institution: "Gadhpur Vidhyalya",
    score: "71.60%"
  },
  {
    year: "2019-2020",
    degree: "10th SSC",
    institution: "Gadhpur Vidhyalya",
    score: "82.86%"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Professional Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg"
          >
            <p className="leading-relaxed">
              Enthusiastic BCA graduate with expertise in full-stack development. 
              Proficient in modern web technologies including MERN stack, with hands-on 
              experience in building responsive applications. Passionate about solving 
              real-world problems through code and continuous learning.
            </p>
            
            {/* Resume Download */}
            <motion.a
              href="/src/assets/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-bold"
            >
              <FiDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-l-4 border-gold pl-6 relative"
              >
                <div className="absolute w-4 h-4 bg-gold rounded-full -left-[10px] top-4" />
                <h3 className="text-xl font-bold text-gold">{item.year}</h3>
                <p className="text-lg font-semibold mt-2">{item.degree}</p>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gold mt-2">{item.score}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gold">Technical Skills</h3>
            {['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MySQL'].map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span>{skill}</span>
                  <span className="text-gold">70%</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  className="h-2 bg-gray-800 rounded-full overflow-hidden"
                >
                  <div className="h-full bg-gradient-to-r from-gold to-maroon" />
                </motion.div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gold">Soft Skills</h3>
            {['Problem Solving', 'Teamwork', 'Time Management', 'Communication', 'Adaptability'].map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span>{skill}</span>
                  <span className="text-gold">85%</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  className="h-2 bg-gray-800 rounded-full overflow-hidden"
                >
                  <div className="h-full bg-gradient-to-r from-maroon to-gold" />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}