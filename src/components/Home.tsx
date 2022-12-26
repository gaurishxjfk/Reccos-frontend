import React from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import { userData } from "../store/states";
const Home = () => {
  const user = {
    name: "string",
    email: "string",
    avatarUrl: "string",
  };
  const { isLoggedIn } = userData();
  return (
    <div>
      <NavBar />
      Home
      <div>{isLoggedIn ? <Sidebar user={user} /> : <></>}</div>
    </div>
  );
};

export default Home;
