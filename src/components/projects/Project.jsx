import React, { useState } from "react";
import Layout from "../../common/layout/Layout";
import Slider from "react-slick";
import ImageSlider from "../ImageSlider";
import { Link } from "react-router-dom";
import project from "../../data/Project";

export const Project = (props) => {
  // const Projects = props.title.map((link, index) => <Link><img width="250px" key={index} src={link.src} /></Link>)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const projectSlider = project;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="projects">
      <div>
        <div className=" bg-zinc-900 w-full overflow-hidden max-h-100vh">
          <Layout style={{ height: "fit-content" }}>
            <div className="grid columns-3">
              <div className="flex flex-col ">
                <h1 className="text-white text-5xl font-display tracking-tighter pt-[4rem] " 
                >
                  {projectSlider[currentIndex].title}
                </h1>
                <div className="border-2 border-red-700 w-[7%]"></div>

                <p className="text-white max-w-[37rem] font-thin pt-[1.5rem] laptop:text-md font-display ">
                  {projectSlider[currentIndex].description}
                </p>
              </div>
            </div>
          </Layout>
        </div>
      </div>
      <div className=" bg-zinc-900 ">
        <ImageSlider data={projectSlider} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};
