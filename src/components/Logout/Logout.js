import { signOut } from "firebase/auth";
import { auth } from '../../services/dbInit';

export const Logout = () => {

    signOut(auth);

    return null;
}