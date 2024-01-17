import React, { useState } from "react";
import Layout from "../common/layout/Layout";
import faqs from "../data/Faqs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Accordian } from "./Accordian";

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div id="faqs">
      <div className=" bg-gray-100 ">
        <Layout style={{ height: "fit-content" }}>
          <h1 className="text-5xl font-display pt-[4rem]"
          >FAQS</h1>
          <div className="border-2 border-red-700 w-[5%] mb-12"></div>
          
          <div className="pb-[4rem]"
          >
            {faqs.map((faq, index) => (
             <div className=" shadow-gray-400 shadow-md mb-4 bg-gray-100 border-[1px] border-gray-300 rounded-[0.5rem]">
              {/* <hr className="border-[1px] bg-gray-300"></hr> */}
             <Accordian
             key={index}
             question={faq?.question}
             answer={faq?.answer}
             isOpen={activeIndex === index}
             onClick={() => handleItemClick(index)}
            />
              {/* <hr className="border-[1px] bg-gray-700"></hr> */}

          </div>

            ))}

          </div>


        </Layout>
      </div>
    </div>
  );
};
