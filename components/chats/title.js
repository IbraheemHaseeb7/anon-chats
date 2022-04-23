import styles from "./messages.module.css";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import ChangeName from "./nameChange";

export default function Title({ name, id }) {
  const [show, setShow] = useState(false);

  function showPop() {
    setShow(!show);
  }

  return (
    <div className={styles.title_container}>
      <h3>{name}</h3>
      <button type="button" className={styles.info_btn} onClick={showPop}>
        <InfoIcon />
      </button>
      {show && <ChangeName show={show} setShow={setShow} name={name} id={id} />}
    </div>
  );
}
