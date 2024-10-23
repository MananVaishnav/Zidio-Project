import React, {useState} from 'react'
import './Jobdata.scss'
import { NavLink, useParams } from 'react-router-dom'
import { jobData } from '../Homepage/Careers/Careers';

const Jobdata = () => {

    const { id } = useParams();
    const job = jobData.find((job) => job.id === parseInt(id));
    
    if (!job) {
        return <p>Job not found</p>;
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState('');

    // const handleFileChange = (e) => {
    //     setResume(e.target.files[0]);  
    // };

    const handleJobSubmit = async (e) => {
        e.preventDefault();
        
        // Simple form validation
        if (!name || !email || !role) {
          setMessage('Please fill in all fields and upload a resume.');
          return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('role', role);
        formData.append('resume', resume);

        try {
            const response = await fetch('http://localhost:3000/jobsubmit', {
                method: 'POST',
                body: formData,
            });
    
            const result = await response.json();
            setMessage(result.message);
            // Reset form
            setName('');
            setEmail('');
            setRole('');
            setResume('');
        } catch (error) {
            setMessage('Error submitting form');
        }

    };

  return (
    <div>
        <div className="jobdata-component">
            <img src="/public/images/apply.jpeg" alt="" className='apply-img'/>
            <div className="jobdata-container">
                <NavLink to={'/Careers'}><img src="/images/back.png" alt="" className='back-btn-img'/></NavLink>
                <h2 className='job-desc-heading'>Job Description</h2>
                <div className="job-details">
                    <p className='job-data-desc'>{job.description}</p>
                    <p className='job-title'>Role: {job.title}</p>
                    <p className='job-loc'>Location: {job.location}</p>
                    <p className='job-salary'>Salary: {job.salary}</p>
                </div>
                <div className="job-form-container">
                    {message && <p className="job-apply-message">{message}</p>}
                    <form onSubmit={handleJobSubmit}>
                        <input type="text" className='job-name-field' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>

                        <input type="text" className='job-email-field' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <input type="text" className='job-role-field' placeholder='Role' required value={role} onChange={(e) => setRole(e.target.value)}/>

                        <input type="file" accept='.pdf, .docx' className='job-resume-field' onChange={(e) => setResume(e.target.files[0])}/>

                        <button type='submit' className='job-submission-btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jobdata