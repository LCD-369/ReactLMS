"use strict";
import Axios from 'axios';


var AuthorApi = {
	getAllAuthors: async function(){
		return Axios.get(`http://18.225.36.233:3000/api/author`)
	},
	addAuthor: async function (author){
		Axios.post(`http://172.31.17.133:3000/api/author`, author)
	},
	updateAuthor: async function(author){
		Axios.put(`http://172.31.17.133:3000/api/author/${author.authorId}`, author)
	},
	deleteAuthor: async function(id){
		Axios.delete(`http://172.31.17.133:3000/api/author/${id}`)
	}
};

module.exports = AuthorApi;
