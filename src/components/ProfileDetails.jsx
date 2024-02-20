// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import img from '/src/img/bg-linkedin.png'

// function ProfileCard() {
//   const [profile, setProfile] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showProfiles, setShowProfiles] = useState(false);
//   const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMjNiMzI0ZjYwNTAwMTkzN2Q0NzkiLCJpYXQiOjE3MDgzMzYwNTEsImV4cCI6MTcwOTU0NTY1MX0.QwQijjjSxZNMPrGebk1FQ-jba4Y2hhdlK43ytPhzCnc';

//   useEffect(() => {
//     fetch('https://striveschool-api.herokuapp.com/api/profile/', {
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       setProfile(data);
//       console.log(data)
//     })
//     .catch(error => {
//       console.error('Si è verificato un errore:', error);
//     });
//   }, []);

//   const filteredProfiles = profile.filter((profile) =>
//     `${profile.name} ${profile.surname}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  
//   useEffect(() => {
//     setShowProfiles(searchTerm.trim() !== '');
//   }, [searchTerm]);


//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Cerca profilo..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {showProfiles && (
//         <>
//           {filteredProfiles.length === 0 ? (
//             <p>Profilo non trovato</p>
//           ) : (
//             filteredProfiles.map((profile) => (
//               <Card key={profile.id} style={{ width: '50rem', marginTop: '10px', position: 'relative', overflow: 'hidden', backgroundColor: "white" }}>


//                 <div
//                   style={{
//                     width: '100%',
//                     height: '150px',
//                     backgroundImage: 'url(./src/img/bg-linkedin.png)',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundSize: 'cover',
//                     zIndex: 2,
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                   }}
//                 />


//                 <Card.Body style={{ zIndex: 3, position: 'relative', textAlign: 'left', marginLeft: '20px', top:"2.5rem" }}>
//                   <Card.Img className='ProfileImg' src={profile.image} alt="Profile Image" width={100} style={{borderRadius:"50%", border:"4px solid white"}} />
//                   <Card.Title style={{ color: 'black', marginBottom: '10px', position: 'relative', zIndex: 4, fontSize:"40px" }}>
//                     {profile.name ? profile.name : <span style={{ color: 'red' }}>Name not available</span>} 
//                     {' '}
//                     {profile.surname ? profile.surname : <span style={{ color: 'red' }}>Surname not available</span>} 
//                     <button className='Verify' style={{ marginLeft: '10px' }}>Verifica ora</button>
//                   </Card.Title>
//                   <Card.Text style={{ fontSize:"22px", color: profile.email ? 'black' : 'red', marginBottom: '5px', position: 'relative', zIndex: 4 }}>
//                     Email: {profile.email ? profile.email : "Not Available"} 
//                   </Card.Text>
//                   <Card.Text style={{  fontSize:"22px", color: profile.username ? 'black' : 'red', marginBottom: '5px', position: 'relative', zIndex: 4 }}>
//                     Username: {profile.username ? profile.username : "Not Available"} 
//                   </Card.Text>
//                   <Card.Text style={{  fontSize:"22px", color: profile.title ? 'black' : 'red', marginBottom: '5px', position: 'relative', zIndex: 4 }}>
//                     Title: {profile.title ? profile.title : "Not Available"} 
//                   </Card.Text>
//                   <Card.Text style={{  fontSize:"22px", color: profile.bio ? 'black' : 'red', position: 'relative', zIndex: 4 }}>
//                     Bio: {profile.bio ? profile.bio : "Not Available"} 
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             ))
//           )}
//         </>
//       )}
//     </>
//   );
  
// }

// export default ProfileCard;