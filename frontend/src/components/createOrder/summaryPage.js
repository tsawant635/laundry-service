import { React, useState, useEffect } from "react";
import "./summaryPage.css";
import SummaryData from "./summaryData";

const SummaryPage = ({ finaldata, handleModal,handleSuccess }) => {


  const [subTotal, setsubTotal] = useState(0);
  const [finalOrdervalue, setfinalOrderValue] = useState(0);
  const [totalItems, settotalTtems] = useState(0);
  const [address,setAddress] = useState({storeLocation : "Delhi",storeAddress: "Mukherjee Nagar",phone : 9876543210});

  useEffect(() => {
    let totalval = 0;
    let itemsconut = 0;
    finaldata.forEach((element) => {
      totalval += element.subprice;
      itemsconut += +element.quantity;
    });
    setsubTotal(totalval);
    settotalTtems(itemsconut);
    const deliveryCharge = 90;
    let finalOrder = totalval + deliveryCharge;
    setfinalOrderValue(finalOrder);
  }, [finaldata]);


//Data is sending from here 
  
const StoreInformation = address;
const Orders = finaldata;
  const totalPrice = finalOrdervalue
  const confirm = ()=>{
    let user=localStorage.getItem('token')
    fetch("https://api-laundry-app.herokuapp.com/orders", {
      method : "POST",
      headers : {
        "Authorization" :user,
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({Orders,totalPrice,totalItems,StoreInformation})
    }).then((data)=>data.json())
    .then((data)=>console.log(JSON.stringify(data)))
    handleSuccess(true)
  }
  const handleAddress = (e) =>{
    if(e.target.value === "Delhi"){
      setAddress({storeLocation : e.target.value,storeAddress: "Mukherjee Nagar",phone : 9876543210})
    }
    else if(e.target.value === "Mumbai"){
      setAddress({storeLocation : e.target.value,storeAddress: "Dharavi",phone : 9876543210})
    }
    else if(e.target.value === "Bhopal"){
      setAddress({storeLocation : e.target.value,storeAddress: "New Market",phone : 9876543210})
    } 
  }
const userAddress = localStorage.getItem('address')
  return (
    <>
    <div className="overlayp">
      <div classname="overlayp2"></div>
      <div className="summaryp2">
        <div className="s-header">
          <p>Summary</p>
          <button onClick={handleModal}>
            X
          </button>
        </div>
        <div className="s-location">
          <select className="options"  onChange={handleAddress}>
            <option selected>Delhi</option>
            <option >Mumbai</option>
            <option >Bhopal</option>
          </select>
          <div className="s-store">
            <p>Address</p>
            <p >{address.storeAddress}</p>
          </div>
          <div className="s-phone">
            <p>Phone</p>
            <p>{address.phone}</p>
          </div>
        </div>
        <p className="order-details">Order Details</p>
        {finaldata.map((item) => {
          return (
            <>
              <SummaryData
                item={item}
                setsubTotal={setsubTotal}
                subTotal={subTotal}
              />
            </>
          );
        })}
        <div className="subTotal">
          <p>Sub total :</p>
          <div id="sub">{subTotal}</div>
        </div>
        <div className="pickup">
        <p>pickUp Charge :</p>
          <div id="charge">90</div>
        </div>
        <div className="totalp2">
        <p>Total :</p>
          <div id="total-amount">Rs {subTotal + 90}</div>
        </div>
        <div className="division"></div>
        <p id="address">Address</p>
        <div className="user-address">
          <h3>Home</h3>
            {userAddress}
        </div>
        <div className="cnfrm">
        <button className="confirm-btn" onClick={confirm}>Confirm</button>
        </div>
      </div>
      </div>
    </>
  );
};
export default SummaryPage;
