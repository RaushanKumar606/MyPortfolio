import pdf from "../pdf/Raushan Kumar.pdf"
const About = () => {
  return (
    <div className="container p-5"   id="about">
      <div className="row mt-5">
        <div
          className="col mt-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        
        >
            <div className="div"  style={{ border: "2px solid 001f3f",backgroundColor:"red",width:"300px"}}>
            <div className="image">
            <img
              src="/Image/rkr.jpg"
              alt=""
              className="hover-image"
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "50%",
                border: "2px solid 001f3f",
              }}
            />
          </div>
            </div>
         
        </div>
        <div
          className="col mt-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-center gradient-text">
            About <span>Me!</span>
          </h1>
          <h3>Full Stack Developer & Software Developer</h3>
          <p>
            Final-Year CSE Pursuing Student At GTU,Gujarat. I Have A Keen
            Interest In Both Web Development And software Developer. I Enjoy
            Playing Video Games, Finding Them Not Only Entertaining But Also A
            Source Of Inspiration For Problem-Solving And Creativity. It Also
            Helps Me To Increase My Concentration. I Also Listen To Music In My
            Free Time. Read more
          </p>
           <a href={pdf} download="resume.pdf" className="btn btn-outline-warning offset-5 " > Download Resume</a>
        </div>
      </div>
    </div>
  );
};
export { About };
