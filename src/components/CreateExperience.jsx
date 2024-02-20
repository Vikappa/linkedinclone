import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperience } from "../Redux/Actions/ADD_EXPERIENCE";
import { Button, Col } from "react-bootstrap";

const CreateExperience = ({ fetchExperience }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
    // image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const myPostUrl =
    "https://striveschool-api.herokuapp.com/api/profile/65d322a824f605001937d478/experiences";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjJhODI0ZjYwNTAwMTkzN2Q0NzgiLCJpYXQiOjE3MDgzMzU3ODQsImV4cCI6MTcwOTU0NTM4NH0.pioeDwZO2GA-_tAisq4KElbrIk9InfeCBaG2-L3oQJA";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(myPostUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + bearerToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore nella richiesta POST");
      }

      const data = await response.json();
      dispatch(addExperience(data));

      setFormData({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        area: "",
        description: "",
        // image: "",
      });
      fetchExperience();
    } catch (error) {
      console.error("Errore durante la richiesta POST:", error);
    }
  };

  return (
    <div>
      <h4>Crea un`esperienza</h4>
      <form onSubmit={handleSubmit}>
        <Col className="d-flex">
          <Col md={6}>
            <label>
              Ruolo:
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Ruolo"
                required
                className="ms-2"
              />
            </label>

            <label>
              Azienda:
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Azienda"
                required
                // className="ms-2"
              />
            </label>

            <label>
              Data di inizio:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="ms-2"
              />
            </label>

            <label>
              Data di fine:
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="ms-2"
              />
            </label>
          </Col>

          <Col md={6}>
            <label>
              Area:
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area"
                className="ms-2"
              />
            </label>

            <label>
              Descrizione:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descrizione"
                // className="ms-2"
              />
            </label>
            <label>
              Picture
              <input
                type="file"
                value={formData.image}
                onChange={handleChange}
              />
            </label>
          </Col>
        </Col>
        <Col className=" d-flex justify-content-center mt-2 mb-5 border-bottom">
          <Button
            type="submit"
            variant="success"
            style={{ width: "75%", height: "50%" }}
            className="mb-5 mt-5"
          >
            Invia
          </Button>
        </Col>
      </form>
    </div>
  );
};

export default CreateExperience;
