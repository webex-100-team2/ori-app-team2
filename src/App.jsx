import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import LoginPage from "./pages/login/LoginPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <p>読み込み中…</p>;
  }

  if (user === null) {
    return <LoginPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
