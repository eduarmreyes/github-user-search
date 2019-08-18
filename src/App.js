import React from "react";
import "./App.css";
import Form from "./components/form";

class App extends React.Component {
  state = {
    searchResult: [],
  };

  handleSearch = searchTerm => {
    console.log(searchTerm);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form handleSearch={this.handleSearch} />
        </header>
      </div>
    );
  }
}

export default App;
