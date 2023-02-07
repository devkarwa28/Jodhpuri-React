import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/logo.svg';
import img2 from '../images/mega-img.png';
import img3 from '../images/store.svg';
import img4 from '../images/user.svg';
import img5 from '../images/heart.svg';
import img6 from '../images/cart.svg';
import menu from '../images/menu.svg'
import backimg from '../images/arrow-left.svg'
import { Offcanvas } from "bootstrap";
function Header() {

    return (
        <>
            <header>
                <div className="container2">
                    <div className="d-flex header-main">
                        <div>
                            <button class="menu-btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <img src={menu} />
                            </button>
                            <Link to='/'><img src={img1} alt="" className="logo" /></Link>
                        </div>
                        {/* off Canvas Started */}
                        <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header d-flex justify-content-between">
                                <div>
                                    <button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="">
                                        <img src={backimg} />
                                    </button>
                                    <Link to='/'><img src={img1} alt="" className="logo" /></Link>
                                </div>

                                <div>
                                    <button className="login-sm">
                                    Register / Login
                                    </button>
                                </div>

                            </div>
                            <div class="offcanvas-body">
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    Sofa
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* off Canvas Ended */}
                        <div className="search sm-none">
                            <input type="text" placeholder="Search Products, Colors & More.." />
                            <button type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <div className="store sm-none d-lg-flex">
                            <img src={img3} />
                            <span className="font-13">Stores</span>
                        </div>
                        <div className="account">
                            <Link><img src={img4} /></Link>
                            <Link><img src={img5} /></Link>
                            <Link to='/billing'><img src={img6} className="me-0" /></Link>
                        </div>

                    </div>
                    <nav className="sm-none">
                        <ul className="ul-reset">
                            <li><a href='#'>SOFA</a></li>
                            <li className='droppable'>
                                <a href='#'>LIVING</a>
                                <div className='mega-menu'>
                                    <div className="cf">
                                        <ul className="ul-reset">
                                            <h3>Sofa Sets</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <li><img src={img2} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='droppable'>
                                <a href='#'>BEDROOM</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>DINING</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>STORAGE</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>STUDY</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>TOP DEALS</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;