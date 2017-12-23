import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

const  GoogleLoginButton = props => 
	<GoogleLogin 
	  clientId="797711707852-9pq5g661rsj547c4a5l7g3grbvhmmqjv.apps.googleusercontent.com"
	  buttonText="Login With Google"
	  onSuccess={responseGoogle}
	  onFailure={responseGoogle}
	  uxMode="popup"
	/>

export default GoogleLoginButton