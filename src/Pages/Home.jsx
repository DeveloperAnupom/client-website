import HomeAbout from "../Components/HomeAbout";
import { HomeCard } from "../Components/HomeCard";
import HomeServices from "../Components/HomeServices";
import JoinUs from "../Components/JoinUs";
import Navbar from "../Components/Navbar";
import { Thumnail } from "../Components/Thumnail";

const Home = () => {
  return (
    <div>
      <Thumnail></Thumnail>
      <HomeCard></HomeCard>
      <HomeServices></HomeServices>
      <HomeAbout></HomeAbout>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
