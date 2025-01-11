const home = {
    title: 'Welcome to Sri Lankan O/L Education Hub',
    heading: 'Your Complete O/L Preparation Platform',
    text: 'Discover a comprehensive learning experience designed specifically for Sri Lankan Ordinary Level students. Our platform offers detailed coverage of all O/L subjects, past paper discussions, model question papers, and interactive learning materials. Join thousands of students who have successfully prepared for their O/L examinations through our structured learning approach.',
    button: {
        text: 'Start Learning',
        link: '/classroom'
    },
}
const about = {
    title: 'About us',
    heading: 'Your Trusted O/L Education Partner',
    text: 'We are a dedicated team of experienced teachers and education professionals committed to improving O/L education in Sri Lanka. Our platform combines traditional teaching methods with modern technology to provide an effective learning experience. We focus on all core O/L subjects including Mathematics, Science, English, History, and more, ensuring every student has access to quality education regardless of their location.',
    button: {
        text: 'Learn more',
        link: '/about'
    },
}
const blog = {
    title: 'Education Blog',
    heading: 'O/L Exam Updates & Study Tips',
    text: 'Stay informed with the latest O/L examination updates, study techniques, and educational resources. Our blog features expert advice from experienced teachers, success stories from top performers, exam preparation strategies, and important announcements from the Department of Examinations. We also share valuable time management tips and stress-handling techniques for students.',
    button: {
        text: 'Read more',
        link: '/blog'
    },
}
const contact = {
    title: 'Contact Us',
    heading: 'Get in Touch',
    text: 'Have questions or need assistance? Reach out to us through our contact form or visit our social media pages. We are here to help you on your O/L journey. We value your feedback and suggestions, so please feel free to share your thoughts with us. We look forward to hearing from you!',
    number: '077 123 4567',
    email: 'info@slolehub.com',
    address: '123, Main Street, Colombo 001',
    button: {
        text: 'Contact Us',
        link: '/contact'
    },
}
const features = {
  feature1: {
      title: "Comprehensive Coverage",
      description: "Access complete study materials for all O/L subjects"
  },
  feature2: {
      title: "Interactive Learning",
      description: "Engage with dynamic content and practice exercises"
  },
  feature3: {
      title: "Expert Guidance",
      description: "Learn from experienced teachers and professionals"
  }
}

