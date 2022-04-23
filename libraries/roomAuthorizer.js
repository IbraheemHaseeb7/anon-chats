import { useContext } from "react";
import { AuthContext } from "../pages/_app";

export default function RoomAuthorizer({ children, uid }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user === null || user.uid === uid ? (
        children
      ) : (
        <div>
          <h1>Sorry boy but you are not welcomed here!</h1>
        </div>
      )}
    </>
  );
}
