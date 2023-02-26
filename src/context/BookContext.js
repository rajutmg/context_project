import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "name of the wind",
      auther: "patrick rothfuss",
      id: 1,
    },
    {
      title: "the final empire",
      auther: "bandon sanderson",
      id: 2,
    },
  ]);
  const addBook = (title, auther) => {
    setBooks([...books, { title, auther, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
