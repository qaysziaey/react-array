import { useState } from "react";
import "./App.css";

import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState("All");

  const handleSort = () => {
    const sortUsers = users.slice(0, 2).sort((a, b) => a.age - b.age);
  };
  const handleFilter = () => {
    if (filter === true) {
      setFilter(false);
      console.log("Filter is", filter);
    } else {
      setFilter(true);
    }
  };

  return (
    <>
      <header>
        <h1>Array function magic </h1>
        <div className="legend-container">
          <fieldset>
            <legend>Sort</legend>
            <button
              style={{
                backgroundColor: filter ? "#2ed573" : "#f1f2f6",
                color: "white",
              }}
              onClick={handleFilter}
            >
              All
            </button>
            <button>Male</button>
            <button>Female</button>
          </fieldset>
          <fieldset>
            <legend>Filter</legend>
            <button>By name</button>
            <button>By Age</button>
          </fieldset>
        </div>
      </header>
      <main>
        <section className="card-list">
          {users.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
