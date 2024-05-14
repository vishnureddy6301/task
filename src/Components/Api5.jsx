import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Api5 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        //console.log("Response", response);
        setProducts(response.data.products); 
      });
  }, []);
  

  return (
    <div>
   
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="w-1/3 p-4 flex flex-col items-center">
          <div className="w-full h-64 overflow-y-auto">
            {product.images.length > 0 && (
              <img
                src={product.images[0]} 
                alt={`Api ${product.id} image 0`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600 mt-2">ID: {product.id}</p>
            <p className="text-gray-800 mt-2">Price: ${product.price}</p>
            <p className="text-gray-600 mt-2">Rating: {product.rating}</p>
            <p className="text-gray-600 mt-2">Stock: {product.stock}</p>
            <p className="text-gray-600 mt-2">Brand: {product.brand}</p>
            <p className="text-gray-600 mt-2">Category: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
   
    </div>
  );
};


export default Api5;
