import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import User from "./components/User/User";
import EmptyState from "./components/EmptyState/EmptyState";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilterUsers(data.results);
      });
  }, []);

  const filterUsers = (searchString) => {
    const filtered = users.filter((user) =>
      user.name.first.includes(searchString)
    );
    setFilterUsers(filtered);
  };

  return (
    <div className="App">
      <SearchBox handleChange={filterUsers} />
      {filteredUsers.length === 0 ? (
        <EmptyState msg="No matches" />
      ) : (
        filteredUsers.map((u) => <User name={u.name.first} />)
      )}
    </div>
  );
}
