/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {  Card } from "react-bootstrap"
import TastoCollegati from "./TastoCollegati";

function ProfileCardsInspectedUser({ inspectedUserId }) {
  const [inspectedUser, setInspectedUser] = useState(null)

  const storeAllUsers = useSelector(state => state.allUserArray.currentUser);

  useEffect(() => {
    const user = storeAllUsers.find(user => user._id === inspectedUserId);
    setInspectedUser(user)
  }, [inspectedUserId, storeAllUsers]);

  return (
    <>
      {inspectedUser && (
        <Card
        key={inspectedUser._id}
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          paddingBottom: "50px",
          backgroundColor: "white",
          }}
        >
          <div
            style={{
                width: "100%",
                height: "150px",
                backgroundImage: "url(./src/img/bg-linkedin.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: 2,
                position: "absolute",
                top: 0,
                left: 0,
            }}
          />
          <Card.Body
            style={{
                zIndex: 3,
                position: "relative",
                textAlign: "left",
                marginLeft: "20px",
                top: "2.5rem",
            }}
          >
            <Card.Img
              src={inspectedUser.image}
              className="ProfileImg"
              alt="Profile Image"
              style={{
                borderRadius: "10%",
                border: "4px solid white",
                width: "200px",
              }}
            />
            <Card.Title
              style={{
                color: "black",
                marginBottom: "10px",
                position: "relative",
                zIndex: 4,
                fontSize: "40px",
              }}
            >
              {inspectedUser.name ? inspectedUser.name : <span style={{ color: "red" }}>Name not available</span>}
              {" "}
              {inspectedUser.surname ? inspectedUser.surname : <span style={{ color: "red" }}>Surname not available</span>}
            </Card.Title>
            {
              <>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: inspectedUser.email ? "black" : "red",
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                {inspectedUser.email ? inspectedUser.email : ""}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: inspectedUser.username ? "black" : "red",
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                {inspectedUser.username ? inspectedUser.username : ""}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: inspectedUser.title ? "black" : "red",
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {inspectedUser.title ? inspectedUser.title : ""}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "22px",
                    color: inspectedUser.bio ? "black" : "red",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {inspectedUser.bio ? "Bio: " + inspectedUser.bio : ""}
                </Card.Text>
                <TastoCollegati user={inspectedUser}/>
              </>
            }
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default ProfileCardsInspectedUser
