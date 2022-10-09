import { useState } from "react";
import "./cancelAlert.css"
const CancelAlert = ({ id, setOpenModal }) => {
  const token = localStorage.getItem('token');
  const [xyz,setxyz]=useState(false)
  const caneclOrder = () => {
    // console.log(id)
    fetch(`https://api-laundry-app.herokuapp.com/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
    })
    setxyz(true);
    if(xyz){
      window.location.reload(false)
    }
  }
  return (
    <>
      <div className="cancelParentp1">

        <div className="canceldiv1">

        </div>
        <div className="cancelcontainerp1">
          <div className="cancelHeaderp1">
            <p className="summaryp1">Alert</p>

            <button onClick={() => { setOpenModal(false) }} className="crossbtn" >╳</button>

          </div>
          <div className="alertcontainer">
            <div>
              <img className="dangerimage" src="./images/dangericon.png" alt="dangericon" height="33" width="33" />
            </div>
            <div className="warning">
              <div>Are you sure want to cancel the</div>
              <div className="orderno">Order No. {id}</div>

            </div>
          </div>
          <div className="cancelbtnp">
            <button onClick={() => { caneclOrder(); setxyz(true) }} className="proceedbtn">Proceed</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CancelAlert;
