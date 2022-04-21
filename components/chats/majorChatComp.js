import Messages from "./messages";
import SendMessage from "./sendmessage";
import Title from "./title";
import styles from "./messages.module.css";

export default function MajorChatComp() {
  return (
    <div className={styles.major_chat_component_container}>
      <Title />
      <Messages />
      <SendMessage />
    </div>
  );
}
