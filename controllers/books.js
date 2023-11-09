import { Router } from 'express';
import Book from '../models/book';

const booksRouter = Router();

booksRouter.get('/', async (_req, res) => {
  const books = await Book.find({});

  res.json(books);
});

booksRouter.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'book does not exist' });
  }
});

booksRouter.post('/', async (req, res) => {
  const { title, author, summary } = req.body;

  const book = new Book({
    title,
    author,
    summary,
  });

  const savedBook = await book.save();

  res.status(201).json(savedBook);
});

booksRouter.put('/:id', async (req, res) => {
  const { title, author, summary } = req.body;

  const bookDetails = {
    title,
    author,
    summary,
  };

  const book = await Book.findById(req.params.id);

  if (book) {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      bookDetails,
      {
        new: true,
      },
    );

    res.json(updatedBook);
  } else {
    res.status(404).json({ error: 'book does not exist' });
  }
});

booksRouter.delete('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'book does not exist' });
  }
});

export default booksRouter;
