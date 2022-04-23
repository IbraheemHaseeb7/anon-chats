import styles from "./messages.module.css";
import Message from "./message";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../libraries/firebase";
import { useRouter } from "next/router";

export default function Messages({ id }) {
  const [messages, setMessages] = useState([]);

  // setting up router
  const router = useRouter();

  // getting messages
  useEffect(() => {
    let unsub = onSnapshot(
      collection(firestore, `chats/${id}/messages`),
      (data) => {
        setMessages(
          data.docs.map((data) => {
            return data.data();
          })
        );
      }
    );

    return () => {
      unsub();
    };
  }, [router.query?.path]);

  return (
    <div className={styles.messages_container}>
      <div>
        {messages.map(({ content, date, uid, id }) => {
          return <Message key={id} content={content} date={date} uid={uid} />;
        })}
      </div>
    </div>
  );
}
