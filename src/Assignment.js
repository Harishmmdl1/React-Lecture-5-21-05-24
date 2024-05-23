import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const Assignment = () => {
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");
  const [addOne, setAddOne] = useState("");
  const [addTwo, setAddTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [eFName, setEFName] = useState("");
  const [eLName, setELName] = useState("");
  const [relation, setRelation] = useState("");
  const [eEMail, setEEMail] = useState("");
  const [ePhone, setEPhone] = useState("");
  // const [education, setEducation] = useState("");
  // const [graduationDate, setGraduationDate] = useState("");
  // const [sCity, setSCity] = useState("");
  // const [sState, setSState] = useState("");
  // const [scountry, setSCountry] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    // event.target.reset();

    if (
      fName &&
      mName &&
      lName &&
      gender &&
      country &&
      phone &&
      eMail &&
      addOne &&
      addTwo &&
      city &&
      state &&
      pinCode &&
      eFName &&
      eLName &&
      relation &&
      eEMail &&
      ePhone
    ) {
      console.log("You are successfully sumbitted....$$$");
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleReset = () => {
    setFName("");
    setMName("");
    setLName("");
    setGender("");
    setDob("");
    setCountry("");
    setPhone("");
    setEMail("");
    setAddOne("");
    setAddTwo("");
    setCity("");
    setState("");
    setPinCode("");
    setEFName("");
    setELName("");
    setRelation("");
    setEEMail("");
    setEPhone("");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div>
        <h1 className="text-center m-5">College Admissions Form</h1>
        <h4 className="ms-3">Enter your admission information below</h4>
        <form
          className="border border-black border-2 p-5 d-flex justify-content-center align-items-center"
          onSubmit={handleForm}
          onReset={handleReset}
        >
          <div>
            <h4>Name</h4>
            <div className="d-flex">
              <div className="m-4">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  autoComplete="off"
                  onChange={(event) => {
                    setFName(event.target.value);
                  }}
                  value={fName}
                />
                <br />
                <label htmlFor="fname">First name </label>
              </div>
              <div className="m-4">
                <input
                  type="text"
                  id="mname"
                  name="mname"
                  autoComplete="off"
                  onChange={(event) => {
                    setMName(event.target.value);
                  }}
                  value={mName}
                />
                <br />
                <label htmlFor="mname">Middle name </label>
              </div>
              <div className="m-4">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  autoComplete="off"
                  onChange={(event) => {
                    setLName(event.target.value);
                  }}
                  value={lName}
                />
                <br />
                <label htmlFor="lname">Last name </label>
              </div>
            </div>
            <h4>
              <label htmlFor="male">Birth Date</label>
            </h4>
            <div className="m-4">
              <input
                type="date"
                name="dob"
                id="dob"
                min="1900-01-01"
                max="2023-12-31"
                autoComplete="off"
                onChange={(event) => {
                  setDob(event.target.value);
                }}
                value={dob}
              />
            </div>

            <div className="d-flex my-4">
              <div>
                <h4>Gender</h4>

                <div className="m-3">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="m-2 form-check-input"
                    defaultChecked
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                  <label htmlFor="male" className="form-check-label fs-5 pe-4">
                    Male
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="m-2 form-check-input"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                  <label
                    htmlFor="female"
                    className="form-check-label fs-5 pe-4"
                  >
                    Female
                  </label>
                </div>
              </div>

              <div>
                <h4>Of which country are you a citizen?</h4>
                <div>
                  <select
                    id="country"
                    name="country"
                    className="ms-5 mt-2 w-75 fs-5"
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                    value={country}
                  >
                    <option value="India" defaultChecked>
                      India
                    </option>
                    <option value="USA">USA</option>
                    <option value="Russia">Russia</option>
                    <option value="UK">UK</option>
                    <option value="Arab">Arab</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex my-4">
              <div>
                <h4>
                  <label htmlFor="phone">Phone</label>
                </h4>
                <div className="m-4">
                  <input
                    type="text"
                    id="phone"
                    placeholder="(000) 000-000"
                    name="phone"
                    autoComplete="off"
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    value={phone}
                  />
                </div>
              </div>
              <div className="ms-4">
                <h4>
                  <label htmlFor="eMail">E-mail Address</label>
                </h4>
                <div className="m-4">
                  <input
                    type="text"
                    id="eMail"
                    name="eMail"
                    autoComplete="off"
                    className="ms-4 w-100 "
                    placeholder="ex: myname@example.com"
                    onChange={(event) => {
                      setEMail(event.target.value);
                    }}
                    value={eMail}
                  />
                </div>
              </div>
            </div>
            <div className="my-4">
              <h4>Mailing Address</h4>
              <div>
                <div className="m-4">
                  <input
                    type="text"
                    id="addOne"
                    name="addOne"
                    autoComplete="off"
                    className="w-50"
                    onChange={(event) => {
                      setAddOne(event.target.value);
                    }}
                    value={addOne}
                  />
                  <br />
                  <label htmlFor="addOne">Street Address</label>
                </div>
                <div className="m-4">
                  <input
                    type="text"
                    id="addTwo"
                    name="addTwo"
                    autoComplete="off"
                    className="w-50"
                    onChange={(event) => {
                      setAddTwo(event.target.value);
                    }}
                    value={addTwo}
                  />
                  <br />
                  <label htmlFor="addTwo">Street Address Line 2</label>
                </div>
                <div className="d-flex w-50">
                  <div className="m-4 w-50">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-75"
                      autoComplete="off"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                      value={city}
                    />
                    <br />
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="m-4 w-50">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="w-75"
                      autoComplete="off"
                      onChange={(event) => {
                        setState(event.target.value);
                      }}
                      value={state}
                    />
                    <br />
                    <label htmlFor="state">State / Province</label>
                  </div>
                </div>
                <div className="m-4">
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    className="w-50"
                    autoComplete="off"
                    onChange={(event) => {
                      setPinCode(event.target.value);
                    }}
                    value={pinCode}
                  />
                  <br />
                  <label htmlFor="pinCode">Postal / Zip Code</label>
                </div>
              </div>
            </div>
            <h4>Emergency Contact</h4>
            <div className="d-flex">
              <div className="m-4">
                <input
                  type="text"
                  id="eFName"
                  name="eFName"
                  autoComplete="off"
                  onChange={(event) => {
                    setEFName(event.target.value);
                  }}
                  value={eFName}
                />
                <br />
                <label htmlFor="eFName">First name </label>
              </div>
              <div className="m-4">
                <input
                  type="text"
                  id="eLName"
                  name="eLName"
                  autoComplete="off"
                  onChange={(event) => {
                    setELName(event.target.value);
                  }}
                  value={eLName}
                />
                <br />
                <label htmlFor="eLName">Last name </label>
              </div>
            </div>
            <h4>Relationship</h4>
            <div className="m-4">
              <input
                type="text"
                id="relation"
                name="relation"
                className="w-25"
                autoComplete="off"
                onChange={(event) => {
                  setRelation(event.target.value);
                }}
                value={relation}
              />
            </div>
            <h4>
              <label htmlFor="eMail">Email</label>
            </h4>
            <div className="m-4">
              <input
                type="text"
                id="eEMail"
                name="eEMail"
                className="w-25"
                autoComplete="off"
                placeholder="ex: myname@example.com"
                onChange={(event) => {
                  setEEMail(event.target.value);
                }}
                value={eEMail}
              />
            </div>
            <h4>
              <label htmlFor="ePhone">Phone Number</label>
            </h4>
            <div className="m-4">
              <input
                type="text"
                id="ePhone"
                name="ePhone"
                className="w-25"
                autoComplete="off"
                placeholder="(000) 000-000"
                onChange={(event) => {
                  setEPhone(event.target.value);
                }}
                value={ePhone}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="sumbit" className="btn btn-success">
                Submit
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Assignment;
{
  /* <select
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
</div> */
}
