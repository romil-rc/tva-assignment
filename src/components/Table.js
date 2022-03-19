import { useState } from "react";

import search from "../assets/search.svg";
import { UserData } from "./UserData";
import ascdsc from "../assets/chevron-expand.svg";

const Table = ({ people }) => {
  const [searchText, setSearchText] = useState("");

  const userDetail = () => <UserData />;

  const showPersonData = people
    .filter((i) =>
      i.first_name
        .concat(i.last_name)
        .toLowerCase()
        .includes(searchText.toLowerCase())
    )
    .map((person) => (
      <tr key={person.id}>
        <td>
          <a
            href={`/users/${person.id}`}
            onClick={userDetail}
            style={{ color: "black", textDecorationLine: "none" }}
          >
            {/* <a href={`/user/${person.id}`}> */}
            {person.first_name}
          </a>
        </td>
        <td>{person.last_name}</td>
        <td>{person.age}</td>
        <td>{person.email}</td>
        <td>
          <a href={person.web} style={{ textDecorationLine: "none" }}>
            {person.web}
          </a>
        </td>
      </tr>
    ));

  const setPeople = () => showPersonData;

  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = people.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPeople(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = people.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPeople(sorted);
      setOrder("ASC");
    }
  };
  const sortingAge = (col) => {
    if (order === "ASC") {
      const sortedAge = people.sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setPeople(sortedAge);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sortedAge = people.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setPeople(sortedAge);
      setOrder("ASC");
    }
  };
  return (
    <div className="m-4">
      <div className="text-start">
        <h1>Users</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Search by first or last name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <img className="search-icon" src={search} alt="search" />
      </div>
      <div>
        <table className="table">
          <thead className="table-light">
            <tr>
              <th onClick={() => sorting("first_name")}>
                First Name <img src={ascdsc} alt="" />
              </th>
              <th onClick={() => sorting("last_name")}>
                Last Name <img src={ascdsc} alt="" />
              </th>
              <th onClick={() => sortingAge("age")}>
                Age <img src={ascdsc} alt="" />
              </th>
              <th onClick={() => sorting("email")}>
                Email <img src={ascdsc} alt="" />
              </th>
              <th onClick={() => sorting("web")}>
                Website <img src={ascdsc} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>{showPersonData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
