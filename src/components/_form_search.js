/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

class FormSearch extends React.Component {
  state = {
    searchTerm: "",
  };
  handleInputChange = e => {
    this.setState({ searchTerm: e.currentTarget.value });
  };
  render() {
    return (
      <div
        css={css`
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
        `}
      >
        <input
          css={css`
            display: block;
            padding: 0.5rem;
            width: 75%;
            border-radius: 0.25rem;
            border: 1px solid #d1d5da;
            &:active,
            &:focus {
              outline: 1px solid hotpink;
            }
          `}
          id="search_term"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
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
            background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
            color: #24292e;
            &:active,
            &:focus {
              outline: 1px solid hotpink;
            }
          `}
        >
          Search
        </button>
      </div>
    );
  }
}

export default FormSearch;
