import React from "react";
import './styles.css';
import './about.css';
import Footer from "./footer";
import Navbar from "./navbar";
import Main from "./main";
// import furnlogo from './img/furnlogo.png';
import family from './img/family.jpg';
import stairs from './img/stairs.jpg';
import jenni from './img/jenni.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGreaterThan, faHeart, faUser } from "@fortawesome/fontawesome-free-solid";
import { faCartShopping, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const About = () =>{
    return(
        <div className="container">
            <Navbar />
            <Main />

            <div className="house">
                <div><FontAwesomeIcon className="fort" icon={faHouse} /></div>
                <div><FontAwesomeIcon className="fort" icon={faGreaterThan} /></div>
                <p>About</p>
            </div>

            <div className="family">
                <div className="family1">
                    <p>Who are we?</p>

                    <div className="about"><span>About</span> us</div>
                    <div className="note">Furniture can be a product of design and is 
                        considered a form of decorative art. In addition to
                        furniture's functional role, it can serve a 
                        symbolic or religious purpose. It can be made from 
                        many materials, including metal, plastic, and wood. 
                        Furniture can be made using a variety of woodworking
                        joints which often reflect the local culture.</div>
                        
                        <div className="note2">
                        Early furniture from this period is known from artwork 
                        such as a Venus figurine found in Russia, depicting
                        the goddess on a throne. The first surviving extant
                        furniture is in the homes of Skara Brae in Scotland, 
                        and includes cupboards, dressers and beds all 
                        constructed from stone. Complex construction 
                        techniques such as joinery began in the early 
                        dynastic period of ancient Egypt. This era saw 
                        constructed wooden pieces, including stools and 
                        tables, sometimes decorated with valuable metals or 
                        ivory.</div>

                <div className="ticks">
                <div className="ticks1">
                    <ul className="tick">
                        <li className="tick1"><FontAwesomeIcon icon={faCheck} className="check" />Good Woods</li>
                        <li className="tick1"><FontAwesomeIcon icon={faCheck} className="check" />Natural Materials</li>
                        <li className="tick1"><FontAwesomeIcon icon={faCheck} className="check" />Best Fabrics</li>
                    </ul>
                </div>

                <div className="ticks2">
                    <ul className="tick">
                        <li className="tick1"><FontAwesomeIcon icon={faCheck} className="check" />Free Shipping</li>
                        <li className="tick1"><FontAwesomeIcon icon={faCheck} className="check" />15 Days Refund</li>
                        <li className="tick1"><FontAwesomeIcon icon={faCheck} className="check" />Friendly Support</li>
                    </ul>
                </div>
                </div>
                </div>

                <div className="family2">
                    <div className="fam1">
                    <img className="fam" src={family} alt="" />
                    </div>

                    <div className="duration">
                        <div className="duration1">
                            <span className="spa1">27</span> <span className="spa2">Years</span> 
                            <div className="of">of experience</div></div>
                    </div>
                </div>
            </div>

            <div className="stairs1">
                <div className="family2">
                <div className="stair">
                    <img className="stair1" src={stairs} alt="" />
                </div>
                </div>

                <div className="heritage">
                        <p>What we done?</p>

                        <div className="about">Our <span>History</span></div>

                        <div className="note">People have been using natural objects, 
                        such as tree stumps, rocks and moss, as furniture since the 
                        beginning of human civilization. Archaeological research shows that
                        from around 30,000 years ago, people began constructing and carving 
                        their own furniture, using wood, stone, and animal bones.</div>
                    </div>
                </div>

            <div className="records">
                <p className="par">What we do?</p>

                <div className="digit">Our <span>Numbers</span></div>

            <div className="numbers">
                <div className="number1">
                    <div className="number">27<i>+</i></div>
                    <div className="exp">Years of experience</div>
                </div>

                <div className="number1">    
                    <div className="number">35<i>k</i></div>
                    <div className="exp">Happy Clients</div>
                </div>  

                <div className="number1">  
                    <div className="number">46<i>+</i></div>
                    <div className="exp">Global Awards</div>
                </div>

                <div className="number1">  
                    <div className="number">17<i>+</i></div>
                    <div className="exp">Worldwide Showrooms</div>
                </div>
                </div>

            <div className="testi">
                <p className="par">What is our clients saying</p>

                <div className="testimonial">Testimonials</div>

                <div className="jen">
                    <img className="jenni" src={jenni} alt="" />
                </div>

            <div className="jennifer">
                <div className="jennifer1">Jennifer Someone</div>
                <div className="jennifer2">Singer</div>
            </div> 

            <div className="review">"I wholeheartedly recommend Xtra Furniture Shop for your 
                repair needs. I have used their services on two sets of 
                jewellery."</div>

                </div>
            </div> 

            <div className='browsing'>
            <div className='brand'>Brands</div>

            <div className='browse'>Browse by <span>Brand</span></div>

            <div className='brands'>
                <a className='brands1' href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l1.png"><img className='imglink' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l1.png" alt="" /></a>
                <a className='brands1' href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l2.png"><img src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l2.png" alt="" /><div class="cz_grid_details"></div></a>
                <a className='brands1' href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l5.png"><img src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l5.png" alt="" /><div class="cz_grid_details"></div></a>
                <a className='brands1' href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l4.png"><img src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l4.png" alt="" /><div class="cz_grid_details"></div></a>
                <a className='brands1' href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l3.png"><img src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/l3.png" alt="" /><div class="cz_grid_details"></div></a>
            </div>
        </div> 

        <Footer  />
        </div>
    )
}

export default About;