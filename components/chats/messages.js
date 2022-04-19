import styles from "./messages.module.css";
import Message from "./message";

const messages = [
  {
    content: "Hello world",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "How are you?",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "fine",
    date: "12th april, 2022",
    uid: undefined,
  },
  {
    content: "Hello world",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "How are you?",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "fine",
    date: "12th april, 2022",
    uid: undefined,
  },
  {
    content: "Hello world",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "How are you?",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "fine",
    date: "12th april, 2022",
    uid: undefined,
  },
  {
    content: "Hello world",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "How are you?",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "fine",
    date: "12th april, 2022",
    uid: undefined,
  },
  {
    content: "Hello world",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "How are you?",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "fine",
    date: "12th april, 2022",
    uid: undefined,
  },
  {
    content: "Hello world",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "How are you?",
    date: "12th april, 2022",
    uid: "E686RdSfKydqtAxO5jtW9i8PUGg2",
  },
  {
    content: "fine",
    date: "12th april, 2022",
    uid: undefined,
  },
];

export default function Messages() {
  return (
    <div className={styles.messages_container}>
      <div>
        {messages.map(({ content, date, uid }) => {
          return <Message content={content} date={date} uid={uid} />;
        })}
      </div>
    </div>
  );
}
