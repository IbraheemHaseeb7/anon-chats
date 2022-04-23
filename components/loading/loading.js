import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  );
}
