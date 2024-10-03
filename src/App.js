import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import MicrosoftLogin from './components/login/microsoftLogin';
import GoogleLoginComponent from './components/login/googleLogin';

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_MICROSOFT_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_MICROSOFT_TENENT_ID}`,
    redirectUri: process.env.REACT_APP_MICROSOFT_REDIRECT_UR,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};
const msalInstance = new PublicClientApplication(msalConfig);

function App() {

  return (
    <div>
      <GoogleLoginComponent/>

      <MsalProvider instance={msalInstance}>
        <MicrosoftLogin />
      </MsalProvider>

    </div>
  );
}

export default App;
