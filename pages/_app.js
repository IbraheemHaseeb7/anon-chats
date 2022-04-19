import Navbar from "../components/Navbar/Navbar";
import React from "react";
import useAuth from "../libraries/auth";
import "../styles/globals.css";

export const AuthContext = React.createContext({ userIn: false, user: null });

function MyApp({ Component, pageProps }) {
  const [userIn, user] = useAuth();

  return (
    <AuthContext.Provider value={{ userIn: userIn, user: user }}>
      <Navbar />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
