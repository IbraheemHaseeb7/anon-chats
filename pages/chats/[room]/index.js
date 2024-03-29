import styles from "./room.module.css";
import Rooms from "../../../components/rooms/room";
import MajorChatComp from "../../../components/chats/majorChatComp";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../../libraries/firebase";
import SmallAuthorizer from "../../../libraries/smallAuthorizer";
import RoomAuthorizer from "../../../libraries/roomAuthorizer";

export async function getStaticPaths() {
  let paths = [];

  await getDocs(collection(firestore, `chats`)).then((res) => {
    paths = res.docs.map((data) => {
      const { id } = data.data();

      return { params: { room: id } };
    });
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let data = null;

  await getDoc(doc(firestore, `chats`, params.room)).then((res) => {
    data = res.data();
  });

  return {
    props: {
      data,
    },
    revalidate: 1000,
  };
}

export default function Chats({ data }) {
  return (
    <RoomAuthorizer uid={data.uid}>
      <div className={styles.chat_container}>
        <MajorChatComp name={data.name} id={data.id} />
      </div>
    </RoomAuthorizer>
  );
}
