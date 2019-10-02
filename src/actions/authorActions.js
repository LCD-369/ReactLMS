import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';
import { trackPromise } from 'react-promise-tracker';

const AuthorActions = {
    authorList:[],
    readAuthors: async function(){
        trackPromise(
        AuthorApi.getAllAuthors().then((response)=>{
            Dispatcher.dispatch({
                actionType: 'read_authors',
                data: response.data
            });
        }));
    },

    addAuthor: async function(author){
        AuthorApi.addAuthor(author);
        Dispatcher.dispatch({
            actionType: 'add_author',
            data: author
        });
    },

    updateAuthor: async function(author){
        AuthorApi.updateAuthor(author);
            Dispatcher.dispatch({
                actionType: 'update_author',
                data: author
          });
    },

    deleteAuthor: async function(id){
        AuthorApi.deleteAuthor(id);
            Dispatcher.dispatch({
                actionType: 'delete_author',
                data: id
        })
    }
}

module.exports = AuthorActions;
