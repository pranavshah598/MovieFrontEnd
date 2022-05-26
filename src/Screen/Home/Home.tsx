import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { fetchMovieList, setMovies } from "../../context/Action/AppAction";
import { GlobalContext } from "../../context/GlobalState";
import { useAxios } from "../../context/Hooks/useAxios";
import { Movie } from "../../Model";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { fetchData, response, error } = useAxios();
  const history = useHistory();
  const [selYear, setSelYear] = useState<Date | null>(null);
  const [selGenre, setSelGenre] = useState<string | undefined>(undefined);
  const [filterMovies, setFilterMovies] = useState<Movie[]>(
    state.movieList.data
  );
  useEffect(() => {
    dispatch(fetchMovieList());
    fetchData({
      method: "GET",
      url: "https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies",
    });
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(setMovies([]));
    }
    if (response) {
      const movies = response as Movie[];
      dispatch(setMovies(movies));
      setFilterMovies(movies);
    }
  }, [response, error]);

  const movieSelection = (selMovie: Movie) => {
    history.push({ pathname: `/movie/${selMovie.name}` });
  };

  const handleGenreChange = (event: SelectChangeEvent) => {
    setSelGenre(event.target.value as string);
  };

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Movies</h1>
          <span className="count-pill">
            {filterMovies.length}{" "}
            {filterMovies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        <Accordion style={{ marginBottom: 10 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                display: "flex",
                padding: 5,
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DatePicker
                    views={["year"]}
                    label="Year"
                    value={selYear}
                    onChange={(newValue) => {
                      setSelYear(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
              <Box sx={{ minWidth: 120, marginLeft: 5 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selGenre}
                    label="Genre"
                    onChange={handleGenreChange}
                    style={{ minWidth: 120 }}
                  >
                    {[...new Set(state.movieList.data.map((s) => s.genre))].map(
                      (s) => (
                        <MenuItem value={s}>{s}</MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
              <Button
                variant="contained"
                style={{ marginLeft: 20, alignSelf: "center" }}
                onClick={() => {
                  console.log(selYear);
                  console.log(selGenre);
                  let newFilterMovies = [...state.movieList.data];
                  newFilterMovies = selGenre
                    ? newFilterMovies.filter((s) => s.genre === selGenre)
                    : newFilterMovies;
                  newFilterMovies = selYear
                    ? newFilterMovies.filter(
                        (s) => s.productionYear === selYear.getFullYear()
                      )
                    : newFilterMovies;
                  setFilterMovies(newFilterMovies);
                }}
              >
                Submit
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>

        {filterMovies.length > 0 ? (
          <div className="movie-grid">
            {filterMovies.map((s) => (
              <MovieCard key={s.name} movie={s} onClick={movieSelection} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
