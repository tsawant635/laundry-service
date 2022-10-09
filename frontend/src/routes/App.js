import { Route, Routes, Navigate } from "react-router-dom";
import OrderCreation from "../components/createOrder/orderCreationPage/orderCreation";
// import Header2 from "../components/header2/header2";
import OrderPage from "../components/orderPage/orderPage";

import Register from "../components/register/register";
import Signin from "../components/signin/signin";



function App() {
	const user = localStorage.getItem("token");
	const loggedin = localStorage.getItem("isLoggedIn")

	return (
		<Routes>
			{user && <Route path="/" exact element={<OrderPage />} in />}
			<Route path="/login" exact element={loggedin ? <OrderPage />: <Signin />} />
			<Route path="/orders" exact element={loggedin ? <OrderPage />: <Signin />} />
			<Route path="/register" exact element={loggedin ? <OrderPage /> : <Register />} />
			<Route path="/createOrder" exact element={loggedin ? <OrderCreation />: <Signin />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

		</Routes>
	);
}

export default App;