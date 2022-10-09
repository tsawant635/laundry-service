import React from "react";
import Copyright from "../copyright/copyright";
import Header from "../header/header";
import Referral from "../referral/referral";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jsondata from "./one.json";
import "./register.css";
import Footer from "../footer/footer";

function Register() {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [userDistrict, setuserDistrict] = useState("");
  const [userState, setuserState] = useState("");
  const [userpincode, setuserpincode] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [district, setDistrct] = useState([]);

  const nameChangeHandler = (name) => {
    setuserName(name);
  };
  const emailChangeHandler = (email) => {
    setuserEmail(email);
  };
  const phoneChangeHandler = (phone) => {
    setuserPhone(phone);
  };
  const addressChangeHandler = (address) => {
    setuserAddress(address);
  };
  const passwordChangeHandler = (password) => {
    setuserPassword(password);
  };
  const pincodeChangeHandler = (pin) => {
    setuserpincode(pin);
  };
  const stateChangeHandler = (state) => {
    setuserState(state);
    const getstateid = state;
    // console.log(getstateid)
    const getdistrictdata = jsondata.find(
      (item) => item.state === getstateid
    ).districts;
    setDistrct(getdistrictdata);
  };
  const districtChangeHandler = (district) => {
    setuserDistrict(district);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://api-laundry-app.herokuapp.com/api/users";
      const data = {
        name: userName,
        email: userEmail,
        password: userPassword,
        phone: userPhone,
        state: userState,
        district: userDistrict,
        address: userAddress,
        pincode: userpincode,
      };
      const { data: res } = await axios.post(url, data);

      navigate("/login");
      console.log(data);
      console.log(res);
      console.log(res.message);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="register-containerp3">
        <div className="register-box-1p3">
          <div className="register-box-1-innerp3">
            <div className="laundry-text-registerp3">
              <h1>
                Laundry <br />
                Service
              </h1>
            </div>
            <div className="register-door-text">
              <h5>
                Doorstep Wash & <br />
                Dryclean Service
              </h5>
            </div>
            <div className="register-already">
              <h6>Already Have Account</h6>
            </div>
            <br />
            <div>
              <Link to="/login">
                <button className="register-sign">Sign In</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="register-box-2">
          <div className="register-title">
            <div>REGISTER</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="form-box">
                <div className="form-box-1">
                  <div>
                    <input
                      className="register-input-field"
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => nameChangeHandler(e.target.value)}
                      autoComplete="off"
                      value={userName}
                      required
                     
                    />
                    
                    <label className="popup-label" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      className="register-input-field"
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      maxLength={10}
                      onChange={(e) => phoneChangeHandler(e.target.value)}
                      value={userPhone}
                      required
                    />
                     <label className="popup-label" htmlFor="name">
                      Phone
                    </label>
                  </div>
                  <div>
                    <select
                      className="register-input-field"
                      type="text"
                      placeholder="state"
                      name="state"
                      onChange={(e) => stateChangeHandler(e.target.value)}
                      value={userState}
                      required
                    >
                      <option value="">--select State--</option>
                      {jsondata.map((getState) => {
                        return <option>{getState.state}</option>;
                      })}

                      {/* <option value=""> abc</option> */}
                    </select>
                    <label className="popup-label" htmlFor="name">
                      State
                    </label>
                  </div>
                  <div>
                    <input
                      className="register-input-field"
                      type="text"
                      placeholder="Pincode"
                      name="pincode"
                      onChange={(e) => pincodeChangeHandler(e.target.value)}
                      value={userpincode}
                      required
                    />
                    <label className="popup-label" htmlFor="name">
                    Pincode
                    </label>
                  </div>
                </div>
                <div className="form-box-2">
                  <div>
                    <input
                      className="register-input-field"
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => emailChangeHandler(e.target.value)}
                      value={userEmail}
                      required
                    />
                    <label className="popup-label" htmlFor="name">
                    Email
                    </label>
                  </div>
                  <input
                    className="register-input-field"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => passwordChangeHandler(e.target.value)}
                    value={userPassword}
                    required
                  />
                  <label className="popup-label" htmlFor="name">
                  Password
                    </label>
                  <div></div>
                  <div>
                    <select
                      className="register-input-field"
                      type="text"
                      placeholder="District"
                      name="district"
                      onChange={(e) => districtChangeHandler(e.target.value)}
                      value={userDistrict}
                      required
                    > 
                      <option value="">--select District--</option>
                      {district.map((getdistrict) => {
                        return <option>{getdistrict}</option>;
                      })}
                    </select>
                    <label className="popup-label" htmlFor="name">
                    District
                    </label>
                  </div>
                  <div>
                    <input
                      className="register-input-field"
                      type="text"
                      placeholder="Address"
                      name="address"
                      onChange={(e) => addressChangeHandler(e.target.value)}
                      value={userAddress}
                      required
                    />
                    <label className="popup-label" htmlFor="name">
                    Address
                    </label>
                  </div>
                </div>
              </div>
              {error && <div className="error">{error}</div>}
            </div>

            <div className="terms-condition-container">
              <label>
                <input
                  className="register-checkbox"
                  id="checkbox"
                  type="checkbox"
                  required
                />
                <span className="terms-conditions">
                  I agree to Terms & Condition receiving marketing and
                  promotional materials
                </span>
              </label>
            </div>
            <div className="register-button-div">
             
              <button type="submit" className="register-button1">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Referral />
      <Footer/>
      <Copyright />
    </>
  );
}

export default Register;
