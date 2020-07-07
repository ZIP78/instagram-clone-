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
    let items = Object.values(users).filter((user) => {
      if (value === null) {
        // logic
      }
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
      </div>
    );
  }
}

export default SearchBar;
