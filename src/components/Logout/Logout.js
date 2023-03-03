import { signOut } from "firebase/auth";
import { auth } from '../../services/dbInit';
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const { onLogoutHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    onLogoutHandler();
    signOut(auth);
    navigate('/');
    return null;
}