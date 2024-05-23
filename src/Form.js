import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState("AP");
  const [gender, setGender] = useState("male");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    if (firstName && password && agree && state && gender) {
      console.log("You are successfully sumbitted....$$$");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="container ">
      <h1 className="text-center m-5">SignUp Form</h1>
      <form
        className="border border-black border-2 p-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="firstname">First name : </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={(event) => {
              setAgree(event.target.checked);
            }}
            value={agree}
          />
          <label htmlFor="agree">Please Check if You Agree....! </label>
        </div>
        <div>
          <select
            id="state"
            name="state"
            onChange={(event) => {
              setState(event.target.value);
            }}
            value={state}
          >
            <option value="AP" defaultChecked>
              AP
            </option>
            <option value="MH">MH</option>
            <option value="KL">KL</option>
            <option value="TG">TG</option>
            <option value="AR">AR</option>
            <option value="KT">KT</option>
          </select>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            defaultChecked
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
          <label htmlFor="male">Male</label>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <button type="reset">Reset</button>
          &nbsp;&nbsp;&nbsp;
          <button type="sumbit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
