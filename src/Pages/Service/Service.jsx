import Support from "../../Components/SupportSection/Support";
import Watch from "../../Components/TourViedo/Watch";

export const Service = () => {
  return (
    <div className="">
      <div className="flex about-banner flex-col items-center h-[350px] bg-[#2f24c1] mb-20">
        <div className="lg:px-12 md:px-6 px-4 text-white text-center lg:w-[60%] my-auto">
          <h1 className="text-4xl font-semibold mt-3">Services</h1>
          <h3 className="text-3xl font-semibold mt-3">
            Discover Amazing Places of the World
          </h3>
        </div>
      </div>
      <Support />
      <Watch />
    </div>
  );
};
