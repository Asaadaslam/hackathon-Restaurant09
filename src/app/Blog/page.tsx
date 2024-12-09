import React from "react";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      image: "/Blog1.png",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      image: "/Blog2.png",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 3,
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      image: "/Blog3.png",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 4,
      title: "My Favorite Easy Black Pizza Toast Recipe",
      image: "/Blog4.png",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8 w-full md:w-1/4 mx-auto">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        {/* Blog Posts Section */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Blog Posts
        </h1>
        <div className="flex flex-col items-center gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              style={{ width: "672px", height: "630px" }}
            >
              <div className="h-1/2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 h-1/2 flex flex-col justify-between">
                <h3 className="text-gray-800 text-2xl font-bold">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-coffee hover:text-white">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-coffee hover:text-white">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-coffee hover:text-white">
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
