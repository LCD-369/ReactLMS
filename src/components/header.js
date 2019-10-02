"use strict"
import React from 'react';
// import {Link} from 'react-router-dom';


export class Header extends React.Component{
    render() {
        return (
          <div>

            <div className="inline-block">
              <header className="header-area">
                <nav className="navbar navbar-expand-lg navbar-expand-md">
                  <div className="nav-switch">
                    <i className="fa fa-bars"></i>
                  </div>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarTogglerDemo03" aria-expanded="false">
                    <span className="text-white text-center lead">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <nav className="nav-menu">
                      <ul className="text-center">
                        <li className="nav-item active"><a href="/admin.html" className="text-white">Administrator</a></li>
                        <li className="nav-item"><a href="#" className="text-white">Borrower</a></li>
                        <li className="nav-item"><a href="#" className="text-white">Librarian</a></li>
                      </ul>
                    </nav>
                  </div>
                </nav>
              </header>
            </div>
              <div className="mainH1"></div>
              <div className="container">
            </div>
          </div>
        );
    }
}
