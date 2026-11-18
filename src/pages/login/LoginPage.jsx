import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.js";
import "./LoginPage.css";

function LoginPage() {
  const login = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
  };

  return (
    <div>
      <h1>アプリの名前</h1>
      <button onClick={login}>Google でログイン</button>
    </div>
  );
}

export default LoginPage;
