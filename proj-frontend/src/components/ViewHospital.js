// import React, { useState } from 'react'

// export default function ViewHospital(props) {

//     const [id] = useState(props.match.params.id);

//     var retrievedRecord = localStorage.getItem("hosparr");

//     var hospital = JSON.parse(retrievedRecord);
//     console.log(hospital);


//     return (
//         <div className="wpb_column vc_column_container vc_col-sm-6">
//             <div className="vc_column-inner " >
//                 <div className="wpb_wrapper">
//                     <div className="wpb_text_column wpb_content_element ">
//                         <div className="wpb_wrapper">
//                             <h3 id="special-title">{hospital.hpName}</h3>
//                             <p className="profile">Knee Arthroscopy, Knee Replacement</p>
//                             <p className="profile"><strong>Education:</strong> MBBS, MS, MCh, DNB, Hon. FRCS, Hon. Doctorate</p>
//                             <p className="speciality profile"><strong>Specialities:</strong> Knee Arthroscopy, Knee Replacement</p>
//                             <p className="profile" style={{ marginBottom: '0px' }}><strong>OPD Days:</strong> Mon to Fri</p>
//                             <p className="profile"><strong>Work Timing:</strong> 3 pm to 8 pm</p>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
