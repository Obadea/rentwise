import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const RequireAuth = ({ children }) => {
  // const { token } = useAuth();

  const token = false;

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default RequireAuth;
