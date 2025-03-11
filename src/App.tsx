import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import Chart from 'chart.js/auto';
import { Background } from './components/Background';

function App() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Python', 'JavaScript', 'C++', 'Java', 'React', 'Node.js'],
            datasets: [{
              label: 'Skill Level',
              data: [85, 90, 75, 70, 85, 80],
              backgroundColor: 'rgba(0, 255, 255, 0.2)',
              borderColor: '#00ffff',
              borderWidth: 2,
              pointBackgroundColor: '#ff00ff',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#ff00ff'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20,
                  color: 'rgba(255, 255, 255, 0.7)'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                  color: 'rgba(255, 255, 255, 0.9)',
                  font: {
                    size: 12
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            },
            animation: {
              duration: 2000,
              easing: 'easeInOutQuart'
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <Background />

      <nav className="sticky top-0 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Karthick Raja V
            </span>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <a href="#objective" className="hover:text-cyan-400 transition-colors hover:scale-105">Objective</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors hover:scale-105">Education</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors hover:scale-105">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors hover:scale-105">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors hover:scale-105">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col gap-4 py-4">
              <a href="#objective" onClick={closeMenu} className="hover:text-cyan-400 transition-colors hover:translate-x-2">Objective</a>
              <a href="#education" onClick={closeMenu} className="hover:text-cyan-400 transition-colors hover:translate-x-2">Education</a>
              <a href="#experience" onClick={closeMenu} className="hover:text-cyan-400 transition-colors hover:translate-x-2">Experience</a>
              <a href="#skills" onClick={closeMenu} className="hover:text-cyan-400 transition-colors hover:translate-x-2">Skills</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-cyan-400 transition-colors hover:translate-x-2">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 md:mb-8">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Profile"
              className="rounded-full border-4 border-cyan-500 animate-pulse-slow object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-spin-slow"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 animate-fade-in">Karthick Raja V</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-4 md:mb-6 animate-fade-in-delay">
            🚀 Full-Stack MERN Developer | IoT Enthusiast | Innovator
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-delay-2">
            <a href="https://github.com/Raja-28" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-110 hover:rotate-6">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/karthick-raja-v-2824v" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-110 hover:rotate-6">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.hackerrank.com/profile/rajaccet28" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-110 hover:rotate-6">
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        <div className="space-y-12 md:space-y-20">
          <section id="objective" className="glass-card transform hover:scale-[1.02] transition-transform">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 neon-text">Objective</h2>
            <p className="text-sm md:text-base text-gray-300">
              Passionate about building cutting-edge tech solutions, leveraging Full-Stack Development, IoT, and AI to create impactful innovations.
            </p>
          </section>

          <section id="education" className="glass-card transform hover:scale-[1.02] transition-transform">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 neon-text">Education</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="border-l-2 border-cyan-500 pl-4 hover:translate-x-2 transition-transform">
                <h3 className="font-bold text-sm md:text-base">Chettinad College of Engineering and Technology</h3>
                <p className="text-sm text-gray-400">B.E CSE | 8.4 GPA | 2022 - Present</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4 hover:translate-x-2 transition-transform">
                <h3 className="font-bold text-sm md:text-base">Government Boys Higher Secondary School</h3>
                <p className="text-sm text-gray-400">HSC | 64% | 2021 - 2022</p>
              </div>
              <div className="border-l-2 border-pink-500 pl-4 hover:translate-x-2 transition-transform">
                <h3 className="font-bold text-sm md:text-base">Kandaswami Kandar Matric Higher Secondary School</h3>
                <p className="text-sm text-gray-400">SSLC | 87% | 2019 - 2020</p>
              </div>
            </div>
          </section>

          <section id="experience" className="glass-card transform hover:scale-[1.02] transition-transform">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 neon-text">Experience</h2>
            <div className="border-l-2 border-cyan-500 pl-4 hover:translate-x-2 transition-transform">
              <h3 className="font-bold text-sm md:text-base">IoT Engineer | Pixfect</h3>
              <p className="text-sm text-gray-400">May 2024 - Present</p>
              <p className="mt-2 text-sm md:text-base text-gray-300">Designing intelligent IoT solutions for automation and real-world applications.</p>
            </div>
          </section>

          <section id="skills" className="glass-card transform hover:scale-[1.02] transition-transform">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 neon-text">Skills</h2>
            <div className="w-full h-[300px] md:h-[400px] max-w-md mx-auto">
              <canvas ref={chartRef}></canvas>
            </div>
          </section>

          <section id="contact" className="glass-card transform hover:scale-[1.02] transition-transform">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 neon-text">Contact</h2>
            <div className="space-y-4">
              <a href="mailto:rajaccet28@gmail.com" 
                 className="flex items-center gap-2 hover:text-cyan-400 transition-all hover:translate-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm md:text-base">rajaccet28@gmail.com</span>
              </a>
              <a href="https://splendid-quokka-029aa7.netlify.app" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-cyan-400 transition-all hover:translate-x-2">
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm md:text-base">Portfolio</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;