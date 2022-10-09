import React from "react";
import "./orderSuccess.css";
import { Link } from "react-router-dom";
function OrderSuccess() {
  return (
    <>
    <div className="orderS1">
      <div className="orderS2"></div>
    <div className="ordersuccess-container">
        <div className="box">
            <img className="circleimg" src="./images/order.jpg" alt="" />
          <div className="ordersuccess-text">
            <div className="successfull1">
            Your order is successfully.
            </div>
            <div className="successfull2">
            You can track the delivery in the "Orders" section.
            </div>
            <Link to="/orders">
              <button className="ordersuccess-btn">Go to orders</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}
export default OrderSuccess;