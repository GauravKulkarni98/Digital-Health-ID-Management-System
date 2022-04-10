import React from "react";
import UserService from '../services/UserService';
import RecordService from "../services/RecordService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserPage(props) {

    // const name = localStorage.getItem('name');
    const name = sessionStorage.getItem('name');
    console.log(name);

    // const userid = localStorage.getItem('userid');
    const userid = sessionStorage.getItem('userid');
    // console.log(userid);

    const Userdetails = (e) => {
        e.preventDefault();
        UserService.getById(userid)
            .then((response) => {
                const result = response.data;
                console.log(result);
                // localStorage['userarr'] = JSON.stringify(result);
                sessionStorage['userarr'] = JSON.stringify(result);
                props.history.push(`/user-view-user`);

            }).catch((err) => {
                console.log(err);
                // toast.error(err);
            })


    }

    let recordinfo = (e) => {
        RecordService.getRecordByUserId(userid)
            .then((response) => {
                const result = response.data;
                console.log(result);
                // localStorage['recordarr'] = JSON.stringify(result);
                sessionStorage['recordarr'] = JSON.stringify(result);
                props.history.push('/user-record');

            }).catch((err) => {
                console.log("err-> "+err);
                toast.error("You Have Yet  to Create your User Record!!!");
            })
    }

    let addRecord = () => {
        // e.preventDefault();
        UserService.getById(userid)
            .then((response) => {
                const result = response.data;
                console.log(result);
                // localStorage['userarr'] = JSON.stringify(result);
                sessionStorage['userarr'] = JSON.stringify(result);
                props.history.push(`/add-record/${userid}`);
            }).catch((err) => {
                console.log(err);
                // toast.error(err);
            })
    }
    return (

        <>
            <ToastContainer />
            <div style={{ textAlign: 'center' }}>
                <h2>Hello {name}, What would you like to visit today?</h2>
                <button type="button" onClick={(e) => Userdetails(e)} className="btn btn-primary btn-lg">View your DHID</button>
                <button className="btn btn-success btn-lg" onClick={() => recordinfo()} style={{ marginLeft: "10px" }}>View Your Records</button>
                <button className="btn btn-success btn-lg" onClick={() => addRecord()} style={{ marginLeft: "10px" }}>Add Your Record</button>
            </div>
        </>
    )
}