import React from 'react';

const Review = ({ review }) => {
    let { name, desc, rating, img } = review;
    rating = parseInt(rating);


    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="avatar justify-start ml-6 mt-6">
                <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={img ? img : 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb24lMjBtYXJrJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500'} alt='' />
                </div>
            </div>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-start">
                    {rating === 5 && 
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                    }
                  {rating >= 4 && rating < 5  && 
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                  </div>
                    }
                    
                    {rating >= 3 && rating < 4  && 
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                  </div>
                    }
                    {rating >= 2 && rating < 3  && 
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                  </div>
                    }
                    {rating >= 1 && rating < 2  && 
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 "/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                    <input type="radio" name="rating-2" className="mask mask-star-2 " />
                  </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;