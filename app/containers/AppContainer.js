import React from 'react';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import {mountAnimation} from '../actions/index.js';
import FlatButton from 'material-ui/FlatButton';
import Landing from '../components/Landing';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// TODO: import relevant actions
// TODO: import relevant components
//left ic on --> gold cross pic


class AppContainer extends React.Component {

    componentDidMount(){
    }

     render() {
        //  console.log(this.props.mounting);


    return(
        <div>
            <AppBar style={{backgroundColor:"black", borderBottom:"thick solid #D4AF37"}}
                 title="The St. Elmo Society"/>
            <div style={{zIndex: "10000", position:'relative', width: "100%"}}>
            <img key="cross" id="cross" src="/media/cross.png" style={{ height: "27%", width: "27%", margin: "0 auto", display: "block", paddingTop: "12%"}}/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 id="disclaimer">New Website coming soon</h1>
            </div>
            </div>
            <Landing />
        </div>
    )};
};

AppContainer.propTypes = {

};

const mapStateToProps = state => {
    return {
        mounting: state.mount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        mount: () => dispatch(mountAnimation())
    };
};

AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

export default AppContainer;
