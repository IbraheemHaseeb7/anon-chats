import { useReducer } from "react";
import styles from "./messages.module.css";
import { reducer } from "./reducer";

export default function SendMessage() {
  // setting up state manangement
  const [state, dispatch] = useReducer(reducer, { value: null });

  function handleChange(e) {
    dispatch({ type: "typing", payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

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
