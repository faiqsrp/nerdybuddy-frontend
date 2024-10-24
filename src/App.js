import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { AppContextProvider, AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const { setUserData, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const mockUserData = {
        name: "John Doe",
        email: "john@example.com",
        role: "admin",
      };
      setUserData(mockUserData);
      setLoading(false);
    }, 1000);
  }, [setUserData, setLoading]);

  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
