import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService';
import HospitalService from '../../services/HospitalService';


export default class CreateDoctor extends Component {


  constructor(props) {
    super(props)

    this.state = {
      // it will retrive _add or Userid receiving via url
      id: this.props.match.params.id,
      name: '',
      email: '',
      mobileNo: '',
      speciality: '',
      hospitalId: [],
      hosparr: []


    }
    //bind the event handler with the component
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.changeSpecialityHandler = this.changeSpecialityHandler.bind(this);
    this.changehospitalIdHandler = this.changehospitalIdHandler.bind(this);
    this.saveOrUpdateDoc = this.saveOrUpdateDoc.bind(this);
  }

  componentDidMount() {
    console.log("in Hospital componentDidMount");
    HospitalService.getAllHosp().then((response) => {
      this.setState({ hosparr: response.data });
      console.log(this.state.hosparr);
    })
    console.log("in Doctor add ComponentdidMount " + this.state.id);
    if (this.state.id === "_add") {
      console.log("in add doc");
      return;
    }
    else {
      //to send get request to webservice and get the object which matches with id
      DoctorService.getById(this.state.id).then((response) => {
        console.log(response.data);
        let docob = response.data;
        this.setState({
          name: docob.name, email: docob.email, mobileNo: docob.mobileNo,
          speciality: docob.address, hospitalId: docob.hospitalId
        });
      })

    }
  }


  saveOrUpdateDoc = (e) => {
    e.preventDefault();// to stop the refreshing the page
    console.log(this.state);
    if (this.state.name.length === 0) {
      // toast.warn("Name can't be blank!");
      document.getElementById("nameerr").innerText = "* Name can't be blank!!!";
      return false;
    } if (this.state.email.length === 0 || !this.state.email.includes("@")) {
      document.getElementById("nameerr").innerText = '';
      document.getElementById("emailerr").innerText = "* Email can't be blank or should include @ !!!";
      return false;
    }
    if (this.state.mobileNo.length < 10 || this.state.mobileNo.length > 10) {
      document.getElementById("nameerr").innerText = '';
      document.getElementById("emailerr").innerText = '';
      document.getElementById("mobnoerr").innerText = "* Mobile number should contain 10 digits";
      return false;
    }
    else {
      let doc = {
        name: this.state.name, email: this.state.email, mobileNo: this.state.mobileNo,
        speciality: this.state.speciality, hospitalId: this.state.hospitalId
      };
      console.log('Doc => ' + JSON.stringify(doc));

      if (this.state.id === '_add') {
        DoctorService.addDoc(doc).then(result => {
          console.log(result.data);
          this.props.history.push("/doctor-list");
        });
      } else {

        DoctorService.updateDoc(doc, this.state.id)
          .then(response => {
            console.log('Doc data updated successfully', response.data);
            this.props.history.push("/doctor-list");
          }).catch((err) => {
            console.log("error occured", err);
          })
      }
    }
  }


  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  changeMobileNoHandler = (event) => {
    this.setState({ mobileNo: event.target.value });
  }

  changeSpecialityHandler = (event) => {
    this.setState({ speciality: event.target.value });
  }

  changehospitalIdHandler = (event) => {
    console.log("hid : " + event.target.value)
    this.setState({ hospitalId: JSON.parse(event.target.value) });
  }

  cancel() {
    this.props.history.push('/doctor-list');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Doctor</h3>
    } else {
      return <h3 className="text-center">Update Doctor</h3>
    }
  }




  render() {
    return (
      <>
        <div className="container h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">

              <div className="card" style={{ 'borderRadius': '5px' }}>
                {
                  this.getTitle()
                }
                <div className="card-body">

                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Name:</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control "
                        value={this.state.name} onChange={this.changeNameHandler} />

                    </div>
                  </div>
                  <p id='nameerr' style={{ color: 'red', textAlign: 'center', fontSize: 20 }}></p>

                  <hr className="mx-n1" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Email:</h6>

                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="email" className="form-control " placeholder="example@example.com"
                        value={this.state.email} onChange={this.changeEmailHandler} />
                    </div>

                  </div>
                  <p id='emailerr' style={{ color: 'red', textAlign: 'center', fontSize: 20 }}></p>

                  <hr className="mx-n1" />

                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">MobileNo:</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="number" className="form-control " placeholder='phone numbershould comsist of 10 digits' maxLength={10}
                        value={this.state.mobileNo} onChange={this.changeMobileNoHandler} />

                    </div>
                  </div>
                  <p id='mobnoerr' style={{ color: 'red', textAlign: 'center', fontSize: 20 }}></p>

                  <hr className="mx-n1" />

                  <div className="row align-items-center pt-4 pb-3">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Speciality:</label>
                      <select className="form-control" id="exampleFormControlSelect1" value={this.state.speciality} onChange={this.changeSpecialityHandler}>
                        <option>Select one Speciality from below</option>
                        <option value="SURGEON">SURGEON</option>
                        <option value="DERMATOLOGIST">DERMATOLOGIST</option>
                        <option value="CARDIOLOGIST">CARDIOLOGIST</option>
                        <option value="ENT">ENT</option>
                        <option value="GYNECOLOGIST">GYNECOLOGIST</option>
                      </select>
                    </div>
                  </div>

                  <hr className="mx-n1" />

                  <div className="row align-items-center pt-4 pb-3">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Hospital ID:</label>
                      <select className="form-control" id="exampleFormControlSelect1" onChange={this.changehospitalIdHandler}>
                        <option disabled selected>Select Hospital</option>
                        {
                          this.state.hosparr.map(hosp => {
                            return (
                              <option value={JSON.stringify(hosp)}>{hosp.hpName}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <hr className="mx-n1" />

                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveOrUpdateDoc}>Save</button>
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

