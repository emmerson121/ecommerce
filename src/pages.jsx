import React from 'react';
import './styles.css';
import Navbar from './navbar';
import Main from './main';
import furnlogo from './img/furnlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGreaterThan, faHeart, faUser } from "@fortawesome/fontawesome-free-solid";
import { faCartShopping, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Pages = () =>{

    return(
        <div>
            <Navbar />
            <Main />

            <div className="house">
                            <div><FontAwesomeIcon className="fort" icon={faHouse} /></div>
                            <div><FontAwesomeIcon className="fort" icon={faGreaterThan} /></div>
                            <p>FAQ</p>
                        </div>
        </div>
    );
}

export default Pages;