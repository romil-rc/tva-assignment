import React, { useState, useEffect } from "react";
import axios from "axios";
import arrowLeft from "../assets/arrow-left.svg";

export const UserData = () => {
  let windowLink = window.location.href;
  // console.log(windowLink);
  // console.log(window.location.href.slice(0, window.location.href.lastIndexOf("/")));

  const index = windowLink.split("/").pop();
  // console.log(index);

  const [people, setPeople] = useState([]);
  // console.log(people);
  const fetchPeople = async () => {
    const response = await axios.get(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );
    setPeople(response.data[index - 1]);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const goBack = () => {
    window.location.href = window.location.href.slice(
      0,
      window.location.href.lastIndexOf("/")
    );
    // window.history.back();
  };

  return (
    <div className="text-start m-5">
      <div className="d-flex">
        <img
          src={arrowLeft}
          alt="back"
          className="arrow-left"
          style={{
            alignSelf: "start",
            marginTop: "8px",
            height: "25px",
            marginRight: "20px",
            cursor: "pointer"
          }}
          onClick={goBack}
        />
        <h2>
          Details: {people.first_name} {people.last_name}
        </h2>
        <br />
      </div>
      <div style={{ padding: "3rem" }}>
        <p>
          First Name: <b>{people.first_name}</b>
        </p>
        <hr />
        <p>
          Last Name: <b>{people.last_name}</b>
        </p>
        <hr />
        <p>
          Company Name: <b>{people.company_name}</b>
        </p>
        <hr />
        <p>
          City: <b>{people.city}</b>
        </p>
        <hr />
        <p>
          State: <b>{people.state}</b>
        </p>
        <hr />
        <p>
          Zip: <b>{people.zip}</b>
        </p>
        <hr />
        <p>
          Email: <b>{people.email}</b>
        </p>
        <hr />
        <p>
          Web: <b>{people.web}</b>
        </p>
        <hr />
        <p>
          Age: <b>{people.age}</b>
        </p>
      </div>
    </div>
  );
};
