import { Reducer } from "react";
import { AppState } from "../../Model";
import {
  AppAction,
  CLEAR_MOVIE_LIST,
  FETCHING_MOVIE_LIST,
  SET_MOVIE_LIST,
} from "../Action/AppAction";

const initialState: AppState = {
  movieList: { data: [], isLoading: true, error: "" },
};

export const AppReducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCHING_MOVIE_LIST:
      return {
        ...state,
        movieList: { data: [], isLoading: true, error: "" },
      };
    case SET_MOVIE_LIST:
      return {
        ...state,
        movieList: { data: action.payload, isLoading: true, error: "" },
      };
    case CLEAR_MOVIE_LIST:
      return {
        ...state,
        movieList: { data: [], isLoading: true, error: "" },
      };
    default:
      return state;
  }
};
