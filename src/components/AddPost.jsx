import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';
import { FETCH_ALL_POSTS } from '../Redux/Actions/ADD_EXPERIENCE';

const AddPost = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [postText, setPostText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/posts/';
    const bearerToken = `Bearer ${sessionStorage.getItem('accessToken')}`;
  
    try {
      // Invio del testo del post e recupero dell'ID del post creato
      const postId = await postTextContent(apiUrl, postText, bearerToken);
      if (imageFile) {
        // Se c'è un file immagine, lo inviamo usando l'ID del post appena creato
        await postImage(`${apiUrl}${postId}`, imageFile, bearerToken);
      }
      resetForm();
      fetchAllPosts();
    } catch (error) {
      console.error('Errore durante l\'invio del post:', error);
    }
  };
  
  const postImage = async (url, file, token) => {
    const formData = new FormData();
    formData.append('post', file);
    // Assicurarsi che l'header 'Content-Type' non sia impostato quando si invia FormData
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    });
    if (!response.ok) throw new Error('Errore nella richiesta POST per l\'immagine');
  };
  

  const postTextContent = async (url, text, token) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ text }),
    });
    if (!response.ok) throw new Error('Errore nella fetch post');
    const { _id } = await response.json();
    console.log('Post inviato con successo:', _id);
    return _id;
  };


  const fetchAllPosts = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/posts', {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('accessToken')}` },
      });
      if (!response.ok) throw new Error('Errore nel fetch dei post');
      const posts = await response.json();
      dispatch({ type: FETCH_ALL_POSTS, payload: posts });
    } catch (error) {
      console.error('Errore nel fetch dei post:', error);
    }
  };

  const resetForm = () => {
    setFileInputKey(Date.now());
    setImageFile(null);
    setPostText('');
  };

  return currentUser ? (
    <div className="d-flex bg-white rounded rounded-2 m-1 align-items-center p-3 pb-5 gap-2" style={{ border: '1px solid lightgrey' }}>
      <img src={currentUser.image} alt="User" height="60px" width="60px" className="border rounded" />
      <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <FormControl
          className="rounded-pill p-2"
          type="text"
          placeholder="Avvia una nuova conversazione"
          value={postText}
          onChange={handleInputChange}
          style={{ width: '100%' }}
        />
        <FormControl
          key={fileInputKey}
          className="mt-2"
          type="file"
          onChange={handleFileChange}
          style={{ width: '50%' }}
        />
        <Button type="submit" className="mt-2 text-center" variant="secondary" disabled={!postText} style={{ width: '15%', height: '10%' }}>
          Invia
        </Button>
      </Form>
    </div>
  ) : null;
};

export default AddPost;
