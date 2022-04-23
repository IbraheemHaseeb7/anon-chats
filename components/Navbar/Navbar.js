import styles from "./Navbar.module.css";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { AuthContext } from "../../pages/_app";
import { auth } from "../../libraries/firebase";
import SmallAuthorizer from "../../libraries/smallAuthorizer";
import { signOut } from "firebase/auth";

export default function Navbar() {
  // context data
  const { user, userIn, setShow, show } = useContext(AuthContext);

  // turning on and off new chat component
  function newChat() {
    setShow(!show);
  }

  return (
    <nav className={styles.nav}>
      {userIn && (
        <img src={user.photo} alt={user.name} className={styles.img} />
      )}
      <ul>
        <button
          className={styles.navbar_btn}
          data-toggle="tooltip"
          title="Home"
        >
          <Link href="/">
            <HomeIcon />
          </Link>
        </button>
        <SmallAuthorizer>
          <button
            className={styles.navbar_btn}
            data-toggle="tooltip"
            title="All Chats"
          >
            <Link href={`/chats`}>
              <ChatIcon />
            </Link>
          </button>
          <button
            className={styles.navbar_btn}
            data-toggle="tooltip"
            title="Create New Chat"
            onClick={newChat}
          >
            <AddIcon />
          </button>
        </SmallAuthorizer>
        <button
          className={styles.navbar_btn}
          data-toggle="tooltip"
          title="Login"
        >
          <Link href="/login">
            <LoginIcon />
          </Link>
        </button>
        <SmallAuthorizer>
          <button
            className={styles.navbar_btn}
            data-toggle="tooltip"
            title="Logout"
            onClick={async () => {
              await signOut(auth);
            }}
          >
            <LogoutIcon />
          </button>
        </SmallAuthorizer>
      </ul>
      {userIn && <h3 className={styles.welcome}>Welcome, {user.name}</h3>}
    </nav>
  );
}
