import React from "react";
import Layout from "./layout/Layout";

export const Nav = () => {
  return (
    <div className="tablet:flex gap-10 font-display tracking-tight items-end justify-end mobiles: hidden ">
      <a href={"#home"}>
        <h1 className="text-white text-xl hover:opacity-80">Home </h1>
      </a>
      <a href={"#projects"}>
        <h1 className="text-white text-xl hover:opacity-80">Projects </h1>
      </a>
      <a href={"#peoplesays"}>
        <h1 className="text-white text-xl hover:opacity-80">People Says </h1>
      </a>
      <a href={"#faqs"}>
        <h1 className="text-white text-xl hover:opacity-80">Faqs </h1>
      </a>
    </div>
  );
};
