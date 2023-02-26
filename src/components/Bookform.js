import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const Bookform = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(title, auther);
    addBook(title, auther);
    setTitle("");
    setAuther("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book Title"
          value={auther}
          onChange={(e) => setAuther(e.target.value)}
          required
        />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
};

export default Bookform;
