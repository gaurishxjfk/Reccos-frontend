import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { userData } from "../store/states";
import "../style.css";

const NavBar: React.FunctionComponent = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  // const { isLoggedIn } = userData()

  const { toggleSidebar, updateUserInfo } = userData();
  useEffect(() => {
    if (!isLoading && user) {
      updateUserInfo(user);
    }
  }, [isLoading]);


  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        Reccos.
      </a>
      {isLoading ? (
        <></>
      ) : isAuthenticated ? (
        <div>
          d{" "}
          <button
            className="navbar-login_btn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="navbar-login_btn"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}

      <a onClick={toggleSidebar}>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
      </a>
    </nav>
  );
};

export default NavBar;
