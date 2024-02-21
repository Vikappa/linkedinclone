/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FETCH_CURRENT_USER,
  FETCH_ALL_USERS,
  FETCH_CURRENT_USER_EXPERIENCES,
  FETCH_ALL_POSTS,
} from "../Redux/Actions/ADD_EXPERIENCE";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileBarOnHomepage from "./ProfileBarOnHomepage";
 
function HomePage() {
  const dispatch = useDispatch()

  const [currentUser, setCurrentUser] = useState(null)
  let currentUserStore = useSelector(state => state.currentUser.currentUser)

  useEffect(() => {
    setCurrentUser(currentUserStore)
  }, [currentUserStore])
  
  useEffect(() => {
const fetchExperiencesCurrentUser = async () => {
  try {
    const fetchedExperiences = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${currentUser._id}/experiences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  
    if (!fetchedExperiences.ok) {
      throw new Error("Errore nella fetch delle esperienze");
    }
  
    const experiencesData = await fetchedExperiences.json();
  
    // Dispatch dell'azione Redux
    dispatch({
      type: FETCH_CURRENT_USER_EXPERIENCES,
      payload: experiencesData,
    });
  } catch (error) {
    console.log("Errore", error);
  }
  

}
fetchExperiencesCurrentUser()
  }, [currentUser, dispatch])
    
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
        )
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
    }

    const fetchAllPost = async () => { 
try{
   const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts`,
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
}catch(error){
  console.log(error)
}


     }


    fetchCurrentUser()
    fetchAllUsers()
    fetchAllPost()

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
