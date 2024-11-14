import { useEffect, useState } from "react";


const Service = () => {
  const [services, setServices] = useState([])
  
useEffect(()=>{
  myservice();
});

const myservice  = async()=>{
  try {
    const response = await fetch(`http://localhost:8000/api/service`,{
      method:"GET",
    })
    if(response.ok){
      const serviceData = await response.json();
      setServices(serviceData);
    }
  } catch (error) {
    console.log(error)
  }
}

      


return (
  <div className="container"   id="service">
    <div className="row mt-5">
    <h1 className="text-center gradient-text">
        <span>My</span> Services
      </h1>
    </div>
    <div className="row mt-4">
      {services.map((service) => (
        <div key={service.id} className="col-md-4 mb-4" data-aos="fade-up-right"data-aos-duration="1000">
          <div className="card shadow-sm p-3 hover-card">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-text">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export { Service };
