import React, {useState} from 'react'
import './Careers.scss';
import Header from '../../Header/Header';


const jobData = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'Bengaluru, Karnataka',
      salary: 'Based on Interview',
      type: 'Full-time',
      description: 'Develop user interface components and implement them using React.js workflows.',
      datePosted: 'Posted 2 days ago',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Innovate IT',
      location: 'Pune, Maharastra',
      salary: 'Based on Interview',
      type: 'Full-time',
      description: 'Develop and maintain server-side applications, working closely with frontend developers.',
      datePosted: 'Posted 1 week ago',
    },
    {
        id: 3,
        title: 'ML Developer',
        company: 'XYZ Solutions',
        location: 'Delhi',
        salary: '300k/year',
        type: 'Full-time',
        description: 'Develope MAchine Learning Models',
        datePosted: 'Posted 2 Days ago',
    },
];

const Careers = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState(''); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple form validation
        if (!name || !email || !resume) {
          setMessage('Please fill in all fields and upload a resume.');
          return;
        }
    
        // Normally, here you'd send the form data to a server
        console.log('Form submitted:', { name, email, resume });
        setMessage('Your details have been submitted successfully!');
        
        // Reset form
        setName('');
        setEmail('');
        setResume(null);
    };

  return (
    <div>
        <Header/>
        <div className="job-listing-container">
            <div className="job-header">Currunt Openings!!!</div>
            <div className="job-cards">
                {jobData.map(job => (
                <div className="job-card" key={job.id}>
                    <h2 className="job-title">{job.title}</h2>
                    <h3 className="company-name">{job.company}</h3>
                    <p className="location">{job.location}</p>
                    <p className="salary">{job.salary}</p>
                    <p className="job-type">{job.type}</p>
                    <p className="job-description">{job.description}</p>
                    <p className="date-posted">{job.datePosted}</p>
                    <button className="apply-button">Apply Now</button>
                </div>
                ))}
            </div>

            <div className="send-details-info-heading">
                if our requirement matches with your skills we will contact you
            </div>

            {/* Send Your Details Section */}
            <section className="send-details-section">
                    <h2>Send Your Details</h2>
                    {message && <p className="message">{message}</p>}
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            value={name}
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            value={email}
                            required
                        />
                        <input 
                            type="file" 
                            accept=".pdf,.doc,.docx" 
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
            </section>
        </div>
    </div>
  )
}

export default Careers