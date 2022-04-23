import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function useAuth() {
  // setting up hooks
  const [userIn, setUserIn] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIn(true);

        setUser({
          name: auth.currentUser?.displayName,
          photo: auth.currentUser?.photoURL,
          uid: auth.currentUser?.uid,
          email: auth.currentUser?.email,
        });
        setLoading(true);
      } else {
        setUserIn(false);
        setLoading(true);
      }
    });
  }, [router.query?.path]);

  return [userIn, user, loading];
}
