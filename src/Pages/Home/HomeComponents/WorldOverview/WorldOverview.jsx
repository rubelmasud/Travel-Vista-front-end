import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const WorldOverview = () => {
  const [countrys, setCountrys] = useState([]);

  const settings = {
    dots: true,
    slidesToShow: 6,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // LG breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768, // MD breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // SM breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("/WorldOverview.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountrys(data);
      });
  }, []);

  return (
    <div
      className="lg:px-12 md:px-6 px-4"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="my-6">
        <h1 className=" text-xl font-semibold">Explore World</h1>
        <p className="lg:text-xl">
          These popular destinations have a lot to offer
        </p>
      </div>
      <Slider {...settings}>
        {countrys.map((country) => (
          <div className="" key={country.data}>
            <div className="overflow-hidden">
              <img
                className="w-40 h-28 rounded-md transform hover:scale-110 duration-500"
                src={country.image}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-1xl font-bold mt-2">{country.country}</h3>
              <p className="text-gray-600"> {country.quantity} Properties</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorldOverview;
