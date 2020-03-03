import React from 'react';
// import { Link } from 'react-router-dom';

// Components
// import Container from 'react-bootstrap/Container'

// Style
import './ProfileMain.css';

// const ProfileMain = props => {
//   return(
//     <Container id="profile-main" className="d-flex flex-row align-items-center justify-content-center">
//       <div id="profile-nav" className="col-sm-3 d-flex flex-column align-items-center justify-content-start">
//         <a id="overviewBtn" className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-user"></i>Overview</a>
//         <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-comment-alt"></i>Posts</a>
//         <Link to='/profile/edit'>
//           <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="far fa-edit"></i>Update Info</a>
//         </Link>
//         <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-camera"></i>Update Picture</a>
//         <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-key"></i>Change Password</a>
//       </div>
//       <div id="profile-main-content" className="col-sm-9 d-flex flex-column align-items-center justify-content-start">
//         <div id="given-names-wrapper" className="container d-flex flex-row align-items-center justify-content-center mt-1 mb-5">
//           <div id="first-name-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.firstName}</h4>
//             <small>First Name</small>
//           </div>
//           <div id="last-name-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.lastName}</h4>
//             <small>Last Name</small>
//           </div>
//           <div id="email-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.email}</h4>
//             <small>Email</small>
//           </div>
//         </div>
//         <div id="user-location-wrapper" className="container d-flex flex-row align-items-center justify-content-center mb-5">
//           <div id="city-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.city}</h4>
//             <small>City</small>
//           </div>
//           <div id="state-wrapper" className="container col-sm-9 d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.state}</h4>
//             <small>State</small>
//           </div>
//         </div>
//         <div className="container d-flex flex-row align-items-center justify-content-center mb-5">
//           <div id="username-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.username}</h4>
//             <small>Username</small>
//           </div>
//         </div>
//         <div className="container d-flex flex-row align-items-center justify-content-center">
//           <div id="member-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
//             <h4>{props.profile.createdAt}</h4>
//             <small>Member Since</small>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

const ProfileMain = props => {
  return (
    <div id="profile-main-content" className="col-sm-9 d-flex flex-column align-items-center justify-content-start">
      <div id="given-names-wrapper" className="container d-flex flex-row align-items-center justify-content-center mt-1 mb-5">
        <div id="first-name-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.firstName}</h4>
          <small>First Name</small>
        </div>
        <div id="last-name-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.lastName}</h4>
          <small>Last Name</small>
        </div>
        <div id="email-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.email}</h4>
          <small>Email</small>
        </div>
      </div>
      <div id="user-location-wrapper" className="container d-flex flex-row align-items-center justify-content-center mb-5">
        <div id="city-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.city}</h4>
          <small>City</small>
        </div>
        <div id="state-wrapper" className="container col-sm-9 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.state}</h4>
          <small>State</small>
        </div>
      </div>
      <div className="container d-flex flex-row align-items-center justify-content-center mb-5">
        <div id="username-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.username}</h4>
          <small>Username</small>
        </div>
      </div>
      <div className="container d-flex flex-row align-items-center justify-content-center">
        <div id="member-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.createdAt}</h4>
          <small>Member Since</small>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain;
