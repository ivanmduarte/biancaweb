import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    render(){
        return(
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
                <p className="h5 my-0 me-md-auto fw-normal"><a href="/" className="text-decoration-none text-consultoria">Bianca Eugênio</a></p>
                <nav className="my-2 my-md-0 me-md-3">
                    {MenuItems.map((item)=>{
                        return(
                            <a key={item.key} className={item.cName} href={item.url} title={item.title}>{item.title}</a>
                        )
                    })}
                </nav>
                <a href="https://www.instagram.com/biancaceugenio/?hl=pt-br" target="_blank"><i className="fab fa-instagram fs-3 text-consultoria"></i></a>
            </header>
        )
    }
}

export default Navbar;
