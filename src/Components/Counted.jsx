import CountUp from "react-countup";

const CountItem = ({ end, label }) => (
  <div className="text-center">
    <h1 className="md:text-5xl text-3xl font-semibold font-sans my-3">
      <CountUp start={0} end={end} duration={9} className="text-orange-600" />+
    </h1>
    <p className="text-1xl font-semibold">{label}</p>
  </div>
);

const Counted = () => {
  return (
    <div className="lg:mx-12 md:mx-6 py-8 mx-4 my-12 shadow-xl grid lg:grid-cols-4 grid-cols-2 justify-between items-center">
      <CountItem end={900} label="SATISFIED CUSTOMER" />
      <CountItem end={500} label="ACTIVE MEMBERS" />
      <CountItem end={220} label="TOUR DESTINATION" />
      <CountItem end={50} label="TRAVEL GUIDES" />
    </div>
  );
};

export default Counted;
