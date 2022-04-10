import React, { Component } from 'react'
import HospitalService from '../../services/HospitalService';

export default class CreateHospital extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // it will retrive _add or Hospital id receiving via url
            id: this.props.match.params.id,
            hpName: '',
            hpEmail: '',
            hpAddress: ''
        }
        //bind the event handler with the component
        this.changehpNameHandler = this.changehpNameHandler.bind(this);
        this.changehpEmailHandler = this.changehpEmailHandler.bind(this);
        this.changehpAddressHandler = this.changehpAddressHandler.bind(this);
        this.saveOrUpdateHospital = this.saveOrUpdateHospital.bind(this);
    }

    componentDidMount() {
        console.log("in HospitalAddComponentdidMount " + this.state.id);
        if (this.state.id === "_add") {
            console.log("in add Hospital");
            return;
        }
        else {
            //to send get request to webservice and get the object which matches with id
            HospitalService.getById(this.state.id).then((response) => {
                let hospob = response.data;
                this.setState({
                    hpName: hospob.hpName, hpEmail: hospob.hpEmail,
                    hpAddress: hospob.hpAddress
                });
            })

        }
    }


    saveOrUpdateHospital = (e) => {
        e.preventDefault();// to stop the refreshing the page
        console.log(this.state)
        if (this.state.hpName.length  === 0) {
            // toast.warn("Name can't be blank!");
            document.getElementById("nameerr").innerText = "* Name can't be blank!!!";
            return false;
        } if (this.state.hpEmail.length === 0 || !this.state.hpEmail.includes("@")) {
            document.getElementById("nameerr").innerText = '';
            document.getElementById("emailerr").innerText = "* Email can't be blank or should include @ !!!";
            return false;
        }  if(this.state.hpAddress.length === 0){
            document.getElementById("nameerr").innerText ='';
            document.getElementById("emailerr").innerText ='';
            document.getElementById("addrerr").innerText = "* Address can't be blank!";
            return false;
        }
        
        else {
            //create a objevct using form data to send it nodejs sertvice to add in the databse
            let hosp = { hpName: this.state.hpName, hpEmail: this.state.hpEmail, hpAddress: this.state.hpAddress };
            console.log('hospital => ' + JSON.stringify(hosp));

            if (this.state.id === '_add') {
                HospitalService.createHospital(hosp).then(result => {
                    console.log(result.data);
                    this.props.history.push('/hospital-list');
                });
            } else {

                HospitalService.updateHospital(hosp, this.state.id)
                    .then((response) => {
                        console.log('Hospital data updated successfully', response.data);
                        this.props.history.push("/hospital-list");
                    }).catch((err) => {
                        console.log("error occured", err);
                    })
            }
        }
    }

    changehpNameHandler = (event) => {
        this.setState({ hpName: event.target.value });
    }

    changehpEmailHandler = (event) => {
        this.setState({ hpEmail: event.target.value });
    }

    changehpAddressHandler = (event) => {
        this.setState({ hpAddress: event.target.value });
    }

    cancel() {
        this.props.history.push('/hospital-list');
    }

    render() {
        return (
            <>
                {/* <section className="vh-100"  > */}
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">

                            <div className="card" style={{ 'borderRadius': '5px' }}>
                                <div className="card-body">

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Hospital name</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="text" className="form-control form-control-lg"
                                                value={this.state.hpName} onChange={this.changehpNameHandler} />

                                        </div>
                                    </div>
                                    <p id='nameerr' style={{ color: 'red', textAlign: 'center', fontSize: 20 }}></p>

                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Email address</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="email" className="form-control form-control-lg" placeholder="example@example.com"
                                                value={this.state.hpEmail} onChange={this.changehpEmailHandler} />

                                        </div>
                                    </div>
                                    <p id='emailerr' style={{ color: 'red', textAlign: 'center', fontSize: 20 }}></p>

                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Address</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <textarea className="form-control" rows="3" placeholder="Enter Hospitals's address here"
                                                value={this.state.hpAddress} onChange={this.changehpAddressHandler}/>

                                        </div>
                                    </div>
                                    <p id='addrerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>

                                    <hr className="mx-n3" />

                                    <div className="px-5 py-4">
                                        <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveOrUpdateHospital}>Save</button>
                                        <button className="btn btn-danger btn-lg" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* </section> */}
            </>
        )
    }
}
