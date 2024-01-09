import React, { useEffect, useState } from "react";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Hireme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    if (!formData.name || formData.confirmname) {
      newErrors.name = "required your name*";
      valid = false;
    }
    if (
      !formData.email ||
      !formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Password validation
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    // Confirm Password validation
    // if (formData.password !== formData.confirmPassword) {
    //   newErrors.confirmPassword = "required*";
    //   valid = false;
    // }
    if (!formData.message || formData.confirmmessage) {
      newErrors.message = "required your message*";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      const scrollThreshold = 400;

      if (scrollTop > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="hireme" >
      <div className="bg-image bg-cover bg-opacity-30">
        <div className="bg-black bg-opacity-70">    

      <div className="w-[80vw] mx-auto min-h-[100vh] flex items-center justify-center tablet:flex-row mobileS:flex-col gap-5 pb-[3rem] ">
        {/* TODO: map part */}
        <div className="flex-[1]">
          <div className="flex flex-col flex-[1] ">
            <h1 className="text-white font-display text-3xl pt-[4rem] ">
              HIRE ME
            </h1>
            <div className="border-2 border-red-700 w-[10%]"></div>

            <p className="text-white max-w-[30rem] font-display pt-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              suscipit odio ante, id dapibus elit condimentum vitae. Maecenas
              eget orci vitae enim accumsan mollis
            </p>
            <h1 className="flex  text-white items-center gap-2 pt-[1rem] font-display">
              <MdOutlineSmartphone />
              +7890642213
            </h1>
            <h1 className="flex items-center text-white gap-2 pt-[1rem] font-display">
              <MdOutlineLocationOn />
              kathmandu,pepsicola
            </h1>
            <h1 className="text-white flex items-center gap-2 pt-[1rem] pb-[1rem] font-display">
              <BiLogoGmail />
              @123gmail.com
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.920389353642!2d85.35767477492246!3d27.688855326307824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a23ff53c6c1%3A0xbf154d5bf0abe0ba!2sPepsicola!5e0!3m2!1sen!2snp!4v1702606292007!5m2!1sen!2snp"
              className="min-h-[15.5rem] max-w-[40rem] rounded-md"
            ></iframe>
          </div>
        </div>

        {/* TODO: form part */}
        <div className="flex-[1] max-w-lg">
          <div className="tablet:mt-[4rem] mobileS:mt-[2rem] flex flex-[1] max-h-[50rem] flex-col bg-gray-50 gap-2 rounded-2xl p-5 pb-[2rem] shadow-md flex-wrap">
            <h1 className="text-black font-custom text-3xl pt-[1rem] font-display">
              Hello Friends!
            </h1>
            <p className="pb-[1rem] font-display">
              Enter your details and start your journey with us
            </p>
              <input
                className="h-[3rem] border-[1px] border-gray-300 rounded-[1rem] pl-[1rem] bg-gray-300 bg-opacity-30 text-left pt-[] shadow-md"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
                {errors.name && (
                  <span className="text-red-600 text-left font-display text-[0.7rem] ">
                    {errors.name}
                  </span>
                )}


              <input
                className="h-[3rem] border-[1px] border-gray-300 rounded-[1rem] pl-[1rem] bg-gray-300 mt-[0.5rem] bg-opacity-30 shadow-md "
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-600 text-left font-display text-[0.7rem] ">
                  {errors.email}
                </span>
              )}

              {/* <input
                className="h-[3rem]  border-gray-700 rounded-md pl-[1rem] mt-[0.5rem] bg-gray-300 "
                type="text"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              {errors.password && (
                <span className="text-red-600 text-left font-display text-[0.7rem] ">
                  {errors.password}
                </span>
              )} */}
              <input
                className="h-[10rem] border-[1px] border-gray-300 rounded-[1rem] pl-[1rem] bg-gray-300  pb-[7rem] mt-[0.5rem] bg-opacity-30 shadow-md "
                type="text"
                placeholder="Message"
                onChange={handleChange}
                value={formData.message}
                name="message"
              />
              {errors.message && (
                <span className="text-red-600 font-display text-sm text-[0.7rem]">
                  {errors.message}
                </span>
              )}

              <button
                onClick={validateForm}
                className="bg-black text-white h-[3rem] mt-[1rem] rounded-[1rem] font-display"
              >
                Send Us
              </button>
              
          </div>
         
        </div>
       
      </div>
      {isVisible && (
      <div className="items-end justify-end pr-[1rem] pb-[1rem] fixed bottom-16 right-0 mobileM:hidden mobileL:hidden mobileS:hidden tablet:flex ">
        <a href='#home'>
            <span className="text-white flex items-center justify-center h-[4rem] w-[4rem] bg-black rounded-[1rem] animate-bounce"><IoIosArrowUp className="h-[2rem] w-[2rem] roun"/></span>
            </a>
</div>
 )}
      </div>
      </div> 
      

      <div className="mobilexl:flex tablet:flex-row mobileS:flex-col items-center justify-between mobileL:w-[80%] tablet:w-[80%] mx-auto min-h-[4rem] mobileS:pb-[5rem] tablet:pb-[0rem] font-display">
        <p className="text-black min-w-[25rem] flex items-center gap-3 mobileS:pl-[1rem] mobileM:pl-[3rem] tablet:pl-[0rem]">
          Designed & Developed By
          <a className=" " target="_blank" href="https://apptechnologies.co/">
            <span className=" text-cyan-600 tracking-wide">
              
              App Technologies
            </span>
          </a>
        </p>

        <div className="flex items-center justify-center relative gap-3">
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem]">
            <a target="_blank" href="https://www.facebook.com/apptechnologies1">
              <FaFacebookF className=" flex items-center translate-x-3 translate-y-3 text-white" />
            </a>
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem] ">
            <a target="_blank" href="https://twitter.com/AppTechnologies">
              <FaTwitter className=" flex items-center translate-x-3 translate-y-3 text-white " />
            </a>
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem] ">
            <a
              target="_blank"
              href="https://www.instagram.com/apptechnologies1/"
            >
              <FaInstagram className=" flex items-center translate-x-3 translate-y-3 text-white " />
            </a>
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem]">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/app-technologies-pvt-ltd/"
            >
              <FaLinkedinIn className="flex items-center translate-x-3 translate-y-3 text-white " />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
