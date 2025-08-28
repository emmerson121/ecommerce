import React from "react";
import './styles.css';
import './blog.css';
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";
import furnlogo from './img/furnlogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGreaterThan } from "@fortawesome/fontawesome-free-solid";
import { faHouse, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';
import blog4 from './img/blog4.jpg';
import ads from './img/ads.jpg';


const Blog = () => {

    return(
        <div>
            <Navbar />
            <Main />
            <div className="house">
                                <div><FontAwesomeIcon className="fort" icon={faHouse} /></div>
                                <div><FontAwesomeIcon className="fort" icon={faGreaterThan} /></div>
                                <p>Blog</p>
                                </div>

            <div className="totalblog">
                <div className="blogs">
                <div className="blogs1">     
                <div>
                    <div className="firstblog1">
                        <img className="firstblog" src={blog1} alt="" />
                    </div>

                    <div className="silence">A Place of Silence</div>
                    <div className="june">10 June, 2024</div>
                    
                    <div>
                        <div className="french">Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                            Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id ...</div>
                        <a href="" className="but">
                            <div className="readM">
                                <FontAwesomeIcon icon={faArrowRight} />
                                <div>Read more</div>
                            </div>
                        </a>
                            
                        </div>
                    </div>
                </div>

                <div className="blogs2">     
                <div>
                    <div className="firstblog1">
                        <img className="firstblog" src={blog2} alt="" />
                    </div>

                    <div className="silence">How to design an office like a pro</div>
                    <div className="june">10 June, 2024</div>
                    
                    <div>
                        <div className="french">Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                            Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id ...</div>
                        <a href="" className="but">
                            <div className="readM">
                                <FontAwesomeIcon icon={faArrowRight} />
                                <div>Read more</div>
                            </div>
                        </a>
                            
                        </div>
                    </div>
                </div>

                <div className="blogs3">     
                <div>
                    <div className="firstblog1">
                        <img className="firstblog" src={blog3} alt="" />
                    </div>

                    <div className="silence">Bed Selection Guide</div>
                    <div className="june">10 June, 2024</div>
                    
                    <div>
                        <div className="french">Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                            Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id ...</div>
                        <a href="" className="but">
                            <div className="readM">
                                <FontAwesomeIcon icon={faArrowRight} />
                                <div>Read more</div>
                            </div>
                        </a>
                            
                        </div>
                    </div>
                </div>

                <div className="blogs4">     
                <div>
                    <div className="firstblog1">
                        <img className="firstblog" src={blog4} alt="" />
                    </div>

                    <div className="silence">Much Space in World</div>
                    <div className="june">10 June, 2024</div>
                    
                    <div>
                        <div className="french">Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                            Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id ...</div>
                        <a href="" className="but">
                            <div className="readM">
                                <FontAwesomeIcon icon={faArrowRight} />
                                <div>Read more</div>
                            </div>
                        </a>
                            
                        </div>
                    </div>
                </div>

                    <div className="pages">
                        <span className="page1">1</span>
                        <div className="page2"><a className="pageA" href="">2</a></div>
                        <div className="page2"><a className="pageA" href=""><FontAwesomeIcon icon={faAnglesRight} /></a></div>
                    </div>
                </div>

                <div className="blogControl">
                    <form className="blogControl1">
                    <div className="formgen">
                    <input type="text" placeholder="Search product" />
                    <button className="search" type="submit" value='search'>Search</button>
                    </div>

                    <div className="tags1">
                        <div className="tags">Tags Cloud</div>
                    </div>

                    <div className="tagcloud">
                        <div className="clouds">
                        <a className="cloud" href="">article</a>
                        <a className="cloud" href="">computer</a>
                        <a className="cloud" href="">developer</a>
                        <a className="cloud" href="">famous</a>
                        <a className="cloud" href="">interview</a>
                        <a className="cloud" href="">it</a>
                        <a className="cloud" href="">learn</a>
                        <a className="cloud" href="">money</a>
                        <a className="cloud" href="">photography</a>
                        <a className="cloud" href="">post</a>
                        <a className="cloud" href="">seo</a>
                        <a className="cloud" href="">technology</a>
                        <a className="cloud" href="">tutorial</a>
                        <a className="cloud" href="">tuts</a>
                        <a className="cloud" href="">website</a>
                        <a className="cloud" href="">wordpress</a>
                        <a className="cloud" href="">WP</a>
                        </div>
                    </div>

                    <div className="tags1">
                        <div className="tags">Ads</div>
                    </div>

                    <div className="myad1">
                        <img className="myad" src={ads} alt="" />
                    </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Blog;