import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Bookdetails from "./Bookdetails";

export const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    books.map((book) => {
      return <Bookdetails book={book} key={book.id} />;
    })
  ) : (
    <div>No Books to read . Hello Free Time :)</div>
  );
};
