import React from 'react'
import { Link } from 'react-router-dom'

export default function GenerateID(props) {

   let addUser=()=> {
        props.history.push('/add-user/_add'); // history obj ->contains all the url mappings and is mantained by react router and passed down to the child with the help of props
    }
    return (
            <div  style={{ color: props.mode === 'dark' ? 'white' : '#042743',textAlign : 'center'}}>
                <h1 className="text-center fs-1">Create your Digital Health Account</h1>
                <p className="paragraph-2 text-center">
                    DHIMS (Digital Health Id Management System) will make it easy for you to securely access
                    and manage your health data digitally.<br /> You will also get to setup a PHR (Personal Health Records)
                    Address for consent management, and subsequent sharing of health records.</p>
                    <button type="button" className="btn btn-primary btn-lg" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}} 
                    onClick={() => addUser()}>
                        Generate DIGITAL HEALTH ID
                        </button>
                        <hr/>
                        <p className="fs-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
                            Already have DHID? <br/>
                           <Link to='/login'>Login</Link>
                        </p>
            </div>
    )
}
