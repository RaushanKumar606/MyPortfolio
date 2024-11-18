import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    myeducation();
  });
  const myeducation = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/Myeducation`, {
        method: "GET",
      });
      if (response.ok) {
        const educationData = await response.json();

        setEducation(educationData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" id="education">
      <div className="row mt-5">
        <h1 className="text-center gradient-text">
          <span>My</span> Education
        </h1>
      </div>


      <div className="row mt-4">
  {education.map((item) => (
    <div
      key={item.id}
      className="col-md-12 mb-4"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="card shadow-sm p-3 hover-card">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-2 d-flex justify-content-center">
            <img
              src={item.Image}
              alt="Image"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
              }}
              className="rounded"
            />
          </div>
          {/* Details Column */}
          <div className="col-10">
            <h3 className="card-title mb-2">{item.school}</h3>
            <h4 className="card-subtitle mb-2 text-muted">{item.degree}</h4>
            <p className="card-text mb-2">{item.field}</p>
            <p className="card-text mb-2">
              <strong>Start Date:</strong>{" "}
              {item.start_date
                ? new Date(item.start_date).toLocaleDateString()
                : "N/A"}
            </p>
            <p className="card-text mb-2">
              <strong>End Date:</strong>{" "}
              {item.end_date
                ? new Date(item.end_date).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export { Education };
