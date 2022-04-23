import { useState } from "react";
import styles from "./messages.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../libraries/firebase";

export default function ChangeName({ show, setShow, name, id }) {
  const [value, setValue] = useState(name);

  function hide() {
    setShow(!show);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await updateDoc(doc(firestore, `chats`, id), {
      name: value,
    });
  }

  return (
    <>
      <div className={styles.newBox_container}>
        <div className={styles.inner_container}>
          <h2>Set a NickName for this person</h2>
          <div className={styles.note}>
            <b>NOTE: </b>
            <i>
              Only you can see this name so feel free to set it to whatever you
              may. The anonymous user can see any information of sorts
            </i>
          </div>
          <div className={styles.buttons}>
            <input
              type="name"
              className={styles.room_no}
              value={value}
              onChange={handleChange}
            />

            <button onClick={handleSubmit} type="button" className="btn">
              Submit Changes
            </button>

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
