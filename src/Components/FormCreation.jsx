import React from "react";
import "./main.css";

const handleFormVerification = (e) => {
  const errorMessage = document.querySelector(".Message");
  const userNameInput = document.getElementById("Name");
  const userName = userNameInput.value;

  // password
  const passwordErrorMessage = document.querySelector(".message1");
  const passwordInputValue = document.getElementById("password").value;

  var RegexFirstName = /^[a-zA-Z]+$/;

  if (!userName) {
    errorMessage.innerHTML = "Username should be inserted";
    setTimeout(function () {
      errorMessage.innerHTML = "";
    }, 2000);
  } else if (RegexFirstName.test(userName) === false) {
    errorMessage.innerHTML = "it should start with a capital letter";
    setTimeout(function () {
      errorMessage.innerHTML = "";
    }, 2000);
  } else {
    errorMessage.innerHTML = "Olympus" + userName;
  }

var strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

  if (!passwordInputValue) {
    passwordErrorMessage.innerHTML = "Password can't be empty";
    setTimeout(function () {
      passwordErrorMessage.innerHTML = "";
    }, 2000);
  } else if (strongRegex.test(passwordInputValue) === false) {
    passwordErrorMessage.innerHTML =
      "Password should begin with a Capital letter";
    setTimeout(function () {
      passwordErrorMessage.innerHTML = "";
    }, 2000);
  } else {
    passwordErrorMessage.innerHTML = "good";
  }
};

const FormCreation = () => {
  return (
    <React.Fragment>
      <main>
        <div className="section">
          <form>
            <p className="Message"></p>
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" placeholder="Your Name" />
            <p className="message1"></p>
            <label htmlFor="Name">Password</label>
            <input type="password" id="password" placeholder="Your Password" />
            <label htmlFor="Name">Phone Number</label>
            <input type="text" id="number" placeholder="Your Phone Number" />

            <input
              className="submit"
              type="button"
              value="Submit"
              onClick={handleFormVerification}
            />
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default FormCreation;
