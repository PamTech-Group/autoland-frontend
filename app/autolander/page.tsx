"use client";
import { useEffect, useRef } from "react";
import "../styles/threeDEffect.css";
import { Box } from "@chakra-ui/react";
const ThreeDEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <Box className="wrap" ref={containerRef} bg="primaryBlue">
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">Pamtech</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow">Pamtech</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">Autoland</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow">autoland</span>
            </div>
          </div>
        </div>

        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">showroom</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow">showroom</span>
            </div>
          </div>
        </div>
      </Box>

      <Box height="100vh" width="100vw"></Box>
    </>
  );
};

export default ThreeDEffect;
