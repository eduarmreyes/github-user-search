/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import FormSearch from "./_form_search";
import Results from "./results";

class Search extends React.Component {
  state = { userData: {}, currentPage: 0, totalPages: 0 };

  async getUserData(searchTerm, page = 1) {
    return await fetch(
      `https://api.github.com/search/users?q=${searchTerm}&page=${page}`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        return data;
      });
  }

  componentDidMount() {
    this.getUserData(this.props.searchTerm, Number(this.props.page) || 1).then(
      data => {
        const totalPages = data.total_count / 30;
        this.setState({
          userData: data,
          currentPage: Number(this.props.page) || 1,
          totalPages: Math.ceil(Number(totalPages)),
        });
      }
    );
  }

  handleNextPage = () => {
    if (this.state.currentPage === this.state.userData.total_count) {
      return false;
    }
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      debugger;
      window.location.assign(
        `/?q=${this.props.searchTerm}&page=${this.state.currentPage}`
      );
    });
  };

  handlePreviousPage = () => {
    if (this.state.currentPage === 1) {
      return false;
    }
    this.setState({ currentPage: this.state.currentPage - 1 }, () => {
      window.location.assign(
        `/?q=${this.props.searchTerm}&page=${this.state.currentPage}`
      );
    });
  };

  render() {
    return (
      <div>
        <header
          css={css`
            border-top: 2rem solid #333;
          `}
        >
          <nav
            css={css`
              max-width: 1040px;
              margin: 1rem auto;
            `}
          >
            <Link
              css={css`
                color: #007eff;
                -webkit-text-decoration: none;
                text-decoration: none;
              `}
              to="/"
            >
              <span role="img" aria-label="back">
                👈
              </span>{" "}
              Home
            </Link>
          </nav>
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
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <h3
                css={css`
                  padding-right: 1.5rem;
                `}
              >
                <span
                  css={css`
                    color: #6c757d;
                  `}
                >
                  {Boolean(this.state.userData.total_count)
                    ? new Intl.NumberFormat("en-US").format(
                        this.state.userData.total_count
                      )
                    : 0}{" "}
                </span>
                users
              </h3>
              {" | "}
              <p
                css={css`
                  padding-left: 1.5rem;
                  color: #6c757d;
                `}
              >
                Page{" "}
                <span
                  css={css`
                    font-weight: 700;
                    padding-right: 0.2rem;
                  `}
                >
                  {Boolean(this.state.currentPage)
                    ? new Intl.NumberFormat("en-US").format(
                        this.state.currentPage
                      )
                    : 0}
                </span>
                /
                <span
                  css={css`
                    font-weight: 700;
                    padding-left: 0.2rem;
                  `}
                >
                  {Boolean(this.state.totalPages)
                    ? new Intl.NumberFormat("en-US").format(
                        this.state.totalPages
                      )
                    : 0}
                </span>
              </p>
            </div>
            <div>
              <button
                css={css`
                  appearance: none;
                  background-position: -1px -1px;
                  background-repeat: repeat-x;
                  background-size: 110% 110%;
                  border: 1px solid rgba(27, 31, 35, 0.2);
                  border-radius: 0.25em;
                  cursor: pointer;
                  display: inline-block;
                  font-size: 14px;
                  font-weight: 600;
                  line-height: 20px;
                  padding: 6px 12px;
                  position: relative;
                  user-select: none;
                  vertical-align: middle;
                  white-space: nowrap;
                  background-color: #eff3f6;
                  background-image: linear-gradient(
                    -180deg,
                    #fafbfc,
                    #eff3f6 90%
                  );
                  margin-right: 1rem;
                  color: #24292e;
                  &:active,
                  &:focus {
                    outline: 1px solid hotpink;
                  }
                `}
                onClick={this.handlePreviousPage}
              >
                <span role="img" aria-label="hand indicating to the left">
                  👈
                </span>{" "}
                Previous page
              </button>
              <button
                css={css`
                  appearance: none;
                  background-position: -1px -1px;
                  background-repeat: repeat-x;
                  background-size: 110% 110%;
                  border: 1px solid rgba(27, 31, 35, 0.2);
                  border-radius: 0.25em;
                  cursor: pointer;
                  display: inline-block;
                  font-size: 14px;
                  font-weight: 600;
                  line-height: 20px;
                  padding: 6px 12px;
                  position: relative;
                  user-select: none;
                  vertical-align: middle;
                  white-space: nowrap;
                  background-color: #eff3f6;
                  background-image: linear-gradient(
                    -180deg,
                    #fafbfc,
                    #eff3f6 90%
                  );
                  color: #24292e;
                  &:active,
                  &:focus {
                    outline: 1px solid hotpink;
                  }
                `}
                onClick={this.handleNextPage}
              >
                Next page{" "}
                <span role="img" aria-label="hand indicating to the right">
                  👉
                </span>
              </button>
            </div>
          </div>
          {Boolean(this.state.userData.items) &&
            this.state.userData.items.map(user => {
              return <Results key={user.node_id} user={user} />;
            })}
        </div>
      </div>
    );
  }
}

export default Search;
