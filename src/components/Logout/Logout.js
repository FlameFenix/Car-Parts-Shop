import { signOut } from "firebase/auth";
import { auth } from '../../services/dbInit';
// import { useNavigate } from 'react-router-dom';

export const Logout = () => {

    signOut(auth);

    return null;
}