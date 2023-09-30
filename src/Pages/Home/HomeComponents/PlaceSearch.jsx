import { FaLocationArrow, FaBed } from "react-icons/fa";

const PlaceSearch = () => {
  return (
    <div className="lg:w-11/12  lg:mx-auto px-2 bg-slate-50 shadow-lg md:-translate-y-20 md:my-0 my-6 ">
      <div className="md:w-10/12 w-full md:mx-auto  pt-10 py-3 grid md:grid-cols-4 grid-cols-2 lg:text-[13px] text-xs gap-2  justify-between items-center">
        <div className="flex justify-center items-center gap-4 border-2 py-2 px-4 font-semibold text-slate-700">
          <FaLocationArrow />
          <select className="bg-transparent">
            <option value="destination">Destination</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="citroen">Citroen</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-4 border-2 py-2 my-2 md:px-4 font-semibold text-slate-700">
          <p> In</p>
          <input type="date" name="" id="" />
        </div>
        <div className="flex overflow-x-auto justify-center items-center gap-4 border-2 py-2 md:px-4 font-semibold text-slate-700">
          <p> Out</p>
          <input type="date" name="" id="" />
        </div>
        <div className="flex justify-center items-center gap-4 border-2 py-2 px-4 font-semibold text-slate-700">
          <FaBed />
          <select className="bg-transparent">
            <option value="hotel">Hotel</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="citroen">Citroen</option>
          </select>
        </div>
      </div>
      <div className="text-end w-11/12 pb-6">
        <button className="btn-style">search now</button>
      </div>
    </div>
  );
};

export default PlaceSearch;
