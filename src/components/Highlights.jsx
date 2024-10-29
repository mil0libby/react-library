import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

export default function Highlights({ icon, heading, description }) {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
              subtitle="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open"></FontAwesomeIcon>}
              subtitle="10,000+ Books"
              para="Library has books in all your favorite catagories."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
              subtitle="Affordable"
              para="Get your hands on populare books for as little as $10."
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
}
