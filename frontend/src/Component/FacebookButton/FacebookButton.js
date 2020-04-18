import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {registerFacebookUser} from "../../Store/Action/actionUsers";


class FacebookButton extends Component {
    responseFacebook = (response) => {
        this.props.registerFacebookUser(response)
    };
    render() {
        return (
            <FacebookLogin
                appId="1342251599302385"
                render={renderProps => (
                    <Button variant="contained" color="primary" onClick={renderProps.onClick}>{this.props.title} with Facebook</Button>
                )}
                callback={this.responseFacebook}
            />
        );
    }
}


const mapDispatchToProps = dispatch => ({
    registerFacebookUser : (user) => dispatch(registerFacebookUser(user))
});

export default connect(null, mapDispatchToProps)(FacebookButton);