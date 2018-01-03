import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import API from '../../utils/API.js';

export default class OAuth extends React.Component {

  responseGoogle = (googleUser) => {
    let id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
    API.postUser({
      googleId: id_token
    })
    .then(res => {
      console.log("data is " + res.data);
    });
  }

  render () {
    return (
      <GoogleLogin
        socialId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        className="google-login"
        scope="profile"
        fetchBasicProfile={false}
        responseHandler={this.responseGoogle}
        buttonText="Login With Google"
      />
    );
  }
}