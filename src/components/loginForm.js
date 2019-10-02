"use strict"

import React from "react";
import {
  MDBContainer, MDBFreeBird, MDBEdgeHeader, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon,
  MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";


const FormPage = () => {
  return (
    <MDBContainer className="mt-3">
        <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow>
            <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded text-center">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text text-center">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-grey"
                    className="mb-3"
                    type="submit"
                  >
                    Login
                  </MDBBtn>
                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light m-auto text-center">
                    <p>Not a member? Sign Up</p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </MDBContainer>
  );
};



export default FormPage;
