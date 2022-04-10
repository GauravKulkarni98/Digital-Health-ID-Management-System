import React, { Component } from 'react'
import RecordService from '../../services/RecordService';


export default class RecordList extends Component {
    constructor(props) {
        super(props);
        console.log("Record list constructor");
        this.state = {
            recarr: []
        }
    }

    componentDidMount() {
        console.log("in Record list componentDidMount");
        RecordService.getAllRecs().then((response) => {
            this.setState({ recarr: response.data })
            console.log(this.state.recarr)

        })
    }

    deleteRecord(id){
        RecordService.deleteRecord(id).then( res => {
            this.setState({recarr: this.state.recarr.filter(rec => rec.id !== id)});
        });
    }

    render() {
        console.log("in Record render")
        return (
            <>
            <div>
                <h2 className="text-center">Record's List</h2>
                <div className="row text-right">
                    <button className="btn btn-primary " onClick={this.addrec}> Add Record</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>rec Id</th>
                                <th>Date of Issue</th>
                                <th>User Diagnosis</th>
                                <th>Doc Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.recarr.map((rec) =>
                                    <tr key={rec.id}>
                                        <td>{rec.id}</td>
                                        <td>{rec.recordDate}</td>
                                        <td>{rec.userDiagnosis}</td>
                                        <td>{rec.docId.id}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editRecord(rec.recid)}>edit</button>
                                            <button className="btn btn-danger" onClick={() => this.deleteRecord(rec.recid)}>delete</button>
                                            <button className="btn btn-success">view</button>
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




