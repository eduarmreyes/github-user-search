import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";

class App extends React.Component {
  state = {
    searchResult: [],
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={({ location, history }) => {
            if (Boolean(!location.search)) {
              return <Home history={history} />;
            }
            if (Boolean(location.search)) {
              const searchTerm = location.search.substring(
                3,
                location.search.length
              );
              return <Search history={history} searchTerm={searchTerm} />;
            }
          }}
        />
      </Router>
    );
  }
}

export default App;
