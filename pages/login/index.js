import styles from "./login.module.css";
import { auth, provider } from "../../libraries/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../_app";
import { useRouter } from "next/router";

export default function Login() {
  // setting up the router
  const router = useRouter();

  // signing out function
  async function signMeOut() {
    await signOut(auth);
  }

  // signing in function
  async function signIn() {
    await signInWithPopup(auth, provider).then(() => {
      router.push("/");
    });
  }

  // getting the context data
  const { userIn } = useContext(AuthContext);

  return (
    <div className={styles.login_container}>
      <h1>Create your account or login so people can send you messages</h1>
      {userIn ? (
        <div className={styles.login_inner_container}>
          <h1>Log Out</h1>
          <button className="btn" onClick={signMeOut}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <div className={styles.login_inner_container}>
            <h1>Create Your Account</h1>
            <button className="btn" onClick={signIn}>
              Create New Account
            </button>
          </div>
          <div className={styles.login_inner_container}>
            <h1>Sign Into Your Account</h1>
            <button className="btn" onClick={signIn}>
              Sign In
            </button>
          </div>
        </>
      )}
    </div>
  );
}
