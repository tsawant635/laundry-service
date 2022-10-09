
// import { useEffect ,useState} from "react";

import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./header2.css";



const Header2 = () => {
	const [userName, setUserName] = useState('')

	const [userAddress, setuserAddress] = useState('')
	// const navigate = useNavigate();

	useEffect(() => {
		setUserName(localStorage.getItem('name'))
		setuserAddress(localStorage.getItem('address'))
		console.log(localStorage.getItem("token"))
		// console.log(localStorage.getItem("name"))
		// localStorage.getItem("name");
	}, [])
	// console.log(userName)
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("name");
		localStorage.removeItem("address");
		localStorage.removeItem("isLoggedIn")
		window.location.href = "/"
		// navigate("/login")


	};

	const menuToggle = () => {

		const toggleMenu = document.querySelector(".menu")
		toggleMenu.classList.toggle("active")
	}

	return (
		<div >
			<div>
				<div>
					<div className="header">
						<p id="laundry" className="top-padding">LAUNDRY</p>
						<div id="header-menu">
							<p className="menu-item top-padding">Pricing</p>
							<p className="menu-item top-padding">Career</p>
							<div className="action">
								<div className="profile">
									<div className="profile-pic" onClick={menuToggle}></div>
									<p className="menu-item top-padding">{userName}</p>

									<div className="menu" onClick={handleLogout}><h5>Logout</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	);
};

export default Header2;