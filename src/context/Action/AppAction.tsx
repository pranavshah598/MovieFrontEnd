import { Movie } from "../../Model";

export const FETCHING_MOVIE_LIST = "FETCHING_MOVIE_LIST";
type FetchingMovieAction = {
  type: typeof FETCHING_MOVIE_LIST;
};

export const fetchMovieList = (): FetchingMovieAction => ({
  type: FETCHING_MOVIE_LIST,
});

export const SET_MOVIE_LIST = "SET_MOVIE_LIST";
type SetMovieAction = {
  type: typeof SET_MOVIE_LIST;
  payload: Movie[];
};

export const setMovies = (payload: Movie[]): SetMovieAction => ({
  type: SET_MOVIE_LIST,
  payload,
});

export const CLEAR_MOVIE_LIST = "CLEAR_MOVIE_LIST";
type ClearMovieAction = {
  type: typeof CLEAR_MOVIE_LIST;
};

export const clearMovies = (): ClearMovieAction => ({
  type: CLEAR_MOVIE_LIST,
});

export type AppAction = FetchingMovieAction | SetMovieAction | ClearMovieAction;
