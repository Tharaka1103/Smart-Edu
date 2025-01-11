'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { FaChalkboardTeacher, FaStar, FaGraduationCap, FaTimes } from 'react-icons/fa';
import { useTheme } from "next-themes";
import Link from 'next/link';
import { teachers } from '@/app/resources/content';

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [experienceFilter, setExperienceFilter] = useState('all');
  const { theme } = useTheme();

  // Get unique subjects from all teachers
  const allSubjects = [...new Set(
    Object.values(teachers).flatMap(teacher => teacher.subject)
  )];

  const filteredTeachers = Object.entries(teachers).filter(([key, teacher]) => {
    const matchesSearch = 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubjects = selectedSubjects.length === 0 || 
      teacher.subject.some(sub => selectedSubjects.includes(sub));
    
    const yearsExp = parseInt(teacher.experience);
    const matchesExperience = experienceFilter === 'all' || 
      (experienceFilter === '5+' && yearsExp >= 5) ||
      (experienceFilter === '10+' && yearsExp >= 10);

    return matchesSearch && matchesSubjects && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Our Expert Teachers</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`md:w-64 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg 
            ${showFilters ? 'fixed inset-0 z-50 md:relative' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="md:hidden">
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Subjects</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {allSubjects.map((subject) => (
                    <label key={subject} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject)}
                        onChange={(e) => {
                          setSelectedSubjects(e.target.checked 
                            ? [...selectedSubjects, subject]
                            : selectedSubjects.filter(s => s !== subject)
                          );
                        }}
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Experience</h3>
                <select
                  value={experienceFilter}
                  onChange={(e) => setExperienceFilter(e.target.value)}
                  className="w-full p-2 rounded-lg border dark:bg-gray-700"
                >
                  <option value="all">All Experience</option>
                  <option value="5+">5+ Years</option>
                  <option value="10+">10+ Years</option>
                </select>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {/* Search and Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search teachers by name or subject..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl"
              >
                <FiFilter />
                Filters
              </button>
            </div>

            {/* Teachers Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map(([key, teacher]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <FaChalkboardTeacher className="text-2xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{teacher.name}</h3>
                        <div className="flex flex-wrap gap-1">
                          {teacher.subject.map((sub, index) => (
                            <span key={index} className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-blue-600" />
                        <span>{teacher.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400" />
                        <span>{teacher.rating} ({teacher.reviews} reviews)</span>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 line-clamp-2">{teacher.bio}</p>

                    <Link href={teacher.button.link} className="block mt-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors">
                        {teacher.button.text}
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
