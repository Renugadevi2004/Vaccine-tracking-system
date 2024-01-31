import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [callstate, setCallstate] = useState("fail");
    const [patientdata, setpatientData] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const data = await axios.get('http://localhost:8080/patient/getAllPatient')
            setpatientData(data.data)
        }
        fetchdata();
    }, [callstate]);

    const [patient, setPatient] = useState({
      "patient_id": "",
      "patient_name": "",
      "patient_age": "",
      "patient_dob": "",
      "patient_health_rate": "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({
            ...patient,
            [name]: value
        })
    }

    const createPatient = async (e) => {
        e.preventDefault();
        const data = await axios.post('http://localhost:8080/patient/addPatient', patient)
        console.log(data)
        setCallstate(data.data)
    }

    const deletePatient = async (patient_id) => {
        const data = await axios.delete(`http://localhost:8080/patient/remove/${patient_id}`)
        setCallstate(data)
    }

    const updatePatient = async (e) => {
        const data = await axios.put('http://localhost:8080/patient/update', patient)
        setCallstate(data);
    }

    return (
        <div>
            <form>
                Patient_id<input type="text" name="patient_id" value={patient.patient_id} onChange={handleChange} />
                <br />
                Patient_name <input type="text" name="patient_name" value={patient.patient_name} onChange={handleChange} />
                <br />
                Patient_age <input type="text" name="patient_age" value={patient.patient_age} onChange={handleChange} />
                <br />
                Patient_dob <input type="text" name="patient_dob" value={patient.patient_dob} onChange={handleChange} />
                <br />
                Patient_health_rate <input type="text" name="patient_health_rate" value={patient.patient_health_rate} onChange={handleChange} />
                <br />
                <button onClick={createPatient}>create user</button>
                <button onClick={updatePatient}>update user</button>
            </form>
            {patientdata.map(std => <div className='container'>
               <table border={"1px"}>
  <tr>
    <td>{std.patient_id}</td>
    <td>{std.patient_name}</td>
    <td>{std.patient_age}</td>
    <td>{std.patient_dob}</td>
    <td>{std.patient_health_rate}</td>
  </tr>
 
</table>
                <button className='btn' onClick={e => deletePatient(std.patient_id)}>delete</button>
            </div>)}

        </div>
    )
}
export default App