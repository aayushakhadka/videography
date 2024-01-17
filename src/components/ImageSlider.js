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
import image1 from '../images/flim3.jpg'

function ImageSlider({ data, setCurrentIndex }) {
  
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'http://localhost:3000/static/media/flim1.c662ca7d5f4e8cfc890f.jpg',
    'http://localhost:3000/static/media/films-2.a6e1eae06e1dd242bfd8.jpg',
    'http://localhost:3000/static/media/flim3.eb604e46070d7e34285b.jpg',
    'http://localhost:3000/static/media/flims4.840c19cca610cc7ae278.jpg',
    'http://localhost:3000/static/media/films-5.4c5af65c190ede741a4b.jpg',
    'http://localhost:3000/static/media/films-6.3b74e3a75b687ceef622.jpg',

    
    // Add more image URLs as needed
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

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
  const multiSettings = {
    // Multi-browse carousel settings
    // ...

    // Add any additional settings for the multi-browse carousel
  };

  const heroSettings = {
    // Hero carousel settings
    // ...

    // Add any additional settings for the hero carousel
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
              <div className="grid tablet:grid-cols-3 mobileL:grid-cols-2 gap-4 ml-[1rem] mr-[1rem] relative  "
              >
                {p?.images?.map((i, index) => {
                  return (
                      <div className=" group relative overflow-hidden shadow-xl shadow-black rounded-[1rem] border-[3px] border-slate-500 hover:border-white hover:bg-cover "
                     data-aos='flip-right'
                     data-aos-duration='1500'
                    >
                      <img 
                        key={index}
                        className="max-h-[24rem] w-full aspect-square object-cover scale-100 group-hover:scale-150 duration-500 group-hover:"
                       
                        src={i?.img}
                   alt={`Image ${index}`}
            onClick={() => handleImageClick(index)}
                        
                      />
                      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40"></div>
                 
      
                      <div className=" absolute z-[1000]  top-[50%] left-[50%] translate-x-[-50%] ">
                        <h1 className="text-white text-xl font-display hidden group-hover:block text-center ">{i?.title}</h1>
                        <p className="text-md font-light text-center font-display text-white hidden group-hover:block">{i?.description}</p>
                      </div>
                      </div>

                  );
                })}
              </div>
            </div>
          );
        })}

      </Slider>
    </div>
  );
}

export default ImageSlider;
