import { connect } from "react-redux";
import ProfilePage from "./profile_page";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    user: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
