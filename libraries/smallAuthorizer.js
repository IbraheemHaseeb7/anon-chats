import { useContext } from "react";
import { AuthContext } from "../pages/_app";

export default function SmallAuthorizer({ children }) {
  const { userIn } = useContext(AuthContext);

  return <>{userIn && children}</>;
}
