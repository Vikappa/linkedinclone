import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { BsSearch } from "react-icons/bs";
import profilePic from '../assets/mockupProfilepic.jpg'
import { Link } from 'react-router-dom'
import linkedInIcon from '../assets/iconSmall.png'

function LinkedInNavBar() {

  return (
    <>
    <Navbar fixed='top' className="bg-body-tertiary justify-content-between container-fluid w-100 p-md-0">
        <img src={profilePic} alt="profile pic mockup" className="rounded-circle d-sm-none" id='profilePic' />
      <Container className='p-0 d-sm-none'>
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
      <Link>
      <i className="fa-solid fa-comment-dots d-sm-none" id="messageIcon"></i>
      </Link>
        <img src={linkedInIcon} alt='linkedin icon' height={'30px'} className='d-flex align-items-center mx-sm-3' id='linkedInIcon' />
      <Container className='container-fluid d-none d-sm-flex'>

        <div className='d-flex flex-column text-center'>
        <i className="bi bi-search"></i>
        <p className='d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP'>Cerca</p>
        </div>
        <div className='d-flex flex-column text-center'>
        <i className="bi bi-search"></i>
        <p className='d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP'>Home</p>
        </div>
        <div className='d-flex flex-column text-center'>
        <i className="bi bi-search"></i>
        <p className='d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP'>Lavoro</p>
        </div>
        <div className='d-flex flex-column text-center'>
        <i className="bi bi-search"></i>
        <p className='d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP'>Messaggistica</p>
        </div>
        <div className='d-flex flex-column text-center'>
        <i className="bi bi-search"></i>
        <p className='d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP'>Notifiche</p>
        </div>
        <div className='d-flex flex-column text-center'>
        <i className="bi bi-search"></i>
        <p className='d-none d-lg-inline p-0 m-0 navBarDedicatedButtonP'>Tu</p>
        </div>

      </Container>
    </Navbar>

<Navbar fixed='bottom' className="bg-body-tertiary justify-content-between container-fluid w-100 d-md-none p-0">
  <Link className='navbar2Buttons' >
<i className="bi bi-house-door-fill"></i>
  </Link>
  <Link className='navbar2Buttons' >
<i className="bi bi-person-fill"></i>
  </Link>
  <Link className='navbar2Buttons' >
<i className="bi bi-plus-square-fill"></i>
  </Link>
<Link className='navbar2Buttons' >
<i className="bi bi-bell-fill"></i>
</Link>
<Link className='navbar2Buttons' >
<i className="bi bi-briefcase-fill"></i>
</Link>
</Navbar>
    </>
  )
}

export default LinkedInNavBar;
