// src/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log(formData); 
  };
  return (
    
    <div className="row p-5 justify-content-center">
     <h1 className="text-center gradient-text">Contact <span>Me</span></h1>

      <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
      
        <form className="row g-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName" className="form-label"></label>
              <input
                placeholder="First name"
                type="text"
                className="form-control is-valid"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="col">
              <label htmlFor="lastName" className="form-label"></label>
              <input
                placeholder="Last Name"
                type="text"
                className="form-control is-valid"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
  
          <div className="row">
            <div className="col">
              <label htmlFor="email" className="form-label"></label>
              <input
                placeholder="Email"
                type="email"
                className="form-control is-valid"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="col">
              <label htmlFor="phone" className="form-label"></label>
              <input
                placeholder="Phone Number"
                type="text"
                className="form-control is-valid"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
  
          <div className="col-12">
            <label htmlFor="comments" className="form-label"></label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your Message"
            />
          </div>
  
          {/* <div className="col-12 g-3"> */}
          <div className="col-12 g-3 d-flex justify-content-center">
          <button className="btn btn-primary hover-button" type="submit">
              Message Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default ContactForm;
