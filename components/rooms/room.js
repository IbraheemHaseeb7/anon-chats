import { useContext } from "react";
import { AuthContext } from "../../pages/_app";
import OneRoom from "./oneRoom";
import styles from "./room.module.css";

export default function Rooms() {
  const { rooms } = useContext(AuthContext);

  return (
    <div className={styles.rooms_container}>
      <div>
        {rooms.map(({ name, id }) => {
          return <OneRoom name={name} route={id} room={rooms} />;
        })}
      </div>
    </div>
  );
}
