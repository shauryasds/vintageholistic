import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Power of Crystal Healing",
    excerpt: "Discover how crystals can bring healing energy, balance, and harmony into your life.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/blog/crystal-healing"
  },
  
];

const AllBlog = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12 mt-20 px-6 md:px-12">
      <h1 className="text-center text-4xl md:text-5xl font-extrabold font-serif mb-12 text-pink-700">
        Our Blog
      </h1>
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map(({ id, title, excerpt, image, link }) => (
          <article
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2 text-pink-800">{title}</h2>
              <p className="text-gray-700 flex-grow">{excerpt}</p>
              <a
                href={link}
                className="mt-4 inline-block text-pink-600 font-semibold hover:underline self-start"
              >
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
