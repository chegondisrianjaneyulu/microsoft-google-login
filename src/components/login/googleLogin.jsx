import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginComponent() {

  const handleGoogleLoginSuccess = (credentialResponse) => {
        let token = credentialResponse?.credential
   
         if ( token === "undefined" || token === null || token === undefined || token === "" ) {
           throw new Error("token is Invalid");
         }
         
         const isValidToken = token.split('.');
   
         if ( isValidToken.length < 2 ) {
           throw new Error("Invalid token");
         }
   
         const header = JSON.parse(atob(isValidToken[0]));
         const body = JSON.parse(atob(isValidToken[1]));
     
         if ( header ) {
           if ( header.typ !== "JWT" ) {
             throw new Error("header is not JWT");
           }
         }
   
   
         if ( body ) {
           const clientId=process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID;
           const currentTime = new Date().getTime();
           const expireToken = body.exp * 1000;
   
           if (body.aud !== clientId) {
             throw new Error("Invalid Credential");
           }
   
           if (currentTime > expireToken) {
             throw new Error("Token is Expired");
           }
   
         }
        
        //ekkada home page ke navigate chey
  };
   
  const handleGoogleLoginFailure = () => {
    console.log('Google login failed');
  };


  

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}>
    <div>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginFailure}
      />
    </div>
  </GoogleOAuthProvider>
  )
}

export default GoogleLoginComponent