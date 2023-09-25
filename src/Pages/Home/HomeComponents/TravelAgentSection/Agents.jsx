import "./Agents.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Agents = () => {
  return (
    <div className="my-12 ">
      <div className="md:w-7/12 mx-auto text-center">
        <p className="lg:text-xl">Travel Guides, Tips & Advice</p>
        <h1 className="lg:text-4xl text-3xl font-bold">
          <span className="text-black">Travel </span>
          <span className="text-[#FF4F10EB]"> Agents</span>
        </h1>
        <p className="text-slate-600 my-4">
          Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed
          viverra quam sollicitudin. Proin sed augue sed neque ultricies
          condimentum.
        </p>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 justify-between items-center gap-12 p-12">
        <div className="cart shadow-xl ">
          <img
            className=" bg-slate-100 "
            src="https://i.ibb.co/YkBvc50/download-1-removebg-preview.png"
            alt=""
          />
          <div className="hidden">
            <div className="info text-center justify-center px-3 ">
              <h2 className="text-2xl font-semibold">Md Rubel Masud</h2>
              <p className="text-xl">Front-end Developer</p>
              <button className="btn-style w-[50%]">Hire me</button>
            </div>
            <div className="icons flex justify-center gap-6 pb-3">
              <BsFacebook className="icon" />
              <BsGithub className="icon" />
              <AiFillLinkedin className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>
        </div>
        <div className="cart shadow-xl ">
          <img
            className=" bg-slate-100 "
            src="https://i.ibb.co/YkBvc50/download-1-removebg-preview.png"
            alt=""
          />
          <div className="hidden">
            <div className="info text-center justify-center px-3 ">
              <h2 className="text-2xl font-semibold">Md Rubel Masud</h2>
              <p className="text-xl">Front-end Developer</p>
              <button className="btn-style w-[50%]">Hire me</button>
            </div>
            <div className="icons flex justify-center gap-6 pb-3">
              <BsFacebook className="icon" />
              <BsGithub className="icon" />
              <AiFillLinkedin className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>
        </div>
        <div className="cart shadow-xl ">
          <img
            className=" bg-slate-100 "
            src="https://i.ibb.co/YkBvc50/download-1-removebg-preview.png"
            alt=""
          />
          <div className="hidden">
            <div className="info text-center justify-center px-3 ">
              <h2 className="text-2xl font-semibold">Md Rubel Masud</h2>
              <p className="text-xl">Front-end Developer</p>
              <button className="btn-style w-[50%]">Hire me</button>
            </div>
            <div className="icons flex justify-center gap-6 pb-3">
              <BsFacebook className="icon" />
              <BsGithub className="icon" />
              <AiFillLinkedin className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
