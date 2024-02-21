/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  FETCH_CURRENT_USER,
  FETCH_ALL_USERS,
  ADD_EXPERIENCE,
} from "../Redux/Actions/ADD_EXPERIENCE";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileBarOnHomepage from "./ProfileBarOnHomepage";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

    const fetchCurrentUser = async () => {
      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization: `Bearer ${
                accessToken
                  ? accessToken
                  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA"
              }`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Errore");
        }
        const data = await res.json();
        console.log(data);
        dispatch({
          type: FETCH_CURRENT_USER,
          payload: data,
        });
      } catch (error) {
        console.log("Errore", error);
      }
    };

    const fetchAllUsers = async () => {
      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization: `Bearer ${
                accessToken
                  ? accessToken
                  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA"
              }`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Errore");
        }
        const data = await res.json();
        console.log(data);
        dispatch({
          type: FETCH_ALL_USERS,
          payload: data,
        });
      } catch (error) {
        console.log("Errore", error);
      }
    };
    const myUrlFetchProfile =
      "https://striveschool-api.herokuapp.com/api/profile/65d322a824f605001937d478/experiences";
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA";

    const fetchExperience = async () => {
      try {
        const res = await fetch(myUrlFetchProfile, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + bearerToken,
            "Content-type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Errore");
        }

        const data = await res.json();
        dispatch({ type: ADD_EXPERIENCE, payload: data });
      } catch (error) {
        console.log("Errore", error);
      }
    };

    fetchExperience();
    fetchCurrentUser();
    fetchAllUsers();
    
    //fetch2
    //fetch3
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3}>
          <ProfileBarOnHomepage />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
