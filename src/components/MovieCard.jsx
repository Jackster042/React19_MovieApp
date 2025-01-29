import React from "react";

const MovieCard = ({
  movie: { title, poster_path, release_date, vote_average, original_language },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `/no-movie.png`
        }
        alt={title}
      />
      <div className="text-white mt-4">
        {title}
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="star" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span>•</span>
          <div className="lang">{original_language}</div>
          <span>•</span>
          <div className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
