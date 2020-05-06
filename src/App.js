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
        const node = document.createElement("tr");
        let string = "";

        //MAKE IT MORE DYNAMIC
        string += `<td>${element.first_name}</td>`;
        string += `<td>${element.last_name}</td>`;
        string += `<td>${element.email}</td>`;

        node.innerHTML = string;
        list.appendChild(node);
      });
    }
  };

  return (
    <div>
      {displayUsers()}
      <table className="table is-bordered is-hoverable">
        <tbody id="parentElement"></tbody>
      </table>
    </div>
  );
};

export default App;
