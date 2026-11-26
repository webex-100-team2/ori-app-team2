import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import LoginPage from "./pages/login/LoginPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import EventFormPage from "./pages/event-form/EventFormPage.jsx";
import EventDetailPage from "./pages/event-detail/EventDetailPage.jsx";
import OshiPage from "./pages/oshis/OshiPage.jsx";

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
        <Route path="/events/new" element={<EventFormPage user={user} />} />
        <Route path="/events/:id" element={<EventDetailPage user={user} />} />
        <Route path="/events/:id/edit" element={<EventFormPage user={user} />} />
        <Route path="/oshis" element={<OshiPage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
