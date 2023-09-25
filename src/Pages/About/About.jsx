import ExclusivePackages from "../../Components/About/PackegesSection/ExclusivePackages";
import TravelVistaOverview from "../../Components/About/TravelVistaOverview";
import Agents from "../Home/HomeComponents/TravelAgentSection/Agents";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-banner md:pt-[65px] pt-10 ">
        <div className="lg:w-[60%] p-[30px]  md:my-8 text-white mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">About Us</h1>
          <div className="md:py-6 mb-2">
            <h2 className="text-3xl  font-semibold mb-3">
              {" "}
              Welcome to <span className=" text-orange-500">Travel Vista</span>
            </h2>
            <p className="text-[17px] text-gray-100">
              {" "}
              your gateway to exploring the world s most breathtaking
              destinations. Our passion is to inspire and assist you in planning
              unforgettable journeys, filled with adventure, culture, and
              discovery.
            </p>
          </div>
          <button className="btn-style">Learn More</button>
        </div>
      </div>
      <div className="my-20">
        <TravelVistaOverview />
        <ExclusivePackages />
        <Agents />
      </div>
    </>
  );
}

export default About;
