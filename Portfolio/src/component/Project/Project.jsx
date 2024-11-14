import { useEffect, useState } from "react";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    myproject();
  
  }, []);

  const myproject = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/Myproject`, {
        method: "GET",
      });
      if (response.ok) {
        const projectData = await response.json();
        setProject(projectData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container"   id="project">
      <div className="row mt-5">
      <h1 className="text-center gradient-text">
          <span>My</span> Latest Project
        </h1>
{/* 
        <h1 className="text-center gradient-text hover-effect">
      <span className="hover-char"></span>My <span className="hover-char">Latest Project</span>
    </h1> */}
      </div>
      <div className="row mt-4">
        {project.map((project) => (
          <div key={project.id} className="col-md-4 mb-4" data-aos="flip-right"  data-aos-duration="1000">
            <div className="card shadow-sm p-3 hover-card"
            >
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <div className="buttons-container">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Project };
