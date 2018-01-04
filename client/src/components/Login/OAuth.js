import React from 'react';
import { GoogleLogin } from 'react-google-login';
import API from '../../utils/API.js';

export default class OAuth extends React.Component {

  responseGoogle = (googleUser) => {
    
    let id_token = googleUser.getAuthResponse().id_token;
    console.log(googleUser.getAuthResponse());
    console.log(id_token);
    API.postUser({
      googleId: id_token
    })
    .then(res => {
      console.log("User is ", res.data.id);
      localStorage.setItem("userId", res.data.id);
    });
  }

  render () {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        fetchBasicProfile={true}
        onSuccess={this.responseGoogle}
        buttonText="Login With Google"
      />
    );
  }
}