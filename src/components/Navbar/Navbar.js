import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import logo from '../../imgs/Bianca Eugênio - Logotipo Horizontal - PNG.png';

class Navbar extends Component {
    render(){
        return(
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
                <p className="h5 my-0 me-md-auto fw-normal">
                    <a href="/" className="text-decoration-none">
                        <img src={logo} width="200" alt="..."/>
                    </a>
                </p>
                <nav className="my-2 my-md-0 me-md-3">
                    {MenuItems.map((item)=>{
                        return(
                            <a key={item.key} className={item.cName} href={item.url} title={item.title}>{item.title}</a>
                        )
                    })}
                </nav>
                <a href="https://www.instagram.com/biancaceugenio/?hl=pt-br" target="_blank" rel="noreferrer"><i className="fab fa-instagram fs-3 color-bianca1"></i></a>
            </header>
        )
    }
}

export default Navbar;
