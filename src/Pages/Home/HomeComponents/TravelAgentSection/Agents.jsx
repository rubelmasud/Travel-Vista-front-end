import "./Agents.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Agents = () => {
  return (
    <div className="lg:px-12 md:px-6 px-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        <div className="">
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://i.ibb.co/BVxxLSP/imageedit-4-2812338861.gif"
              />
            </div>
            <div className="team-content">
              <h3 className="name">Rubel Masud</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social flex gap-2 justify-center">
              <li>
                <BsFacebook size={24} />
              </li>
              <li>
                <BsGithub size={24} />
              </li>
              <li>
                <AiFillLinkedin size={24} />
              </li>
              <li>
                <AiFillInstagram size={24} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=839"
              />
            </div>
            <div className="team-content">
              <h3 className="name">Humayun Kobir</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social flex gap-2 justify-center">
              <li>
                <BsFacebook size={24} />
              </li>
              <li>
                <BsGithub size={24} />
              </li>
              <li>
                <AiFillLinkedin size={24} />
              </li>
              <li>
                <AiFillInstagram size={24} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=856"
              />
            </div>
            <div className="team-content">
              <h3 className="name">Asaduzzaman Noor</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social flex gap-2 justify-center">
              <li>
                <BsFacebook size={24} />
              </li>
              <li>
                <BsGithub size={24} />
              </li>
              <li>
                <AiFillLinkedin size={24} />
              </li>
              <li>
                <AiFillInstagram size={24} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=836"
              />
            </div>
            <div className="team-content">
              <h3 className="name">Abdullah Al Priyam</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social flex gap-2 justify-center">
              <li>
                <BsFacebook size={24} />
              </li>
              <li>
                <BsGithub size={24} />
              </li>
              <li>
                <AiFillLinkedin size={24} />
              </li>
              <li>
                <AiFillInstagram size={24} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=836"
              />
            </div>
            <div className="team-content">
              <h3 className="name">Abu Sayed</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social flex gap-2 justify-center">
              <li>
                <BsFacebook size={24} />
              </li>
              <li>
                <BsGithub size={24} />
              </li>
              <li>
                <AiFillLinkedin size={24} />
              </li>
              <li>
                <AiFillInstagram size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
