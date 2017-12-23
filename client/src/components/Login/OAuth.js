import React from 'react';
import { GoogleLogin } from 'react-google-login-component';


export default class OAuth extends React.Component{

  responseGoogle = (googleUser) => {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin
          socialId="yourClientID"
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }
}