"use strict"

import React from 'react';
import AuthorActions from '../actions/authorActions';
import { Modal, Form } from 'react-bootstrap';
import { MDBBtn } from "mdbreact";

export class AuthorModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            authorId: "",
            authorName: ""
        }
    }

    _handleClose() {
       this.setState({show:false});
   }

   _handleShow(){
       this.setState({show:true});
   }

   _handleForm(e){
       this.setState({[e.target.name]:e.target.value});
   }

   _handleClick(){
       let author ={
           authorId: this.state.authorId,
           authorName: this.state.authorName
       }
       AuthorActions.addAuthor(author);
       this._handleClose();
   }

    render() {
        return (
            <div>
              <br />
                <div className="container text-center">
                  <MDBBtn color="white-base" style={{border: "solid", borderColor: "#616161", borderRadius: "10px"}} onClick={() => this._handleShow()}>
                      Add Author
                  </MDBBtn>
                </div>
                  <Modal animation={true} show={this.state.show} onHide={() => this._handleClose()} style={{margin: 'auto', textAlign: 'center'}}>
                          <Modal.Header>
                              <Modal.Title style={{margin: 'auto', textAlign: 'center'}}>Add New Author</Modal.Title>
                          </Modal.Header>
                          <Modal.Body >
                              <Form>
                                  <Form.Group controlId="formAuthorId">
                                      <Form.Label>Author Id</Form.Label>
                                      <Form.Control className="text-center" name="authorId" onChange={(e) => this._handleForm(e)} type="text" placeholder="Enter author id" />
                                  </Form.Group>
                                  <Form.Group controlId="formAuthorName">
                                      <Form.Label>Author Name</Form.Label>
                                      <Form.Control className="text-center" name ="authorName" onChange={(e) => this._handleForm(e)} type="text" placeholder="Enter author name" />
                                  </Form.Group>
                                  <MDBBtn color="white-base" style={{border: "solid", borderColor: "#616161", borderRadius: "10px", margin: '5px'}} type="submit" onClick ={() => this._handleClick()}>
                                      Submit
                                  </MDBBtn>
                                  <MDBBtn color="white-base" style={{border: "solid", borderColor: "#616161", borderRadius: "10px", margin: '5px'}} type="reset" value="Reset">
                                      Reset
                                  </MDBBtn>
                                  <MDBBtn color="white-base" style={{border: "solid", borderColor: "#616161", borderRadius: "10px", margin: '5px'}} onClick={() => this._handleClose()}>
                                      Close
                                  </MDBBtn>
                              </Form>
                          </Modal.Body>
                  </Modal>
                <br />
            </div>
        );
    }

}
