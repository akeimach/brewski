import React from 'react';
import { GoogleLogin } from 'react-google-login-component';


export default class OAuth extends React.Component {

  constructor (props) {
    super(props);
  }

  responseGoogle = (googleUser) => {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    this.props.toggleModal;
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