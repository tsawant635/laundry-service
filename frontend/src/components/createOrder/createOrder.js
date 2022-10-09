import { React, useState, useEffect } from "react";
import SummaryPage from "./summaryPage";
import "./createOrder.css";
import ProductType from "./products-type";
import OrderSuccess from "../orderSucess/orderSucess";



const CreateOrder = () => {
  const product_Type = [
    {
      name: "Shirts",
      img: "./images/shirts.jpg",
      description: "Washing",
    },
    {
      name: "T-Shirts",
      img: "./images/t-shirts.jpg",
      description: "Washing",
    },
    {
      name: "Trousers",
      img: "./images/trousers.jpg",
      description: "Washing",
    },
    {
      name: "Jeans",
      img: "./images/jeans.jpg",
      description: "Washing",
    },
    {
      name: "Boxers",
      img: "./images/boxers.jpg",
      description: "Washing",
    },
    {
      name: "Joggers",
      img: "./images/joggers.jpg",
      description: "Washing",
    },
    {
      name: "others",
      img: "./images/others.jpg",
      description: "Washing",
    },
  ];
  const [newOrder, setnewOrder] = useState([]);
  const [objs, setnewobjs] = useState({});
  let [finaldata, setfinaldata] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess,setIsSuccess] = useState(false)

  useEffect(() => {
    let item = newOrder.filter(
      (ele) =>
        ele.name !== objs.name && ele.quantity > 0 && ele.washes.length > 0
    );
    setnewOrder([...item, objs]);
  }, [objs]);
  const handleModal = (e) => {
    e.preventDefault();

    let final = newOrder.filter(
      (list) => list.quantity > 0 && list.washes.length > 0
    );

    if (final.length === 0) {
      alert("please select something");
    } else {
      setfinaldata(final);
      setIsOpen(!isOpen);
    }
  };
  const handleSuccess = ()=>{
    setIsOpen(!isOpen);
    setIsSuccess(true)
  }
  const [iscancel, setiscancel] = useState(false);
  const cancel = () => {
    setiscancel(!iscancel);
    setfinaldata([]);
  };

  return (
    <>
      <div className="search">
        <p>Create Order</p>
        <div className="search-bar">
          <div className="search-icon"></div>
        </div>
      </div>
      <div className="tablep2">
        <div className="table-header">
          <p className="product-type">Product Type</p>
          <p className="quantity">Quantity</p>
          <p className="wash-type">Wash Type</p>
          <p className="price">Price</p>
        </div>
        {product_Type.map((item, index) => {
          return (
            <ProductType
              item={item}
              key={index}
              index={index}
              setnewObjs={setnewobjs}
              iscancel={iscancel}
            />
          );
        })}
      </div>
      <div className="btns">
        <button className="btn1" onClick={cancel}>
          Cancel
        </button>
        <button onClick={handleModal}>Proceed</button>
      </div>
      {isOpen && (
          <SummaryPage finaldata={finaldata} handleModal={handleModal} handleSuccess={handleSuccess}/>
      )}
      {isSuccess && (<OrderSuccess/>

      )}
    </>
  );
};
export default CreateOrder;
