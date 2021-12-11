import React from 'react'
import Stripe from '../images/stripe.png';

import "./footer.css";

function Footer() {
    return (
        <footer className="pl-4">
            <span className="host">Powered by</span>
            <img className="hostlogo px-2 pr-3" src={Stripe} alt="Stripe" />
            <span className="divider">|</span>
            <span className="terms px-3">Terms</span>
            <span className="privacy">Privacy</span>
        </footer>
    )
}

export default Footer
