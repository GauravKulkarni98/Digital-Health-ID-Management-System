import React, { useState } from 'react'
import RecordService from '../services/RecordService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserRecord(props) {

    // var retrievedRecord = localStorage.getItem("recordarr");
    var retrievedRecord = sessionStorage.getItem("recordarr");
    const [recordarr, setRecordarr] = useState(JSON.parse(retrievedRecord));
    // var recordarr = JSON.parse(retrievedRecord);
    console.log(recordarr);

    // let addRecord = () => {
    //     props.history.push(`/add-record/${record.id}`);
    // }
    const back = () => {
        props.history.push('/user-page');
    }

    const deleteRecord = (id) => {
        RecordService.deleteRecord(id).then(res => {
            setRecordarr(recordarr.filter(doc => doc.id !== id));
            toast.success("Successfully deleted record with id-> " + id + "!");
        });
    }
    // DoctorService.deleteDoc(id).then(res => {
    //     // this.setState({ docarr: this.state.docarr.filter(doc => doc.id !== id) });
    // });

    return (
        <>
            <ToastContainer />
            <div>
                <h2 className="text-center">User Records </h2>
                <div className="row text-right">
                    {/* <button className="btn btn-primary " onClick={() => addRecord()}> Add Record</button> */}
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Record Id</th>
                                <th>User ID</th>
                                <th>Date of Issue</th>
                                <th>User Diagnosis</th>
                                <th>Doc Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recordarr.map((rec) =>
                                    <tr key={rec.id}>
                                        <td>{rec.id}</td>
                                        <td>{rec.userId.id}</td>
                                        <td>{rec.recordDate}</td>
                                        <td>{rec.userDiagnosis}</td>
                                        <td>{rec.docId.id}</td>
                                        <td>
                                            {/* <button className="btn btn-success" onClick={() => editDoc(rec.id)}>edit</button> */}
                                            <button className="btn btn-danger" onClick={() => deleteRecord(rec.id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-success btn-lg" style={{ alignItems: 'center' }} onClick={() => back()}>Back</button>
            </div>
        </>
    )
}
