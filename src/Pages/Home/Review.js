import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo soluta
            harum veniam ipsam cumque?
          </p>
          <div className="flex item-center mt-4">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                <img src={review.img} alt="review" />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;