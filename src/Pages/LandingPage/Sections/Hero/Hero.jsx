
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from './Components/Banner';


const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <Banner/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
