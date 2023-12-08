// ProductCard.js
import React, { useState } from "react";
import Modal from "react-modal";

const ProductCard = ({ product }) => {
  const [cart, setCart] = useState(false);

  function handleClick() {
    setCart(!cart);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      background: "white",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      // width: "480px",
      // height: "550px",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
  };

  function closeModal() {
    setCart(false);
  }

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-[401px] h-[222px] overflow-hidden" src={product.image + '/download'} alt={product.image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description.length > 30
            ? product.description.slice(0, 30)
            : product.description}
        </p>
        <p className="text-gray-800 font-semibold mt-2">
          ${product.price.toFixed(2)}
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          More Info ...
        </button>
      </div>

      {cart && (
        <Modal
          isOpen={cart}
          onRequestClose={closeModal}
          style={customStyles}
          className=" w-[250px] h-[400px]  sm:w-[450px] sm:h-[580px] md:absolute left-1/2 mt-[80px] md:mt-0 top-1/2 rounded-lg p-4"
          contentLabel="Example Modal"
        >
          <img className="w-[527px] h-[280px] rounded-xl" src={product.image} alt={product.image} />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-1">{product.name}</div>
            <div className="mb-1"><span className="text-lg font-semibold ">Type :</span> {product.category}</div>
            <p className="text-gray-700  mb-1">
             <span className="text-lg font-semibold"> Description : </span>{product.description}
            </p>
            <p className="mb-1">
             <span className="text-lg font-semibold"> Availability :</span>
              {product.availability === true ? (
                <span>yes</span>
              ) : (
                <span>No</span>
              )}
            </p>
            <p className="text-gray-800 font-semibold mt-1">
              <span className="text-lg font-semibold"> Price :</span> ${product.price.toFixed(2)}
            </p>
            <p className="mb-1"><span className="text-lg font-semibold">Seller Name : </span>{product.sellerName}</p>
            <p><span className="text-lg font-semibold">Rating : </span>{product.rating}</p>

          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
