import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, firestore } from "./firebase";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function useRooms() {
  const [rooms, setRooms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getRooms() {
      await getDocs(
        query(
          collection(firestore, `chats`),
          where("uid", "==", auth.currentUser?.uid)
        )
      ).then((res) => {
        setRooms(
          res.docs.map((data) => {
            return data.data();
          })
        );
      });
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getRooms();
      }
    });
  }, [router.query]);

  return { rooms };
}
