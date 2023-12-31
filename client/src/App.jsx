import { useEffect, useState } from "react";
import { Home, Profile, CoinValue, About, Trade } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminPortal, useLoginWithRedirect, useAuth } from "@frontegg/react";
import { Nav } from "./components";

import "./styles/App.css";

const App = () => {
  const navigate = useNavigate();

  const loginWithRedirect = useLoginWithRedirect();

  const { user: User, isAuthenticated } = useAuth();
  // Making my own user depnding on the frontegg user object
  const [user, setUser] = useState({
    ...User,
    coinAmount: localStorage.getItem("coinAmount") 
      ? localStorage.getItem("coinAmount")
      : 0,
  })
    
  //Checking if user is authenticated. If not, redirect to login. Also, set the user's coinAmount in localStorage
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
    localStorage.setItem("coinAmount", user.coinAmount);
  }, [isAuthenticated, loginWithRedirect]);

  // Navigate to the last visited route if refreshed
  // There will always be a value for currentRoute because of onClick event I set for each Link
  useEffect(() => {
    navigate(localStorage.getItem("currentRoute"));
  }, []);

  // keep track of name change and keep it forever until the next change
  useEffect(() => {
    user.name = User.name
  }, [User, user.metadata]);

  return (
    <>
      <div className="w-screen h-screen relative bg">
        <div className="flex flex-row items-center gap-3 absolute">
          <button onClick={() => AdminPortal.show()} className="text-3xl">
            ⚙️
          </button>
          <Nav />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} isAuthenticated={isAuthenticated} />}
          />
          <Route path="/coin-value" element={<CoinValue />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
