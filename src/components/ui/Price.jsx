import React from "react";

export default function Price({ book }) {
  return (
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
  );
}
