"use client";
import { useEffect, useRef } from "react";
import "../styles/threeDEffect.css";
import { Box } from "@chakra-ui/react";
// import { CldVideoPlayer } from "next-cloudinary";
import { FaAnglesDown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
const ThreeDEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videos = [
    "https://res.cloudinary.com/deau0cmc9/video/upload/gl9yy7vmzyqf4kbm17ah",
    "https://res.cloudinary.com/deau0cmc9/video/upload/llhrunjxakemfvf9fwnz",
    "https://res.cloudinary.com/deau0cmc9/video/upload/sv0lmhmqlq1xlqcecy0g",
  ];
  useEffect(() => {
    let width = window.innerWidth;
    const spansSlow = containerRef.current?.querySelectorAll(".spanSlow");
    const spansFast = containerRef.current?.querySelectorAll(".spanFast");

    const handleMouseMove = (e: MouseEvent) => {
      const normalizedPosition = e.pageX / (width / 2) - 1;
      const speedSlow = 200 * normalizedPosition;
      const speedFast = 300 * normalizedPosition;

      spansSlow?.forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedSlow}px)`;
      });
      spansFast?.forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedFast}px)`;
      });
    };

    const handleWindowResize = () => {
      width = window.innerWidth;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleScrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Box
        className="wrap"
        ref={containerRef}
        bg="primaryBlue"
        overflow="hidden"
      >
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow span">Pamtech</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow span">Pamtech</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow span">Autoland</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow span">autoland</span>
            </div>
          </div>
        </div>

        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow span">showroom</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow span">showroom</span>
            </div>
          </div>
        </div>
        {/* NEXT SECTION BUTTON */}
        <Box onClick={handleScrollToVideo} style={{ cursor: "pointer" }}>
          <div className="container">
            <span className="circle">
              <FaAnglesDown className="fa" />
            </span>
            <span className="pulse"></span>
          </div>
        </Box>
      </Box>
      {/* Video Section */}
      <div className="carousel-container" ref={videoSectionRef}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {videos.map((videoUrl, index) => (
            <SwiperSlide key={index}>
              <div className="video-slide">
                <video autoPlay muted loop playsInline src={videoUrl} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ThreeDEffect;
