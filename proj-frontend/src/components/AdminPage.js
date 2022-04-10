import React from 'react';
// import bg from '../images/admin background.jpg';

export default function AdminPage(props) {
    console.log(props);

    // const name = localStorage.getItem('name');
    // const id = localStorage.getItem('userid');
    const name = sessionStorage.getItem('name');
    const id = sessionStorage.getItem('userid');
    console.log(id);


    let hospList = () => {
        props.history.push('/hospital-list');
    }

    let userList = () => {
        props.history.push('/admin-user-list');
    }
    return (
        <>
        {/* style={{backgroundImage: `url("https://image.shutterstock.com/image-photo/admin-login-sign-made-wood-260nw-391517770.jpg")`}} */}
        <div >
            <div style={{ textAlign : 'center'}}>
                <br/><br/>
                <h2>Hello {name}, Which list would you like to visit today?</h2>
                <br/><br/><br/>
                <button type="button" onClick={() => hospList()} className="btn btn-primary btn-lg">Hospital List</button>
                <button type="button" style={{ marginLeft: "50px" }} onClick={() => userList()} className="btn btn-primary btn-lg">User List</button>
            <br/><br/>
            </div>
            </div>
        </>
    )
}



