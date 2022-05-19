import React from "react";
import "./App.css";
import imgStar from "./images/icon-star.svg";
import imgThankYou from "./images/illustration-thank-you.svg";

const App = () => {
  const rating = document.querySelectorAll(".rating li");
  const [ratingValue, setRatingValue] = React.useState(0);
  const [isSubmited, setIsSubmited] = React.useState(false);

  function handleClick(e) {
    rating.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");

    setRatingValue(e.target.value);
  }

  function handleSubmit() {
    setIsSubmited(true);
  }

  return (
    <div className="App">
      {!isSubmited && (
        <div className="box">
          <div className="star">
            <img src={imgStar} alt="icon star" />
          </div>
          <div className="textWrapper">
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve uor offering!
            </p>
          </div>
          <div>
            <ul className="rating">
              <li onClick={handleClick} className="circle" value="1">
                1
              </li>
              <li onClick={handleClick} className="circle" value="2">
                2
              </li>
              <li onClick={handleClick} className="circle" value="3">
                3
              </li>
              <li onClick={handleClick} className="circle" value="4">
                4
              </li>
              <li onClick={handleClick} className="circle" value="5">
                5
              </li>
            </ul>
          </div>
          <button onClick={handleSubmit} className="btn">
            SUBMIT
          </button>
        </div>
      )}

      {isSubmited && (
        <ThankYou setIsSubmited={setIsSubmited} ratingValue={ratingValue} />
      )}
    </div>
  );
};

const ThankYou = ({ setIsSubmited, ratingValue }) => {
  return (
    <div>
      <div className="box">
        <div className="imgThanks">
          <img src={imgThankYou} alt="illustration" />
        </div>
        <p className="ratingValue">You selected {ratingValue} out of 5</p>
        <div className="textWrapper">
          <h1>Thank you!</h1>
          <p style={{ marginBottom: ".5rem" }}>
            We appreciate you taking the time to give a rating. If you ever need
            more support. don't hesitate to get in touch!
          </p>
        </div>
        <button onClick={() => setIsSubmited(false)} className="btn">
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default App;
