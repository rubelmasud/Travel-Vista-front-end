import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PlaceCart = ({ place }) => {
  const { image, destination, days, price, rating } = place || {};

  return (
    <div className="shadow-md hover:shadow-lg hover:text-orange-600 duration-1000">
      <div className="overflow-hidden">
        <img
          className="w-full h-48 transform hover:scale-110 duration-700"
          src={image}
          alt=""
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-1xl font-semibold">{destination}</h3>
          <div className="flex gap-1 text-1xl text-orange-600 font-semibold">
            <p>{days}day </p>
            <p> {price}</p>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <button className="bg-gray-200 px-4 ">Book Now</button>
          <div className="">
            <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCart;
