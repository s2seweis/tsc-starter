// src/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
// import About from './pages/About'; // Uncomment this line when the About component is ready

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div>
          {/* Navigation or Header Component can be added here */}

          {/* Define Routes */}
          <Routes>
            {/* Home Page Route */}
            <Route path="/home" element={<Home />} />

            {/* About Page Route */}
            {/* Uncomment the following line when the About component is ready */}
            {/* <Route path="/about" element={<About />} /> */}

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};

export default AppRouter;
