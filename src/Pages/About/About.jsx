import ExclusivePackages from "../../Components/About/PackegesSection/ExclusivePackages";
import TravelVistaOverview from "../../Components/About/TravelVistaOverview";
import PlaceGallery from "../../Components/PlaceGallery";

import Agents from "../Home/HomeComponents/TravelAgentSection/Agents";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-banner my-auto pt-10 ">
        <div className="lg:w-[60%] p-[30px]  my-auto text-white mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">About Us</h1>
          <div className="md:py-4 mb-2">
            <h3 className="text-3xl font-semibold mt-3">
              Discover Amazing Places of the World
            </h3>
          </div>
        </div>
      </div>
      <div className="my-20">
        <TravelVistaOverview />
        <PlaceGallery />
        <ExclusivePackages />
        <Agents />
      </div>
    </>
  );
}

export default About;
