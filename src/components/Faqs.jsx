import React, { useState } from "react";
import Layout from "../common/layout/Layout";
import faqs from "../data/Faqs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <div className="flex flex-col gap-6 font-display">
                <div key={index} className="border rounded mb-2 pt-4">
                  <div
                    className="flex justify-between items-center p-4 pt-4"
                    onClick={() => handleClick(index)}
                  >
                    <h2 className="text-lg font-medium">{faq?.question}</h2>

                    {activeIndex === index ? (
                      <MdKeyboardArrowDown size={25} />
                    ) : (
                      <MdKeyboardArrowUp size={25} />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="p-4">{faq?.question}</div>
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
