import Messages from "./messages";
import SendMessage from "./sendmessage";
import Title from "./title";
import styles from "./messages.module.css";
import SmallAuthorizer from "../../libraries/smallAuthorizer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../pages/_app";
import Room from "../rooms/room";

export default function MajorChatComp({ name, id }) {
  const { userIn } = useContext(AuthContext);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className={styles.major_chat_component_container}
      style={
        userIn
          ? { gridTemplateColumns: "20% 80%" }
          : { gridTemplateColumns: "0%" }
      }
    >
      <SmallAuthorizer>
        {width > 500 && <Room />}
        <Title name={name} id={id} />
      </SmallAuthorizer>
      <Messages id={id} />
      <SendMessage roomid={id} />
    </div>
  );
}
