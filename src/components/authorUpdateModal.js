"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';
import { Modal, Form } from 'react-bootstrap';
import { MDBBtn } from "mdbreact";

export class AuthorUpdateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            authorName: props.author.authorName
        }
    }

    _handleClose() {
        this.setState({show:false})
    }

    _handleShow(){
        this.setState({show:true})
    }

    _handleForm(value){
        this.setState({authorName:value})
    }

    _handleClick(){
        this.props.author.authorName = this.state.authorName;
        AuthorActions.updateAuthor(this.props.author);
        this._handleClose();
    }

    render(){
        return(
            <div>
            <MDBBtn outline color="secondary" onClick={() => this._handleShow()}>
                Update
            </MDBBtn>
            <Modal animation={true} show={this.state.show} onHide={() => this._handleClose()} style={{margin: 'auto', textAlign: 'center'}}>
                    <Modal.Header>
                        <Modal.Title style={{margin: 'auto', textAlign: 'center'}}>Update Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                          <Form.Group controlId="formName">
                            <Form.Label>Author Name</Form.Label>
                            <Form.Control className="text-center" name="authorName" onChange={(e)=>this._handleForm(e.target.value)}  type="text" value={this.state.authorName}/>
                          </Form.Group>
                            <MDBBtn outline color="secondary" type="submit" onClick ={() => this._handleClick()} style={{margin: '5px'}}>
                                Submit
                            </MDBBtn>
                            <MDBBtn outline color="secondary" type="reset" value="Reset" style={{margin: '5px'}}>
                                Reset
                            </MDBBtn>
                            <MDBBtn outline color="secondary" onClick={() => this._handleClose()} style={{margin: '5px'}}>
                                Close
                            </MDBBtn>
                        </Form>
                    </Modal.Body>
            </Modal>
        </div>
    );
    }
}

AuthorUpdateModal.propTypes = {
    author: PropTypes.object.isRequired
}
