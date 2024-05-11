import { ScrollRestoration } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Faq from "../Components/Faq";
import Features from "../Components/Features";

const Home = () => {
    return (
        <div>
            <ScrollRestoration/>
            <Carousel/>
            <Features/>
            <Faq />
        </div>
    );
};

export default Home;