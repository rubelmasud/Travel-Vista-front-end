import { useEffect, useState } from "react";
import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const EasyPlanner = () => {
  const [activeTab, setActiveTab] = useState("Beach");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/plece.json")
      .then((res) => res.json())
      .then((places) => {
        setAllData(places);
      });
  }, []);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const filteredData = allData.filter((item) => item.category === activeTab);
    setFilteredData(filteredData);
  }, [allData, activeTab]);

  console.log(filteredData);

  return (
    <div className="lg:px-12 md:px-6 px-4">
      <div className=" my-6">
        <h1 className="text-xl  font-semibold">Quick and easy trip planner</h1>
        <p className="">
          Pick a vibe and explore the top destinations in world
        </p>
      </div>
      <div
        className="container mx-auto mt-8"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="flex space-x-4">
          <button
            className={`py-2 px-4 flex items-center gap-2 rounded-full ${
              activeTab === "Beach"
                ? "border border-blue-500 bg-sky-50"
                : "hover:bg-gray-200 "
            }`}
            onClick={() => handleTabSelect("Beach")}
          >
            <FaUmbrellaBeach />
            Beach
          </button>
          <button
            className={`py-2 px-4 flex items-center gap-2  rounded-full ${
              activeTab === "Romance"
                ? "border border-blue-500 bg-sky-50"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleTabSelect("Romance")}
          >
            <GiSelfLove />
            Romance
          </button>
          <button
            className={`py-2 px-4 flex items-center gap-2  rounded-full ${
              activeTab === "City"
                ? "border   border-blue-500 bg-sky-50"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleTabSelect("City")}
          >
            <FaCity />
            City
          </button>
        </div>
      </div>

      <div
        className="mt-8 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {filteredData.length === 0 ? (
          <p>No matching destinations found for {activeTab}.</p>
        ) : (
          filteredData.map((plece, index) => (
            <div key={index} className="">
              <div className="">
                <div className="overflow-hidden">
                  <img
                    className="w-40 h-28 rounded-md transform hover:scale-110 duration-500"
                    src={plece.image}
                    alt=""
                  />
                </div>
                <div className="">
                  <h3 className="text-sm font-bold mt-2">
                    {plece.destination}
                  </h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EasyPlanner;
