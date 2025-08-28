import React from 'react'
import Navbar from './navbar';
import Main from './main';
import './styles.css';
import Footer from './footer';
import Pages from './pages';
import bulb from './img/bulb.jpg';
import clock from './img/clock.png';
import clock2 from './img/clock2.jpg';
import couch from './img/couch.jpg';
import executive from './img/executive.jpg';
import executive2 from './img/executive2.jpg'
import furnlogo from './img/furnlogo.png';
// import enva from './img/envato.svg';
import chair from './img/chair.png';
import flower from './img/flower.png';
// import icon1 from './img/icon1.png';
import wstool from './img/wstool.jpg';
import lamp from './img/lamp.jpg';
import lamp3 from './img/lamp3.jpg';
import desk from './img/desk.jpg';
import desk1 from './img/desk1.jpg';
import modern from './img/modern.jpg';
import rubber from './img/rubber.jpg';
import sofa from './img/sofa.jpg';
import sofa4 from './img/sofa4.jpg';
import star from './img/star.jpg';
import longsofa from './img/longsofa.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/fontawesome-free-solid';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () =>{

    return(
        <div className='container'>
            <Navbar />
            <Main />

            <div className='chairs'>
            <div className='chair1'> 
            <div className='widen'>  
            <div className='wide'>Wide Collection Of Home</div>
            </div>
            <div className='wide1'>Furniture</div>
            <div className='embrace'>Embrace a life of luxury and comfort with Xtra. Our exclusive furniture 
                collection brings sophistication and timeless elegance to your home, 
                creating spaces that resonate with your style.</div>
            
            <div className='little1'>
            <div><a href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/thmb1.jpg"><img className='ch1' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/thmb1.jpg" /></a></div>
            <div><a href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/thmb2.jpg"><img className='ch1' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/thmb2.jpg" /></a></div>
            <div><a href="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/thmb3.jpg"><img className='ch1' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/thmb3.jpg" /></a></div>
            </div>
            </div>     

           <div className='chair2'>
           <img className='bigchair' src={chair} alt='' />
           </div>
        </div>

        <div className='furnTypes'>
            <div className='range'>
                <h3>Explore Our <span>Furniture</span> Range:</h3>
            </div>

            <div className='overallIcon'>
            <div className='firstIcon'> 
            {/* <div><img src={icon1} /></div> */}
                <div className='bord'><img className='img1' width="90" height="90" style={{alignItems: 'center'}} src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon1.png" data-src="" /><p style={{textAlign: 'center'}}>Sofa</p></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon1.png" data-src="" /><div style={{textAlign: 'center', margin: '0 auto'}}>Table</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon3.png" data-src="" /><div style={{textAlign: 'center'}}>Bed</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon4.png" data-src="" /><div style={{textAlign: 'center'}}>Wardrobe</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon5.png" data-src="" /><div style={{textAlign: 'center'}}>Mirror</div></div>
            </div>

            <div className='secondIcon'>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon10.png" data-src="" /><div style={{textAlign: 'center'}}>Bathtub</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon9.png" data-src="" /><div style={{textAlign: 'center'}}>Sofa Set</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon8.png" data-src="" /><div style={{textAlign: 'center'}}>Sink</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon7.png" data-src="" /><div style={{textAlign: 'center'}}>Lamp</div></div>
                <div className='bord'><img className='img1' width="90" height="90" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon6.png" data-src="" /><div style={{textAlign: 'center'}}>Other...</div></div>
            </div>
            </div>
        </div>


        <div className='chair3'>
            <div className='bord1'><img className='bord2' loading="lazy" decoding="async" width="623" height="696" src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/photo2.jpg" data-src="" class="attachment-full size-full wp-image-1738 lazyDone" alt="Furniture Shop WordPress Theme 1" title="Furniture Shop WordPress Theme 1" srcset="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/photo2.jpg 623w, https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/photo2-269x300.jpg 269w, https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/photo2-600x670.jpg 600w" sizes="(max-width: 623px) 100vw, 623px" /></div>

        <div className='list1'>
            <div className='xplore'>Explore Xtra <span>Furniture Stores</span> for latest 
            collection</div>

        <div className='bed'>Sofa, bed, desk, chairs, tables, there’s something so enjoyable about slowly meandering through furniture stores.</div>

        
        <div className='collection'>See Collection</div>
        
        </div>
        </div>

        <div className='unique'>
            <div className='uni'>
            <div className='unique1'>Styled <span>Furniture</span> in Unique Style</div>
            
            <div className='world'>Discover a world of comfort and style with our handcrafted furniture for every room.</div>

            <div className='shop'>Shop Now</div>
            </div>

            <div className='unique2'>
            <div className='unique3'>
            <div><img className='stool' src={wstool} alt='' /><div className='back1'>Triangle Stool</div></div>
            <div><img className='lam' src={lamp} alt='' /><div className='back1'>Cone Lamp</div></div>
            </div>   
 
            <div className='unique4'> 
            <div><img className='lam' src={desk} alt='' /><div className='back1'>Desk Lamp</div></div>
            <div><img className='lam' src={sofa} alt='' /><div className='back1'>Sofa Chair</div></div>
            </div>
            </div>
        </div>

        <div className='longSofa'>
            <div className='long'>
                <img className='sofa' src={longsofa} alt='' />
            </div>

            <div className='solution'>
                <div className='wooden'>Solution for all your Wooden <span>Furniture</span> needs collection</div>

            <div className='collection'>See Collections</div>
            </div>
        </div>

        <div className='arrivals'>
            <div className='new'>New Arrival</div>

            <div className='popular'>Popular <span>Furniture</span></div>

            <div className='images'>
                <div><img className='images1' src={modern} alt='' /><div className='back'>Modern Lounge</div></div>

                <div><img className='images1' src={star} alt='' /><div className='back'>Sun Clock</div></div>

                <div><img className='images1' src={wstool} alt='' /><div className='back'>Triangle Stool</div></div>

                <div><img className='images1' src={clock2} alt='' /><div className='back'>Stone Clock</div></div>

                <div><img className='images1' src={executive2} alt='' /><div className='back'>Modern Chair</div></div>

                <div><img className='images1' src={lamp3} alt='' /><div className='back'>Drop Lamp</div></div>
            </div>
        </div>

        <div className='maindesign'>
        <div className='design'>
        <div className='flower2'>
                <div className='arrive'>New Arrived</div>
                <p className='vase'>Flower Vase</p>
                <div className='shop1'>Shop Now</div>
            </div>

            <div className='flower1'>
            <img className='imgs' src={flower} alt='' />
            </div>
            </div>

            <div className='design'>
            <div className='flower3'>
                <div className='arrive'>New Arrived</div>
                <p className='vase'>Flower Vase</p>
                <div className='shop1'>Shop Now</div>
            </div>

            <div className='flower1'>
            <img className='imgss' src={clock} alt='' />
            </div>
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

        <div className='borders'>
            <div className='border1'>
                <div className='imgdiv'>
                    <img className='imgA' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon11.png" data-src="" alt="" />
                </div>

                <div className='shipping'>FREE SHIPPING WORLDWIDE</div>

                <div className='shipping2'>
                <p>We offer free shipping via Standard Shipping on orders over $200.00</p>
                </div>
            </div>

            <div className='border1'>
                <div className='imgdiv'>
                <img className='imgA' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon13.png" data-src="" alt="" />
                </div>

                <div className='shipping'>MONEY BACK GUARANTEE</div>

                <div className='shipping2'>If you're not satisfied with our product, we'll refund the purchase price.</div>
            </div>

            <div className='border1'>
                <div className='imgdiv'>
                <img className='imgA' src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/icon12.png" data-src="" alt="" />
                </div>

                <div className='shipping'>ONLINE FRIENDLY SUPPORT 24/7</div>

                <div className='shipping2'>Our friendly support team is available to help you 24 hours a day in whole week.</div>
            </div>
        </div>

        <Footer />
        </div>
    )
}

export default Home;