import React from "react";
import "./search_bar.css";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   data: [], we might not need this
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }
  handleClick() {
    this.setState({ value: "" });
  }

  render() {
    const { value } = this.state;
    const { users } = this.props;

    let items = Object.values(users)
      .filter((user) => {
        if (value === "") {
          return;
        } else if (
          user.first_name.toLowerCase().includes(value.toLowerCase()) ||
          user.last_name.toLowerCase().includes(value.toLowerCase()) ||
          user.username.toLowerCase().includes(value.toLowerCase())
        ) {
          return user;
        }
      })
      .map((user) => {
        return (
          <Link
            onClick={this.handleClick}
            to={{
              pathname: `/users/${user.username}`,
            }}
            className="search-result"
          >
            <div className="search-username-container">
              <div style={{ width: 40 }}>
                <img className="search-profile-icon" src={user.photoUrl} />{" "}
              </div>
              <div className="search-username">{user.username}</div>
              <div className="test">
                <div className="search-first-name">{user.first_name}</div>
                <div className="search-last-name">{user.last_name}</div>
              </div>
            </div>
          </Link>
        );
      });

    return items.length >= 1 ? (
      <div className="search-container">
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <div className="user-options"></div>
        <div className="result-box">
          <div className="search-results">{items}</div>
        </div>
      </div>
    ) : (
      <div className="search-container">
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
