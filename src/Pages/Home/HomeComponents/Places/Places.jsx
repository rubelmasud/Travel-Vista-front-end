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

  const visiblePlaces = showMore ? places : places.slice(0, 4);

  return (
    <div className="m-12 ">
      <div className=" ">
        <h1 className="lg:text-2xl text-3xl font-bold">
          Select your Destination
        </h1>
        <p className="lg:text-xl">Travel Express Provide</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 justify-between gap-6 py-6">
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
