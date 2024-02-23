import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FETCH_CURRENT_USER,
  FETCH_ALL_USERS,
  FETCH_CURRENT_USER_EXPERIENCES,
  FETCH_ALL_POSTS,
  FETCH_ALL_POST_COMMENTS,
} from "../Redux/Actions/ADD_EXPERIENCE";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileBarOnHomepage from "./ProfileBarOnHomepage";
import AllUserPosts from "./AllUserPosts";
import JobSmall from "./JobSmall";
import { FINISH_LOADING_JOBS } from "../Redux/Reducers/JobsReducer";

function HomePage() {
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState(null);
  let currentUserStore = useSelector((state) => state.currentUser.currentUser);
  const jobsArray = useSelector((state) => state.jobs.allTheJobs);

  const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?search=`;

  const getJobs = async () => {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const fetchResults = await response.json();
        dispatch({
          type: FINISH_LOADING_JOBS,
          payload: fetchResults.data,
        });
      } else {
        alert("Errore nella ricezione dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCurrentUser(currentUserStore);
  }, [currentUserStore]);

  useEffect(() => {
    const fetchExperiencesCurrentUser = async () => {
      try {
        const fetchedExperiences = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!fetchedExperiences.ok) {
          throw new Error("Errore nella fetch delle esperienze");
        }

        const experiencesData = await fetchedExperiences.json();

        dispatch({
          type: FETCH_CURRENT_USER_EXPERIENCES,
          payload: experiencesData,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchExperiencesCurrentUser();
  }, [currentUser, dispatch]);

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
        dispatch({
          type: FETCH_ALL_USERS,
          payload: data,
        });
      } catch (error) {
        console.log("Errore", error);
      }
    };

    const fetchAllPost = async () => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts`,
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
        dispatch({
          type: FETCH_ALL_POSTS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllPostComments = async function () {
      try {
        const result = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/`,
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
        if (!result.ok) {
          throw new Error("Errore GET COMMENTI");
        }
        const resultFetchCommentiPost = await result.json();
        dispatch({
          type: FETCH_ALL_POST_COMMENTS,
          payload: resultFetchCommentiPost,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPostComments();
    fetchCurrentUser();
    fetchAllUsers();
    fetchAllPost();
    if (jobsArray.length === 0) {
      getJobs();
    }
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={3}>
          <ProfileBarOnHomepage />
        </Col>
        <Col xs={12} lg={7} className="py-3">
          <AllUserPosts />
        </Col>
        <Col xs={0} lg={2}>
          <JobSmall />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
