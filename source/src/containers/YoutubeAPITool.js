import { connect } from "react-redux";
import YoutubeAPIToolComponent from '../components/YoutubeAPITool'; // UI
import * as actions from "../actions/action";                       // mapDispatchToProps

// mapStateToProps
const mapState = (state) => ({
    state: state
});

// connect(mapStateToProps, mapDispatchToProps)(UI)でstateとactionを連結してUIに渡す
export default connect(mapState, actions)(YoutubeAPIToolComponent);