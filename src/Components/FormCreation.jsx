import React, { useState } from "react";
import FormReceive from "./FormReceive";
import "./main.css";

const FormCreation = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const handleFormVerification = (e) => {
    const errorMessage = document.querySelector(".Message");
    const userNameInput = document.getElementById("Name");
    const userName = userNameInput.value;

    // password
    // const passwordErrorMessage = document.querySelector(".message1");
    // const passwordInputValue = document.getElementById("password").value;

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

    // var strongRegex = new RegExp(
    //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    // );

    // if (!passwordInputValue) {
    //   passwordErrorMessage.innerHTML = "Password can't be empty";
    //   setTimeout(function () {
    //     passwordErrorMessage.innerHTML = "";
    //   }, 2000);
    // } else if (strongRegex.test(passwordInputValue) === false) {
    //   passwordErrorMessage.innerHTML =
    //     "Password should begin with a Capital letter";
    //   setTimeout(function () {
    //     passwordErrorMessage.innerHTML = "";
    //   }, 2000);
    // } else {
    //   passwordErrorMessage.innerHTML = "good";
    // }

    setName({ name: e.target.value });
    setpassword({ password: e.target.value });

    console.log(name);
    console.log(password);

    setName("");
    setpassword("");
  };

  let data = { name,password };

  return (
    <React.Fragment>
      <main>
        <div className="section">
          <form>
            <p className="Message"></p>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p className="message1"></p>
            <label htmlFor="Name">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Your Password"
              onChange={(e) => setpassword(e.target.value)}
            />
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
      <FormReceive data={data}></FormReceive>
    </React.Fragment>
  );
};

export default FormCreation;
