import React from 'react'
import image3 from '../images/image 3.png';
import image4 from '../images/image 4.png';
import goback from '../images/goback.png';
import "./product.css";

export default function Product() {
    return (
        <div className="col-lg-6" style={{background: "#E5E5E5"}}>
            <img className="img3" src={image3} alt="img"/>
            <div className="d-flex justify-content-center">
                <span>
                    <img className="backbtn-img" src={goback} alt="img"/><span className="backbtntext">Back Powdur</span> 
                </span>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <h5 className="text-left productname" style={{marginLeft: "-110px"}}>
                        Pure set 
                    </h5>
                    <h3 className="text-left" style={{marginLeft: "-110px"}}>
                        <span className="currency mr-2">$</span> <span className="amt">65.00</span> 
                    </h3>
                </div>
            </div>
            <div style={{marginLeft: "205px", boxSizing: "border-box", padding: "10px"}}>
                <img className="img4" src={image4} alt="img4"/>
            </div>
        </div>
    )
}