const classes = {
    class1: {
      classId: 1,
      title: "Mathematics",
      description: "Learn the fundamentals of mathematics and prepare for the O/L Mathematics exam",
      exam: "O/L",
      teacher: "Mr. Perera",
      rating: 4.8,
      reviews: 120,
      price: "Rs. 3000/month",
      schedule: [
        { day: 'Monday', time: '3:00 PM - 5:00 PM', type: 'Theory' },
        { day: 'Wednesday', time: '3:00 PM - 5:00 PM', type: 'Practice' },
        { day: 'Saturday', time: '9:00 AM - 12:00 PM', type: 'Revision' }
      ],
      syllabus: [
        { week: 1, topic: 'Numbers and Operations', duration: '3 hours' },
        { week: 2, topic: 'Algebra Fundamentals', duration: '3 hours' },
        { week: 3, topic: 'Geometry Basics', duration: '3 hours' },
        { week: 4, topic: 'Problem Solving Techniques', duration: '3 hours' }
      ],
      features: [
        { title: 'Study Materials', description: 'Comprehensive study materials and notes' },
        { title: 'Interactive Sessions', description: 'Live Q&A and discussion forums' },
        { title: 'Practice Tests', description: 'Weekly assessments and feedback' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/1"
      }
    },
    class2: {
      classId: 2,
      title: "History",
      description: "Explore Sri Lankan and World History for O/L examination success",
      exam: "O/L",
      teacher: "Mrs. Silva",
      rating: 4.7,
      reviews: 95,
      price: "Rs. 2800/month",
      schedule: [
        { day: 'Tuesday', time: '2:00 PM - 4:00 PM', type: 'Theory' },
        { day: 'Thursday', time: '2:00 PM - 4:00 PM', type: 'Discussion' },
        { day: 'Sunday', time: '9:00 AM - 12:00 PM', type: 'Revision' }
      ],
      syllabus: [
        { week: 1, topic: 'Ancient Sri Lanka', duration: '3 hours' },
        { week: 2, topic: 'Medieval Period', duration: '3 hours' },
        { week: 3, topic: 'Colonial Era', duration: '3 hours' },
        { week: 4, topic: 'Modern History', duration: '3 hours' }
      ],
      features: [
        { title: 'Historical Maps', description: 'Detailed historical maps and timelines' },
        { title: 'Source Analysis', description: 'Historical document analysis training' },
        { title: 'Mock Exams', description: 'Regular practice examinations' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/2"
      }
    },
    class3: {
      classId: 3,
      title: "Science",
      description: "Comprehensive science education covering Physics, Chemistry, and Biology",
      exam: "O/L",
      teacher: "Dr. Fernando",
      rating: 4.9,
      reviews: 150,
      price: "Rs. 3500/month",
      schedule: [
        { day: 'Monday', time: '1:00 PM - 3:00 PM', type: 'Theory' },
        { day: 'Thursday', time: '1:00 PM - 3:00 PM', type: 'Lab Work' },
        { day: 'Saturday', time: '2:00 PM - 5:00 PM', type: 'Revision' }
      ],
      syllabus: [
        { week: 1, topic: 'Basic Physics', duration: '3 hours' },
        { week: 2, topic: 'Chemistry Fundamentals', duration: '3 hours' },
        { week: 3, topic: 'Biology Basics', duration: '3 hours' },
        { week: 4, topic: 'Scientific Method', duration: '3 hours' }
      ],
      features: [
        { title: 'Lab Sessions', description: 'Practical experiments and demonstrations' },
        { title: 'Scientific Reports', description: 'Learn proper scientific documentation' },
        { title: 'Online Quizzes', description: 'Regular topic-wise assessments' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/3"
      }
    },
    class4: {
      classId: 4,
      title: "Commerce",
      description: "Learn business studies and commerce principles for O/L success",
      exam: "O/L",
      teacher: "Mr. Jayawardena",
      rating: 4.6,
      reviews: 85,
      price: "Rs. 2500/month",
      schedule: [
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', type: 'Theory' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', type: 'Case Studies' },
        { day: 'Sunday', time: '2:00 PM - 5:00 PM', type: 'Revision' }
      ],
      syllabus: [
        { week: 1, topic: 'Business Basics', duration: '3 hours' },
        { week: 2, topic: 'Accounting Principles', duration: '3 hours' },
        { week: 3, topic: 'Economics Fundamentals', duration: '3 hours' },
        { week: 4, topic: 'Business Mathematics', duration: '3 hours' }
      ],
      features: [
        { title: 'Case Studies', description: 'Real-world business case analysis' },
        { title: 'Practical Accounting', description: 'Hands-on accounting practice' },
        { title: 'Business Projects', description: 'Group and individual assignments' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/4"
      }
    },
    class5: {
      classId: 5,
      title: "Health",
      description: "Comprehensive health science education for O/L students",
      exam: "O/L",
      teacher: "Mrs. Dissanayake",
      rating: 4.7,
      reviews: 90,
      price: "Rs. 2600/month",
      schedule: [
        { day: 'Tuesday', time: '3:30 PM - 5:30 PM', type: 'Theory' },
        { day: 'Friday', time: '3:30 PM - 5:30 PM', type: 'Practical' },
        { day: 'Sunday', time: '10:00 AM - 1:00 PM', type: 'Revision' }
      ],
      syllabus: [
        { week: 1, topic: 'Human Body Systems', duration: '3 hours' },
        { week: 2, topic: 'Nutrition and Health', duration: '3 hours' },
        { week: 3, topic: 'Disease Prevention', duration: '3 hours' },
        { week: 4, topic: 'First Aid', duration: '3 hours' }
      ],
      features: [
        { title: 'Health Workshops', description: 'Practical health education sessions' },
        { title: 'First Aid Training', description: 'Basic first aid certification' },
        { title: 'Health Projects', description: 'Community health assignments' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/5"
      }
    },
    class6: {
      classId: 6,
      title: "English",
      description: "Master English language skills for O/L examination",
      exam: "O/L",
      teacher: "Ms. Roberts",
      rating: 4.8,
      reviews: 130,
      price: "Rs. 3000/month",
      schedule: [
        { day: 'Monday', time: '4:30 PM - 6:30 PM', type: 'Grammar' },
        { day: 'Wednesday', time: '4:30 PM - 6:30 PM', type: 'Literature' },
        { day: 'Saturday', time: '1:00 PM - 4:00 PM', type: 'Practice' }
      ],
      syllabus: [
        { week: 1, topic: 'Grammar Fundamentals', duration: '3 hours' },
        { week: 2, topic: 'Reading Comprehension', duration: '3 hours' },
        { week: 3, topic: 'Writing Skills', duration: '3 hours' },
        { week: 4, topic: 'Speaking Practice', duration: '3 hours' }
      ],
      features: [
        { title: 'Conversation Club', description: 'English speaking practice sessions' },
        { title: 'Writing Workshop', description: 'Essay and letter writing practice' },
        { title: 'Literature Study', description: 'Analysis of prescribed texts' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/6"
      }
    },
    class7: {
      classId: 7,
      title: "Geography",
      description: "Explore physical and human geography for O/L success",
      exam: "O/L",
      teacher: "Mr. Gunasekara",
      rating: 4.6,
      reviews: 80,
      price: "Rs. 2700/month",
      schedule: [
        { day: 'Tuesday', time: '1:00 PM - 3:00 PM', type: 'Theory' },
        { day: 'Thursday', time: '1:00 PM - 3:00 PM', type: 'Map Work' },
        { day: 'Sunday', time: '9:00 AM - 12:00 PM', type: 'Revision' }
      ],
      syllabus: [
        { week: 1, topic: 'Physical Geography', duration: '3 hours' },
        { week: 2, topic: 'Human Geography', duration: '3 hours' },
        { week: 3, topic: 'Map Reading', duration: '3 hours' },
        { week: 4, topic: 'Environmental Studies', duration: '3 hours' }
      ],
      features: [
        { title: 'Map Skills', description: 'Practical map reading and drawing' },
        { title: 'Field Trips', description: 'Geographical observation visits' },
        { title: 'Project Work', description: 'Environmental case studies' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/7"
      }
    },
    class8: {
      classId: 8,
      title: "Sinhala",
      description: "Comprehensive Sinhala language and literature studies",
      exam: "O/L",
      teacher: "Mrs. Kumarasinghe",
      rating: 4.7,
      reviews: 110,
      price: "Rs. 2800/month",
      schedule: [
        { day: 'Wednesday', time: '2:30 PM - 4:30 PM', type: 'Language' },
        { day: 'Friday', time: '2:30 PM - 4:30 PM', type: 'Literature' },
        { day: 'Saturday', time: '9:00 AM - 12:00 PM', type: 'Practice' }
      ],
      syllabus: [
        { week: 1, topic: 'Grammar and Composition', duration: '3 hours' },
        { week: 2, topic: 'Literature Analysis', duration: '3 hours' },
        { week: 3, topic: 'Poetry and Prose', duration: '3 hours' },
        { week: 4, topic: 'Creative Writing', duration: '3 hours' }
      ],
      features: [
        { title: 'Literature Circle', description: 'Group discussion of literary works' },
        { title: 'Writing Workshop', description: 'Creative writing and essays' },
        { title: 'Language Lab', description: 'Grammar and vocabulary practice' }
      ],
      button: {
        text: "View Class Details",
        link: "/classes/8"
      }
    }
}  

const teachers = {
    teacher1: {
      teacherId: 1,
      name: "Mr. Silva",
      subject: ["Mathematics", "Science"],
      experience: "10 years",
      rating: 4.8,
      reviews: 150,
      bio: "Experienced mathematics teacher with a passion for simplifying complex concepts.",
      classes: [1, 2, 3],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/1"
      }
    },
    teacher2: {
      teacherId: 2,
      name: "Ms. Perera",
      subject: ["Science", "Sinhala", "Geogrophy"],
      experience: "8 years",
      rating: 4.6,
      reviews: 120,
      bio: "Enthusiastic science teacher with a focus on hands-on learning.",
      classes: [4, 5, 6],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/2"
      }
    },
    teacher3: {
      teacherId: 3,
      name: "Mrs. Kumarasinghe",
      subject: ["Sinhala", "English"],
      experience: "12 years",
      rating: 4.7,
      reviews: 140,
      bio: "Dedicated language teacher specializing in Sinhala literature and grammar.",
      classes: [8, 9],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/3"
      }
    },
    teacher4: {
      teacherId: 4,
      name: "Mr. Fernando",
      subject: ["History", "Geography", "Mathematics"],
      experience: "15 years",
      rating: 4.9,
      reviews: 180,
      bio: "Passionate history teacher with extensive knowledge in social studies.",
      classes: [7, 10],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/4"
      }
    },
    teacher5: {
      teacherId: 5,
      name: "Ms. Dissanayake",
      subject: ["English", "History", "Drama"],
      experience: "9 years",
      rating: 4.5,
      reviews: 130,
      bio: "Creative English teacher focusing on language skills and performing arts.",
      classes: [11, 12],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/5"
      }
    },
    teacher6: {
      teacherId: 6,
      name: "Mr. Rajapakse",
      subject: ["ICT", "English"],
      experience: "7 years",
      rating: 4.7,
      reviews: 90,
      bio: "Tech-savvy instructor with industry experience in software development.",
      classes: [13, 14],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/6"
      }
    },
    teacher7: {
      teacherId: 7,
      name: "Mrs. Gunasekara",
      subject: ["Commerce", "Mathematics"],
      experience: "11 years",
      rating: 4.8,
      reviews: 160,
      bio: "Expert in business education with practical industry knowledge.",
      classes: [15, 16],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/7"
      }
    },
    teacher8: {
      teacherId: 8,
      name: "Mr. Bandara",
      subject: ["Music", "Sinhala"],
      experience: "13 years",
      rating: 4.6,
      reviews: 110,
      bio: "Talented performing arts teacher with expertise in multiple disciplines.",
      classes: [17, 18],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/8"
      }
    },
    teacher9: {
      teacherId: 9,
      name: "Ms. Wickramasinghe",
      subject: ["Tamil", "Sinhala"],
      experience: "14 years",
      rating: 4.7,
      reviews: 95,
      bio: "Experienced language instructor specializing in classical and modern languages.",
      classes: [19, 20],
      button: {
        text: "View Teacher Profile",
        link: "/teachers/9"
      }
    }
}

