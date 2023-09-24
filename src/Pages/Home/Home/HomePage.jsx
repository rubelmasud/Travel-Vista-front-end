import Advantages from "../HomeComponents/Advantages";
import Banner from "../HomeComponents/Banner/Banner";
import Discount from "../HomeComponents/Discount/Discount";
import FindTour from "../HomeComponents/FindTour/FindTour";
import PlaceSearch from "../HomeComponents/PlaceSearch";
import Places from "../HomeComponents/Places/Places";
import Agents from "../HomeComponents/TravelAgentSection/Agents";

const HomePage = () => {
  return (
    <>
      <Banner />
      <PlaceSearch />
      <Advantages />
      <FindTour />
      <Places />
      <Discount />
      <Agents />
    </>
  );
};

export default HomePage;
