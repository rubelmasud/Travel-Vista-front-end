import { useEffect, useState } from "react";
import BlogCart from "../../Components/BlogCart";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    fetch("/plece.json")
      .then((res) => res.json())
      .then((places) => {
        setBlogs(places);
      });
  }, []);

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <div className="about-banner my-auto pt-10 ">
        <div className="lg:w-[60%] p-[30px]  my-auto text-white mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Blog</h1>
          <div className="md:py-4 mb-2">
            <h3 className="text-3xl font-semibold mt-3">
              Discover Amazing Places of the World
            </h3>
          </div>
        </div>
      </div>

      <div className="lg:px-12 md:px-6 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center my-16 gap-6">
          {currentBlogs.map((blog, index) => (
            <BlogCart key={index} blog={blog}></BlogCart>
          ))}
        </div>
        <div className="flex justify-center my-12">
          {/* Pagination buttons */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastBlog >= blogs.length}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
