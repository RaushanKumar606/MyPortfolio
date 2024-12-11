// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
const Footer = () => {
  return (
    
    <div className="container ">
     <div className="row p-5">
      <div className="col">
        <h2>Raushan Singh Portfolio</h2>
        <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
      </div>
      <div className="col"><h2>quick links</h2>
      <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#service">Service</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#project">Project</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

      </div>
      <div className="col"><h2>contact info</h2>
      <p>roshankumarsingh964@gmail.com</p>
      <p>Saran Bihar India</p>
      
      <div className="icon_item d-flex   gap-3 mb-5 ">
         <a
                href="https://www.facebook.com/profile.php?id=100058104741569"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info rounded-circle icon_up"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/raushan_810/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info rounded-circle icon_up"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>

              <a
                href="https://github.com/RaushanKumar606"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info rounded-circle icon_up"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-github text-2xl"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/raushan-kumar-118971253/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info rounded-circle icon_up"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info rounded-circle icon_up"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              </div>
      </div>


      <hr />
      <div 
  className="item-align-center" 
  style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    
    textAlign: 'center'
  }}
>
  <h6>Copyright © 2020 by @RaushanSingh | All Rights Reserved</h6>
</div>

     </div>
    </div>
  );
};

export { Footer };
