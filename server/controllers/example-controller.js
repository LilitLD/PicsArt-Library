const booksService = require("../service/book-service");

export const exampleController = {
    index,
    getOne,
    update,
}


const index = async (req, res) => {
    const books = booksService.findAll();
    return res.send(books);
}


const getOne = async (req, res) => {
    const bookId = req.params.id ?? '';
    const books = booksService.getById(id);
    return res.send(books);
}


const update = async (req, res) => {
    const books = booksService.update();
    return res.send(books);
}