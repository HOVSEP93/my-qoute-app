import React, { useState } from "react";
import axios from "axios";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

import "./App.scss";

const App = () => {
  const [theAuthor, setTheAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setTheAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <button onClick={getQuote} className="button">
        Get Quote
      </button>

      <br />

      {quote && <q>{quote}</q>}
      {theAuthor && <p>-{theAuthor}</p>}

      {quote && (
        <div className="share">
          Share to
          <a
            id="icon"
            href={`http://twitter.com/intent/tweet?text="${quote}" ${theAuthor}`}
            target="_blank"
            rel="noopener noreferrer"
            title="share on twitter"
          >
            <AiFillTwitterSquare />
          </a>
        </div>
      )}
      <div className="footer">
        by me a burger
        <a
          id="icon"
          href="https://www.buymeacoffee.com/Hovsep93"
          target="_blank"
          rel="noopener noreferrer"
          title="share on twitter"
        >
          <FaHamburger />
        </a>
      </div>
    </React.Fragment>
  );
};

export default App;
