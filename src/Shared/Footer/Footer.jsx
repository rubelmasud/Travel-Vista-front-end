import { FaLocationArrow } from "react-icons/fa";
import "./Footer.css";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="">
      <footer className="lg:px-12 py-12 md:px-6 px-4 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 gap-6 mt-20 justify-between  bg-[#0000ced7] text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-mono font-bold">Travel Vista</h1>
          <p>
            Pellentesque convallis, diam et feugiat volutpat, tellus ligula
            consequat augue, quis malesuada nisi ante nec metus. Sed id pretium
            nunc. Mauris vitae porttitor tortor. Fusce aliquet ac metus eget
            egestas.
          </p>
          <div className="flex justify-start items-center">
            <input
              type="text"
              placeholder="inter your email"
              className="uppercase border outline-none bg-slate-100  h-[37px] px-4"
            />
            <span className=" p-2 bg-orange-600 text-white hover:text-gray-500 duration-500">
              <FaLocationArrow size={18} className=" " />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="">
            <h2 className="text-2xl ">Quick Links</h2>
            <div className="w-[50px] h-[2px] bg-orange-600"></div>
          </div>

          <div className="flex gap-10 list-none">
            <div className="">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Tour Of Trips</a>
              </li>
              <li>
                <a href="">Find Your Location</a>
              </li>
              <li>
                <a href="">Contact Us.</a>
              </li>
              <li>
                <a href="">Terms & conditions</a>
              </li>
            </div>
            <div className="">
              <li>
                <a href="">Praivcy Policy</a>
              </li>
              <li>
                <a href="">Testimonials.</a>
              </li>
              <li>
                <a href="">Terms & conditions</a>
              </li>
              <li>
                <a href="">Praivcy Policy</a>
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="">
            <h2 className="text-2xl ">Recent Post</h2>
            <div className="w-[50px] h-[2px] bg-orange-600"></div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <img
              className="w-20 h-16 opacity-60 hover:opacity-100 duration-500"
              src="https://i.ibb.co/mXTqW5q/download.jpg"
              alt=""
            />
            <div className="">
              <p>
                Pellentesque convallis, diam et feugiat volutpat, tellus ligula
                c
              </p>
              <p className="text-orange-600 font-semibold">Sep 09, 2019</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <img
              className="w-20 h-16 opacity-60 hover:opacity-100 duration-500"
              src="https://i.ibb.co/mXTqW5q/download.jpg"
              alt=""
            />
            <div className="">
              <p>
                Pellentesque convallis, diam et feugiat volutpat, tellus ligula
                c
              </p>
              <p className="text-orange-600 font-semibold">Sep 09, 2019</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#0e0ef4d7] text-white lg:px-12 px-4 flex justify-between items-center py-4">
        <h1 className="lg:text-1xl text-sm font-semibold">
          And IT Themes © 2019. All Rights Reserveds
        </h1>
        <div className="flex gap-2 justify-end font-mono font-extrabold">
          <CiFacebook size={40} className="hover:-translate-y-4 duration-700" />
          <TiSocialTwitterCircular
            size={40}
            className="hover:-translate-y-4 duration-700"
          />
          <CiLinkedin size={40} className="hover:-translate-y-4 duration-700" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
