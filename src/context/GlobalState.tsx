import React, { createContext, useReducer, useEffect } from "react";
import { AppState } from "../Model";
import { fetchMovieList } from "./Action/AppAction";
import { AppReducer } from "./Reducer/AppReducer";

// initial state

export const initialState: AppState = {
  movieList: { data: [], isLoading: true, error: "" },
};

interface GlobalProviderProps {
  children: React.ReactElement;
}

export const GlobalContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

// provider components
export const GlobalProvider = (props: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
