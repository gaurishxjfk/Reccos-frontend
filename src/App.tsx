import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  const AUTH0_DOMAIN: string = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const CLIENT_ID: string = process.env.REACT_APP_CLIENT_ID as string;

  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
