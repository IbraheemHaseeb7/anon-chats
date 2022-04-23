import styles from "./messages.module.css";
import { auth } from "../../libraries/firebase";

export default function Message({ content, date, uid }) {
  return (
    <>
      {auth.currentUser?.uid === undefined ? (
        <div
          className={styles.message_container}
          style={
            auth.currentUser?.uid === undefined && uid === false
              ? { alignSelf: "flex-end" }
              : { alignSelf: "flex-start" }
          }
        >
          <p className={styles.message}>{content}</p>
        </div>
      ) : (
        <div
          className={styles.message_container}
          style={
            auth.currentUser?.uid === uid
              ? { alignSelf: "flex-end" }
              : { alignSelf: "flex-start" }
          }
        >
          <p className={styles.message}>{content}</p>
        </div>
      )}
    </>
  );
}
