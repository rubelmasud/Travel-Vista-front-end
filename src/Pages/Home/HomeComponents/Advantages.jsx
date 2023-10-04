import { BsAirplaneFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { BiSearchAlt, BiCalendar } from "react-icons/bi";

function Advantages() {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="lg:px-12 md:px-6 px-4 text-center mt-12">
        <p className="lg:text-xl">Why People Choose Us</p>
        <h1 className="lg:text-4xl text-3xl font-bold">
          <span className="text-black">Our</span>
          <span className="text-[#FF4F10EB]"> Advantages</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  justify-between items-center gap-6 px-10 mt-16">
        <div className="">
          <div className=" ">
            <BsAirplaneFill
              size={60}
              className="w-full mx-auto hover:-translate-y-6 duration-500 hover:text-[#FF4F10EB]"
            />
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold my-2">
              The Most Reliable Airlines
            </h4>
            <p className="text-slate-700">
              Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
              sed.
            </p>
          </div>
        </div>

        <div className="">
          <div className=" ">
            <HiUserGroup
              size={60}
              className="w-full mx-auto hover:-translate-y-6 duration-500 hover:text-[#FF4F10EB]"
            />
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold my-2">
              More Than 2M Visitors Each Month
            </h4>
            <p className="text-slate-700">
              Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
              sed.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <BiSearchAlt
              size={60}
              className="w-full mx-auto hover:-translate-y-6 duration-500 hover:text-[#FF4F10EB]"
            />
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold my-2">
              Easy and Friendly Search Options
            </h4>
            <p className="text-slate-700">
              Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
              sed.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <BiCalendar
              size={60}
              className="w-full mx-auto hover:-translate-y-6 duration-500 hover:text-[#FF4F10EB]"
            />
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold my-2">
              Fast and Reliable Ticket Booking
            </h4>
            <p className="text-slate-700">
              Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
              sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
