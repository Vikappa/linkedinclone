import { Route, Routes } from "react-router";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import { useEffect } from "react" 
import LinkedInNavBar from "./components/LinkedInNavBar";
import Footer from "./components/Footer";
import LoginInScreen from "./components/LoginInScreen";

function App() {
  useEffect(() => {
    //fetch1
    //fetch2
    //fetch3
  }, [])
  
  return (
    <>
      <LinkedInNavBar/>
      <Routes>
        <Route path="/" element={<LoginInScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
