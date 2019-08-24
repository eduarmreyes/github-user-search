import React from "react";
import "../App.css";
import Form from "./form";

class Home extends React.Component {
  handleSearch = searchTerm => {
    this.props.history.push(`/?q=${searchTerm}`);
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

export default Home;
