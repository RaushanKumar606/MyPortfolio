
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg p-3"
      style={{
        backgroundColor: "#003366",
        borderRadius: "10px",
        border: "2px solid #003366",
        top: "0",
        width: "100%",
        position: "fixed",
        zIndex: "1000",
        height: "auto",
      }}
    >
      <div className="container-fluid">
      <h1 className="navbar-brand text-white gradient-text mb-0 .text-responsive">
        <a href="  /">  Portfolio</a>
        </h1>
   
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

  
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold gradient-text">
            <li className="nav-item">
              <a className="nav-link text-white active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active" href="">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active" href="">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active" href="">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active" href="">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active" href="">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

