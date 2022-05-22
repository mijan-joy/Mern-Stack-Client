import React from 'react';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        info="Lorem Ipsum is simply dummy text of the pri"
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgClass="bg-[#3A4256]"
        info="Brooklyn, NY 10036, United States"
        cardTitle="Visit Our Location"
        img={marker}
      ></InfoCard>

      <InfoCard
        info="+000 123 456789"
        cardTitle="Contact Us Now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
    );
};

export default Info;