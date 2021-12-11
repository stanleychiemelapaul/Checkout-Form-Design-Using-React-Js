 import React  from "react";
 import XMLID from '../images/XMLID 34.png';
 import line2 from '../images/Line 2.png';
 import line3 from '../images/Line 3.png';

 import Payform from './payform'
 import './form.css'

 const  OrderForm = () =>{
    return(
        <div className="col-lg-6 card" style={{background: "#E5E5E5", borderTop: "none", borderBottom: "none"}}>
            <div className="card-body" style={{alignContent: "center", marginRight: "auto", marginLeft: "auto"}}>
                <button className="MainButton">
                    <img src={XMLID} alt="Pay"/>
                </button>
                <div className="text-center d-flex justify-content-center align-items-center" style={{width: "100%", alignContent: "center", marginRight: "auto", marginLeft: "auto"}}>
                    <img src={line2} className="mr-3" style={{height: "2px", width: "31%"}} alt="" />
                    <span className="paywithcardtext" style={{width: "30%", alignContent: "center"}}>Pay with Card</span>
                    <img src={line3} className="ml-3" style={{height: "2px", width: "31%"}} alt="" />
                </div>
                <Payform/>
            </div>
        </div>
    )
 }



 export default OrderForm;

 