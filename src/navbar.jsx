import React from 'react'
import './styles.css';
import './nav.css';
// import furnlogo from './img/furnlogo';
import enva from './img/envato.svg';

const Navbar = () =>{

    return(
        <div className='navBar2'>
            <div className='navBar'>
                <div className='enva'>
                    <a className='env1' href='https://facebook.com'><img className='env' src={enva} alt='' /></a>
                </div>

                <div className='limited'>
                <div>Limited time offer, Buy XTRA WordPress theme only <span>$29</span></div>
                </div>

                <div className='download'>
                    <a className='downLoad1' href='facebook.com'><div>Download XTRA Theme</div></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;