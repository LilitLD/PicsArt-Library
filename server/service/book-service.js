const Book = require("./models/book");

export const bookService = {
    findAll,
    getById
}

function findAll() {
    return Book.find({});
}


function getById(id) {
    return Book.find({ id });
}