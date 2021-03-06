import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../pages/_app";
import Loading from "../loading/loading";
import OneRoom from "./oneRoom";
import styles from "./room.module.css";

export default function Rooms() {
  const { rooms, loading } = useContext(AuthContext);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <div
          className={styles.rooms_container}
          style={width > 500 ? { gridColumn: "1/2" } : { gridColumn: "1/4" }}
        >
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
