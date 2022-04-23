import { useState } from "react";
import styles from "./newBox.module.css";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../libraries/firebase";
import { auth } from "../../libraries/firebase";

export default function NewBox({ show, setShow }) {
  const [room, setRoom] = useState(true);
  const [roomId, setRoomId] = useState(null);

  function hide() {
    setShow(!show);
  }

  async function roomCreater() {
    const id = new Date().getTime().toString();

    await setDoc(doc(firestore, `chats`, id), {
      uid: auth.currentUser?.uid,
      id: id,
      name: id,
    });

    setRoomId(id);

    setRoom(false);
  }

  function copy() {
    navigator.clipboard.writeText(roomId);
  }

  return (
    <>
      <div className={styles.newBox_container}>
        <div className={styles.inner_container}>
          <h2>Create and Copy new chat link below</h2>
          <div className={styles.note}>
            <b>NOTE: </b>
            <i>
              Anyone with this link can join the chat so make sure to keep this
              link away from unwanted hands
            </i>
          </div>
          <div className={styles.buttons}>
            <button type="button" className="btn" onClick={roomCreater}>
              Create Room
            </button>
            {!room && (
              <input type="name" value={roomId} className={styles.room_no} />
            )}
            <input
              type="button"
              className="btn"
              disabled={room}
              value="Copy Link"
              onClick={copy}
            />
            <button onClick={hide} className={styles.close_btn} type="button">
              Close
            </button>
          </div>
        </div>
        <div className={styles.blur} onClick={hide}></div>
      </div>
    </>
  );
}
