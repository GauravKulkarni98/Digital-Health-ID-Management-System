import React from 'react'

export default function HospitalPage() {

    // const name = localStorage.getItem('name');
    const name = sessionStorage.getItem('name');


   return (
        <>
            <div style={{ textAlign : 'center'}}>
                <h2>Hello {name}, Which list would you like to visit today?</h2>
                <button type="button" onClick={() => hospList()} className="btn btn-primary btn-lg">Hospital List</button>
                <button type="button" style={{ marginLeft: "50px" }} onClick={() => userList()} className="btn btn-primary btn-lg">User List</button>
            </div>
        </>
    )
}
