import { useState } from "react";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="hero-img" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
          </header>
          <SearchComponent
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
