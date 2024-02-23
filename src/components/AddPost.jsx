import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_ALL_POSTS } from "../Redux/Actions/ADD_EXPERIENCE";
import { Button, Form, FormControl } from "react-bootstrap";

const AddPost = function () {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [postText, setPostText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  function handleChangeTextInput(e) {
    setPostText(e.target.value);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    // const postData = {
    //   text: postText,
    //   post: imageFile,
    // };

    const myURl = `https://striveschool-api.herokuapp.com/api/posts/`;

    const bearerToken = sessionStorage.getItem("accessToken");
    try {
      const formData = {
        text: postText,
      };
      const response = await fetch(myURl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + bearerToken,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore nella fetch post");
      }

      const data = await response.json();
      console.log("Commento inviato con successo:", data._id);
      const myUrlImage = `https://striveschool-api.herokuapp.com/api/posts/${data._id}`;

      const formDataImage = new FormData();
      formDataImage.append("post", imageFile);

      const responseImage = await fetch(myUrlImage, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + bearerToken,
        },
        body: formDataImage,
      });
      if (!responseImage.ok) {
        throw new Error("Errore nella richiesta POST per l'immagine");
      }
      await fetchAllPosts();
      setFileInputKey(Date.now());
      setImageFile(null);
      setPostText("");
    } catch (error) {
      console.error("Errore invio del commento:", error);
    }
  }

  async function fetchAllPosts() {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Errore nel fetch dei post");
      }
      const posts = await res.json()
      dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {currentUser ? (
        <div
          className="d-flex bg-white rounded rounded-2 m-1 align-items-center p-3 pb-5 gap-2"
          style={{ border: "1px solid lightgrey" }}
        >
          <img
            src={currentUser.image}
            alt="User"
            height={"60px"}
            width={"60px"}
            className="border rounded"
          />
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <FormControl
              style={{ width: "100%" }}
              className="rounded-pill p-2"
              type="text"
              placeholder="Avvia una nuova conversazione"
              value={postText}
              onChange={handleChangeTextInput}
            />
            <FormControl
              key={fileInputKey}
              className="mt-2"
              type="file"
              onChange={handleImageChange}
              style={{ width: "50%" }}
            />
            <Button
              type="submit"
              className="mt-2 text-center"
              variant="secondary"
              style={{ width: "15%", height: "10%" }}
              disabled={postText.length===0}
            >
              Invia
            </Button>
          </Form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddPost;
