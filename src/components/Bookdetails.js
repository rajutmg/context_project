import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Bookdetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="auther">{book.auther}</div>
    </li>
  );
};

export default Bookdetails;
