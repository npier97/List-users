import React, { useEffect, useState } from "react";

const App = () => {
  const [usersList, setUsersList] = useState({});

  async function fetchData() {
    const api = "https://reqres.in/api/users?page=2";

    await fetch(api)
      .then((response) => response.json())
      .then((response) => setUsersList({ usersList: response }));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul id="list"></ul>
    </div>
  );
};

export default App;
