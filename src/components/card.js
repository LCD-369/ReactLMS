"use strict"

import React from 'react';
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";

export class Card extends React.Component{

    render() {
      return(
        <div>
        <br />
              <MDBContainer className="m-auto">
                <MDBCard>
                  <MDBCardBody><h5 className="text-center">Instructions</h5>
                  <p className="text-center">Navigate to one of the sections listed above to view, add, edit, or delete an entity from database.</p></MDBCardBody>
                </MDBCard>
              </MDBContainer>
        </div>
      );
    }
}
