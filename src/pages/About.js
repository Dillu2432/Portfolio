import React from 'react';

import '../styles/aboutstyle.css'

const Home = () => {
  return (
    <>
    <section id="about">
            <div className="about-section">
              <div className="column">
               {/* <img className="avatar" src="./picture/dilbagh photo.jpg" /> */}
            </div>
                    <span className="about-title">About Me</span>
                    <span className="about-text">
                      Here you will find more information about me, what I do, and my
                      current skills mostly in terms of programming and technology
                    </span>
                  
            <div className="about-contents">
                <div className="about-contents-main">
                    <div className="about-subheader"><p>WHO AM I?</p></div>
                    <div className="about-main">
                        <p>   
                            <em>Hi</em>, Im DILBAGH SINGH, full stack developer with a strong passion for creating innovative and user-friendly web applications. I completed my Bachelors degree in electronic and communication engineering and later pursued my masters in the same field.
                            I have hands on experience in working as a technical support engineer, handling biometric system, server, and networks, which has given me an understanding of how different technologies can work together to achieve desired results.
                            My curiosity and eagerness to learn new technology and methodologies have led me to excel in my fields, and I am confident in my ability to keep up with the ever- changing landscape of web development.
                            As a detail-oriented and driven individual, I am committed to delivering high-quality work that meets my clients needs. I am always looking for new and exciting opportunities to collaborate with other professionals and contribute to the growth of the tech industry.

                        </p>
                     </div>
                </div>
               <div className="about__content-skills">
                  <h3 className="about__content-title">My Skills</h3>

                  <div className="skills">
                    <div className="skills__skill1">
                      <img src='https://cdn-icons-png.flaticon.com/128/3291/3291670.png' />
                      <div className='skill1'><p>html</p></div></div>
                    <div className="skills__skill2"><img src='https://cdn-icons-png.flaticon.com/128/2/2148.png' /></div>
                    <div className="skills__skill3"><img src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' /></div>
                    <div className="skills__skill4"><img src='https://cdn-icons-png.flaticon.com/128/753/753244.png' /></div>
                    <div className="skills__skill5"><img src='https://cdn-icons-png.flaticon.com/128/5968/5968350.png' /></div>
                    <div className="skills__skill6"><img src='https://iconape.com/wp-content/png_logo_vector/nodejs.png' /></div>
                    <div className="skills__skill7"><img src='https://cdn-icons-png.flaticon.com/128/10090/10090320.png' /></div>
                    <div className="skills__skill8"><img src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' /></div>
                    <div className="skills__skill9"><img src='https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript.png' /></div>
                    <div className="skills__skill13"><img src='https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png'/></div>

                    <div className="skills__skill10"><img src='https://logowik.com/content/uploads/images/tableau-software.jpg' /></div>
                    <div className="skills__skill11"><img src='https://cdn-icons-png.flaticon.com/128/2772/2772128.png' /></div>
                    <div className="skills__skill12"><img src='https://cdn-icons-png.flaticon.com/128/919/919836.png' /></div>
                  </div>

                  

        </div>
        {/* <video width="400" controls>
                    <source src="./picture/Video Template.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video> */}
            </div>    
            </div>
        

        </section>

    </>
  );
};

export default Home;
