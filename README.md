# A RESTful API for Book Management

This is a RESTful API built using Node.js and MongoDB that enables users to manage their book collections. It provides a comprehensive set of features for creating, reading, updating, and deleting (CRUD) book data.

## API Reference

| Endpoint         | Method | Description                         | Request Body                                                   | Response Body                                                                         | Status Code                                    |
| ---------------- | ------ | ----------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `/api/books`     | GET    | Retrieves a list of all books       | None                                                           | An array of book objects                                                              | 200                                            |
| `/api/books/:id` | GET    | Retrieves a specific book by its ID | None                                                           | The book object with the specified ID, or an error message if the book does not exist | 200 (if book found), 404 (if book not found)   |
| `/api/books`     | POST   | Creates a new book                  | A JSON object containing the book's title, author, and summary | The newly created book object                                                         | 201                                            |
| `/api/books/:id` | PUT    | Updates an existing book            | A JSON object containing the book's title, author, and summary | The updated book object, or an error message if the book does not exist               | 200 (if book updated), 404 (if book not found) |
| `/api/books/:id` | DELETE | Deletes an existing book            | None                                                           | None                                                                                  | 204 (if book deleted), 404 (if book not found) |

| Property  | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| `id`      | String | The book's unique identifier |
| `title`   | String | The book's title             |
| `author`  | String | The book's author            |
| `summary` | String | A brief summary of the book  |

### Example Usage

To retrieve all books:

`GET /api/books`

To retrieve a specific book by its ID, send a GET request to the /books/:id endpoint, replacing :id with the book's ID:

`GET /api/books/12345`

To create a new book, send a POST request to the /books endpoint with a JSON object containing the book's title, author, and summary:

```
POST /api/books
Content-Type: application/json

{
  "title": "The Lord of the Rings",
  "author": "J.R.R. Tolkien",
  "summary": "An epic fantasy trilogy by J.R.R. Tolkien."
}
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable Name | Description                                                | Example Value                                          |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| `MONGODB_URI` | The connection string for your MongoDB database.           | `mongodb://user:password@example.com:27018/mydatabase` |
| `PORT`        | The port on which the API server will listen for requests. | `3000`                                                 |

## Run Locally

Clone the project

```bash
  git clone https://github.com/ancxanas/brewapp-assignment.git
```

Go to the project directory

```bash
  cd brewapp-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
