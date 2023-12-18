import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import Layout from "../common/layout/Layout";
import { Link } from "react-router-dom";
import project from "../data/Project";
import { useRef, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

function ImageSlider({ data, setCurrentIndex }) {
  const [showPopup, setShowPopup] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
  };

  const slickRef = useRef(null);

  return (
    <div>
      <div className="flex justify-end gap-3 mr-5 mb-5  ">
        <p
          className="text-white cursor-pointer"
          onClick={() => slickRef.current.slickPrev()}
        >
          <MdArrowBack className="h-[3rem] w-[3rem] rounded-full border-2" />
        </p>
        <p
          className="text-white cursor-pointer"
          onClick={() => slickRef.current.slickNext()}
        >
          <span>
            <MdArrowForward className="h-[3rem] w-[3rem] rounded-full border-2" />
          </span>
        </p>
      </div>
      <Slider {...settings} ref={slickRef}>
        {data.map((p, index) => {
          return (
            <div key={index} className="border-gray-300 pb-[4rem]">
              <div className="grid tablet:grid-cols-3 mobileL:grid-cols-2  mobileS:grid-cols-1 gap-4 ml-[1rem] mr-[1rem] relative ">
                {p?.images?.map((i, index) => {
                  return (
                      <div className=" group relative overflow-hidden  ">
                      <img 
                        key={index}
                        className="max-h-[23rem] w-full aspect-square object-cover group-hover:scale-125 duration-200 group-hover:opacity-70 group-hover  "
                        src={i?.img}
                        alt=""
                        onClick={() => setShowPopup(true)}
                        
                      />
                      <div className=" absolute z-[1000]  top-[50%] left-[50%] translate-x-[-50%] ">
                        <h1 className="text-white text-2xl font-display hidden group-hover:block ">{i?.title}</h1>
                        <p className="text-md font-light text-center font-display text-white hidden group-hover:block">{i?.description}</p>
                      </div>
                      </div>

                  );
                })}
              </div>
            </div>
          );
        })}

        {/* <div className="rounded-xl border-gray-300">
          <div className="grid grid-cols-3 gap-3">
            <img
              className="h-[25rem] w-[100%] aspect-square rounded-xl object-cover"
              src={images}
              alt=""
            />
            <img
              className="h-[25rem] w-[100%] rounded-xl"
              src={images}
              alt=""
            />
            <img
              className="h-[25rem] w-[100%] rounded-xl"
              src={images}
              alt=""
            />
            <img
              className="h-[25rem] w-[100%] rounded-xl"
              src={images}
              alt=""
            />
          </div>
        </div> */}

        {/* <div className="rounded-xl border-gray-300">
          <div className="grid grid-cols-3 gap-3">
            <img
              className="h-[25rem] w-[100%] aspect-square rounded-xl object-cover"
              src={images}
              alt=""
            />
            <img
              className="h-[25rem] w-[100%] rounded-xl"
              src={images}
              alt=""
            />
            <img
              className="h-[25rem] w-[100%] rounded-xl"
              src={images}
              alt=""
            />
            <img
              className="h-[25rem] w-[100%] rounded-xl"
              src={images}
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="rounded-xl">
        <img className='h-[30rem] w-[100%] rounded-xl' src={image} alt="" />
      </div>
      <div className="rounded-xl">
        <img className='h-[30rem] w-[100%] rounded-xl' src={sliderimages} alt="" />
      </div>
      <div className="rounded-xl">
        <img className='h-[30rem] w-[100%] rounded-xl' src={bandimage} alt="" />
      </div> */}
      </Slider>
    </div>
  );
}

export default ImageSlider;
