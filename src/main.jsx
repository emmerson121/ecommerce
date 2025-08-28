import React from 'react';
import './styles.css';
import './pages.css';
import furnlogo from './img/furnlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faHeart, faUser } from '@fortawesome/fontawesome-free-solid';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import brand1 from './img/brand1.png';
import brand2 from './img/brand2.png';
import brand3 from './img/brand3.png';
import brand4 from './img/brand4.png';

const Main = () => {

    return(
        <div>
            <div className='main'>
                <div className='furn'>
                    <img className='logo' src={furnlogo} alt='' />
                </div>

                <div className='central'>
                <ul className='items'>
                <li><a className='menu menu1' href='/'>Home</a></li>
                <li><a className='menu' href='/about'>About</a></li>
                <li><a className='menu' href='/product'>Products</a></li>
                <li className="list3"><a className='menu cat' href='/category'>Category</a>
                <div className="list2">
                    <div className='rows'>
                        <div className='row1'>
                            <div className='heading'>Furniture</div>
                            <ul className='unlist'>
                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'><FontAwesomeIcon className='greater' icon={faGreaterThan} /></div>
                                    </div>
                                    <li className='lister'>Sofa</li>
                                    </div>
                                

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Bed</li>
                                    </div> 

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Mirrow</li>
                                    </div> 

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Lamp</li>
                                    </div>  

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Table</li>
                                    </div>

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Wardrobe</li>
                                    </div>

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Bathtub</li>
                                    </div>

                                <div className='rowA'>
                                    <div className='greater1'>
                                    <div className='greater2'>
                                    <FontAwesomeIcon className='greater' icon={faGreaterThan} />
                                    </div>
                                    </div>
                                    <li className='lister'>Sink</li>
                                    </div>                        
                            </ul>
                            
                        </div>

                        <div className='row2'>
                            <div className='heading'>Material</div>
                            <ul className='material'>
                                <li className='lister'>Wooden & Natural</li>
                                <li className='lister'>MDF & Industrial</li>
                                <li className='lister'>Metal & Steel</li>
                                <li className='lister'>Fabrics & Textiles</li>
                                <li className='lister'>Leather</li>
                            </ul>
                        </div>

                        <div className='row3'>
                            <div className='heading'>Price Range</div>
                            <ul className='ranger'>
                                <li className='lister'>Under $1,000</li>
                                <li className='lister'>$1,000 to $5,000</li>
                                <li className='lister'>$5,000 to $20,000</li>
                                <li className='lister'>Above 20,000</li>
                            </ul>
                        </div>

                        <div className='row4'>
                            <div className='heading'>Brands</div>
                            <div className='brand1'>
                                <div className='brand2'><img className='brands1' src={brand1} /></div>
                                <div className= 'brand2'><img className='brands1' src={brand2} /></div>
                                <div className='brand2'><img className='brands1' src={brand3} /></div>
                                <div className='brand2'><img className='brands1' src={brand4} /></div>
                            </div>
                        </div>

                        <div className='row5'>
                            <img src='' alt='' />
                        </div>
                    </div>
                    </div></li>
                <li className='pages1'><a className='menu cat' href='/pages'>Pages</a>
                <div className='pages2'>
                    <div className='pages3'>
                    <div className='pages4'><a className='pageslink' href='/pages'>FAQ</a></div>
                    <div className='pages5'><a className='pageslink' href="">Submenu1</a></div>
                    </div>
                    </div></li>
                <li><a className='menu' href='/blog'>Blog</a></li>
                <li><a className='menu' href='/contact'>Contact</a></li>
                </ul>
                

                <div className='packages'>
                    <div className='yellow'><FontAwesomeIcon icon={faUser} /></div>
                    <div className='yellow'><FontAwesomeIcon icon={faHeart} /></div>
                    <div className='yellow'><FontAwesomeIcon icon={faCartShopping} /></div>
                    <div className='norm'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Main;