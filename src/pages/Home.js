import React from 'react';
import '../styles/homestyle.css'
import cover from '../data/cover.gif'

const Home = () => {
  return (
    <>
    <section className="home-container">
    <div className="banner">
        <div className="banner-text">
            <p className="banner-title">
            Hello There!
            I'm <br/> <em>DILBAGH SINGHg</em>
            </p>
            <p className="banner-intro">I am engineer turns into a full stack developer role. With a strong foundation in programming and a passion for learning new technologies, I am confident in my ability to excel in this field. I am eager to apply my skills and collaborate with other professionals to create innovative solutions and improve user experiences. As a detail-oriented and driven individual, I am committed to delivering high-quality work and constantly improving my skills to stay up-to-date with industry trends.</p>


        <div className="click">
            <button className="home-btn"><a href="https://drive.google.com/file/d/14nFtbsuWFdnKjMB3wxNOI6N9JpnA6Ddc/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Go to Resumé Page">DOWNLOAD CVV</a></button> 
        </div>

        
         
    </div>
    <div className="banner-img">
            <img src={cover} alt="cover gif"/>
        </div>

    </div>

     

   
</section>
  

    </>
  );
};

export default Home;
