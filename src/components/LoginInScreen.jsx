import { useState } from "react";
import { Link } from "react-router-dom";

const LoginInScreen = () => {
  const [selectedUser, setSelectedUser] = useState("");

  const tokenSorter = function (userName) {
    switch (userName) {
      case "":
        setSelectedUser("");
        return "";
      case "Alex":
        setSelectedUser("Alex");
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ1ZjNhZmEzM2ZjOTAwMTk2NTgzOTMiLCJpYXQiOjE3MDg1MjAzNjcsImV4cCI6MTcwOTcyOTk2N30.NOK6WkzaBbxfdsJm56EzngNldjRWrMDl7Oi7kPLWkXU";
      case "Vincenzo":
        setSelectedUser("Vincenzo");
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjI4YTI0ZjYwNTAwMTkzN2Q0NzciLCJpYXQiOjE3MDgzMzU3NTUsImV4cCI6MTcwOTU0NTM1NX0.rPYXfWxZ2hjRBQRSIY8v2KnWuiurQ9ni42quyqpLtvQ";
      case "Elisa":
        setSelectedUser("Elisa");
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUzYjI0ZjYwNTAwMTkzN2Q0NmEiLCJpYXQiOjE3MDgzMzIzNDcsImV4cCI6MTcwOTU0MTk0N30.PhTpxaqmoqshGHbwVUIWDlVbF1mGD_vRAaHWmdvBCIs";
      case "Wendy":
        setSelectedUser("Wendy");
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YmIyZTljNDM3MDAwMTkzYzM2MzYiLCJpYXQiOjE3MDg0NDAzNjcsImV4cCI6MTcwOTY0OTk2N30.fhr0aoKpxqYCzNzu4Su0fI7nIMXVKTW4RhJ1oOq6SMk";
      case "Hamed":
        setSelectedUser("Hamed");
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNDI0ZjYwNTAwMTkzN2Q0NTYiLCJpYXQiOjE3MDg0NDAxNDUsImV4cCI6MTcwOTY0OTc0NX0.vBL6Ff4BJ74LRFlUylu-xSvoDHJOCOW3yIv8QCy1Kd8";
      case "Fidan":
        setSelectedUser("Fidan");
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ1YzIyMGEzM2ZjOTAwMTk2NTgyZjgiLCJpYXQiOjE3MDg1MDc2ODAsImV4cCI6MTcwOTcxNzI4MH0.h6G9ywPSU53S02ibgYdu4jqjmvx0AelbUZ4MpDqL2_I";
      default:
        setSelectedUser("");
        console.log(
          "Utente non implementato, correggi il tokenSorter in LoginInScreen.js"
        );
        return "";
    }
  };

  const handleSelect = (event) => {
    sessionStorage.setItem("accessToken", tokenSorter(event.target.value));
  };

  return (
    <div
      id="login-page"
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
    >
      <div id="login-form">
        <h1 className="text-center">Login</h1>
        <p
          className="text-center"
          style={{ fontSize: "0.8rem", color: "grey" }}
        >
          Gli utenti selezionabili dipendono dalle password dei token delle API.
          Per ora teniamo un form con i valori hardcoded, valutiamo se in futuro
          tenere un form libero in cui incollare la password
        </p>
        <select
          className="custom-select fratmSelect"
          value={selectedUser}
          onChange={handleSelect}
        >
          <option value="">Seleziona un utente</option>
          <option value="Alex">Alex</option>
          <option value="Vincenzo">Vincenzo</option>
          <option value="Elisa">Elisa</option>
          <option value="Wendy">Wendy</option>
          <option value="Fidan">Fidan</option>
          <option value="Hamed">Hamed</option>
        </select>

        {selectedUser !== "" ? (
          <Link to="/home">
            <button className=" mt-3 d-flex align-items-center justify-content-center btn btn-primary loginButton">
              Accedi
            </button>
          </Link>
        ) : (
          <button
            className=" mt-3 d-flex align-items-center justify-content-center btn btn-primary loginButton"
            disabled
          >
            Accedi
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginInScreen;
