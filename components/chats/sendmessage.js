import { doc, setDoc } from "firebase/firestore";
import { useReducer } from "react";
import { auth, firestore } from "../../libraries/firebase";
import styles from "./messages.module.css";
import { reducer } from "./reducer";

export default function SendMessage({ roomid }) {
  // setting up state manangement
  const [state, dispatch] = useReducer(reducer, { value: null });

  function handleChange(e) {
    dispatch({ type: "typing", payload: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const id = new Date().getTime().toString();

    if (auth.currentUser?.uid) {
      await setDoc(doc(firestore, `chats/${roomid}/messages`, id), {
        id: id,
        content: state.value,
        uid: auth.currentUser?.uid,
        date: id,
      });
    } else {
      await setDoc(doc(firestore, `chats/${roomid}/messages`, id), {
        id: id,
        content: state.value,
        uid: false,
        date: id,
      });
    }

    dispatch({ type: "send" });
  }

  return (
    <form className={styles.sendmessage_container}>
      <textarea
        placeholder="Start typing here"
        onChange={handleChange}
        value={state.value}
      ></textarea>
      <button className="btn" onClick={handleSubmit} type="submit">
        Send Message
      </button>
    </form>
  );
}
