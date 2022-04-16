import React, { Component } from 'react'
import UserService from '../../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // it will retrive _add or Userid receiving via url
            id: this.props.match.params.id,
            name: '',
            email: '',
            dob: '',
            age: '',
            mobileNo: '',
            address: '',
            gender: '',
            password: '',
            role: 'USER',
            nameError: "",
            emailError: "",
            passwordError: ""

        }
        //bind the event handler with the component
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changedobHandler = this.changedobHandler.bind(this);
        this.changepassHandler = this.changepassHandler.bind(this);
        this.changeageHandler = this.changeageHandler.bind(this);
        this.changemobNoHandler = this.changemobNoHandler.bind(this);
        this.changeaddrHandler = this.changeaddrHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount() {
        console.log("in UserAddComponentdidMount " + this.state.id);
        if (this.state.id === "_add") {
            console.log("in add user");
            return;
        }
        else {
            //to send get request to webservice and get the object which matches with id
            UserService.getById(this.state.id).then((response) => {
                let userob = response.data;
                this.setState({
                    name: userob.name, email: userob.email, dob: userob.dob,
                    age: userob.age, mobileNo: userob.mobileNo,
                    address: userob.address, gender: userob.gender, password: userob.password,
                    role: userob.role
                });
            })

        }
    }



    saveOrUpdateUser = (e) => {
        e.preventDefault();// to stop the refreshing the page
        console.log(this.state)
        if (this.state.name.length === 0) {
            // toast.warn("Name can't be blank!");
            document.getElementById("nameerr").innerText = "* Name can't be blank!!!";
            return false;
        } if(this.state.email.length === 0 || !this.state.email.includes("@")){
            document.getElementById("nameerr").innerText ='';
            document.getElementById("emailerr").innerText = "* Email can't be blank or should include @ !!!";
            return false;
        }  
        if(this.state.password.length === 0 || this.state.password.length < 4){
            document.getElementById("nameerr").innerText ='';
            document.getElementById("emailerr").innerText ='';
            document.getElementById("passerr").innerText = "* Password can't be blank or should contain atleast 4 digits!!!";
            return false;
        }
        if(this.state.age <18){
            document.getElementById("nameerr").innerText ='';
            document.getElementById("emailerr").innerText ='';
            document.getElementById("passerr").innerText = "";
            document.getElementById("ageerr").innerText = "* Minimum age required for the user is ->  18!!!";
            return false;
        }
        if(this.state.mobileNo.length < 10 || this.state.mobileNo.length > 10){
            document.getElementById("nameerr").innerText ='';
            document.getElementById("emailerr").innerText ='';
            document.getElementById("passerr").innerText ='';
            document.getElementById("ageerr").innerText = "";
            document.getElementById("mobnoerr").innerText = "* Mobile number should contain 10 digits";
            return false;
        }
        if(this.state.address.length === 0){
            document.getElementById("nameerr").innerText ='';
            document.getElementById("emailerr").innerText ='';
            document.getElementById("passerr").innerText ='';
            document.getElementById("ageerr").innerText = "";
            document.getElementById("mobnoerr").innerText = "";
            document.getElementById("addrerr").innerText = "* Address can't be blank!";
            return false;
        }
        else {
            //create a objevct using form data to send it nodejs sertvice to add in the databse
            let user = {
                name: this.state.name, email: this.state.email, dob: this.state.dob,
                age: this.state.age, mobileNo: this.state.mobileNo, address: this.state.address,
                gender: this.state.gender, password: this.state.password, role: this.state.role
            };
            console.log('User => ' + JSON.stringify(user));

            if (this.state.id === '_add') {
                UserService.addUser(user).then(result => {
                    console.log(result.data);
                    toast.success("User registered successfully!!!");
                    this.props.history.push("/login");
                }).catch((err) => {
                    console.log("error occured", err);
                    toast.error("error occured in registering user!!!",err);
                })
            } else {

                UserService.updateUser(user, this.state.id)
                    .then(response => {
                        console.log('User data updated successfully', response.data);
                        toast.success("User data updated successfully!!!");
                        this.props.history.push("/user-list");
                    }).catch((err) => {
                        console.log("error occured", err);
                        toast.error("error occured in create or update user!!!",err);
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

    changepassHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changedobHandler = (event) => {
        this.setState({ dob: event.target.value });
    }

    changeageHandler = (event) => {
        this.setState({ age: event.target.value });
    }
    changemobNoHandler = (event) => {
        this.setState({ mobileNo: event.target.value });
    }

    changeaddrHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changegenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    cancel() {
        if (this.state.id === '_add') {
            this.props.history.push('/login');
        } else {
            this.props.history.push("/user-list");
        }
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }

    render() {
        return (
            <>
                <div> < ToastContainer /> </div>
                {/* <section className="vh-100"  > */}
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">

                            <div className="card" style={{ 'borderRadius': '5px' }}>
                                {
                                    this.getTitle()
                                }
                                <div className="card-body">

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Name</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="text" className="form-control "
                                                value={this.state.name} onChange={this.changeNameHandler} />

                                        </div>
                                    </div>

                                    <p id='nameerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>
                                    <hr className="mx-n1" />

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Gender:</label>
                                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.gender} onChange={this.changegenderHandler}>
                                                <option>Select your gender from below</option>
                                                <option value="M">M</option>
                                                <option value="F">F</option>
                                                {/* <option value="OTHER">OTHER</option> */}
                                            </select>
                                        </div>
                                    </div>


                                    <hr className="mx-n1" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Email</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="email" className="form-control " placeholder="example@example.com" 
                                                value={this.state.email} onChange={this.changeEmailHandler} />

                                        </div>
                                        
                                    </div>
                                    <p id='emailerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>
                                    <hr className="mx-n1" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Password</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="email" className="form-control "
                                                value={this.state.password} onChange={this.changepassHandler} />

                                        </div>
                                    </div>

                                    <p id='passerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>
                                    
                                    <hr className="mx-n1" />

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Date Of Birth</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="date" className="form-control "
                                                value={this.state.dob} onChange={this.changedobHandler} />

                                        </div>
                                    </div>

                                    <hr className="mx-n1" />

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Age</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="number" className="form-control "
                                                value={this.state.age} onChange={this.changeageHandler} />

                                        </div>
                                    </div>
                                    <p id='ageerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>
                                    <hr className="mx-n1" />

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">MobileNo</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="number" className="form-control " minLength={10} maxLength={10}
                                                value={this.state.mobileNo} onChange={this.changemobNoHandler} />

                                        </div>
                                    </div>
                                    <p id='mobnoerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>

                                    <hr className="mx-n1" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Address</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <textarea className="form-control" rows="2" placeholder="Enter Users's address here"
                                                value={this.state.address} onChange={this.changeaddrHandler}></textarea>

                                        </div>
                                    </div>
                                    <p id='addrerr' style={{ color: 'red', textAlign: 'center' ,fontSize:20}}></p>

                                    <hr className="mx-n1" />

                                    <div className="px-5 py-4">
                                        <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveOrUpdateUser}>Save</button>
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
