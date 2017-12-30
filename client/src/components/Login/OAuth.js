import React from 'react';
import { GoogleLogin } from 'react-google-login-component';


export default class OAuth extends React.Component {

  responseGoogle = (googleUser) => {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
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