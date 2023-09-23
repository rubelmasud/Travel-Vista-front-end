import { useEffect, useState } from "react";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("/public/plece.json")
      .then((res) => res.json())
      .then((places) => {
        console.log(places);
        setPlaces(places);
      });
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default Places;
