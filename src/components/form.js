import React from "react";

import FormSearch from "./_form_search";

class Form extends React.Component {
  handleSearch = searchTerm => {
    this.props.handleSearch(searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <label htmlFor="search_term">
          <span role="img" aria-label="seach emoji">
            🔎
          </span>{" "}
          Search over millions of users:{" "}
        </label>
        <FormSearch />
      </form>
    );
  }
}

export default Form;
