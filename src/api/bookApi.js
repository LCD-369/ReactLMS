"use strict";

import Axios from "axios";

var BookApi = {
	getAllBooks: async function () {
		return Axios.get("http://localhost:3000/api/book");
	},
	addBook: async function (book) {
		Axios.post("http://localhost:3000/api/book", book);
	},
	updateBook: async function(book){
		Axios.put(`http://localhost:3000/api/book/${book.bookId}`,book)
	},
	deleteBook:async function(id){
		Axios.delete(`http://localhost:3000/api/book/${id}`)
	}
};

module.exports = BookApi;
