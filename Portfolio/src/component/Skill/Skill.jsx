import { useEffect, useState } from "react";

const Skill = () => {
  const [skill, setSkill] = useState([])
  

  useEffect(() => {
    skills();
  }, []); 
  
  const skills = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/Myskill`, {
        method: "GET",
      });
  
      if (response.ok) {
        const skillData = await response.json();
        setSkill(skillData);
      } else {
        console.error('Error fetching skills:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch skills:', error);
    }
  };


  return (
    <div className="container"   id="skill">
      <div className="row mt-5">
      <h1 className="text-center gradient-text">
  <span >Skills</span> & <span >Abilities</span>
</h1>

      </div>
      <div className="row mt-4"
      >
        {skill.map((skill)=>{
          const {id,skillName}=skill;
          return(
            <div key={id} className="col-md-4 mb-4"
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
            >
               
               <div className="card shadow-sm p-3 hover-card">
               <h3 className="card-title">{skillName}</h3>
               </div>
          </div>
          )
        })}
        {/* {skill.map((curr) => (
          <div key={curr.id} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <h3 className="card-title">{curr.skillName}</h3>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export { Skill };
