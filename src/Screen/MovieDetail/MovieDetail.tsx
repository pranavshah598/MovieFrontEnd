import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "../../Model";

export const MovieDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { state } = useContext(GlobalContext);
  const [selMovie, setSelMovie] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    if (name) {
      const selMovie = state.movieList.data.find((s) => s.name === name);
      selMovie && setSelMovie(selMovie);
    }
  }, [name]);

  return (
    <div className="movie-page">
      <div className="container">
        <h1
          className="heading"
          style={{ textAlign: "center", marginBottom: 10 }}
        >
          {name || ""}
        </h1>
        {selMovie && (
          <div
            className="movie-card"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={`https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg`}
              alt={selMovie.image}
              style={{ height: 400, objectFit: "contain" }}
            />
            <div style={styles.genreContainer}>
              <div style={styles.leftLabel}>Genre :</div>
              <div style={styles.genreTitle}>{selMovie.genre}</div>
            </div>
            <div style={styles.genreContainer}>
              <div style={styles.leftLabel}>Year :</div>
              <div style={styles.genreTitle}>{selMovie.productionYear}</div>
            </div>
            <div style={styles.genreContainer}>
              <div style={styles.leftLabel}>Synopsis Short :</div>
              <div style={styles.genreTitle}>{selMovie.synopsisShort}</div>
            </div>
            <div style={styles.genreContainer}>
              <div style={styles.leftLabel}>Synopsis :</div>
              <div style={styles.genreTitle}>{selMovie.synopsis}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles: {
  [name: string]: React.CSSProperties;
} = {
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  leftLabel: {
    width: 200,
  },
  genreContainer: {
    display: "flex",
    fontSize: 18,
    fontWeight: "bolder",
    marginTop: 5,
  },
  genreTitle: {
    marginLeft: 10,
    color: "#21d07a",
    flex: 1,
  },
};
