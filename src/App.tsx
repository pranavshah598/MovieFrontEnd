import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { GlobalProvider } from "./context/GlobalState";
import { Home } from "./Screen/Home/Home";
import { MovieDetail } from "./Screen/MovieDetail/MovieDetail";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:name" component={MovieDetail} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
