import { useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import Pagination from "./Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const response = await axios.get(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );
    setPeople(response.data);
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  const indexOfLastPost = currentPage * usersPerPage; //  10
  const indexOfFirstPost = indexOfLastPost - usersPerPage; //  0
  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Table people={currentPosts} />
      <Pagination
        postsPerPage={usersPerPage}
        totalPosts={people.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
