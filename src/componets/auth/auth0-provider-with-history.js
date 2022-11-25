import React from "react";
import { useHistory } from "react-router";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProveiderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const history = useHistory();
  const onRedirectCallback = (appState) =>{
    history.push(appState?.returnTo || window.location.pathname);
  };
  
  return(
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience = {audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProveiderWithHistory;
