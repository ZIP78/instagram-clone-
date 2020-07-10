import React from "react";
import "./search_bar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   data: [], we might not need this
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const { users } = this.props;
    console.log(value);
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
        return <div>{user.username}</div>;
      });
    return (
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
    );
  }
}

export default SearchBar;
