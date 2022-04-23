import { useContext } from "react";
import { AuthContext } from "../../pages/_app";
import Loading from "../loading/loading";
import OneRoom from "./oneRoom";
import styles from "./room.module.css";

export default function Rooms() {
  const { rooms, loading } = useContext(AuthContext);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <div className={styles.rooms_container}>
          <div>
            {rooms.map(({ name, id }) => {
              return <OneRoom key={id} name={name} route={id} room={rooms} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
