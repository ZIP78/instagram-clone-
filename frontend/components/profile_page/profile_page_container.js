import { connect } from "react-redux";
import ProfilePage from "./profile_page";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
