import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { BsSearch } from "react-icons/bs";
import profilePic from '../assets/mockupProfilepic.jpg'
import { Link } from'react-router-dom';
function LinkedInNavBar() {

  return (
    <>
    <Navbar fixed='top' className="bg-body-tertiary justify-content-between container-fluid w-100">
        <img src={profilePic} alt="profile pic mockup" className="rounded-circle" id='profilePic' />
      <Container className='p-0'>
        <Form className='w-100 d-flex align-items-center'>
        <BsSearch className='position-relative' id='searchIcon' />
          <Form.Control
            id='formControlNavBar'
            type="text"
            placeholder="     Cerca"
            className="mr-sm-2 container-fluid border-0 "
            />
        </Form>
      </Container>
      <i className="fa-solid fa-comment-dots " id="messageIcon"></i>
    </Navbar>

<Navbar fixed='bottom' className="bg-body-tertiary justify-content-between container-fluid w-100 d-md-none">
<i className="bi bi-house-door-fill"></i>
<i className="bi bi-person-fill"></i>
<i className="bi bi-plus-square-fill"></i>
<i className="bi bi-bell-fill"></i>
<i className="bi bi-briefcase-fill"></i>
</Navbar>
    </>
  )
}

export default LinkedInNavBar;
