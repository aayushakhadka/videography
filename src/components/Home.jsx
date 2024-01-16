import React from "react";
import Layout from "../common/layout/Layout";
import { Navigation } from "../common/Navigation";
import { Nav } from "../common/Nav";
import images from "../images/films-2.jpg";
import videographer from "../videos/videographer.mp4";

export const Home = () => {
  return (
    <div id="home">
      <div class="  mobileS:bg-camera laptop1:bg-none bg-cover bg-top h-[100vh] w-[full] overflow-hidden ">
        <div className="bg-black h-[100vh] laptop1:bg-opacity-100 laptop1:h-[10rem] mobileS:bg-opacity-70 ">
          <div className="w-full">
            <video
              autoPlay
              loop
              muted
              className="w-full mobileS:hidden laptop1:flex"
            >
              <source
                className="w-full min-h-[100vh]"
                src={videographer}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* <h2 className="absolute left-[20rem] top-[50%] z-20">This is vidwo </h2> */}
            <Layout
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* TODO: homepage navbar */}

              <div className="absolute z-10 top-[1%] mobileS:flex mobileS:flex-col right-[10%] left-[10%]">
                <div className=" flex items-center mobileS:pt-[5rem] laptop1:pt-[2rem] laptop:pt-[1rem] flex-[1] pb-[2rem] ">
                  <img
                    className="pl-[0rem] h-[10rem]"
                    src="https://placeholderlogo.com/img/placeholder-logo-3.png"
                  />
                  <div className="flex-[2]">
                    <Nav />
                  </div>
                </div>

                {/* TODO: homepage content */}

                <div className=" flex-[100] flex flex-col ">
                  <h1
                    className="text-white mobileS:text-xl tablet:text-sm tablet:tracking-[1rem] laptop:tracking-[1.5rem] mobileS:tracking-[1rem] font-semibold"
                    // data-aos="fade-right"
                    // data-aos-duration="1500"
                  >
                    VIDEOGRAPHER
                  </h1>
                  <p className="text-white text-5xl mobileM:pt-[3rem] mobileS:pt-[2rem] font-custom mobileM:leading-[4rem] mobileS:leadding-[3rem] max-w-[30rem] pb-[2rem]">
                    A good ending is the most important
                  </p>
                  <div className="flex gap-10 mobileS:flex-col mobileM:flex-row mobileM:pt-[3rem] mobileS:pt-5">
                    <a href={"#projects"}>
                      <button className="bg-white text-black border-[2px]  rounded-md h-[3rem] w-[10rem] font-display hover:bg-transparent hover:text-white hover:border-gray-300"
                      >
                        VIEW PROJECTS
                      </button>
                    </a>
                    <a
                     
                      href={"#hireme"}
                    >
                      <button className="text-white border-[2px] border-gray-300 h-[3rem] w-[10rem] font-display hover:bg-white hover:text-black rounded-md hover:border-[2px]"
                       >
                        HIRE ME
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/*  */}
            </Layout>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};
