import CountUp from "react-countup";

const Counted = () => {
  return (
    <div className="lg:mx-12 md:mx-6 py-8 mx-4 my-12 shadow-xl grid lg:grid-cols-4 grid-cols-2 justify-between items-center">
      <div className="text-center">
        <h1 className="text-5xl font-semibold font-sans  my-3">
          <CountUp
            start={0}
            end={900}
            duration={9}
            className="text-orange-600"
          />
          +
        </h1>
        <p className="text-1xl font-semibold ">SATISFIED CUSTOMER</p>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold font-sans  my-3">
          <CountUp
            start={0}
            end={500}
            duration={9}
            className="text-orange-600"
          />
          +
        </h1>
        <p className="text-1xl font-semibold ">ACTIVE MEMBERS</p>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold font-sans  my-3">
          <CountUp
            start={0}
            end={220}
            duration={9}
            className="text-orange-600"
          />
          +
        </h1>
        <p className="text-1xl font-semibold ">TOUR DESTINATION</p>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold font-sans my-3">
          <CountUp
            start={0}
            end={50}
            duration={9}
            className="text-orange-600"
          />
          +
        </h1>
        <p className="text-1xl font-semibold ">TRAVEL GUIDES</p>
      </div>
    </div>
  );
};

export default Counted;
