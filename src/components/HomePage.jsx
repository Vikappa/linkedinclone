import { useDispatch } from'react-redux'; 
import { useEffect } from "react" 
import { FETCH_CURRENT_USER, FETCH_ALL_USERS, ADD_EXPERIENCE } from '../Redux/Actions/ADD_EXPERIENCE';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};
const calculateExperience = (startDate, endDate) => {
  const months = differenceInMonths(new Date(endDate), new Date(startDate));
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return `${years} anni ${remainingMonths} mesi`;
};

function HomePage() {

    const dispatch = useDispatch();

  
    useEffect(() => {
  
  const accessToken = sessionStorage.getItem('accessToken');
  
      const fetchCurrentUser = async () => {
        try {
          const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
            headers: {
              'Authorization': `Bearer ${accessToken?accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA"}`
            }
          })
          if (!res.ok) {
            throw new Error("Errore");
          }
          const data = await res.json();
          console.log(data)
          dispatch({
            type: FETCH_CURRENT_USER,
            payload: data
          })
  
  
  
  
        } catch (error) {
          console.log("Errore", error);
        }
      }
  
  
    
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
          dispatch({type: ADD_EXPERIENCE, payload: data});
          console.log("experience", data);
        } catch (error) {
          console.log("Errore", error);
        }
      };
  
  fetchExperience()
  fetchCurrentUser()
  
      //fetch2
      //fetch3
    }, [])

return (
    <></>
)
}

export default HomePage