import React from 'react';
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import whitening from "../../assets/images/whitening.png";
import ServicesCard from "./ServicesCard";

const Services = () => {
    return (
        <div className="mt-12">
        <h1 className="text-secondary font-bold text-center uppercase">
          Our Services
        </h1>
        <h1 className="text-center font-bold text-2xl">Services We Provide</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-12">
          <ServicesCard
            info="Lorem Ipsum is simply dummy text of the pri"
            title="Fluoride Treatment"
            img={fluoride}
          ></ServicesCard>
          <ServicesCard
            info="Lorem Ipsum is simply dummy text of the pri"
            title="Cavity Filling"
            img={cavity}
          ></ServicesCard>
          <ServicesCard
            info="Lorem Ipsum is simply dummy text of the pri"
            title="Teeth Whitening"
            img={whitening}
          ></ServicesCard>
        </div>
  
        <div>
          <div className="hero min-h-screen bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row px-12 ">
              <img
                src={treatment}
                className="max-w-sm rounded-lg shadow-2xl lg:ml-12"
                alt="treatment"
              />
              <div className="lg:ml-12 lg:p-12">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6 text-justify">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English. Many
                  desktop publishing packages and web page.
                </p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;