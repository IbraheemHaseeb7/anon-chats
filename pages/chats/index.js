import Rooms from "../../components/rooms/room";

export default function Chats() {
  return (
    <div>
      <Rooms />
      <div
        style={{
          width: "calc(100% - 16rem)",
          position: "absolute",
          top: "5rem",
          right: "0",
          display: "grid",
          placeItems: "center",
          color: "#008080af",
          height: "calc(100vh - 10rem)",
        }}
      >
        <h1>Click on chats on the left to start chatting with people</h1>
      </div>
    </div>
  );
}
