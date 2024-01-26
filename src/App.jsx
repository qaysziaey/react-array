import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <fieldset>
          <legend>Filter cards</legend>
          <button>All</button>
          <button>Male</button>
          <button>Female</button>
          <button>By name</button>
          <button>By Age</button>
        </fieldset>
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
