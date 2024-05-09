// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import bgimg1 from 'https://i.ibb.co/N93Chzf/photo-1576506542790-51244b486a6b.jpg'
// import bgimg2 from 'https://i.ibb.co/tphQvqW/photo-1616400619175-5beda3a17896.jpg'
// import bgimg3 from 'https://i.ibb.co/QNp8zT7/photo-1523240795612-9a054b0db644.jpg'
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container my-8 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co/tphQvqW/photo-1616400619175-5beda3a17896.jpg"
            text="Complete Algebra Assignment And Get Your Reward"
            para="Elevate your learning with our dynamic online platform! Access interactive courses, expert instructors, and flexible study tools anytime, anywhere. Join our community and unlock your academic potential today!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co/nQfQhkK/photo-1488998427799-e3362cec87c3.jpg"
            text="Assign New Milestone by completeing all Existing"
            para="Elevate your learning with our dynamic online platform! Access interactive courses, expert instructors, and flexible study tools anytime, anywhere. Join our community and unlock your academic potential today!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co/QNp8zT7/photo-1523240795612-9a054b0db644.jpg"
            text="Start Your Homework From Now"
            para="Elevate your learning with our dynamic online platform! Access interactive courses, expert instructors, and flexible study tools anytime, anywhere. Join our community and unlock your academic potential today!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
