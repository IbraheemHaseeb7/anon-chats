import styles from "./login.module.css";
import { auth, firestore, provider } from "../../libraries/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../_app";
import { useRouter } from "next/router";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Login() {
  // setting up hooks
  const [user, setUser] = useState(null);

  // setting up the router
  const router = useRouter();

  // signing out function
  async function signMeOut() {
    await signOut(auth);
  }

  // signing in function
  async function signIn() {
    await signInWithPopup(auth, provider).then(() => {
      router.push("/chats");
    });

    await getDoc(doc(firestore, `users`, auth.currentUser?.uid)).then((res) => {
      if (res.data() === undefined) {
        writeData();
      }
    });
  }

  async function writeData() {
    await setDoc(doc(firestore, `users`, auth.currentUser?.uid), {
      name: auth.currentUser?.displayName,
      uid: auth.currentUser?.uid,
      photo: auth.currentUser?.photoURL,
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
