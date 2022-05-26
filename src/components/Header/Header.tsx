import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(history.location.pathname);
    history.listen((event) => {
      setPath(event.pathname);
    });
  }, []);

  const mainPageHandler = () => {
    history.goBack();
  };
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          {path === "/" ? (
            "Movie List"
          ) : (
            <button className="count-pill" onClick={mainPageHandler}>
             {`< Main Page`}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
