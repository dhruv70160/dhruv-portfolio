import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Skill categories data
const categories = [
  { name: 'Frontend', color: '#FFD700', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'] },
  { name: 'Backend', color: '#800000', skills: ['Node.js', 'PHP', 'MySQL', 'REST APIs', 'MongoDB'] },
  { name: 'Tools', color: '#C5A568', skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Vercel'] },
];

// 3D Skill Galaxy Component
const SkillGalaxy = ({ setCategory }) => {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {categories.map((cat, i) => {
        const angle = (i * Math.PI * 2) / categories.length;
        const x = Math.cos(angle) * 4;
        const y = Math.sin(angle) * 4;
        
        return (
          <group key={cat.name}>
            <Sphere
              position={[x, y, 0]}
              args={[0.3, 32, 32]}
              onClick={() => setCategory(cat.name)}
            >
              <meshStandardMaterial 
                color={cat.color} 
                metalness={0.8} 
                roughness={0.2}
              />
            </Sphere>
            
            <Text
              position={[x, y - 0.6, 0]}
              color={cat.color}
              fontSize={0.4}
              anchorX="center"
              anchorY="middle"
            >
              {cat.name}
            </Text>
          </group>
        );
      })}
      
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={1.5}
        enableZoom={false}
      />
    </Canvas>
  );
};

// Main Skills Component
export default function Skills() {
  const [selectedCategory, setCategory] = useState('All');
  
  // All skills data
  const allSkills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MySQL', level: 85, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'PHP', level: 70, category: 'Backend' },
    { name: 'Tailwind', level: 95, category: 'Frontend' },
    { name: 'Figma', level: 75, category: 'Tools' },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gold mb-16 text-center"
        >
          Technical Expertise
        </motion.h2>

        {/* 3D Skill Galaxy */}
        <div className="h-96 mb-20">
          <SkillGalaxy setCategory={setCategory} />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSkills
            .filter(skill => 
              selectedCategory === 'All' || 
              skill.category === selectedCategory
            )
            .map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="p-6 bg-gray-900 rounded-xl relative overflow-hidden"
              >
                {/* Radial Progress */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="fill-none stroke-gray-800"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="fill-none stroke-gold"
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
                      whileInView={{ 
                        strokeDashoffset: 283 - (283 * skill.level) / 100 
                      }}
                      transition={{ duration: 1.5 }}
                    />
                    <text
                      x="50"
                      y="55"
                      className="text-2xl fill-gold"
                      textAnchor="middle"
                    >
                      {skill.level}%
                    </text>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gold mb-4">
                  {skill.name}
                </h3>
                <p className="text-gray-400">
                  {skill.category} Skill
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}