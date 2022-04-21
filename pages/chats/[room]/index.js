import styles from "./room.module.css";
import Rooms from "../../../components/rooms/room";
import MajorChatComp from "../../../components/chats/majorChatComp";

export default function Chats() {
  return (
    <div className={styles.chat_container}>
      <Rooms />
      <MajorChatComp />
    </div>
  );
}
