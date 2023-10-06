import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  return (
    <div>
      {/* fest user */}
      <div className="my-6">
        <div className="flex gap-4 items-center py-6">
          <img
            className="md:w-24 w-12  md:h-24 h-12"
            src="https://i.ibb.co/BVxxLSP/imageedit-4-2812338861.gif"
            alt=""
          />
          <div className="">
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p>
              Ut enim ad minima veniam, quis nostrum exerci tationem ullam
              corporis suscipit den ser mori ten laboriosam, nisi ut aliquid ex
              ea commodi consequatur.
            </p>
            <div className="flex gap-3">
              <BiLogoFacebook
                size={24}
                className="hover:text-orange-500 duration-700"
              />
              <AiOutlineTwitter
                size={24}
                className="hover:text-orange-500 duration-700"
              />
              <BiLogoLinkedin
                size={24}
                className="hover:text-orange-500 duration-700"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-400"></div>
      </div>
      {/* another user comment section */}
      <div className="">
        <h1 className="md:text-5xl text-2xl font-semibold text-mono text-slate-500">
          2 Comments
        </h1>
        <div className="w-[90%] mx-auto">
          <div className="flex gap-4 items-center py-6">
            <img
              className="md:w-24 w-12  md:h-24 h-12"
              src="https://i.ibb.co/BVxxLSP/imageedit-4-2812338861.gif"
              alt=""
            />
            <div className="">
              <div className="flex justify-between text-slate-500">
                <h4 className="text-xl font-semibold">John </h4>
                <h3>13 June, 2019 at 07:30</h3>
                <h3 className="font-semibold  cursor-pointer hover:text-orange-500">
                  Reply
                </h3>
              </div>
              <p>
                Ut enim ad minima veniam, quis nostrum exerci tationem ullam
                corporis suscipit den ser
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center py-6 md:translate-x-10">
            <img
              className="md:w-24 w-12  md:h-24 h-12"
              src="https://i.ibb.co/BVxxLSP/imageedit-4-2812338861.gif"
              alt=""
            />
            <div className="">
              <div className="flex justify-between text-slate-500">
                <h4 className="text-xl font-semibold">Hearry</h4>
                <h3>13 June, 2019 at 07:30</h3>
                <h3 className="font-semibold  cursor-pointer hover:text-orange-500">
                  Reply
                </h3>
              </div>
              <p>
                Ut enim ad minima veniam, quis nostrum exerci tationem ullam
                corporis suscipit den .
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center py-6">
            <img
              className="md:w-24 w-12  md:h-24 h-12"
              src="https://i.ibb.co/BVxxLSP/imageedit-4-2812338861.gif"
              alt=""
            />
            <div className="">
              <div className="flex justify-between text-slate-500">
                <h4 className="text-xl font-semibold">John </h4>
                <h3>13 June, 2019 at 07:30</h3>
                <h3 className="font-semibold  cursor-pointer hover:text-orange-500">
                  Reply
                </h3>
              </div>
              <p>
                Ut enim ad minima veniam, quis nostrum exerci tationem ullam
                corporis suscipit den .
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-mono text-slate-900">
          Leave a Comment
        </h3>
        {/* message form  */}
        <CommentForm />
      </div>
    </div>
  );
};

export default CommentSection;
