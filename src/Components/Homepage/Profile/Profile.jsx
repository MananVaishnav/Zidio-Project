import React from 'react'
import './Profile.scss';
import Header from '../../Header/Header';


const profiledata = [
  {
    name: 'xyz',
    designation: 'Backend Developer',
    department: 'app development',
    about: '2+ years experience in backend development',
    skills: ['Python', 'Django', 'Node.js'],
    interests: ['Coding', 'Hiking', 'Photography'],
    contact: '7841256897',
    email: 'xyz@gmail.com',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'GitHub', url: 'https://github.com' }
    ],
    photo: '/public/images/emp1.jpg',
  },
  {
    name: 'abc',
    designation: 'Full Stack Developer',
    department: 'web development',
    about: '5+ years experience in MERN stack development.',
    skills: ['ReactJs', 'Mongo Db', 'Node.js'],
    interests: ['Drawing', 'Traveling', 'Photography'],
    contact: '8974561287',
    email: 'abc123@gmail.com',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'Behance', url: 'https://behance.net' }
    ],
    photo: '/public/images/emp2.jpg',
  },
  {
    name: 'pqr',
    designation: 'Flutter Developer',
    department: 'App development',
    about: '3+ years experience in Application development. familier in both ios and android app development',
    skills: ['Swift', 'Java', 'XML'],
    interests: ['Traveling', 'Photography'],
    contact: '9987456879',
    email: 'pqr23@gmail.com',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'Behance', url: 'https://behance.net' }
    ],
    photo: '/public/images/emp3.jpg',
  }
];

const Profile = () => {
  return (
    <div>
        <Header/>
        <div className="profile-container">
            <h2 className="profile-title">Our Employees</h2>
          <div className="profile-grid">
            {profiledata.map((employee, index) => (
              <div className="employee-card" key={index}>
                <img className="profile-photo" src={employee.photo} alt={`${employee.name}'s photo`} />
                <h3 className="employee-name">{employee.name}</h3>
                <h4 className="designation">{employee.designation}</h4>
                <p className="department">{employee.department}</p>
                <p className="about">{employee.about}</p>
                <h5 className='skills-header'>Skills:</h5>
                <ul>
                  {employee.skills.map((skill, i) => (
                    <li key={i} className='skill-list'>{skill}</li>
                  ))}
                </ul>
                <h5 className='intrests-header'>Interests:</h5>
                <ul>
                  {employee.interests.map((interest, i) => (
                    <li key={i} className='interest-list'>{interest}</li>
                  ))}
                </ul>
                <p className="contact">Contact: {employee.contact}</p>
                <p className="email">Email: <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
                <div className="social-links">
                  {employee.socialLinks.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Profile