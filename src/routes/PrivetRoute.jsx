import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivetRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  console.log("");
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} state={location.pathname} />;
}

export default PrivetRoute;
