import React, { useState } from "react";
import Book from "../components/ui/Book";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

export default function BookInfo({ books, add, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBooktoCart(book) {
    add(book);
  }

  function bookExistsOnCart() {
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating}></Rating>
                <div className="book__selected--price">
                  <Price book={book}></Price>
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus dolorum temporibus pariatur nostrum facilis. A
                    quibusdam voluptatem neque corporis repellendus mollitia
                    doloremque modi, alias nesciunt libero consequuntur
                    voluptatibus nulla delectus.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus dolorum temporibus pariatur nostrum facilis. A
                    quibusdam voluptatem neque corporis repellendus mollitia
                    doloremque modi, alias nesciunt libero consequuntur
                    voluptatibus nulla delectus.
                  </p>
                </div>
                {bookExistsOnCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBooktoCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id}></Book>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
