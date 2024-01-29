import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  //sort: "age", "name"
  const [sort, setSort] = useState("age");

  // filter: "all", "men", "women"
  const [filter, setFilter] = useState("all");

  return (
    <>
      <header>
        <h1>Array function magic </h1>
        <div className="legend-container">
          <fieldset>
            <legend>Filter</legend>
            <button
              className={`active ${
                filter === "all" ? "active-btn--highlight" : ""
              }`}
              onClick={() => {
                setFilter("all");
              }}
            >
              All
            </button>
            <button
              className={`active ${
                filter === "men" ? "active-btn--highlight" : ""
              }`}
              onClick={() => {
                setFilter("men");
              }}
            >
              Men
            </button>
            <button
              className={`active ${
                filter === "women" ? "active-btn--highlight" : ""
              }`}
              onClick={() => {
                setFilter("women");
              }}
            >
              Women
            </button>
          </fieldset>
          <fieldset>
            <legend>Sort</legend>
            <button
              className={`active ${
                sort === "name" ? "active-btn--highlight" : ""
              }`}
              onClick={() => {
                setSort("name");
              }}
            >
              By Name
            </button>
            <button
              className={`active ${
                sort === "age" ? "active-btn--highlight" : ""
              }`}
              onClick={() => {
                setSort("age");
              }}
            >
              By Age
            </button>
          </fieldset>
        </div>
      </header>
      <main>
        <section className="card-list">
          {users
            .filter((user) => {
              if (filter === "all") {
                return true;
              }
              if (filter === "men") {
                return user.gender === "male";
              }
              if (filter === "women") {
                return user.gender === "female";
              }
              return false;
            })
            .sort((a, b) => {
              if (sort === "age") {
                return a.dob.age - b.dob.age;
              }
              if (sort === "name") {
                return a.name.last.localeCompare(b.name.last);
              }
            })
            .map((user) => {
              return <Card key={user.email} user={user} />;
            })}
        </section>
      </main>
    </>
  );
}

export default App;
