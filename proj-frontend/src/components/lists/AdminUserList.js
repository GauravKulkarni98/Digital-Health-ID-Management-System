import React, { Component } from 'react'
import UserService from '../../services/UserService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class UserList extends Component {
    constructor(props) {
        super(props);
        console.log("userlist constructor");
        this.state = {
            userarr: []
        }
        // this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }


    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({ userarr: this.state.userarr.filter(user => user.id !== id) });
            toast.success("Successfully deleted user with id-> " + id + "!");
        });
    }

    viewUser(id, name, address, dob) {
        this.props.history.push(`/view-user/${id}/${name}/${address}/${dob}`);
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        console.log("in userlist componentDidMount");
        UserService.getAllUsers().then((response) => {
            this.setState({ userarr: response.data })
            console.log(this.state.userarr)

        })
    }

    // addUser() {
    //     this.props.history.push('/add-user/_add'); // history obj ->contains all the url mappings and is mantained by react router and passed down to the child with the help of props
    // }

    back() {
        this.props.history.push('/admin-page');
    }

    render() {
        console.log("in user render")
        return (
            <>
            <ToastContainer />
                <div>
                    <h2 className="text-center">User List</h2>
                    <div className="row text-right">
                        {/* <button className="btn btn-primary " onClick={this.addUser}> Add User</button> */}
                    </div>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr><th>User Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Dob</th>
                                    <th>Age</th>
                                    <th>MobileNo</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userarr.map((user) =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                            <td>{user.dob}</td>
                                            <td>{user.age}</td>
                                            <td>{user.mobileNo}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <button onClick={() => this.editUser(user.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(user.id, user.name, user.address, user.dob)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className="btn btn-success btn-lg mx-auto" onClick={this.back.bind(this)} style={{ marginLeft: "10px" }}>Back</button>
            </>
        )
    }
}
