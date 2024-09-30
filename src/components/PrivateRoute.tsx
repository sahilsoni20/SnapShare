import { Navigate } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useUserStore();

  // Check if the user is authenticated
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
