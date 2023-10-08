import Advantages from "../HomeComponents/Advantages";
import Banner from "../HomeComponents/Banner/Banner";
// import ContactForm from "../HomeComponents/Contact/ContactForm";
import Curved from "../HomeComponents/Curved/Curved";
import Discount from "../HomeComponents/Discount/Discount";
import EasyPlanner from "../HomeComponents/EasyTripPlanner/EasyPlanner";
import FindTour from "../HomeComponents/FindTour/FindTour";
import PlaceSearch from "../HomeComponents/PlaceSearch";
import Places from "../HomeComponents/Places/Places";
import Tending from "../HomeComponents/TrandingPlace/Tending";
import WorldOverview from "../HomeComponents/WorldOverview/WorldOverview";
import Counted from "../../../Components/Counted";
import Testimonial from "../HomeComponents/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <PlaceSearch />
      <Advantages />
      <Counted />
      <FindTour />
      <WorldOverview />
      <EasyPlanner />
      <Discount />
      <Places />
      <Tending />
      {/* <ContactForm /> */}
      <Testimonial />
      <Curved />
    </>
  );
};

export default HomePage;
