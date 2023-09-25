import "./TravelVistaOverview.css";
import {
  BsFillGiftFill,
  BsAirplaneFill,
  BsFillShieldLockFill,
} from "react-icons/bs";

const ExclusivePackages = () => {
  return (
    <div className="bg-image my-20">
      <div className="text-div ">
        <div className="">
          <h2 className="text-4xl font-semibold flex flex-col ">
            <span> All time we provide</span>
            <span>best service</span>
          </h2>
          <p>
            Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis,
            sed viverra quam sollicitudin.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 px-12 my-12 gap-6">
          <div className="flex flex-col gap-4">
            <div className="icon text-5xl ">
              <BsFillGiftFill className=" mx-auto" />
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Exclusive package</h4>
              <p className="text-[15px]">
                Aliquam erat volutpat. Curabitur nibh quis arcu convallis,
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="icon text-5xl ">
              <BsAirplaneFill className=" mx-auto" />
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Exclusive package</h4>
              <p className="text-[15px]">
                Aliquam erat volutpat. Curabitur nibh quis arcu convallis,
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="icon text-5xl ">
              <BsFillShieldLockFill className=" mx-auto" />
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Exclusive package</h4>
              <p className="text-[15px]">
                Aliquam erat volutpat. Curabitur nibh quis arcu convallis,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusivePackages;
