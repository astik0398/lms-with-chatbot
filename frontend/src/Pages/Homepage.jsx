import React from 'react';
import '../Pages/HomePage.css';
import { Button, FormControl, Input } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Creative way for learn new thing</h1>
          <div className="search-bar">
            <Input variant={'filled'} type="text" placeholder="Search course, mentor etc" />
            <Button width={'250px'} colorScheme='blue'>Search</Button>
          </div>
          <div className="highlight">
            <p>Special course that can teach you how to grow Brand value</p>
          </div>
        </div>
        <div className="hero-image">
          <img className='image' src='https://static.vecteezy.com/system/resources/previews/027/851/280/original/young-asian-woman-professional-entrepreneur-standing-in-office-clothing-isolated-png.png' alt="hero" />
        </div>
      </section>

      <section className="stats">
        <div className="stats-content">
          <h2>46.5k Students</h2>
          <p>Unleash the power of your culture. Propel your brand forward.</p>
        </div>
        <div className="stats-image">
          <img className='image' src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/personal-banking/loans/education-loan/Eligibility-India.png" alt="stats" />
        </div>
      </section>

      <section className="experts">
        <h2>Learn from approved experts at your own pace.</h2>
        <div className="expert-card">
          <img className='image' src="https://pngimg.com/d/man_PNG6531.png" alt="expert" />
          <p>Elizabeth Turner</p>
          <p>Expert Teacher</p>
        </div>
      </section>

      <section className="courses">
        <h2>Explore the Course</h2>
        <div className="course-cards">
          <div className="course-card">
            <h3>You are a Creator</h3>
          </div>
          <div className="course-card">
            <h3>Creating Profitable Digital Products</h3>
          </div>
          <div className="course-card">
            <h3>Practical Pricing Strategies</h3>
          </div>
        </div>
        <button className="all-courses">All courses</button>
      </section>

      <section className="signup">
        <h2>Get a free class</h2>
        <p>Download a chapter for a sneak peek into Culture Built My Brand and start winning more customers.</p>
        <FormControl className="signup-form">
          <Input  type="text" placeholder="First name" />
          <Input  type="text" placeholder="Last name" />
          <Input type="email" placeholder="Email" />
          <Button colorScheme={'blue'} type="submit">Submit</Button>
        </FormControl>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Scholarships</p>
            <p>Code Of Conduct</p>
            <p>Refund, Cancellation & Access Policy</p>
          </div>
          <div className="footer-section">
            <h3>Masterclass</h3>
            <p>The Webflow</p>
            <p>Freelance Designer</p>
            <p>Brand Design Mastery</p>
            <p>Into to E-commerce</p>
            <p>Workshop</p>
          </div>
          <div className="footer-section">
            <h3>Bundles</h3>
            <p>Freelance Web</p>
            <p>Designer Bundle</p>
            <p>Full Stack</p>
            <p>Designer Bundle</p>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <p>FAQ & Support</p>
            <p>Platform Status</p>
            <p>Pricing</p>
          </div>
        </div>
        <p className="footer-credit">© 2022 Twinkle Creative — Designed, coded, written, and produced by Mike McAlister.</p>
      </footer>
    </div>
  );
};

export default HomePage;
