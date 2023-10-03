import { FaLocationArrow } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import "./Footer.css";

const orangeText = "text-orange-600";
const hoverOpacity = "opacity-60 hover:opacity-100 duration-500";

const RecentPostItem = ({ imageUrl, date }) => (
  <div className={`flex justify-start items-center gap-4 ${hoverOpacity}`}>
    <img className="w-20 h-16" src={imageUrl} alt="" />
    <div>
      <p>Pellentesque convallis, diam et feugiat volutpat, tellus ligula c</p>
      <p className={orangeText}>{date}</p>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div>
      <footer className="lg:px-12 py-12 md:px-6 px-4 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 gap-6  justify-between  bg-[#2f24c1] text-white">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <h1 className="logo text-4xl font-mono font-bold">Travel Vista</h1>
          <p>
            Pellentesque convallis, diam et feugiat volutpat, tellus ligula
            consequat augue, quis malesuada nisi ante nec metus. Sed id pretium
            nunc. Mauris vitae porttitor tortor. Fusce aliquet ac metus eget
            egestas.
          </p>
          <div className="flex justify-start items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="uppercase border outline-none bg-slate-100 h-[37px] px-4"
            />
            <span className={`p-2 bg-orange-600 text-white ${hoverOpacity}`}>
              <FaLocationArrow size={18} />
            </span>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl">Quick Links</h2>
            <div className="w-[50px] h-[2px] bg-orange-600"></div>
          </div>
          <div className="flex gap-10 list-none">
            <div>
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
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
            </div>
            <div>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl">Recent Posts</h2>
            <div className="w-[50px] h-[2px] bg-orange-600"></div>
          </div>
          <RecentPostItem
            imageUrl="https://i.ibb.co/mXTqW5q/download.jpg"
            date="Sep 09, 2019"
          />
          <RecentPostItem
            imageUrl="https://i.ibb.co/mXTqW5q/download.jpg"
            date="Sep 09, 2019"
          />
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-[#2f24c1] text-white lg:px-12 px-4 flex justify-between items-center py-4">
        <h1 className="lg:text-1xl text-sm font-semibold">
          And IT Themes © 2019. All Rights Reserved
        </h1>
        <div className="flex gap-2 justify-end font-mono font-extrabold">
          <CiFacebook size={40} className={`${hoverOpacity}`} />
          <TiSocialTwitterCircular size={40} className={`${hoverOpacity}`} />
          <CiLinkedin size={40} className={`${hoverOpacity}`} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
