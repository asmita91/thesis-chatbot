import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./uiPages/Login";
import RegistrationPage from "./uiPages/Register";
import Chat from "./uiPages/first_page";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<Chat />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;


//GROQ_API_KEY = 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
