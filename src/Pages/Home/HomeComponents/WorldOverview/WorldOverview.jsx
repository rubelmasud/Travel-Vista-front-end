import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const WorldOverview = () => {
  const [countrys, setCountrys] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  useEffect(() => {
    fetch("/public/WorldOverview.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountrys(data);
      });
  }, []);

  return (
    <div className="mx-12">
      {" "}
      <div className=" mb-6">
        <h1 className="lg:text-2xl text-3xl font-bold">Explore World</h1>
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
                src="https://img.freepik.com/free-photo/vertical-shot-niteroi-contemporary-art-museum-brazil_181624-27249.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais"
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
