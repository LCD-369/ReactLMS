"use strict"

import React from 'react';

export class Footer extends React.Component{

    render() {

      return(

        <footer className="footer mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <p className="text-center pt-2 lead">
                  Created by Team Alpha
                </p>
                <p className="text-center">
                  Copyright <span>{(new Date().getFullYear())}</span> Team Alpha - All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>

      );
    }
}
