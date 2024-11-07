import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
const Footer = () => {
  return (
    <div className="container">
      <div className="row mb-5 ">
        <div
          className="col text-center text-hover "
          style={{
            height: "50px",
            backgroundColor: "#001f3f",
            borderRadius: "20px",
            // border: "2px solid black",
          }}
        >
          Copyright © 2020 by @RaushanSingh | All Rights Reserved.{" "}
         <a href="/">
         <FontAwesomeIcon
            icon={faArrowUp}
            className="icon_up"
            style={{ left: "400px", position: "relative" , backgroundColor: "",
                borderRadius: "90%",height:'30px',
               marginTop:'10px'}}
          />
         </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
