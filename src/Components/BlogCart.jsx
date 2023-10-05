import { Link } from "react-router-dom";
import { AiTwotoneMessage } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";

const BlogCart = ({ blog }) => {
  const { image, blogTitle } = blog || {};
  return (
    <Link to="/singleBlock">
      <div className="shadow-md rounded-2xl hover:shadow-lg hover:translate-y-3 hover:text-orange-600 duration-1000 w-full h-auto">
        <div className="overflow-hidden">
          <img
            className="w-full rounded-2xl h-56 transform hover:scale-150 duration-700"
            src={image}
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-[18px] font-semibold">{blogTitle}</h3>
          </div>
          <div className="w-full h-[1px] bg-slate-300 my-5"></div>
          <div className="flex justify-between items-center text-gray-600 hover:text-orange-600">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co/BVxxLSP/imageedit-4-2812338861.gif"
                alt=""
              />
              <h5 className="font-semibold">By Rubel Masud</h5>
            </div>
            <div className="">
              <p>6 sep , 2021</p>
            </div>
          </div>
          <div className="flex justify-end items-center text-gray-600 gap-1 hover:text-blue-600 duration-700">
            <AiTwotoneMessage />
            <BsShareFill />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCart;
