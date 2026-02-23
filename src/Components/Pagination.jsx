import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const userPerPage = 5;

  const fetchUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const totalPage = Math.ceil(user.length / userPerPage);
  const indexOfLastUser = currentPage * userPerPage;
  const indexofFirstUser = indexOfLastUser - userPerPage;

  const currentUser = user.slice(indexofFirstUser, indexOfLastUser);

  const handleNext = () => {
    currentPage < totalPage && setCurrentpage(currentPage + 1);
  };
  const handlePrev = () => {
    currentPage > 1 && setCurrentpage(currentPage - 1);
  };
  return (
    <div className="grid grid-cols-5 mb-20">
      {currentUser.map((user) => (
        <div className="mb-20">
          <h1>{user.username}</h1>
          <p>{user.phone}</p>
          <p>{user.company.name}</p>
        </div>
      ))}
      <button onClick={handlePrev}>Prev</button>
      {currentPage}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
