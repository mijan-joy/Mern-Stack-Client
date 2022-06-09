import React from 'react';
import { IconContext } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading,  } = useQuery('products', ()=> fetch('http://localhost:5000/products?limit=6').then(res => res.json()
  )
  );
  if(isLoading){
      return (
        <div className='flex justify-center items-center'>
          <div className="w-40 h-40 mx-auto">
            <Loading></Loading>
          </div>
        </div>
      );
  }
    return (
        <div className="bg-secondary">
        <div className='container my-10 mx-auto'>
          <h1 className="text-center text-4xl text-white uppercase font-bold pb-5">
            Latest Products
          </h1>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5'>
                { products?.map((product) => (<Product
                        key={product._id}
                        product={product}
                    ></Product>
                    ))}
            </div>
            <div className='flex justify-center items-center, mt-10 mb-20'>
              <button className='btn btn-primary px-10 text-xl'>
                  All Products {" "}
                  <IconContext.Provider value={{
                    className: "w-6 h-6 ml-2 text-black"
                  }}>
                    <div>
                      <FaArrowRight/>
                    </div>
                  </IconContext.Provider>
              </button>
            </div>
        </div>
  
      </div>
    );
};

export default Products;