import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  return (
    <div className="book">
      <Link to="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon key={index} icon="star"></FontAwesomeIcon>
        ))}
        {!Number.isInteger(book.rating) && (
          <FontAwesomeIcon icon="star-half-alt"></FontAwesomeIcon>
        )}
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            <span className="book__price">${book.salePrice.toFixed(2)}</span>
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
}
