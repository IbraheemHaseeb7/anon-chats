import styles from "./room.module.css";
import Messages from "../../../components/chats/messages";
import SendMessage from "../../../components/chats/sendmessage";
import Title from "../../../components/chats/title";

export default function Chats() {
  return (
    <div className={styles.chat_container}>
      <Title name={`random`} />
      <Messages />
      <SendMessage />
    </div>
  );
}
