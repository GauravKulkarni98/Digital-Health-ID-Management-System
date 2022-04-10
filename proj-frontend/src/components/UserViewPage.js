import React from 'react'
import pimg from '../images/userprofile.png'



export default function UserViewPage(props) {

    // var retrievedUser = localStorage.getItem("userarr");
    var retrievedUser = sessionStorage.getItem("userarr");


    var user = JSON.parse(retrievedUser);
    console.log(user);

    let back = () => {
        props.history.push('/user-page');
    }

    
  return (
      <>
    <div>UserViewPage</div>
    <div className="card mx-auto" style={{ 'width': '18rem', 'textAlign': 'center' }}>
    <img src={pimg} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">DHIMS</h5>
        <p className="card-text">UserID : {user.id}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">DOB : {user.dob}</li>
        <li className="list-group-item">Address :{user.address} </li>
    </ul>
    <div className="card-body">
    <button className="btn btn-success btn-lg"  onClick={() => back()} style={{ marginLeft: "10px" }}>Back</button>
    </div>
</div>
</>
  )
}
