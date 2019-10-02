"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';
import {AuthorModal} from '../components/authorModal';
import {AuthorUpdateModal} from '../components/authorUpdateModal';
import { MDBBtn } from "mdbreact";
import { usePromiseTracker } from 'react-promise-tracker';


const SpinnerPage = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
      promiseInProgress &&
      <div className="container text-center mt-5">
      <div className="spinner-border" role="status"
        style={{
          width: "100px",
          height: "100px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    )
}

export class AuthorList extends React.Component{

    createAuthorRow(author){
        return (
            <tr key={author.authorId}>
                <td>{author.authorId}</td>
                <td>{author.authorName}</td>
                <td><AuthorUpdateModal author={author}></AuthorUpdateModal></td>
                <td><MDBBtn color="white-base" style={{border: "solid", borderColor: "#616161", borderRadius: "10px", margin: '5px'}} onClick={() => this._handleClick(author.authorId)}>Delete</MDBBtn></td>
            </tr>
        );
    }

    _handleClick(id) {
        AuthorActions.deleteAuthor(id);
    }

    _handleUpdate(){

    }

    componentDidMount() {
        AuthorActions.readAuthors();
    }

    // componentDidUpdate() {
    //     AuthorActions.readAuthors();
    // }

    render(){
        return(
            <div>
                <SpinnerPage />
                <div className="container mb-5">
                <AuthorModal />
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authorList.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};
