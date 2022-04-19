import styles from "./messages.module.css";
import InfoIcon from "@mui/icons-material/Info";

export default function Title({ name }) {
  return (
    <div className={styles.title_container}>
      <h3>{name}</h3>
      <button type="button" className={styles.info_btn}>
        <InfoIcon />
      </button>
    </div>
  );
}
