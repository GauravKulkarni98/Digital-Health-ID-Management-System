import React from 'react'
import '../../css/custom-icon.css'


export default function Home(props) {


    return (
        <>
            <div className={`container`}>

                <section className="section-padding mb-5 main-bg-img" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/mainbanner.00586187.svg")` }}>
                    <div className="container">
                        <div className="row align-items-center mt-4 text-center-mobile">
                            <div className="col-lg-6">
                                <h1 >
                                    Digital Health Account
                                </h1>
                                <h1>Creating India's Digital<br />Health Ecosystem</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding pb-5 bg-color1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <h2 className="heading-2 mt-2 mb-4">Why create DHID?</h2>
                                <p className="text-center paragraph-2">
                                    Using DHID (earlier known as Health ID)  is the first step towards creating safer and efficient digital
                                    health records for you and your family. You can opt-in to create a digitally secure ABHA, which allows
                                    you to access and share your health data with your consent, with participating healthcare providers and
                                    payers
                                </p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className="service-box sml">
                                        <div className="service-icon " style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/Icon_01.04477d15.svg")` }}>
                                        </div>
                                        <h4>Digital Health Records</h4>
                                        <p>
                                            Access your information right from admission to treatment and discharge in a paperless manner
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box sml">
                                        <div className="service-icon" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/Icon_02.3dc1972a.svg")` }}>
                                        </div>
                                        <h4>Easy sign up </h4>
                                        <p>
                                            Create your DHID using only your basic information
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box sml">
                                        <div className="service-icon" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/Icon_03.a65da60a.svg")` }}>
                                        </div>
                                        <h4>Voluntary Opt-In</h4>
                                        <p>
                                            Participate at your own free will and choose to create your DHID voluntarily
                                        </p>
                                    </div
                                    ></div>
                                <div className="col-lg-4">
                                    <div className="service-box sml">
                                        <div className="service-icon" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/Icon_04.32cf07fc.svg")` }}>
                                        </div>
                                        <h4>Voluntary Opt-Out</h4>
                                        <p>
                                            You can request erasure of your data anytime
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box sml">
                                        <div className="service-icon" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/Icon_12.ccea3d01.svg")` }}>
                                        </div>
                                        <h4>Personal Health Records (PHR)</h4>
                                        <p>
                                            Access and link your Personal Health Records (PHR) with ABHA to create longitudinal health history
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box sml">
                                        <div className="service-icon" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/Icon_05.48e6977f.svg")` }}>
                                        </div>
                                        <h4>Easy PHR Sign Up</h4>
                                        <p>
                                            Create easy to remember PHR Address
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div >
                        <div className="text-center col-lg-12">
                            * The marked functionalities are being developed and will be rolled out soon
                        </div>
                    </div>
                </section >
                <section className="section-padding mb-5 bottom-bg-img bp" style={{ backgroundImage: `url("https://healthid.ndhm.gov.in/static/media/bottom_banner.38b6555c.svg")` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center temp-vector">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <h5 className="heading-large">
                                    DHIMS will give you complete ownership over your health history
                                </h5>
                                <p className="paragraph-large">
                                    Your DHIMS is a hassle-free method of accessing and sharing your health records digitally.
                                    It enables your interaction with participating healthcare providers, and allows you to
                                    receive your digital lab reports, prescriptions and diagnosis seamlessly from verified
                                    healthcare professionals and health service providers
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}


