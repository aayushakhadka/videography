import React, { useEffect, useState } from "react";
import Layout from "../common/layout/Layout";
import peoplesays from "../data/Peoplesays";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Slider from "react-slick";

export const Peoplesays = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="peoplesays">
      {/* headings */}
      <div className="bg-zinc-800 pt-[4rem] min-h-[100vh] flex flex-col items-center  pb-[3rem]">
        <Layout style={{ height: "fit-content" }}>
          <h1 className="text-white font-medium text-5xl font-display tracking-tighter mobileS:pt-[3rem] tablet:pt-[0]">
            People Says
          </h1>
          <div className="border-2 border-red-700 w-[8%]"></div>
          <p className="text-white laptop:font-thin max-w-[36rem] pt-[2rem] mobileS:pb-[2rem] tablet:pb-[0] font-display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
            odio ante, id dapibus elit condimentum vitae. Maecenas eget orci
            vitae enim accumsan mollis.
          </p>

          {/* peoplesays content */}
          <Slider {...settings}>
            {peoplesays?.map((p, index) => {
              return (
                <div key={index}>
                  {/* <div className=" grid mobileL:pl-[2rem] laptop:pl-[0] mobileS:items-center mobileS:justify-center laptop1:grid-cols-3  mobileS:grid-cols-1 tablet:grid-cols-2 tablet:gap-[1.5rem] laptop1:gap-4 pb-[4rem]"> */}
                  <div className="p-5 mr-5 laptop1:mr-2 mobileL:ml-12 tablet:ml-2 flex flex-col items-center justify-center mt-[3rem] max-w-[30rem] min-h-[20rem] mobileS:ml-3  rounded-xl group relative transition duration-100 border-[3px] border-white bg-white ">
                    <img
                      className="h-[5rem] w-[5rem] absolute z-[1000] top-[-2.5rem]"
                      src={p?.profile}
                    />

                    <p className="text-black mt-5 tracking-tight font-display ">
                      {p?.description}
                      <p className="text-black pt-[1rem] font-semibold font-display">
                        - {p?.name}
                      </p>
                      <p className="gap-1 flex items-center font-display">
                        <MdOutlineLocationOn /> {p?.location}
                      </p>
                    </p>

                    <div className="flex justify-between items-center"></div>
                  </div>
                </div>
                // </div>
              );
            })}
          </Slider>
        </Layout>
      </div>
    </div>
  );
};
