import React from 'react'
import { useState } from "react";
import paymentcards from '../images/paymentCards.png';

export default function Payform() {
    const [country, setcountry] = useState("United States");

    const handleChange = (event) => {
        setcountry(event.target.value)
    }
    return (
        <div className="mt-0 pt-0" style={{boder: "none"}}>
            <form className="payform ">
                <div className="form-group my-0 py-0">
                    <label>Email</label>
                    <input type="email" className="form-control" name="name" />
                </div>

                <div className="form-group my-0 py-0">
                    <label>Name on Card</label>
                    <input type="text" className="form-control" name="nameoncard" />
                </div>

                <div className="form-group my-0 py-0">
                    <label>Card Details</label>
                    <div className="input-group mb-0 pb-0" style={{position: "relative", bottom: "40px"}}>
                        <input type="text" className="form-control pb-0 mb-0" placeholder="1234 1234 1234 1234"/>
                        <div className="input-group-append">
                            <img className="paymentcard" src={paymentcards} alt="Paymentcards" /> 
                        </div>
                    </div>
                    <div className="input-group pt-0 mt-0" style={{position: "relative", bottom: "40px"}}>
                        <input type="text" className="form-control pt-0 mt-0" placeholder="MM/YY"/>
                        <input type="text" className="form-control pt-0 mt-0" placeholder="CVC"/>
                    </div>
                </div>
                <div className="form-group my-0 py-0">
                    <label>Country or Region</label>
                    <select className="form-control pb-0 mb-0" value={country} onChange={handleChange}>
                        <option value="United States">United States</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                    </select>
                    <input type="text" className="form-control pt-0 mt-0" placeholder="ZIP" name="Zip" />
                </div>
                <button className="paybtn btn text-white mt-0 pt-0" style={{color: "#8792A2"}}>Pay $ 65.00</button>
            </form>
        </div>
    )
}
