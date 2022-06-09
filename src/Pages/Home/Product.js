import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, moq, stock, } = product;
    const navigate = useNavigate();

    return (
        <section>
            <div className=' card bg-slate-600.10 hover:bg-slate-600/20 text-white shadow-3xl'>
            <figure className="px-10 pt-10 overflow-hidden">
                <img
                    src={img}
                    alt="tool"
                    className="rounded-xl hover:scale-105 transition-all"
                />
            </figure>
            <div className="card-body text-center">
                <h2 className='card-title text-left'>{name}</h2>
                <p>{description}</p>
                <div class="flex justify-between">
                    <p className='bg-accent rounded text-center'>MOQ: {moq}</p>
                    <p className='bg-accent rounded text-center'>Stock: {stock}</p>
                </div>
                <p className="">
                        Price:{" "}
                        <span className="font-bold text-xl">$ {price}</span>
                </p>
            </div>
            <div className="card-action item-center">
                { stock > 0 ? (
                    <button onClick={() => navigate(`/purchase/${_id}`)}
                    className="btn btn-primary btn-block"
                    >
                        Order Now
                    </button>
                ):(
                    <span className='btn btn-block bg-gray-700 text-white/75 active:bg-red-500'>
                        Stock Out
                    </span>
                )}
            </div>
            </div>
        </section>
    );
};

export default Product;