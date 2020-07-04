import { logout } from "../../actions/session";
import InstagramNavi from "./instagram_navi";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstagramNavi);
