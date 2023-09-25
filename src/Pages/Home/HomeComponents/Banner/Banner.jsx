import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner md:pt-[65px] pt-10">
      <div className=" lg:w-[75%] mx-auto w-full p-[30px]  md:my-16 text-white text-center">
        <p className="text-orange-500 font-bold md:text-2xl">WELCOME TO</p>
        <h1 className="text-3xl md:text-5xl font-bold ">
          <p> Discover Amazing Places</p>
          <p>of the world</p>
        </h1>
        <p className="md:py-6 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum
          cumque sit blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum eum cumque sit blanditiis.
        </p>
        <button className="btn-style">learn more</button>
      </div>
    </div>
  );
};

export default Banner;
