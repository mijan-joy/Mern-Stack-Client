import React from 'react';

const ServicesCard = ({ img, info, title}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-8 px-12">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="font-bold text-center">{title}</h2>
          <p className="text-center">{info}</p>
        </div>
      </div>
    );
};

export default ServicesCard;