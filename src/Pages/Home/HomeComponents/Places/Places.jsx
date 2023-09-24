import { useEffect, useState } from "react";
import "./Places.css";
import PlaceCart from "../../../../Components/PlaceCart";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("/plece.json")
      .then((res) => res.json())
      .then((places) => {
        console.log(places);
        setPlaces(places);
      });
  }, []);

  const visiblePlaces = showMore ? places : places.slice(0, 3);

  return (
    <div className="mx-12 ">
      <div className="md:w-7/12 mx-auto text-center ">
        <p className="lg:text-xl">Travel Express Provide</p>
        <h1 className="lg:text-4xl text-3xl font-bold">
          <span className="text-black">Select your</span>
          <span className="text-[#FF4F10EB]"> Destination</span>
        </h1>
        <p className=" text-slate-600 my-4">
          Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed
          viverra quam sollicitudin. Proin sed augue sed neque ultricies
          condimentum.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-6 py-12">
        {visiblePlaces.map((place) => (
          <PlaceCart key={place.id} place={place}></PlaceCart>
        ))}
      </div>
      {!showMore && (
        <div className="text-center justify-end">
          <button className="btn-style" onClick={() => setShowMore(true)}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Places;
