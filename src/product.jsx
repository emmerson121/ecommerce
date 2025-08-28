import React from "react";
import './product.css';
import Navbar from "./navbar";
import Main from "./main";
import Footer from './footer';
import furnlogo from './img/furnlogo.png';
import lamp from './img/lamp.jpg';
import couch from './img/couch.jpg';
import executive from './img/executive.jpg';
import cosy from './img/cosy.jpg';
import creative from './img/creative.jpg';
import desk1 from './img/desk1.jpg';
import lamp3 from './img/lamp3.jpg';
import bulb from './img/bulb.jpg';
import sofa4 from './img/sofa4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGreaterThan, faHeart, faUser } from "@fortawesome/fontawesome-free-solid";
import { faCartShopping, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Product = () =>{

    return(
        <div>
            <Navbar />
            <Main />

            <div className="house">
                            <div><FontAwesomeIcon className="fort" icon={faHouse} /></div>
                            <div><FontAwesomeIcon className="fort" icon={faGreaterThan} /></div>
                            <p>Product</p>
                        </div>

        <div className="slides">
            <div className="show">
            {/* <div className="results">
                Showing 1-9 of 25 results
            </div>

            <div className="nines">
                <div className="nine">
                    <select className="nine1">
                        <option value=''>9 Products</option>
                        <option>18 Products</option>
                        <option>36 Products</option>
                        <option>45 Products</option>
                        <option>72 Products</option>
                        <option>90 Products</option>
                    </select>
                </div>

                <div className="purple">
                    <select className="purple1">
                    <option className="purple2" value=''>Popular</option>
                    <option value=''>Featured</option>
                    <option value=''>Top rated</option>
                    <option value=''>Sort by latest</option>
                    <option value=''>Sort by oldest</option>
                    <option value=''>Price low to high</option>
                    <option value=''>Price high to low</option>
                    <option value=''>Highest Discount</option>
                    <option value=''>Lowest Discount</option>
                    <option value=''>Alphabetically, A-Z</option>
                    <option value=''>Alphabetically, Z-A</option>
                    </select>
                </div>
                </div>     */}

            
            </div>

            <div className="mainForm">
            <div className="formList">
                <form className="formList1">
                    <div className="formIn">
                    <input type="text" placeholder="Search product" />
                    <button className="but" type="submit" value='search'>Search</button>
                    {/* <input type="hidden" name="post_type" value='product' /> */}
                    </div>

                    <div className="filter1">
                <div className="filter">Fliter by price</div>
                </div>

                <div>
                    <div className="currency">
                    <div className="currency1"></div>
                    <div>
                    <span className="currency2"></span>
                    <span className="currency3"></span>
                    </div>
                    </div>

                    <div className="price">
                        <div className="mainprice">Price: $40 - $2,350</div>

                        <div className="price2">Filter</div>

                        <div className="price3">Other Products</div>

                        <div className="gadget">
                            <ul className="gadget2">
                                <li className="star">
                                <a href="https://xtratheme.com/elementor/furniture-shop-2/product/modern-clock">
                                <div className="star2"><img className="star1" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p10-600x600.jpg" alt="" /></div>
                                <span class="product-title">Modern Clock</span></a>

                                <div className="">

                                </div>
                                </li>

                                <li className="star">
                                <a href="https://xtratheme.com/elementor/furniture-shop-2/product/desk-lamp/">
                                <div className="star2"><img className="star1" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p14-600x600.jpg" alt="" /></div>
                                <span class="product-title">Desk Lamp</span>
                                </a>
                                </li>

                                <li className="star">
                                <a href="https://xtratheme.com/elementor/furniture-shop-2/product/drop-lamp/">
                                <div className="star2"><img className="star1" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p18-600x600.jpg" alt="" /></div>
                                <span class="product-title">Drop Lamp</span>
                                </a>
                                </li>

                                <li className="star">
                                <a href="https://xtratheme.com/elementor/furniture-shop-2/product/white-chair/">
                                <div className="star2"><img className="star1" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p7-600x600.jpg" alt="" /></div>
                                <span class="product-title">White Chair</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </form>


            </div>
            

            <div className="slideOrder">
                <div className="slideOrder2">
                <div className="results">
                Showing 1-9 of 25 results
            </div>

            <div className="nines">
                <div className="nine">
                    <select className="nine1">
                        <option value=''>9 Products</option>
                        <option>18 Products</option>
                        <option>36 Products</option>
                        <option>45 Products</option>
                        <option>72 Products</option>
                        <option>90 Products</option>
                    </select>
                </div>

                <div className="purple">
                    <select className="purple1">
                    <option className="purple2" value=''>Popular</option>
                    <option value=''>Featured</option>
                    <option value=''>Top rated</option>
                    <option value=''>Sort by latest</option>
                    <option value=''>Sort by oldest</option>
                    <option value=''>Price low to high</option>
                    <option value=''>Price high to low</option>
                    <option value=''>Highest Discount</option>
                    <option value=''>Lowest Discount</option>
                    <option value=''>Alphabetically, A-Z</option>
                    <option value=''>Alphabetically, Z-A</option>
                    </select>
                </div>
                </div> 
                </div>
            <div className="slideOrder1">
                <div>
                    <div className="slideImg1">
                        <div className="amount">$259</div>
                        <img className="slideImg" src={lamp} alt="" />
                        </div>
                        <div className="under">Cone Lamp</div>
                    </div>
                
                <div>
                <div className="slideImg1">
                <div className="amount">$950</div>
                    <img className="slideImg" src={couch} alt="" />
                    </div>
                    <div className="under">Corner Lounge</div>
                </div>

                <div>
                <div className="slideImg1">
                <div className="amount">$799</div>
                    <img className="slideImg" src={executive} alt="" />
                    </div>
                    <div className="under">Cosy Sofa</div>
                </div>
                
                <div>
                <div className="slideImg1">
                <div className="amount">$699</div>
                    <img className="slideImg" src={cosy} alt="" />
                    </div>
                    <div className="under">Cosy Sofa</div>
                </div>
                
                <div>
                <div className="slideImg1">
                <div className="amount">$349</div>
                    <img className="slideImg" src={creative} alt="" />
                    </div>
                    <div className="under">Creative Chair</div>
                </div>

                <div>
                <div className="slideImg1">
                <div className="amount">$129</div>
                    <img className="slideImg" src={desk1} alt="" />
                    </div>
                <div className="under">Desk Lamp</div>
                </div>
                
                <div>
                <div className="slideImg1">
                <div className="amount">$179</div>
                    <img className="slideImg" src={lamp3} alt="" />
                    </div>
                <div className="under">Drop Lamp</div>
                </div>
                
                <div>
                <div className="slideImg1">
                <div className="amount">$99</div>
                    <img className="slideImg" src={bulb} alt="" />
                    </div>
                    <div className="under">Flower Lamp</div>
                </div>
                
                <div>
                <div className="slideImg1">
                <div className="amount">$599</div>
                    <img className="slideImg" src={sofa4} alt="" />
                    </div>
                    <div className="under">Gray Simple Sofa</div>
                </div>
                
            </div>
            </div> 
            </div>
        </div>  

        <Footer />
        </div>
    );
}

export default Product;