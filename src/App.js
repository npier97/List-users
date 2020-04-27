import React, { useEffect, useState } from "react";

const App = () => {
  const [usersList, setUsersList] = useState({});

  const fetchData = () => {
    const api = "https://reqres.in/api/users?page=2";

    fetch(api)
      .then((response) => response.json())
      .then((response) => setUsersList({ usersList: response }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayUsers = () => {
    const list = document.getElementById("parentElement");

    for (const key in usersList) {
      const values = usersList[key];
      const users = values.data;

      users.forEach((element) => {
        const node = document.createElement("ul");
        let string = "";

        for (const key in element) {
          const values = element[key];
          string += `<li>${values}</li>`;
          node.innerHTML = string;
        }
        list.appendChild(node);
      });
    }
  };

  return <div id="parentElement">{displayUsers()}</div>;
};

export default App;
