import styles from "./room.module.css";
import Link from "next/link";

export default function OneRoom({ name, route }) {
  return (
    <Link
      href={{
        pathname: `/chats/${route}`,
      }}
    >
      <div className={styles.one_room_container}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}
