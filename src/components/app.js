"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './home.js';
import {Card} from './card.js';
import {Footer} from './footer.js';
import {Books} from './books.js';
import BookStore from '../stores/bookStore';
import {Authors} from './authors.js';
import AuthorStore from '../stores/authorStore.js';


export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bookList:[],
            authorList:[]
        };
    }

    render() {
        return(
            <div>
                <Home />
                <Card />
                <br />
    
                <Switch>
                    <Route path='/books' render={(props) => (<Books {...props} bookList={this.state.bookList} />)}/>
                    <Route path='/authors' render={(props) => (<Authors {...props} authorList={this.state.authorList} />)}/>
                </Switch>
                <Footer />
            </div>
        );
    }
    // Responds to any change
    componentDidMount(){
        BookStore.addChangeListener(this._onBookChange.bind(this));
        AuthorStore.addChangeListener(this._onAuthorChange.bind(this));
    }
    // Responds to any change
    componentWillUnmount(){
        BookStore.removeChangeListener(this._onBookChange.bind(this));
        AuthorStore.removeChangeListener(this._onAuthorChange.bind(this));
    }
    // Sets intial state
    _onBookChange(){
        this.setState({bookList: BookStore.getAllBooks()});
    }
    // Sets intial state
    _onAuthorChange(){
        this.setState({authorList: AuthorStore.getAllAuthors()});
    }
}
