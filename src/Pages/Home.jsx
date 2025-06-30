import { Helmet } from "react-helmet";
import HomeAbout from "../Components/HomeAbout";
import HomeServices from "../Components/HomeServices";
import JoinUs from "../Components/JoinUs";
import { Thumnail } from "../Components/Thumnail";
import Thumnail2 from "../Components/Thumnail2";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>BRAC</title>
        </Helmet>
      </div>
      <Thumnail></Thumnail>
      <HomeServices></HomeServices>
      <HomeAbout></HomeAbout>
      <Thumnail2></Thumnail2>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
