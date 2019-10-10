import React from 'react';
import './Header.css';
import Calculate from "../Calculate/Calculate";

class Header extends React.Component {

    imageSrc = "https://i2-prod.birminghammail.co.uk/news/midlands-news/article9784315.ece/ALTERNATES/s615b/Freddo.png"

    render() {
        return (
            <div>
                <Calculate />
                <img src={this.imageSrc} alt=""/>
            </div>
        )
    }
}

export default Header