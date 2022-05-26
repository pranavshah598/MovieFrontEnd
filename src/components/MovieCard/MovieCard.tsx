import React from "react";
import { Movie } from "../../Model";

interface MovieCardProps {
  movie: Movie;
  onClick: (selMovie: Movie) => void;
}

export const MovieCard = (props: MovieCardProps) => {
  const { movie, onClick } = props;
  return (
    <div key={movie.name} className="movie-card" onClick={() => onClick(movie)}>
      <div className="overlay"></div>
      <img
        src={`https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg`}
        alt={movie.image}
      />
      <div style={styles.detailContainer}>
        <div style={styles.title}>{movie.name}</div>
        <div style={styles.genreContainer}>
          <div>Genre :</div>
          <div style={styles.genreTitle}>{movie.genre}</div>
        </div>
        <div style={styles.genreContainer}>
          <div>Year :</div>
          <div style={styles.genreTitle}>{movie.productionYear}</div>
        </div>
      </div>
    </div>
  );
};

const styles: {
  [name: string]: React.CSSProperties;
} = {
  detailContainer: {
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  genreContainer: {
    display: "flex",
    fontSize: 15,
  },
  genreTitle: {
    marginLeft: 10,
    color: "#21d07a",
  },
};
