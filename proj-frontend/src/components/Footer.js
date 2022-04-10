import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <>
            <br /><br /><br />
            <hr />
            <div className="container ">

                {/* <!-- Footer --> */}
                <footer
                    className="text-center text-lg-start"
                    style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    {/* <!-- Section: Links  --> */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div className="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 className="text-uppercase fw-bold">Health ID <br />Management System</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} />
                                    <p>
                                        The Digital Health Id Management System (DHIMS) aims to develop the backbone necessary
                                        to support the integrated digital health infrastructure.
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold">Useful Links</h6>
                                    <hr
                                        className="mb-2 mt-0 d-inline-block mx-auto"
                                        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} />
                                    <p>
                                        <Link to="#!" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Your Account</Link>
                                    </p>
                                    <p>
                                        <Link to="/" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>HOME</Link>
                                    </p>
                                    <p>
                                        <Link to="/login" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>LOGIN</Link>
                                    </p>
                                    <p>
                                        <Link to="/about" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>ABOUT US</Link>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} />
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                        <hr />
                    </section>
                    {/* <!-- Section: Links  --> */}

                    {/* <!-- Copyright --> */}
                    <div
                        className="text-center p-3"
                        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        Copyright © 2022. All rights reserved.
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}

            </div>
            {/* <!-- End of .container --> */}
        </>
    )
}


// {/* <div> */ }
// {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}> */ }
    // <div className=" mb-1 mb-md-0" style={{ color: props.mode === 'dark' ? 'white' : '#042743' ,textAlign:'center'}}>
        // Copyright © 2022. All rights reserved.
    // </div>
// </div>
// </div>
