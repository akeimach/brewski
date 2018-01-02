import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class OAuth extends React.Component {

  responseGoogle = (googleUser) => {
    let id_token = googleUser.getAuthResponse().id_token;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/user');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
    // API.postUser(
    //   { : this.state.imageResults[0] })
    // .then(res => {
    //   console.log("Brewery results: ", res.data);
    //   if (res.data) {
    //     this.setState({
    //       breweryName: res.data.name
    //     });
    //   }
    // });
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