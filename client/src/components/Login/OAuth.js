import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import API from '../../utils/API.js';

export default class OAuth extends React.Component {

  constructor (props) {
    super(props);
  }

  responseGoogle = (googleUser) => {
    
    let id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
    API.postUser({
      googleId: id_token
    })
    .then(res => {
      console.log("User is ", res.data.id);
      this.props.setUserId(res.data.id);
    });
  }

  render () {
    return (
      <GoogleLogin
        socialId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        className="google-login"
        scope="profile"
        fetchBasicProfile={true}
        responseHandler={this.responseGoogle}
        buttonText="Login With Google"
      />
    );
  }
}