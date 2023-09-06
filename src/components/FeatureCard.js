import React from "react";
import { Link } from "react-router-dom";
 import './FeatureCard.css'
const FeatureCard = ({ cards = [1, 4, 6] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
            Availability
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Categories
          </h1>
        </div>
        <div className="flex flex-wrap justify-center m-4">
          {cards?.map((card, index) => {
            return (
              <Link
              to={`/categories/${card}`}
              key={index} 
              className="p-4 md:w-1/3 cursor-pointer relative"  
            >
              <div className="flex rounded-lg bg-gray-100 p-6 flex-col items-center justify-center hoverable" style={{ borderRadius: '15px 200px 15px 200px' }}>
                <div className="flex items-center mb-3"> 
                  <h2 className="text-gray-900 text-lg title-font font-medium capitalize text-center">
                    {card || "Example card"}
                  </h2>
                </div>
                <div className="backgroundimage"> </div>  
              </div>
            </Link>
            
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
