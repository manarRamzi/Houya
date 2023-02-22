import React from "react";
import img from "../Images/37rZsPNNYYLz (1).png";
import hart from "../Images/heart.png";
import star from "../Images/Shape.png";
import cart from "../Images/shopping-cart.png"
export const CradItems = (props) => {
  return (
    <div className="cardItems p-2 ">
      <div className="image text-center">
        <div className="hart py-2 ">
          <img src={hart} alt="like" width="28px" />
        </div>

        <img src={ props.img} alt="mm" />
        <div className="rate py-auto">
          <span> {props.rate}</span>
          <img src={star} alt="star" className="mx-1" />
        </div>
      </div>
      <div className="my-3 info">
        <p>{props.title}</p>
        <p>{props.subtitle} </p>
        <div className="price p-1">
          <p>
           {props.price} <span>ر.س</span>
          </p>
        </div>
        <div className="addTo d-flex justify-content-between my-3">
<div className="cart text-center p-2"> <img src={cart} alt="cart"/></div>
<div> 
    <button>
    كرتون
    </button>
    <button>
      1 كيلو
    </button>
</div>

        </div>
      </div>
    </div>
  );
};
