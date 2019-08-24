/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

class Results extends React.Component {
  state = { user: {} };

  async getExtraUserData(url) {
    return await fetch(`${url}`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        return data;
      });
  }

  componentDidMount() {
    // this.getExtraUserData(this.props.user.url).then(data => {
    //   this.setState({ user: data });
    // });
  }

  render() {
    return (
      <div
        css={css`
          padding: 1rem;
          border-top: 1px solid #dcdcdc;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              margin-right: 1rem;
            `}
          >
            <a href={`https://github.com/${this.props.user.login}`}>
              <img
                css={css`
                  border-radius: 100%;
                `}
                src={this.props.user.avatar_url}
                alt={`@${this.props.user.login} avatar profile`}
                width={48}
                height={48}
              />
            </a>
          </div>
          <div
            css={css`
              display: flex;
              margin-top: 0.5rem;
            `}
          >
            <a
              href={`https://github.com/${this.props.user.login}`}
              css={css`
                margin-right: 0.3rem;
                color: #007eff;
                text-decoration: none;
                &:hover,
                &:visited,
                &:focus {
                  color: #007eff;
                }
                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              {this.props.user.login}
            </a>
            <p
              css={css`
                display: inline-block;
                margin: 0;
              `}
            >{`${this.state.user.name || this.props.user.login}`}</p>
          </div>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <p
            css={css`
              margin-right: 1rem;
            `}
          >
            Repos:{" "}
            <span
              css={css`
                background-color: rgba(27, 31, 35, 0.08);
                border-radius: 1rem;
                color: #586069;
                font-size: 14px;
                font-weight: 600;
                line-height: 1;
                padding: 2px 5px;
              `}
            >
              {this.state.user.public_repos ||
                Number(Math.random() * 100).toFixed(0)}
            </span>
          </p>
          <p
            css={css`
              margin-right: 1rem;
            `}
          >
            Gists:{" "}
            <span
              css={css`
                background-color: rgba(27, 31, 35, 0.08);
                border-radius: 1rem;
                color: #586069;
                font-size: 14px;
                font-weight: 600;
                line-height: 1;
                padding: 2px 5px;
              `}
            >
              {this.state.user.public_gists ||
                Number(Math.random() * 100).toFixed(0)}
            </span>
          </p>
          <p
            css={css`
              margin-right: 1rem;
            `}
          >
            Followers:{" "}
            <span
              css={css`
                background-color: rgba(27, 31, 35, 0.08);
                border-radius: 1rem;
                color: #586069;
                font-size: 14px;
                font-weight: 600;
                line-height: 1;
                padding: 2px 5px;
              `}
            >
              {this.state.user.followers ||
                Number(Math.random() * 100).toFixed(0)}
            </span>
          </p>
          <p
            css={css`
              margin-right: 1rem;
            `}
          >
            Following:{" "}
            <span
              css={css`
                background-color: rgba(27, 31, 35, 0.08);
                border-radius: 1rem;
                color: #586069;
                font-size: 14px;
                font-weight: 600;
                line-height: 1;
                padding: 2px 5px;
              `}
            >
              {this.state.user.following ||
                Number(Math.random() * 100).toFixed(0)}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Results;
