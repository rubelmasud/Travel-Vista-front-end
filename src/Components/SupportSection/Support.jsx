import { FcOnlineSupport } from "react-icons/fc";
import { RiHotelFill } from "react-icons/ri";

const FeatureCard = ({ icon, title, description }) => (
  <div className="cart-1 py-12 px-3 border shadow-lg hover:translate-y-2 duration-1000">
    {icon}
    <h3 className="text-xl font-semibold my-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Support = () => {
  return (
    <div className="lg:px-12 md:px-6 px-4 grid md:grid-cols-2 justify-center items-center gap-6 my-12">
      <div className="">
        <div className="text-3xl font-semibold">
          <h2>Every Time We Provide</h2>
          <h2 className="text-orange-600">Best Service</h2>
        </div>
        <div className="text-gray-600 text-lg my-4 flex flex-col gap-6">
          <p>
            Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis,
            sed viverra quam sollicitudin. Proin sed augue sed neque ultricies
            condimentum. In ac ultrices lectus. Nullam ex elit, vestibulum ut
            urna non, tincidunt condimentum sem. Sed enim tortor, accumsan.
          </p>
          <p>
            Nullam ex elit, vestibulum ut urna non, tincidunt condimentum sem.
            Sed enim tortor, accumsan. Nullam ex elit, vestibulum ut urna non,
            tincidunt condimentum.
          </p>
          <p>
            Nullam ex elit, vestibulum ut urna non, tincidunt condimentum sem.
            Sed enim tortor, accumsan. Nullam ex elit, vestibulum ut urna non,
            tincidunt condimentum.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard
          icon={<FcOnlineSupport size={99} />}
          title="Advice & Support"
          description="Proin sed auguet sed neque andk ultricies aasr dffgfd condimentum."
        />
        <FeatureCard
          icon={<FcOnlineSupport size={99} />}
          title="Advice & Support"
          description="Proin sed auguet sed neque andk ultricies aasr dffgfd condimentum."
        />
        <FeatureCard
          icon={<RiHotelFill size={99} className="text-orange-600" />}
          title="Hotel Accomodations"
          description="Proin sed auguet sed neque andk ultricies aasr dffgfd condimentum."
        />
        <FeatureCard
          icon={<RiHotelFill size={99} className="text-orange-600" />}
          title="Hotel Accomodations"
          description="Proin sed auguet sed neque andk ultricies aasr dffgfd condimentum."
        />
      </div>
    </div>
  );
};

export default Support;
