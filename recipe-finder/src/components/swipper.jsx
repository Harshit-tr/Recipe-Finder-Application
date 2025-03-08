import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
      <style>
        {`
          /* Pagination Dots */
          .swiper-pagination-bullet {
            background-color: #ff5722 !important; /* Change dots color */
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background-color: #ff5722 !important; /* Active dot color */
            opacity: 1;
          }

          /* Navigation Arrows */
          .swiper-button-next, .swiper-button-prev {
            color: #ff5722 !important; /* Arrow Color */
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Gap between images
        slidesPerView={1} // Default (mobile)
        breakpoints={{
          640: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 4 }, // Desktop
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide
        navigation // Arrows for next/prev
        pagination={{ clickable: true }} // Dots below
        loop={true} // Infinite loop
      >
        {/* Image Slides */}
        <SwiperSlide>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
            alt="Pizza"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/558/535/non_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg"
            alt="Burger"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/pasta-penne-with-eggplant-pasta-alla-norma-traditional-italian-food_2829-20663.jpg"
            alt="Pasta"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://t4.ftcdn.net/jpg/01/60/77/63/360_F_160776300_2VfVdDN1wC8JuawVMiMOte0vSOF8xVxp.jpg"
            alt="Sushi"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1447192294/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=Tf4U033Xsl5D8Yr2H9T8nhB5uLwgUIGLmY3TzYpDJWY="
            alt="Cake"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1145169012/photo/many-idli-or-idly-and-coconut-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=eaGheWxdd81VAxCdpaBaM9BV4-3601dJ-8gr9yP1B4A="
            alt="Fries"
            style={styles.image}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// Styles for images
const styles = {
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
};

export default ImageSlider;
