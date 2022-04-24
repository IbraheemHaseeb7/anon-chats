import Authorizer from "../../libraries/authorizer";
import Room from "../../components/rooms/room";

export default function Chats() {
  return (
    <Authorizer>
      <div
        style={{
          display: "grid",
          height: "calc(100vh - 6rem)",
          gridTemplateColumns: "20% 80%",
          placeItems: "center",
        }}
      >
        <Room />
        <div
          style={{
            color: "teal",
            display: "grid",
            placeItems: "center",
            width: "95%",
            height: "100%",
            gridRow: "1/4",
          }}
        >
          <h1 style={{ width: "80%", textAlign: "center" }}>
            Click on chats on the left to start chatting with people or Click on
            the + icon to create new chats rooms
          </h1>
        </div>
      </div>
    </Authorizer>
  );
}
