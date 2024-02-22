import { Route, Routes } from "react-router";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import LinkedInNavBar from "./components/LinkedInNavBar";
import Footer from "./components/Footer";
import LoginInScreen from "./components/LoginInScreen";
import SearchJobsPage from "./components/SearchJobsPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <LinkedInNavBar />
      <Routes>
        <Route path="/" element={<LoginInScreen />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/jobs" element={<SearchJobsPage />} />
        <Route path="/profile/me" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
