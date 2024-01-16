import React, { useState } from "react";
import Layout from "../common/layout/Layout";
import faqs from "../data/Faqs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div id="faqs">
      <div className=" bg-gray-100">
        <Layout style={{ height: "fit-content" }}>
          <h1 className="text-5xl font-display pt-[4rem]"
          >FAQS</h1>
          <div className="border-2 border-red-700 w-[5%] mb-12"></div>
          
          <div className="pb-[4rem]"
          >
            {faqs.map((faq, index) => (
              <>              <hr className="border border-gray-200"></hr>
              <div
                className="flex flex-col gap-6 font-display cursor-pointer shadow-md shadow-gray-400  "
                
               
              >
                <div
                  key={index}
                  className="mb-4 px-3 pt-4 "
                >
                  <div
                    className="flex justify-between items-center px-4 pt-2 "
                    onClick={() => handleClick(index)}
                  >
                    <h2 className="text-lg font-display font-semibold">
                      {faq?.question}
                    </h2>

                    {activeIndex === index ? (
                      <MdKeyboardArrowUp size={25} />
                    ) : (
                      <MdKeyboardArrowDown size={25} />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="p-2 px-4">{faq?.answer}</div>
                  )}
                </div>
              </div>
              </>

            ))}
              <hr className="border-[1px] border-gray-200 "></hr>

          </div>
        </Layout>
      </div>
    </div>
  );
};
