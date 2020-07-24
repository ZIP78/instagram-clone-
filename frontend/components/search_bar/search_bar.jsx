import React from "react";
import "./search_bar.css";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.outsideClick = React.createRef();
    this.outsideClick2 = React.createRef();

    this.state = {
      //   data: [], we might not need this
      results: 0,
      value: "",
      showTransition: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickSearchbar = this.clickSearchbar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate() {
    if (this.textInput.current) this.textInput.current.focus();
  }

  handleClickOutside(event) {
    let domMode = ReactDOM.findDOMNode(this);

    if (!domMode || !domMode.contains(event.target)) {
      this.setState({ showTransition: false });
    }
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }
  handleClick() {
    this.setState({ value: "" });
  }

  clickSearchbar(event) {
    // if event is clicked on
    if (event) {
      this.setState({ showTransition: true });
    }
  }

  render() {
    const { value, results } = this.state;
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

    return items.length >= 1 && this.state.showTransition ? (
      <div className="search-container">
        <div
          className="search-bar-container"
          ref={(node) => (this.outsideClick = node)}
        >
          <input
            className="search-bar"
            ref={this.textInput}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
          <div className="icon-search-clicked">
            <span className="search-icon-clicked">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>

        <div className="user-options"></div>
        <div className="result-box">
          <div className="search-results">{items}</div>
        </div>
      </div>
    ) : (
      <div className="search-container">
        {this.state.showTransition ? (
          <div
            className="search-bar-container"
            ref={(node) => (this.outsideClick = node)}
          >
            <input
              ref={this.textInput}
              id="search-bar"
              className="search-bar"
              type="text"
              value={value}
              onChange={this.handleChange}
            />
            <div className="icon-search-clicked">
              <span className="search-icon-clicked">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        ) : (
          <div onClick={this.clickSearchbar} className="search-bar-container">
            <input
              id="search-bar"
              className="search-bar"
              type="text"
              value={value}
              onChange={this.handleChange}
            />
            <div className="icon-search-title">
              {value === "" ? (
                <span className="search-title">Search</span>
              ) : (
                <span className="search-title">{value}</span>
              )}
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;

{
  /* <div className="icon-search-clicked">
  <span className="search-icon-clicked">
    <FontAwesomeIcon icon={faSearch} />
  </span>
</div> */
}
