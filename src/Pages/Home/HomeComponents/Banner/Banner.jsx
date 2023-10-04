import { BiSolidBed, BiSolidTaxi } from "react-icons/bi";
import { MdFlight, MdAttractions } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner lg:pt-[25px] md:pt-10 pt-6" data-aos="fade-down">
      <section
        className="lg:px-12 lg:w-[65%] md:px-6 px-4  gap-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2"
        data-aos="fade-right"
      >
        <div>
          <BiSolidBed />
          <button> Stays</button>
        </div>
        <div>
          <MdFlight />
          <button> Flight</button>
        </div>
        <div>
          <AiFillCar />
          <button>Car Rentals</button>
        </div>
        <div>
          <MdAttractions />
          <button>Attractions</button>
        </div>
        <div>
          <BiSolidTaxi />
          <button>Airport Taxis</button>
        </div>
      </section>
      <div
        className=" lg:w-[95%] mx-auto w-full p-[30px]  md:my-6 text-white "
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <p className="text-orange-400 font-bold md:text-xl">WELCOME TO</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-3">
          Discover Amazing Places of the world
        </h1>
        <p className=" mb-4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum
          cumque sit blanditiis.
        </p>
        <button className="btn-style">learn more</button>
      </div>
    </div>
  );
};

export default Banner;
