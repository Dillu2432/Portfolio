import React,{useState} from 'react';
import '../styles/contactstyle.css'

const Home = () => {
  const[userData, setUserData] = useState({
    userName:"",
    userEmail:"",
    userMessage:"",
  });
  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const { userName, userEmail, userMessage} = userData;
    if( userName && userEmail && userMessage){

    
    const res = fetch('https://portfolio-2432-4c131-default-rtdb.firebaseio.com/userDataReacord.json',
    {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify({
      userName, 
      userEmail, 
      userMessage,
    })
  })


  if(res){
    setUserData({
      userName:"",
      userEmail:"",
      userMessage:"",
    });alert("Thank you for contacting, we will respond soon");
  }else{
    alert("Please, Fill the complete detail")
  }
  }
    // Add your logic for handling form submission here
    
  };

  return (
   <>
   <section className="contact">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">Contact</span>
            <span className="heading-sec__sub heading-sec__sub--lt">
              Feel free to Contact me by submitting the form below, and I will get
              back to you as soon as possible
            </span>
          </h2>
          <div className="contact__form-container">
            <form
              action="#"
              className="contact__form"
              method="post"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="form 1" />
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">
                  Name
                </label>
                <input
                  required=""
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-input"
                  name="userName"
                  id="name"
                  value={userData.userName}
                  onChange={postUserData}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">
                  Email
                </label>
                <input
                  required=""
                  placeholder="Enter Your Email"
                  type="email"
                  className="contact__form-input"
                  name="userEmail"
                  id="email"
                  value={userData.userEmail}
                  onChange={postUserData}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  required=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Enter Your Message"
                  name="userMessage"
                  id="message"
                  value={userData.userMessage}
                  onChange={postUserData}
                ></textarea>
              </div>
              <button type="submit" className="btn btn--theme contact__btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
   </>
  );
};

export default Home;
