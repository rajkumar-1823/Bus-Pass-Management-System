import React, { useState } from 'react'
import './Form.css'
import bus4 from './images/bus4.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Form() {
    const [name,setname] = useState('')
    const [mobileno,setmobileno] = useState('')
    const [email,setemail] = useState('')
    const [fathername,setfathername] = useState('')
    const [address,setaddres] = useState('')
    const [aadhaar,setadhaar] = useState('')
    // const [filename, setFilename] = useState('')
    const [source,setsource] = useState('')
    const [destination,setdestination] = useState('')

    const navigate = useNavigate()

    const handlesubmit = () => {
      axios.post("http://localhost:3001/form",{"Name" : name , "Mobile no" : mobileno , "Email" : email , "Father's name" : fathername , "Address" : address , "Aadhaar no" : aadhaar , "Source" : source , "Destination" : destination})
       
      .then(res => console.log(res.data))
    .catch(err => console.error(err))
      navigate('/card', { state: { name } });
    }
  
  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     setFilename(file.name); // Setting the filename state
  // }
  return (
    <div className='all-main'>
  <div className="mainhead">
    <div className="heading">
      <h1>Apply Form</h1>
    </div>
  </div>
  <div className="form">
    <form action="" onSubmit={handlesubmit}>
      <div className="one">
        <div className="inside">
          <div className="inputbox">
            <input type="text" id="Name" name="Name" required="" value={name} onChange={(e) => setname(e.target.value)} placeholder='Name'/>
            {/* <span>Name</span> */}
          </div>
          <div className="inputbox">
            <input type="text" id="Mobile-No" name="Mobile-No" required="" placeholder='Mobile No' value={mobileno} onChange={(e) => setmobileno(e.target.value)}/>
            {/* <span>Mobile No</span> */}
          </div>
          <div className="inputbox">
            <input type="text" id="email" name="email" required="" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)}/>
            {/* <span>Email</span> */}
          </div>
          <div className="inputbox">
            <input type="text" id="Guard-name" name="Guard-name" required="" placeholder='Father&rsquo;s Name' value={fathername} onChange={(e) => setfathername(e.target.value)}/>
            {/* <span>Father's Name</span> */}
          </div>
          <div className="inputbox">
            <input type="text" id="Address" name="Address" required="" placeholder='Address' value={address} onChange={(e) => setaddres(e.target.value)}/>
            {/* <span>Address</span> */}
          </div>
          <div className="inputbox">
            <input type="text" id="Aadhaar-no" name="Aadhaar-no" required="" placeholder='Aadhaar No' value={aadhaar} onChange={(e) => setadhaar(e.target.value)}/>
            {/* <span>Aadhaar No</span> */}
          </div>
          {/* <div className="inputbox">
            <div className="file-input-container">
              <label htmlFor="photo" style={{ color: "#4a4a4a" }}>
                Upload Photo
              </label>
              <br />
              <input type="file" id="photo" name="photo" accept="image/* " onChange={handleFileChange}/>
              <div id="filename">{filename}</div>
            </div>
          </div> */}
          <div className="gender">
            <span>Gender</span>
            <div className='male'>
            <input type="radio" id="male" name="gender" defaultValue="male" />
            <label> Male</label>
            </div>
            <div className='female'>
            <input type="radio" id="female" name="gender" defaultValue="female"/>
            <label> Female</label>
            </div>

          </div >
          <br></br>
          <span>Source</span>
          <select id="Source" required=''  onChange={ (e) => setsource(e.target.value) }>
            <option value="">Select District</option>
            <option value="Ariyalur">Ariyalur</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Erode">Erode</option>
            <option value="Kallakurichi">Kallakurichi</option>
            <option value="Kancheepuram">Kancheepuram</option>
            <option value="Kanyakumari">Kanyakumari</option>
            <option value="Karur">Karur</option>
            <option value="Krishnagiri">Krishnagiri</option>
            <option value="Madurai">Madurai</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Nagapattinam">Nagapattinam</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Nilgiris">Nilgiris</option>
            <option value="Perambalur">Perambalur</option>
            <option value="Pudukkottai">Pudukkottai</option>
            <option value="Ramanathapuram">Ramanathapuram</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Salem">Salem</option>
            <option value="Sivaganga">Sivaganga</option>
            <option value="Tenkasi">Tenkasi</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Theni">Theni</option>
            <option value="Thoothukudi">Thoothukudi</option>
            <option value="Tiruchirappalli">Tiruchirappalli</option>
            <option value="Tirunelveli">Tirunelveli</option>
            <option value="Tirupathur">Tirupathur</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Tiruvallur">Tiruvallur</option>
            <option value="Tiruvannamalai">Tiruvannamalai</option>
            <option value="Tiruvarur">Tiruvarur</option>
            <option value="Vellore">Vellore</option>
            <option value="Viluppuram">Viluppuram</option>
            <option value="Virudhunagar">Virudhunagar</option>
          </select>
          <span> Destination</span>
          <select id="Destination" required='' onChange={ (e) => setdestination(e.target.value) }>
            <option value="">Select District</option>
            <option value="Ariyalur">Ariyalur</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Erode">Erode</option>
            <option value="Kallakurichi">Kallakurichi</option>
            <option value="Kancheepuram">Kancheepuram</option>
            <option value="Kanyakumari">Kanyakumari</option>
            <option value="Karur">Karur</option>
            <option value="Krishnagiri">Krishnagiri</option>
            <option value="Madurai">Madurai</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Nagapattinam">Nagapattinam</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Nilgiris">Nilgiris</option>
            <option value="Perambalur">Perambalur</option>
            <option value="Pudukkottai">Pudukkottai</option>
            <option value="Ramanathapuram">Ramanathapuram</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Salem">Salem</option>
            <option value="Sivaganga">Sivaganga</option>
            <option value="Tenkasi">Tenkasi</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Theni">Theni</option>
            <option value="Thoothukudi">Thoothukudi</option>
            <option value="Tiruchirappalli">Tiruchirappalli</option>
            <option value="Tirunelveli">Tirunelveli</option>
            <option value="Tirupathur">Tirupathur</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Tiruvallur">Tiruvallur</option>
            <option value="Tiruvannamalai">Tiruvannamalai</option>
            <option value="Tiruvarur">Tiruvarur</option>
            <option value="Vellore">Vellore</option>
            <option value="Viluppuram">Viluppuram</option>
            <option value="Virudhunagar">Virudhunagar</option>
          </select>
          <div className="inputbox">
            <button className="loginbtn" value="submit" type='submit'>
              Submit
            </button>
          </div>
        </div>
        <div className="imageready">
          <img src={bus4} alt="" />
        </div>
      </div>
    </form>
  </div>
</div>

  );
}
