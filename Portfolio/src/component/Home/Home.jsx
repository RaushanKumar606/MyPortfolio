import { useEffect ,useRef} from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(()=>{
const options = {
  strings: ["Full Stack Developer "],
  typesSpeed:50,
  backSpeed:50,
  loop:true

}
const typed = new Typed(typedRef.current,options)
return()=>{
  typed.destroy()
}
  },[]);

  return (
    <div>
      <div
        className="container " 
        id="home"
      >
        <div className="row mt-5">
          <div className="col p-5 mt-5"
          data-aos="fade-up-right"
          data-aos-duration="1000">
            <h1 className="mt-10" >Raushan Kumar Singh</h1>
            <h3 ref={typedRef}>
             I Am Into
            </h3>
            <p>
              Enthusiastic and dedicated computer science student with a passion <br />
              for technology and innovation. Currently pursuing a
              Bachelor&apos;s degree<br />in Computer Engineering, and any other
              relevant role that allows me  <br />to utilize my skills in programming,
              problem-solving, and software <br /> design to develop software.
            </p>

            <div className="icon_item d-flex justify-content-center align-items-center gap-3 mb-5 ">
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

          {/* IMAGE setup */}

          <div className="col-4 p-5 mt-5"
          data-aos="fade-up-left"
      data-aos-duration="1000"
          >
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
    </div>
  );
};

export { Home };
