import styles from "./newBox.module.css";

export default function NewBox({ show, setShow }) {
  function hide() {
    setShow(!show);
  }

  return (
    <>
      <div className={styles.newBox_container}>
        <div className={styles.inner_container}>
          <h3>Copy new chat link below</h3>
          <p>
            <b>NOTE:</b>
            <i>
              Anyone with this link can join the chat so make sure to keep this
              link away from unwanted hands
            </i>
          </p>
          <button type="button" className="btn">
            Copy Link
          </button>
          <button onClick={hide} className={styles.close_btn} type="button">
            Close
          </button>
        </div>
        <div className={styles.blur} onClick={hide}></div>
      </div>
    </>
  );
}