const categories = {
    category1: {
      categoryId: 1,
      name: "Past papers",
      description: "Access a wide range of past papers for comprehensive preparation.",
      button: {
        text: "View Category",
        link: "/categories/1"
      }
    },
    category2: {
      categoryId: 2,
      name: "Mock papers",
      description: "Practice with mock papers to gauge your readiness for exams.",
      button: {
        text: "View Category",
        link: "/categories/2"
      }
    },
    category3: {
      categoryId: 3,
      name: "Video lessons",
      description: "Interactive video lessons for a dynamic learning experience.",
      button: {
        text: "View Category",
        link: "/categories/3"
      }
    },
    category4: {
      categoryId: 4,
      name: "Audio lessons",
      description: "Enhance your learning with audio lessons for various subjects.",
      button: {
        text: "View Category",
        link: "/categories/4"
      }
    },
    category5: {
      categoryId: 5,
      name: "Notes",
      description: "Comprehensive notes for in-depth understanding of subjects.",
      button: {
        text: "View Category",
        link: "/categories/5"
      }
    },
    category6: {
        categoryId: 6,
        name: "Addons",
        description: "Add extara categories in app/resources/content.js. and also update renderContent.js",
        button: {
          text: "Test",
          link: "#"
        }
      }
}
export { home, about, blog, contact, classes, teachers, categories };