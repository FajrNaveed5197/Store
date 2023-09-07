import React from "react";
import background from "../img/logo.PNG";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font relative mt-20" style={{ height: "700px" }}>
      <div
        className="absolute inset-0 bg-center bg-cover z-[-1]"
        style={{
          backgroundImage: `url(${background})`,
          opacity: 0.5,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container mx-auto flex flex-col items-center justify-center text-center h-full" >
       
        <p className=" leading-relaxed bg-opacity-80 p-5 rounded-md bg-white text-xl font-bold" style={{marginTop:"40%"}} >
          Welcome to SuitYourself, your destination for exquisite style.
          Explore our curated collection of tailored suits, sophisticated
          accessories, and timeless fashion. Elevate your wardrobe with the
          perfect blend of elegance and individuality. Find your unique
          expression at SuitYourself.
        </p>
      </div>
    </section>
  );
};

export default Hero;
