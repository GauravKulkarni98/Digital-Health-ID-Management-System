import React, { Component } from 'react'
import HospitalService from '../../services/HospitalService';


export default class HospitalList extends Component {
    constructor(props) {
        super(props);
        console.log("Hospital list constructor");
        this.state = {
            hosparr: []
        }
        this.addhosp = this.addhosp.bind(this);
        this.edithosp = this.edithosp.bind(this);
        this.deletehosp = this.deletehosp.bind(this);
    }


    deletehosp(id){
        HospitalService.deleteHospital(id).then( res => {
            this.setState({hosparr: this.state.hosparr.filter(hosp => hosp.id !== id)});
        });
    }

    // viewhosp(id){
    //     HospitalService.getById(id)
    //     .then((response) => {
    //         const result = response.data
    //         console.log(result);
    //         localStorage['hosparr'] = JSON.stringify(result);
    //         this.props.history.push(`/view-hosp/${id}`);
    //     }).catch((err) => {
    //         console.log(err)
    //     })
        
    // }

    edithosp(id){
        this.props.history.push(`/add-hosp/${id}`);
    }

    componentDidMount() {
        console.log("in Hospital list componentDidMount");
        HospitalService.getAllHosp().then((response) => {
            this.setState({ hosparr: response.data })
            console.log(this.state.hosparr)

        })
    }

    addhosp() {
        this.props.history.push('/add-hosp/_add'); // history obj ->contains all the url mappings and is mantained by react router and passed down to the child with the help of props
    }

    back() {
        this.props.history.push('/admin-page');
    }

    render() {
        console.log("in hospital render")
        return (
            <>
                <div>
                    <h2 className="text-center">Hospital's List</h2>
                    <div className="row text-right">
                        <button className="btn btn-primary " onClick={this.addhosp}> Add Hospital</button>
                    </div>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr><th>hosp Id</th>
                                    <th>FirstName</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.hosparr.map((hosp) =>
                                        <tr key={hosp.id}>
                                            <td>{hosp.id}</td>
                                            <td>{hosp.hpName}</td>
                                            <td>{hosp.hpEmail}</td>
                                            <td>{hosp.hpAddress}</td>
                                            <td>
                                                <button onClick={() => this.edithosp(hosp.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletehosp(hosp.id)} className="btn btn-danger">Delete </button>
                                                {/* <button style={{ marginLeft: "10px" }} onClick={()=>this.viewhosp(hosp.id)} className="btn btn-info">View </button> */}
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
