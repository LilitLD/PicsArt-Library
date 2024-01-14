const express = require('express');
const BookService = require('../services/book');
const router = express.Router();


router.get('/allbooks', async function (req, res, next) {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
})


module.exports = router;


//  example.com/books?name=aaa  GET request (search all books)
//  example.com/books  POST request (create one new book by the given request body)
//  example.com/books/:id  GET request (get a book by the given id)
//  example.com/books/:id  PUT/PATCH request (update the book by the given id using request body)



// folders controllers ->  all controllers 