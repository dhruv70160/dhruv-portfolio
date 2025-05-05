import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Project categories and data
const projects = [
  {
    title: "The Espresso Cafe",
    type: "Web Dev",
    tech: ["MERN Stack", "MongoDB", "React"],
    description: "Full-stack food ordering system with admin dashboard",
    links: {
      live: "#",
      github: "#",
      article: "/src/assets/projects/espresso-cafe.pdf"
    },
    image: "/src/assets/projects/espresso.jpg"
  },
  {
    title: "Smart Hoodie",
    type: "IoT",
    tech: ["ESP32", "IoT", "Python"],
    description: "Temperature-controlled wearable tech solution",
    links: {
      live: "#",
      github: "#",
      article: "/src/assets/projects/smart-hoodie.pdf"
    },
    image: "/src/assets/projects/hoodie.jpg"
  }
];

// PDF Viewer Modal
const PdfModal = ({ pdf, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex-1 p-4">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-gold">Loading PDF...</div>}
            error={<div className="text-red-500">Failed to load PDF</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              width={800}
              renderTextLayer={false}
              className="border border-gray-700"
            />
          </Document>
        </div>
        
        <div className="p-4 border-t border-gray-800 flex items-center justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="bg-gray-800 text-gold px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="bg-gray-800 text-gold px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
          
          <p className="text-gold">
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          
          <a 
            href={pdf} 
            download
            className="bg-gold text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-maroon transition"
          >
            <FiFileText /> Download PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedType, setType] = useState("All");
  const [selectedProject, setProject] = useState(null);
  const [isFlipped, setIsFlipped] = useState(null);

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Project Filter */}
        <div className="flex gap-4 justify-center mb-12">
          {['All', 'Web Dev', 'IoT'].map((type) => (
            <motion.button
              key={type}
              onClick={() => setType(type)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 rounded-full ${
                selectedType === type 
                  ? 'bg-gold text-black' 
                  : 'bg-gray-900 text-white'
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter(project => 
              selectedType === "All" || 
              project.type === selectedType
            )
            .map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-96 perspective-1000"
                onMouseEnter={() => setIsFlipped(i)}
                onMouseLeave={() => setIsFlipped(null)}
              >
                {/* Project Card */}
                <div className={`preserve-3d relative w-full h-full duration-500 ${
                  isFlipped === i ? 'rotate-y-180' : ''
                }`}>
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-gray-900 rounded-xl overflow-hidden backface-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-gray-800 rounded-xl p-6 rotate-y-180 backface-hidden">
                    <h3 className="text-2xl font-bold text-gold mb-4">
                      Project Details
                    </h3>
                    <div className="flex gap-4 mb-6">
                      <a 
                        href={project.links.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gold transition"
                      >
                        <FiGithub className="text-xl" />
                      </a>
                      <a 
                        href={project.links.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gold transition"
                      >
                        <FiExternalLink className="text-xl" />
                      </a>
                    </div>
                    <button
                      onClick={() => setProject(project)}
                      className="w-full bg-gold text-black py-2 rounded-full hover:bg-maroon transition"
                    >
                      Read Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* PDF Modal */}
        {selectedProject && (
          <PdfModal 
            pdf={selectedProject.links.article}
            onClose={() => setProject(null)}
          />
        )}
      </div>
    </section>
  );
}