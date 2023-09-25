const TravelVistaOverview = () => {
  return (
    <div className="mx-12 ">
      <div className="lg:w-[60%] mx-auto text-center">
        <p className="text-xl">We have 25+ years experience</p>
        <div className="text-3xl font-semibold">
          <span> We try to the</span>
          <span className="text-orange-600"> Serve Best Service</span>
        </div>
        <p className="my-3">
          Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed
          viverra quam sollicitudin. Proin sed augue sed neque ultricies
          condimentum. In ac ultrices lectus.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between  gap-4 mt-10">
        <div className="flex flex-col gap-3 border border-black p-4 hover:bg-orange-600 hover:text-white duration-700">
          <h2 className="text-3xl font-semibold  ">Who we are?</h2>
          <p>
            Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis,
            sed viverra quam sollicitudin. Proin sed augue sed neque ultricies
            condimentum. In ac ultrices Nullam ex elit, vestibulum ut urna non,
            tincidunt condimentum sem. Sed enim tortor, accumsan.
          </p>
        </div>
        <div className="flex flex-col gap-3 border border-black p-4 hover:bg-orange-600 hover:text-white duration-700">
          <h2 className="text-3xl font-semibold">Our Vission</h2>
          <p>
            Proin sed augue sed neque andsa ultricies condimentum. In ac ana
            ultrices lectus. Proin sed augue sed neque ultricies condimentum. In
            ac ultrices Proin sed augue sed neque andsa ultricies.
          </p>
        </div>
        <div className="flex flex-col gap-3 border border-black p-4 hover:bg-orange-600 hover:text-white duration-700">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p>
            Proin sed augue sed neque andsa ultricies condimentum. In ac ana
            ultrices lectus. Proin sed augue sed neque ultricies condimentum. In
            ac ultrices Proin sed augue sed neque andsa ultricies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelVistaOverview;
