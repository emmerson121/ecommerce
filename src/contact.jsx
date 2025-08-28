import React from 'react';
import './styles.css';
import Footer from './footer'
import './contact.css';
import './product.css';
import Navbar from './navbar';
import Main from './main';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope, faGreaterThan, faHeart, faPhone, faUser } from "@fortawesome/fontawesome-free-solid";
import { faCartShopping, faHouse, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import furnlogo from './img/furnlogo.png';


const Contact = () =>{

    return(
        <div>
             <Navbar />
                <Main />

            <div className="house">
                    <div><FontAwesomeIcon className="fort" icon={faHouse} /></div>
                    <div><FontAwesomeIcon className="fort" icon={faGreaterThan} /></div>
                    <p>Contact</p>
                    </div>

            <div className='objects'>
                <div className='objects1'>
                    <div className='envelope'><FontAwesomeIcon className='object1' icon={faEnvelope} /></div>
                <div className='phone'>Email</div>
                <span className='sp'>info@xtrafurniture.com</span>
                </div>

                
                <div className='objects1'>
                    <div className='envelope'><FontAwesomeIcon className='object1' icon={faPhone} /></div>
                <div className='phone'>Phone</div>
                <span className='sp'>+1 (800) 333 44 55</span>
                </div>

                <div className='objects1'>
                    <div className='envelope'><FontAwesomeIcon className='object1' icon={faLocationDot} /></div>
                <div className='phone'>Address</div>
                <span className='sp'>121 King Street, New York - USA</span>
                </div>
            </div>
            
            <div className='tracker'>
                <div className='map'></div>

                <div className='formGen'>
                        <form className='contact'>
                            <div className='contactForm'>
                            <input type='text' placeholder='Your Name (*)' />
                            </div>

                            <div className='contactForm'>
                            <input type='email' placeholder='Your Email (*)' />
                            </div>

                            <div className='contactForm'>
                            <input type='phone' placeholder='Phone' />
                            </div>

                            <div className='contactForm'>
                            <select className='listA'>
                                <option className='contactForm'>Business Department</option>
                                <option>Personal Department</option>
                                <option>Support Department</option>
                                <option>Others</option>
                            </select>
                            </div>

                            <textarea className='textA'>Your Question</textarea>

                            <div className='sub1'>
                            <div className='sub'>Submit</div>
                            </div>
                        </form>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Contact;