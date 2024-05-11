import { ScrollRestoration } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Faq from "../Components/Faq";
import Features from "../Components/Features";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";

const Home = () => {
  const { loading } = useAuth();
  if (loading) return <Loader />;
  return (
    <div>
      <ScrollRestoration />
      <Carousel />
      <Features />
      <Faq />
    </div>
  );
};

export default Home;
