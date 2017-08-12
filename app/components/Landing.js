//render video
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// TODO: import relevant actions
// TODO: import relevant components
//left ic on --> gold cross pic

const videoStyle = {
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1"
}

let Landing = () => {
    return(
        <div style={{overflow: "hidden"}}>
            <video autoPlay muted loop style={videoStyle}>
                <source src="/media/basket.mp4" type="video/mp4" />
                <source src="/media/basket.webm" type="video/webm" />
                <source src="/media/basket.ogv" type="video/ogv" />
            </video>
        </div>
    );
};

Landing.propTypes = {

};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

Landing = connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);

export default Landing;
