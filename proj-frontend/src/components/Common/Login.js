import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function refreshPage() {
        window.location.reload(false);
    }

    const signinUser = (e) => {
        e.preventDefault();

        if (email.length === 0 || !email.includes("@")) {
            // alert("Error in email! Please try Again!!!");
            // document.getElementById("erroremail").innerText = "please enter Email or @ missing";
            toast.warn("Error in email! Please try Again!!!");
            return;
        } else if (password.length === 0) {
            toast.warn('please enter password!!!');
        } else {
            // document.getElementById("erroremail").innerText = "";
            const body = {
                email,
                password
            }

            // url to make signin api call
            const url = `http://localhost:9090/user/signin`

            // make api call using axios
            axios.post(url, body)
                .then((response) => {
                    const result = response.data
                    console.log(result);
                    // console.log(result.id);
                    // localStorage['name'] = result.name;
                    // localStorage['userid'] = result.id;
                    sessionStorage['name'] = result.name;
                    sessionStorage['userid'] = result.id;

                    // const name = result.name;
                    // console.log("name=> "+result.name);
                    if (result.role === "ADMIN") {
                        console.log("inside admin");
                        toast.success("Admin login successfull!!!");
                        props.history.push(`/admin-page`);
                        refreshPage();

                    } else if (result.role === "USER") {
                        console.log("inside USER");
                        toast.success("User login successfull!!!");
                        props.history.push("/user-page");
                        refreshPage();

                    } else if (result.role === "HOSPITAL") {
                        console.log("inside HOSPITAL");
                        toast.success("Hospital Admin login successfull!!!");
                        props.history.push("/doctor-list");
                        refreshPage();

                    }
                }).catch((err) => {
                    console.log(err)
                    toast.error("Invalid Username or Password!!!")
                })
        }
    }


    return (
        <div>
            <ToastContainer />
            <section className="vh-100"  >
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <h1 className="text-center">Login to your <br />Digital Health ID</h1><br />
                                <p className="paragraph-2 text-center fs-3">Access your health records easily and securely</p>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    {/* <input className="input100" type="text" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" /> */}
                                    <input type="email" id="form3Example3" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter a valid Email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email</label>
                                    {/* <p id='erroremail' style={{ color: 'red' }}></p> */}
                                </div>
                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    {/* <input className="input100" type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" /> */}
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                {/* <!-- Checkbox --> */}
                                {/* <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div> */}
                                {/* <Link to="#!" style={{ color: this.props.mode === 'dark' ? 'white' : '#042743' }}>Forgot password?</Link> */}
                                {/* </div> */}
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={(e) => signinUser(e)}
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                    <p className=" fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/generate"
                                        className="link-danger">Register</a>
                                    </p>
                                    <p style={{fontSize:18}}>* Only Users who are 18 or older can register For DHID!</p>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

