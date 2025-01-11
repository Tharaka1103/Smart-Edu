'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaStar, FaGraduationCap, FaBook, FaUsers, FaClock } from 'react-icons/fa';
import { useTheme } from "next-themes";
import Link from 'next/link';
import { teachers } from '@/app/resources/content';

type Props = {
  params: {
    teacherId: string;
  };
};

export default function TeacherDetails({ params }: Props) {
  const teacherId = params.teacherId;
  const teacherData = teachers[`teacher${teacherId}` as keyof typeof teachers];
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaChalkboardTeacher className="text-4xl text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{teacherData.name}</h1>
                    <div className="flex flex-wrap gap-2">
                      {teacherData.subject.map((subject, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{teacherData.rating}</span>
                  </div>
                  <span className="text-gray-500">({teacherData.reviews} reviews)</span>
                  <span className="text-gray-500">•</span>
                  <span>{teacherData.experience} Experience</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8">{teacherData.bio}</p>
              </div>

              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <FaUsers className="text-blue-600" />
                      <span className="font-semibold">Students</span>
                    </div>
                    <span className="text-2xl font-bold">500+</span>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBook className="text-blue-600" />
                      <span className="font-semibold">Classes</span>
                    </div>
                    <span className="text-2xl font-bold">{teacherData.classes.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Classes Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Classes by {teacherData.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherData.classes.map((classId) => (
              <motion.div
                key={classId}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Class {classId}</h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                    <FaClock />
                    <span>Next class in 2 days</span>
                  </div>
                  <Link href={`/classes/${classId}`}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors">
                      View Class Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Teaching Schedule</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
            <div className="grid gap-4">
              {['Monday', 'Wednesday', 'Friday'].map((day) => (
                <div key={day} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-4">
                    <FaClock className="text-blue-600" />
                    <div>
                      <p className="font-semibold">{day}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">3:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 rounded-full text-sm">
                    Available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}