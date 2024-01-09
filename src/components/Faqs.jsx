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
          <h1 className="text-5xl font-display pt-[4rem]">FAQS</h1>
          <div className="border-2 border-red-700 w-[5%] mb-12"></div>
          <div className="pb-[4rem]">
            {faqs.map((faq, index) => (
              <div
                className="flex flex-col gap-6 font-display cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div
                  key={index}
                  className="border border-gray-300 rounded-md mb-4 p-5 pt-4 shadow-md  "
                >
                  <div
                    className="flex justify-between items-center px-4 pt-2 rounded-[1rem]"
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
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
};
