import React from 'react'
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { Button, SvgIcon } from '@mui/material';

function MicrosoftLogin() {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    const handleLogin = () => {
        instance.loginPopup({
          scopes: ['user.read'],
        }).then(response => {
          let name = response?.account?.name
          let username = response?.account?.username
          let token = response?.accessToken
          console.log('Login successful', response);
          console.log('Login successful', token);
          console.log('Login successful', name);
          console.log('Login successful', username);
          // ekkada kuda same ra home page ke navigate chey
        }).catch(error => {
          console.log('Login failed', error);
        });
    };

    const MicrosoftIcon = (props) => (
        <SvgIcon {...props} viewBox="0 0 48 48">
          <path fill="#F25022" d="M6 6h18v18H6z" />
          <path fill="#7FBA00" d="M24 6h18v18H24z" />
          <path fill="#00A4EF" d="M6 24h18v18H6z" />
          <path fill="#FFB900" d="M24 24h18v18H24z" />
        </SvgIcon>
    );


    
    return (
        <div>
            <div>
                {!isAuthenticated && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MicrosoftIcon />}
                  onClick={handleLogin}
                  sx={{
                  backgroundColor: '#ffffff', 
                  textTransform: 'none',
                  border:'1px solid black',
                  color:'black'
                  // '&:hover': {
                  //     backgroundColor: '#555555', 
                  // },
                }}>
                Sign in with Microsoft
            </Button>
                )}
            </div>
    </div>
    )
}

export default MicrosoftLogin