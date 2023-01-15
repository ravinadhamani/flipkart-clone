import React from "react";
import searchicon from "../assets/searchicon.png";
import shoppingicon from "../assets/shoppingicon.png"
import down from "../assets/down.png"

const Header = () => {

    return (
        <header className="header">
            <h1 className="logo">Flipkart</h1>
            <input className="searchBox" type="text" placeholder="Search for products, brands and more" />
            <img className="searchIcon" src={searchicon} alt={searchicon} />
            <button className="LoginBtn">Login</button>
            <button className="sellerBtn">Become a Seller</button>

            <li class="dropdown">
                <a href="javascript:void(0)" className="dropbtn">More
                </a>
                <img src={down} alt={down} className="down" />
                <div class="dropdown-content">
                    <a href="https://www.flipkart.com/communication-preferences/push?t=all">Notifications</a>
                    <a href="https://www.flipkart.com/helpcentre">Support</a>
                    <a href="https://advertising.flipkart.com/login?returl=/?otracker=ch_vn_advertise_header">Advertise</a>
                    <a href="https://advertising.flipkart.com/login?returl=/?otracker=ch_vn_advertise_header">Download App</a>
                </div>
            </li>
            <img src={shoppingicon} alt={shoppingicon} className="shoppingicon" />
            <button className="cartBtn">Cart</button>


        </header>
    );
};

export default Header;
