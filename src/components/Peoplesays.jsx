import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/layout/Layout";
import peoplesays from "../data/Peoplesays";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Slider from "react-slick";
import ReactPlayer from "react-player";

export const Peoplesays = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //         autoplay: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  // const videoRef = useRef(null);
  // const [shouldPause, setShouldPause] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const videoElement = videoRef.current;
  //     if (videoElement) {
  //       const videoPosition = videoElement.triggerPosition;
  //       // Change this value according to your preference to determine when to pause
  //       const triggerPosition = window.innerHeight / 2;

  //       if (videoPosition < triggerPosition) {
  //         setShouldPause(true);
  //       } else {
  //         setShouldPause(false);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [isVisible, setIsVisible] = useState(false);
  const showDivRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (showDivRef.current) {
  //       const { top, bottom } = showDivRef.current.getBoundingClientRect();
  //       const isInViewport =
  //         top >= -window.innerHeight && top <= window.innerHeight;

  //       setIsVisible(isInViewport);

  //       setIsVisible((prev) => (prev = isInViewport));
  //       console.log(isVisible, bottom <= window.innerHeight, "isvisible");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // Initial check when component mounts
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(isVisible, "is in view port");

  return (
    <div id="peoplesays" ref={showDivRef}>
      {/* headings */}
      <div className="bg-zinc-800 pt-[4rem] flex flex-col items-center  pb-[3rem] min-h-screen">
        <Layout style={{ height: "fit-content" }}>
          <h1 className="text-white font-medium text-5xl font-display tracking-tighter mobileS:pt-[3rem] tablet:pt-[0]"
          >
            People Says
          </h1>
          <div className="border-2 border-red-700 w-[8%]"></div>
          <p className="text-white laptop:font-thin max-w-[36rem] pt-[2rem] mobileS:pb-[2rem] tablet:pb-[0] font-display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
            odio ante, id dapibus elit condimentum vitae. Maecenas eget orci
            vitae enim accumsan mollis.
          </p>

          {/* peoplesays content */}
          {/* <Slider {...settings}> */}
          {/* {isVisible && ( */}
          <div className="grid laptop1:grid-cols-3 mobileS:grid-cols-1 tablet:grid-cols-2 ">
            {peoplesays?.map((p, index) => {
              return (
                <div key={index} data-aos="zoom-in" data-aos-duration="1000">
                  {/* <div className=" grid mobileL:pl-[2rem] laptop:pl-[0] mobileS:items-center mobileS:justify-center laptop1:grid-cols-3  mobileS:grid-cols-1 tablet:grid-cols-2 tablet:gap-[1.5rem] laptop1:gap-4 pb-[4rem]"> */}
                  <div className="flex flex-col items-center justify-center mt-[5rem] ml-[1rem] relative border-[2px] border-gray-300 rounded-[1rem] shadow-lg shadow-black">
                    {/* <img
                      className="h-[5rem] w-[5rem] absolute z-[1000] top-[-2.5rem] border-[2px] border-gray-300 rounded-full"
                      src={p?.profile}
                    /> */}

                    {/* <p className="text-black mt-5 tracking-tight font-display ">
                      {p?.description}
                      <p className="text-black pt-[1rem] font-semibold font-display">
                        - {p?.name}
                      </p>
                      <p className="gap-1 flex items-center font-display">
                        <MdOutlineLocationOn /> {p?.location}
                      </p>
                    </p> */}
                    {/* <video autoPlay loop muted width={300} height={500} >
                <source src="https://youtu.be/CrWvAgp9Jlk?si=ln086gua9PBgp8iL" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
                    <iframe
                      width="100%"
                      height="315"
                      className="rounded-[1rem]"
                      src={p?.src}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div className="flex justify-between items-center"></div>
                </div>
                // </div>
              );
            })}
          </div>
          {/* )} */}

          {/* </Slider> */}
        </Layout>
      </div>
    </div>
  );
};
