import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsFillRecord2Fill, BsShareFill } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import CommentSection from "../../Components/CommentSection";

const SingleBlog = () => {
  return (
    <div>
      <div className="about-banner my-auto pt-10">
        <div className="lg:w-[60%] p-[30px] my-auto text-white mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Single Blog</h1>
          <div className="md:py-4 mb-2">
            <h3 className="text-3xl font-semibold mt-3">
              Discover Amazing Places of the World
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:px-12 md:flex gap-10 md:px-6 px-4 my-24">
        <div className="md:w-[70%] w-full justify-between gap-4">
          <div className="overflow-hidden">
            <img
              className="w-full md:h-[60vh] hover:scale-125 duration-700"
              src="https://img.freepik.com/free-photo/woman-walking-big-entrance-gate-bali-indonesia_335224-378.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais"
              alt=""
            />
          </div>
          <div className="text-gray-500">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia. sed quia ipsum den consequuntur magni dolores eos.
            </p>
            <br />
            <p>
              Dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem.
            </p>
            <p>
              Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>

          <div className="flex gap-4 items-center shadow-2xl px-4 py-6 my-10">
            <BiSolidQuoteAltLeft size={80} />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis
            </p>
          </div>
          <div className="w-full h-[0.5px] bg-gray-400 mt-6"></div>
          <div className="py-6 flex justify-between">
            <div className="flex gap-4 text-gray-500 hover:text-black duration-700">
              <FaPenFancy size={20} />
              <p>Travel, Tour, Summer, Hotels, Flights</p>
            </div>
            <div className="flex gap-4">
              <BsShareFill size={20} />
              <p>Share this article</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-400"></div>
          <CommentSection />
        </div>
        <div className="md:w-[26%] justify-center order">
          <div className="flex justify-center items-center text-center">
            <input
              type="text"
              placeholder="Search"
              className="uppercase border outline-none bg-slate-100 h-[37px] px-4"
            />
            <span className={`p-2 bg-orange-600 text-white `}>
              <AiOutlineSearch size={18} />
            </span>
          </div>
          <div className="my-4 ">
            <h2 className="text-2xl font-semibold ">Categories</h2>
            <div className="w-[50px] h-[2px] bg-orange-600 mb-2"></div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Adventures", count: 20 },
                { name: "Tour Guide", count: 10 },
                { name: "Travelling", count: 110 },
                { name: "Holidays", count: 40 },
                { name: "Photography", count: 49 },
              ].map((category, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center font-semibold text-gray-500 hover:text-orange-500 duration-700"
                >
                  <div className="flex items-center gap-1">
                    <BsFillRecord2Fill size={20} />
                    <p>{category.name}</p>
                  </div>
                  <div>
                    <p>{category.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-semibold ">Recent Posts</h2>
            <div className="w-[50px] h-[2px] bg-orange-600 mb-2"></div>
            <div className="flex flex-col gap-2">
              {[
                {
                  title: "What happen during my first trip",
                  date: "July 04, 2019",
                },
                {
                  title: "What happen during my first trip",
                  date: "July 04, 2019",
                },
                {
                  title: "What happen during my first trip",
                  date: "July 04, 2019",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 opacity-60 hover:opacity-100 duration-700"
                >
                  <div>
                    <img
                      className="w-16 h-14"
                      src="https://img.freepik.com/free-photo/woman-walking-big-entrance-gate-bali-indonesia_335224-378.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5>{post.title}</h5>
                    <p>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-semibold ">Recent Posts</h2>
            <div className="w-[50px] h-[2px] bg-orange-600 mb-2"></div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Agency",
                "Traveling",
                "Tour",
                "Beach",
                "Hotel",
                "Summer",
                "Guide",
                "PhotoGrapy",
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-300 w-fit text-gray-500 rounded-full px-4 py-1 hover:bg-orange-600 hover:text-white duration-700"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
