import styles from "./chats.module.css";
import Messages from "../../components/chats/messages";

export default function Chats() {
  return (
    <div className={styles.chat_container}>
      <Messages />
    </div>
  );
}
