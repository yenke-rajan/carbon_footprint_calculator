import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const SignOut: React.FC = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = async () => {
      try {

        setIsAuthenticated(false);
        localStorage.removeItem('token');
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    handleSignOut();
  }, [setIsAuthenticated, navigate]);

  return null; // Placeholder return statement as this component doesn't render anything
};

export default SignOut;
