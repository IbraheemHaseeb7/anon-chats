import styles from "./messages.module.css";
import Message from "./message";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../libraries/firebase";
import { useRouter } from "next/router";
import Loading from "../loading/loading";

export default function Messages({ id }) {
  const [messages, setMessages] = useState([]);
  const [load, setLoad] = useState(false);

  // setting up router
  const router = useRouter();

  // getting messages
  useEffect(() => {
    let unsub = onSnapshot(
      collection(firestore, `chats/${id}/messages`),
      (data) => {
        setMessages(
          data.docs.map((data) => {
            setLoad(true);
            return data.data();
          })
        );
      }
    );

    return () => {
      unsub();
    };
  }, [router.query?.room]);

  // creating reference for the messages div
  const ref = useRef({ scrollHeight: 0, scrollTop: 0 });

  // scrolling to bottom
  useLayoutEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.messages_container}>
      <div>
        {load ? (
          <>
            {messages.map(({ content, date, uid, id }) => {
              return (
                <Message key={id} content={content} date={date} uid={uid} />
              );
            })}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
