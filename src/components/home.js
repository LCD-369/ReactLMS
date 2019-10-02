"use strict"

import React from 'react';
import {Link} from 'react-router-dom';
import { MDBAnimation } from "mdbreact";

export class Home extends React.Component{

    render() {
        return(
              <div>
                <div className="hero1">
                  <br />
                  <nav className="nav-menu">
                    <ul className="text-center">
                      <li className="nav-item"><Link to="/" className="text-white">Home</Link></li>
                      <li className="nav-item"><Link to="/authors" className="text-white">Authors</Link></li>
                      <li className="nav-item"><Link to="/books" className="text-white">Books</Link></li>
                      <li className="nav-item"><Link to="/" className="text-white">Publishers</Link></li>
                      <li className="nav-item"><Link to="/" className="text-white">Library Branchs</Link></li>
                      <li className="nav-item"><Link to="/" className="text-white">Borrowers</Link></li>
                      <li className="nav-item"><Link to="/" className="text-white">Book Loans</Link></li>
                      <li className="nav-item"><Link to="/" className="text-white">Due Dates</Link></li>
                    </ul>
                  </nav>
                    <div className="mainH1"><MDBAnimation type="flipInY">GCIT <span style={{color: "#ca3e47"}}>L</span>ibrary <span style={{color: "#ca3e47"}}>M</span>anagement <span style={{color: "#ca3e47"}}>S</span>ystem</MDBAnimation></div>
                  <br />
                </div>
                <div className="sectionHeader"><h2 className="text-center p-3">Administrator</h2></div>
              </div>
        );
    }
}
