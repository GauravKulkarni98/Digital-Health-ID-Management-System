import React, { Component } from 'react'
import RecordService from '../../services/RecordService';
import UserService from '../../services/UserService';
import DoctorService from '../../services/DoctorService';


export default class CreateRecord extends Component {


    constructor(props) {
        super(props)

        this.state = {
            // it will retrive _add or Record id receiving via url
            id: this.props.match.params.id,
            userId: [],
            recordDate: '',
            userDiagnosis: '',
            docId: [],
            userarr: [],
            docarr: []
        }
        //bind the event handler with the component
        // this.changeuserIdHandler = this.changeuserIdHandler.bind(this);
        this.changerecordDateHandler = this.changerecordDateHandler.bind(this);
        this.changedocIdHandler = this.changedocIdHandler.bind(this);
        this.changeuserDiagnosisHandler = this.changeuserDiagnosisHandler.bind(this);
        this.saveOrUpdateRecord = this.saveOrUpdateRecord.bind(this);
    }

    componentDidMount() {
        console.log("in User componentDidMount");
        UserService.getById(this.state.id).then((response) => {
            this.setState({ userarr: response.data });
            console.log("userarr-> " + JSON.stringify(this.state.userarr));
        });
        console.log("in Doctor componentDidMount");
        DoctorService.getAllDocs().then((response) => {
            this.setState({ docarr: response.data });
            console.log("docarr-> " + JSON.stringify(this.state.docarr));
        });
        console.log("in Record add ComponentdidMount " + this.state.id);
        if (this.state.id === "_add") {
            console.log("in add record");
            return;
        }
        else {
            //to send get request to webservice and get the object which matches with id
            RecordService.getById(this.state.id).then((response) => {
                console.log(response.data);
                let recob = response.data;
                this.setState({
                    userId: recob.userId, recordDate: recob.recordDate,
                    userDiagnosis: recob.userDiagnosis, docId: recob.docId
                });
            })

        }
    }


    saveOrUpdateRecord = (e) => {
        e.preventDefault();// to stop the refreshing the page
        console.log(this.state)
        //create a objevct using form data to send it nodejs sertvice to add in the databse
        let rec = {
            userId: this.state.userarr, recordDate: this.state.recordDate, userDiagnosis: this.state.userDiagnosis, docId: this.state.docId
        };
        console.log('Record => ' + JSON.stringify(rec));

        if (this.state.id === '_add') {
            RecordService.addDoc(rec).then(result => {
                console.log(result.data);
                this.props.history.push("/user-page");
            });
        } else {

            RecordService.updateRecord(rec, this.state.id)
                .then(response => {
                    console.log('Record data updated successfully', response.data);
                    this.props.history.push("/user-page");
                }).catch((err) => {
                    console.log("error occured", err);
                })
        }
    }

    // changeuserIdHandler = (event) => {
    //     console.log("uid : " + event.target.value)
    //     this.setState({ userId: JSON.parse(event.target.value) });
    // }

    changedocIdHandler = (event) => {
        console.log("docid : " + event.target.value)
        this.setState({ docId: JSON.parse(event.target.value) });
    }

    changerecordDateHandler = (event) => {
        this.setState({ recordDate: event.target.value });
    }

    changeuserDiagnosisHandler = (event) => {
        this.setState({ userDiagnosis: event.target.value });
    }

    cancel() {
        this.props.history.push('/user-page');
    }

    render() {
        return (
            <>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">

                            <div className="card" style={{ 'borderRadius': '5px' }}>
                                <div className="card-body">

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">User ID:</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="text" className="form-control form-control-lg" disabled
                                                value={JSON.stringify(this.state.userarr.id)} />

                                        </div>
                                    </div>


                                    <hr className="mx-n1" />

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Record Date:</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="date" className="form-control form-control-lg"
                                                value={this.state.recordDate} onChange={this.changerecordDateHandler} />

                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">User Diagnosis</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <textarea type="text" className="form-control form-control-lg"
                                                value={this.state.userDiagnosis} onChange={this.changeuserDiagnosisHandler} />

                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Doc ID:</label>
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={this.changedocIdHandler}>
                                                <option disabled selected value="">Select Doctor</option>
                                                {
                                                    this.state.docarr.map(doc => {
                                                        return (
                                                            <option value={JSON.stringify(doc)}>{doc.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    <div className="px-5 py-4">
                                        <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveOrUpdateRecord}>Save</button>
                                        <button className="btn btn-danger btn-lg" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
