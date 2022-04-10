import React, { Component } from 'react';
import DoctorService from '../../services/DoctorService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class DoctorList extends Component {
    constructor(props) {
        super(props);
        console.log("doctorlist constructor");
        this.state = {
            docarr: []
        }
        this.addDoc = this.addDoc.bind(this);
        this.editDoc = this.editDoc.bind(this);
        this.deleteDoc = this.deleteDoc.bind(this);
    }

    componentDidMount() {
        console.log("in doctorlist componentDidMount");
        DoctorService.getAllDocs().then((response) => {
            this.setState({ docarr: response.data })
            console.log(this.state.docarr)

        })
    }

    deleteDoc(id) {
        DoctorService.deleteDoc(id).then(res => {
            this.setState({ docarr: this.state.docarr.filter(doc => doc.id !== id) });
            toast.success("Successfully deleted doctor with id-> " + id + "!");
        });
    }

    // viewDoc(id, name, address, dob) {
    //     this.props.history.push(`/view-user/${id}/${name}/${address}/${dob}`);
    // }

    addDoc(id) {
        this.props.history.push(`/add-doctor/_add`); // history obj ->contains all the url mappings and is mantained by react router and passed down to the child with the help of props
    }

    editDoc(id) {
        this.props.history.push(`/add-doctor/${id}`);
    }


    render() {
        console.log("in doc render")
        return (
            <>
            <ToastContainer />
            <div>
                <h2 className="text-center">Doctor's List</h2>
                <div className="row text-right">
                    <button className="btn btn-primary " onClick={this.addDoc}> Add Doctor</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Doc Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>MobileNo</th>
                                <th>Speciality</th>
                                <th>Hosp Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.docarr.map((doc) =>
                                    <tr key={doc.id}>
                                        <td>{doc.id}</td>
                                        <td>{doc.name}</td>
                                        <td>{doc.email}</td>
                                        <td>{doc.mobileNo}</td>
                                        <td>{doc.speciality}</td>
                                        <td>{doc.hospitalId.id}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editDoc(doc.id)}>edit</button>
                                            <button className="btn btn-danger" onClick={() => this.deleteDoc(doc.id)}>delete</button>
                                            {/* <button className="btn btn-success">view</button> */}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    }
}
