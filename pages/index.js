import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.main_container}>
        <div className={styles.text}>
          <h1>Have Annonymous Conversations with People</h1>
          <p>
            Long and long conversations with people anonymously without the need
            to sign up
          </p>
          <Link href={`/login`}>
            <button className="btn">Sign Up</button>
          </Link>
        </div>
        <div className={styles.image}>
          <img
            src="https://img.freepik.com/free-vector/mysterious-gangster-character_23-2148466806.jpg?t=st=1650741569~exp=1650742169~hmac=9d1d89dc649b48adfb6293533c4213169268222499b457055c8774274ab63346&w=740"
            alt="Logo"
          />
        </div>
      </section>
    </div>
  );
}
