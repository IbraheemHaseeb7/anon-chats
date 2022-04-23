import { useContext } from "react";
import { AuthContext } from "../pages/_app";

export default function Authorizer({ children }) {
  const { userIn } = useContext(AuthContext);

  return (
    <>
      {userIn ? (
        children
      ) : (
        <div>
          <h1>Sorry boy but you are not welcome here</h1>
        </div>
      )}
    </>
  );
}
