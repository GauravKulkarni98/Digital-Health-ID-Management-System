import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }




    return (
        <div className="container">
            <h1  className={`my-3 `} style={{textAlign : 'center'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Q1. What is DHID ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        DHID is a randomly generated 5 digit number used for the purposes of uniquely identifying persons, authenticating them,
                            and threading their health records (only with their informed consent) across multiple systems and stakeholders.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Q2. Is my DHID unique?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Your DHID is created by using your basic details in addition to your Mobile Number or Aadhaar Number. Your DHID will be unique to you,
                            and you will have the option to link all your health records to the ABHA. You can also choose to create multiple IDs to link different 
                            sets of health records with different ABHAs, however, it is recommended that you create only one DHID.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
