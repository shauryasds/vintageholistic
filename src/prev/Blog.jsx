import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Understanding Ayurvedic Daily Routines',
    excerpt: 'Learn about Dinacharya - the Ayurvedic daily routine that can help optimize your health and wellbeing.',
    image: 'https://images.pexels.com/photos/3822727/pexels-photo-3822727.jpeg',
    category: 'Ayurveda',
    readTime: '5 min read'
  },
  {
    title: 'Yoga for Stress Relief',
    excerpt: 'Simple yoga poses and breathing techniques to help reduce stress and anxiety in daily life.',
    image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg',
    category: 'Yoga',
    readTime: '7 min read'
  },
  {
    title: 'Benefits of Panchakarma Treatment',
    excerpt: 'Discover how Panchakarma can help detoxify your body and restore balance to your system.',
    image: 'https://images.pexels.com/photos/3823076/pexels-photo-3823076.jpeg',
    category: 'Panchakarma',
    readTime: '6 min read'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Wellness Resources</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-accent">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-accent hover:text-primary transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919886332684"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        📱
      </a>
    </div>
  );
};

export default Blog;