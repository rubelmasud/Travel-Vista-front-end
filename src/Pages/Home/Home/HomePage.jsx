import Advantages from "../HomeComponents/Advantages";
import Banner from "../HomeComponents/Banner/Banner";
import Curved from "../HomeComponents/Curved/Curved";
import Discount from "../HomeComponents/Discount/Discount";
import EasyPlanner from "../HomeComponents/EasyTripPlanner/EasyPlanner";
import FindTour from "../HomeComponents/FindTour/FindTour";
import PlaceSearch from "../HomeComponents/PlaceSearch";
import Places from "../HomeComponents/Places/Places";
import WorldOverview from "../HomeComponents/WorldOverview/WorldOverview";
import Counted from "../../../Components/Counted";
import Testimonial from "../HomeComponents/Testimonial/Testimonial";
import GallerySlider from "../../../Components/PlaceGallery";

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
      {/* <Tending /> */}
      <GallerySlider />
      <Testimonial />
      <Curved />
    </>
  );
};

export default HomePage;
