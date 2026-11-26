import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import "./HomePage.css";

function HomePage(props) {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <p>{props.user.displayName} さん</p>
      <button onClick={logout}>ログアウト</button>
      <h1>カレンダー</h1>
    </div>
  );
}

export default HomePage;
