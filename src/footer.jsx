import React from "react";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import furnlogo from './img/furnlogo.png'

const Footer = () =>{
    return(
        <div className='footer'>
        <div className='xtra'>
            <div className='furn'>
                <img className='logo' src={furnlogo} alt='' />
            </div>

            <div className='downA'>
                <div className='fort'>
                    <div className="fortA"><FontAwesomeIcon className='fort1' icon={faInstagram} /></div>
                    <div className="fortA"><FontAwesomeIcon className='fort2' icon={faFacebookF} /></div>
                    <div className="fortA"><FontAwesomeIcon className='fort3' icon={faXTwitter} /></div>
                </div>

                <ul className='orderA'>
                    <li><a className='ancor' href=''>Track Your Order</a></li>
                    <li><a className='ancor' href=''>FAQ</a></li>
                    <li><a className='ancor' href=''>Affiliates</a></li>
                    <li><a className='ancor' href=''>Privacy Policy</a></li>
                    <li><a className='ancor' href=''>Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div className='locate1'>
            <div className='locate'>
                <div className='collections'>Location</div>

            <div className='us'>1418 Riverland, Shop 385 Cotowood, CA 92022 
                        United States</div>                    
            </div>

            <div className='locate'>
                <div className='collections'>Location</div>

            <div className='us'>1418 Riverland, Shop 385 Cotowood, CA 92022 
                        United States</div>                    
            </div>
        </div>
        </div>
    )
}

export default Footer;