import Navbar from "../components/Navbar/Navbar";
import React, { useState } from "react";
import useAuth from "../libraries/auth";
import "../styles/globals.css";
import NewBox from "../components/newBox/newBox";
import useRooms from "../libraries/rooms";

export const AuthContext = React.createContext({
  userIn: false,
  user: null,
  show: false,
  setShow: function () {},
  rooms: null,
  loading: null,
});

function MyApp({ Component, pageProps }) {
  const [userIn, user, loading] = useAuth();
  const { rooms } = useRooms();
  const [show, setShow] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        userIn: userIn,
        user: user,
        show: show,
        setShow: setShow,
        rooms: rooms,
        loading: loading,
      }}
    >
      <Navbar />
      {show && <NewBox show={show} setShow={setShow} />}
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
