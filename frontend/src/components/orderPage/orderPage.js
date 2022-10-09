import Copyright from "../copyright/copyright";
import Header2 from "../header2/header2";
import Orders from "../orders/orders";
import Sidebar from "../siderbar/sidebar";
import "./orderPage.css"
const OrderPage = () => {

  return (
    <>
      <div >
        <div>
          <Header2 />
        </div>
        <div className="orderPageConatiner">
          <div>
            <Sidebar />
          </div>
          <div className="orderdiv">
            <Orders />
          </div>
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </>
  )

}
export default OrderPage;