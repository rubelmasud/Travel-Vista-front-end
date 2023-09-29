import Advantages from "../HomeComponents/Advantages";
import Banner from "../HomeComponents/Banner/Banner";
// import Contact from "../HomeComponents/Contact/Contact";
import Discount from "../HomeComponents/Discount/Discount";
import EasyPlanner from "../HomeComponents/EasyTripPlanner/EasyPlanner";
import FindTour from "../HomeComponents/FindTour/FindTour";
import PlaceSearch from "../HomeComponents/PlaceSearch";
import Places from "../HomeComponents/Places/Places";
import Tending from "../HomeComponents/TrandingPlace/Tending";
import WorldOverview from "../HomeComponents/WorldOverview/WorldOverview";

const HomePage = () => {
  return (
    <>
      <Banner />
      <PlaceSearch />
      <Advantages />
      <FindTour />
      <Tending />
      <WorldOverview />
      <Discount />
      <Places />
      <EasyPlanner />
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
