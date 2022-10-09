import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CancelAlert from "../cancelAlert/cancelAlert";
import OrderSummary from "../orderSummary/orderSummary";

import "./orders.css"

// import { useNavigate } from "react-router-dom";
const Orders = () => {
  const token = localStorage.getItem("token")
  const [inpValue, setInpValue] = useState("");
  const [data, setData] = useState([]);
  const [orderInfo, setOrderInfo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [orderid, setOrderid] = useState("")
  const [cancelModal, setCancelModal] = useState(false);
  let tableClass = "table table-striped"
  let btnclass = "btnp1"
  let extradivClass = "hidetable"
  if (data.length === 0) {
    tableClass = "hidetable"
    btnclass = "hidebtn"
    extradivClass = "extradiv"
  }

  const viweOrder = async (e) => {
    setOrderInfo(e.target.id);
    setModalOpen(true);
  }
  const cancelOrder = (e) => {

    setOrderid(e.target.id);
    setCancelModal(true);
  }


  useEffect(() => {
    fetch("https://api-laundry-app.herokuapp.com/orders", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
    }).then((data) => data.json())
      .then((response) => setData(response.data.reverse()))
  }, [token]);

  return (
    <>

      <div className="containerm">
        <h1 className="heading">Orders | {data.length}</h1>

        <div className="searchbar">
          <Link to="/createOrder">  <button className={btnclass}>Create</button></Link>
          <input onChange={(e) => { setInpValue(e.target.value) }} onMouseLeave={() => { setInpValue("") }} className="input" type="text" value={inpValue} />
          <img className="imagep1" src="./images/search.jpg" alt="Search icon" />
        </div>
      </div>
      <div className={extradivClass}>
        <p>No Orders avaialble</p>
        <Link to="/createOrder"><button className="btnindiv">Create</button></Link>
      </div>
      <table className={tableClass} >

        <thead>
          <tr className="table-head-row table-dark">

            <th>Order Id</th>
            <th>Order Date & Time</th>
            <th>Store Location</th>
            <th>City</th>
            <th>Store Phone</th>
            <th>Total Items</th>
            <th>Price</th>
            <th>Status</th>
            <th> </th>
            <th>View</th>
          </tr>

        </thead>

        <tbody>
          {
            data.map((eachObj) => {
              let orderStatus = "Not"

              let date = eachObj.orderDate.split(" ");
              date = `${date[2]} ${date[1]} ${date[3]}, ${date[4]}`
              if (eachObj.status === "Ready to pickup") {
                orderStatus = "Cancel Order"

              }
              return (
                <tr key={eachObj.orderid}>
                  <td>{eachObj.orderid}</td>
                  <td>{date}</td>
                  <td>{eachObj.StoreInformation.storeAddress}</td>
                  <td>{eachObj.StoreInformation.storeLocation}</td>
                  <td>{eachObj.StoreInformation.phone}</td>
                  <td>{eachObj.totalItems}</td>
                  <td style={{ color: '#5861ae', fontweight: 'bold' }} className="price">{eachObj.totalPrice} Rs</td>
                  <td >{eachObj.status}</td>
                  <td className={orderStatus} id={eachObj.orderid} onClick={(e) => cancelOrder(e)} style={{ color: '#EB1717' }}>{orderStatus}</td>
                  <td ><i id={eachObj.orderid} onClick={(e) => viweOrder(e)} className="far fa-eye" style={{ cursor: 'pointer' }} ></i></td>
                </tr>

              )
            })
          }
        </tbody>
      </table>

      {modalOpen && <OrderSummary arr={data} order={orderInfo} setOpenModal={setModalOpen} setCancel={setCancelModal} />}
      {cancelModal && <CancelAlert id={orderid} setOpenModal={setCancelModal} />}


    </>
  )

};

export default Orders;
