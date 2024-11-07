import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([])

  useEffect(()=>{
    myeducation();
  })
   const myeducation=async()=>{
    try {
       const response = await fetch(`http://localhost:8000/api/Myeducation`,{
        method:'GET',
       })
       if(response.ok){
        const educationData = await response.json();
        setEducation(educationData);
       }
    } catch (error) {
      console.log(error)
    }
   }
   
  return (
    <div className="container">
      <div className="row mt-5">
      <h1 className="text-center gradient-text">
          <span>My</span> Education
        </h1>
      </div>
      <div className="row mt-4">
        {education.map((item) => (
          <div key={item.id} className="col-md-12 mb-4">
            <div className="card shadow-sm p-3 hover-card">
            <h3 className="card-title">{item.school}</h3>
              <h3 className="card-title">{item.degree}</h3>
              <p className="card-text">{item.field}</p>
              <p className="card-text">Start Date: {new Date(item.start_date).toLocaleDateString()}</p>
        <p className="card-text">End Date: {new Date(item.end_date).toLocaleDateString()}</p>
           
              <p className="card-text">Grade: {item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export { Education };

