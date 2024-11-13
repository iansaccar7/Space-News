import React from "react";

import logo from "../../assets/imagens/logo.jpg"

import "./styles.css"

export class Navbar extends React.Component{
    render () {
        return (
            <header>
        <nav id='navbar'>
        <div className='nav-brand'>
            <img src= {logo} alt="" />
            <h2> Space News</h2>
        </div>

        <ul className='nav-list'>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> Trending </a></li>
            <li><a href="#"> Categories </a></li>
            <li><a href="#"> About Us </a></li>
        </ul>
        </nav>
    </header>
        )
        
    } 
    
}