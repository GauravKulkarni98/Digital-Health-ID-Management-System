import React, { Component } from 'react'
import pimg from '../images/userprofile.png'

export default class ViewUser extends Component {

    constructor(props) {
        super(props);
        console.log("userlist constructor");
        this.state = {
            id: this.props.match.params.id,
            name: this.props.match.params.name,
            dob: this.props.match.params.dob,
            address: this.props.match.params.address
        }
        // console.log(this.state.name);
    }

    back() {
        this.props.history.push('/admin-user-list');
    }

    render() {
        return (
            <>
                <div className="card mx-auto" style={{ 'width': '18rem', 'textAlign': 'center' }}>
                    <img src={pimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">DHIMS</h5>
                        <p className="card-text">UserID : {this.state.id}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {this.state.name}</li>
                        <li className="list-group-item">DOB : {this.state.dob}</li>
                        <li className="list-group-item">Address :{this.state.address} </li>
                    </ul>
                    <div className="card-body">
                    <button className="btn btn-success btn-lg" onClick={this.back.bind(this)} style={{ marginLeft: "10px" }}>Back</button>
                    </div>
                </div>
            </>
        )
    }
}
