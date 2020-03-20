import { connect } from "react-redux";
import YoutubeAPIToolComponent from '../components/YoutubeAPIToolComponent';    // UI
import * as actions from "../actions/YoutubeAPIToolAction";                     // mapDispatchToProps

// mapStateToProps
const mapState = (state) => ({
    state: state
});

// connect(mapStateToProps, mapDispatchToProps)(UI)でstateとactionを連結してUIに渡す
export default connect(mapState, actions)(YoutubeAPIToolComponent);