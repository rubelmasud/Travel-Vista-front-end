import "./Discount.css";

const PlaceCart = () => {
  return (
    <div className="bg-img mt-16">
      <div className="text-container lg:w-[50%] w-[90%] flex flex-col gap-2 text-xl">
        <p>SUMMER SPECIAL</p>
        <p className="text-5xl font-mono font-bold">
          <span className="text-orange-600">25% </span>
          <span>off</span>
        </p>
        <p>SPEND THE BEST VACATION WITH US</p>
        <h2 className="text-2xl font-semibold">The nights of Thailand</h2>
        <p>4days / 5nights</p>
      </div>
    </div>
  );
};

export default PlaceCart;
