import React from 'react'
import './Homepage.scss'
import Header from '../Header/Header';

const Homepage = () => {

  const achievements = [
    { icon: "🏆", title: "Best IT Service 2023", description: "Awarded for exceptional service in IT solutions." },
    { icon: "💼", title: "500+ Successful Projects", description: "Delivered over 500 projects worldwide." },
    { icon: "🌍", title: "Global Reach", description: "Operating in over 30 countries globally." },
    { icon: "🔒", title: "Security Excellence", description: "Top-tier security solutions for enterprises." }
  ];

  const timelineData = [
    { date: '2021', description: 'Founded the company with a vision to innovate.' },
    { date: '2022', description: 'Launched our first product, gaining market recognition.' },
    { date: '2023', description: 'Expanded our team and services to better serve our clients.' },
    { date: '2024', description: 'Achieved a milestone of 100+ successful projects.' },
  ];

  return (
    <div>
      
      {/* <div className="menu-bar">
        <h3 className="company-name">Zidio</h3>   
        <div className="menu-bar-options">
          <h3 className="profiles">Profile</h3>
          <h3 className="reviews">Reviews</h3>
          <h3 className="carrers">Carrers</h3>
        </div>
      </div> */}
      <div className='home-container'>
          <div className="home-texts">
            <h1 className='home-title'>Empowering Innovation with Cutting-Edge Technology</h1>
            <p className='home-subtitle'>Your one-step solution for all tech things</p>
          </div>
          <img src="/public/images/homeimg.png" alt="Home" className='home-page-img'/>
      </div>

      {/* achievements */}
      <div className="achievement-container">
        <h2 className="achievement-heading-title">Our Achievements</h2>
        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* timeline */}
      <div className="timeline-container">
          <h2 className="timeline-heading-title">Our Journey</h2>
          <div className="timeline-info">
            {timelineData.map((event, index) => (
              <div key={index} className="timeline-event">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                      <h3 className="timeline-date">{event.date}</h3>
                      <p className="timeline-description">{event.description}</p>
                  </div>
              </div>
            ))}
          </div>
      </div>

      {/* footer */}
      <footer className="footer-container">
          <div className="footer-content">
              <div className="footer-section">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="footer-links">
                      <li><a href="#home">Home</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
              </div>
              <div className="footer-section">
                  <h4 className="footer-title">Contact Us</h4>
                  <p>Email: info@zidio.com</p>
                  <p>Phone: +91 7841256489</p>
                  <p>Address: 123 Tech Lane, Innovation City, Bengaluru</p>
              </div>
              <div className="footer-section">
                  <h4 className="footer-title">Follow Us</h4>
                  <div className="social-icons">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/public/icons/facebook.png" alt="" className='fb-icon'/>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                       <img src="/public/icons/twitter.png" alt="" className='x-icon'/>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/public/icons/linkedin.png" alt="" className='linked-icon'/>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/public/icons/instagram.png" alt="" className='insta-icon'/>
                      </a>
                  </div>
              </div>
          </div>
          <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Zidio. All rights reserved.</p>
          </div>
      </footer>
    </div>
  )
}

export default Homepage