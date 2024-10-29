import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            <div className="book">
              <a href="">
                <figure className="book__img--wrapper">
                  <img
                    src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                    className="book__img"
                  />
                </figure>
              </a>
              <div className="book__title">
                <a href="" className="book__title--link">
                  Atomic Habits
                </a>
              </div>
              <div className="book__ratings">
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                <FontAwesomeIcon icon="star-half-alt"></FontAwesomeIcon>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$15.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}