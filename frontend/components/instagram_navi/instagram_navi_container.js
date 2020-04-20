import { logout } from "../../actions/session";
import InstagramNavi from "./instagram_navi";
import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   debugger;
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(InstagramNavi);
