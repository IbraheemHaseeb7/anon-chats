import styles from "./messages.module.css";
import { auth } from "../../libraries/firebase";

export default function Message({ content, date, uid }) {
  return (
    <div
      className={styles.message_container}
      style={
        uid === auth.currentUser?.uid
          ? { alignSelf: "flex-end" }
          : { alignSelf: "flex-start" }
      }
    >
      <p className={styles.message}>{content}</p>
    </div>
  );
}
