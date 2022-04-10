import React from 'react'

export default function Contact(props) {
    return (
        <div className={`container`} style={{textAlign:'center'}}>
            <h1>You can Contact us on :</h1>
            <h2>Address:</h2>
            <br />
            <h4>
                <p>Dr. D.Y. Patil Educational Complex, Sector 29,<br />
                    Behind Akurdi Railway Station,<br />
                    Nigdi Pradhikaran, Akurdi,<br />
                    Pune, Maharashtra 411044<br/>
                    Call us at 1800-11-4477 / 14477 (Toll-free)
                </p>
            </h4>
        </div>
    )
}

//text-${props.mode === 'light' ? 'black' : 'light'}