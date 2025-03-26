import React, { useState } from "react";
import BookCard from "./components/BookCard";
import AddBook from "./AddBook/AddBook"; 
import books from "./booksData";
import "./Home.css";

const Home = () => {
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const handleAddBook = () => {
    setShowAddBookForm(true);
  };

  const handleBackToHome = () => {
    setShowAddBookForm(false);
  };

  return (
    <div className="home-container">
      {showAddBookForm ? (
        <AddBook goBack={handleBackToHome} />
      ) : (
        <div>
          <h1>Book Library</h1>
          <button
            onClick={handleAddBook}
            className="add-book-button"
          >
            Add Book
          </button>
          
          <div className="books-grid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;