// Card.jsx
import React from 'react';

const CardTemp = ({ img, title, description }) => {
  return (
    <div className="relative max-w-sm  rounded overflow-hidden shadow-lg m-4 group">
      <img className="w-full" src={img} alt={title} />
      <div className="absolute inset-0 bg-green-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white p-4">
        <div>
          <h1 className="text-black font-bold mb-2">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="mt-auto">
          <a href="#" >
           <button className="bg-black btn hover:bg-black text-white font-bold min-w-30 py-2 px-4 rounded">Apply Now</button> 
          </a>
      </div>
      </div>
    </div>
  );
};

export default CardTemp;
