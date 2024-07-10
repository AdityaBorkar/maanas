import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthState = () =>
  new Promise((resolve) => {
    // Authentication:
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => resolve(user));
  });
export default useAuthState;
