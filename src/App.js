import React from "react";
import "./App.css";
import iconStar from "./images/icon-star.svg";

const App = () => {
  const rating = document.querySelectorAll(".rating li");
  const [valor, setValor] = React.useState("");
  const [isSubmited, setIsSubmited] = React.useState(false);

  function handleClick(e) {
    rating.forEach((li) => {
      li.classList.remove("active");
    });

    e.target.classList.add("active");
    setValor(e.target.value);
  }

  function handleSubmit() {
    console.log(valor);
    setIsSubmited(true);
  }

  return (
    <div className="App">
      {!isSubmited && (
        <div className="box">
          <div className="star">
            <img src={iconStar} alt="icon star" />
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

      {isSubmited && <ThankYou setIsSubmited={setIsSubmited} />}
    </div>
  );
};

const ThankYou = ({ setIsSubmited }) => {
  return (
    <div>
      <button onClick={() => setIsSubmited(false)}>GO BACK</button>
    </div>
  );
};

export default App;
