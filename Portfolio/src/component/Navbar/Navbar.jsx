
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  w-90">
      <div className="d-flex justify-content-between w-100 ">
        <a className="navbar-brand" href="#">Raushan</a>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <a className="nav-link active " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Skill</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;