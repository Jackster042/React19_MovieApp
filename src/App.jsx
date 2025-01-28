import { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async () => {
    try {
      const res = await fetch(API_BASE_URL, API_OPTIONS);
      console.log(res, "res");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

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
