import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="FAQ">
      <Helmet>
        <title>FAQ - Assisto</title>
        <meta name="title" content="" />
      </Helmet>
      <div className="faq fadeInUp">
        <h2 className="question">Question1</h2>
        <h2
          className="answer"
          dangerouslySetInnerHTML={{ __html: "Answer1" }}
        ></h2>
      </div>
      {faq.map((faq, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <h2 className="question">{faq.question}</h2>
            <h2
              className="answer"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></h2>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
