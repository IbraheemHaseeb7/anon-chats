import OneRoom from "./oneRoom";
import styles from "./room.module.css";

const rooms = [
  { name: "random_1", route: "1231234321234" },
  { name: "random_2", route: "1231232345345" },
  { name: "random_3", route: "1231232345334" },
  { name: "random_4", route: "1231234534254" },
  { name: "random_5", route: "1231234344324" },
  { name: "random_1", route: "1231234321234" },
  { name: "random_2", route: "1231232345345" },
  { name: "random_3", route: "1231232345334" },
  { name: "random_4", route: "1231234534254" },
  { name: "random_5", route: "1231234344324" },
  { name: "random_1", route: "1231234321234" },
  { name: "random_2", route: "1231232345345" },
  { name: "random_3", route: "1231232345334" },
  { name: "random_4", route: "1231234534254" },
  { name: "random_5", route: "1231234344324" },
  { name: "random_1", route: "1231234321234" },
  { name: "random_2", route: "1231232345345" },
  { name: "random_3", route: "1231232345334" },
  { name: "random_4", route: "1231234534254" },
  { name: "random_5", route: "1231234344324" },
];

export default function Rooms() {
  return (
    <div className={styles.rooms_container}>
      <div>
        {rooms.map(({ name, route }) => {
          return <OneRoom name={name} route={route} />;
        })}
      </div>
    </div>
  );
}
