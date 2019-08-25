/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import FormSearch from "./_form_search";
import Results from "./results";

class Search extends React.Component {
  state = { searchTerm: "", userData: {} };

  async getUserData(searchTerm) {
    return await fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        return data;
      });
  }

  componentDidMount() {
    this.getUserData(this.props.searchTerm).then(data => {
      this.setState({ userData: data });
    });
  }

  render() {
    return (
      <div>
        <header
          css={css`
            border-top: 2rem solid #333;
          `}
        >
          <form
            onSubmit={this.handleSearch}
            css={css`
              max-width: 1040px;
              margin: auto;
              input {
                width: 90%;
              }
            `}
          >
            <FormSearch searchTerm={this.props.searchTerm} />
          </form>
        </header>
        <div
          css={css`
            max-width: 1040px;
            margin: auto;
          `}
        >
          <h3>
            {Boolean(this.state.userData.total_count)
              ? new Intl.NumberFormat("en-US").format(
                  this.state.userData.total_count
                )
              : 0}{" "}
            users
          </h3>
          {Boolean(this.state.userData.items) &&
            this.state.userData.items.map(user => {
              return <Results user={user} />;
            })}
        </div>
      </div>
    );
  }
}

export default Search;
