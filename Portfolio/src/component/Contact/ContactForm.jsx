// src/ContactForm.js
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Capture error response body
        throw new Error(`Failed to send contact message: ${errorText}`);
      }

      const contact = await response.json();
      console.log("Success:", contact.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="row p-5 justify-content-center" id="contact">
      <h1 className="text-center gradient-text">
        Contact <span>Me</span>
      </h1>

      <div
        className="col-6 p-5"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <img
          src="Image/contact1.jpg"
          alt="contact"
          className=""
          style={{
            border: "2px solid 001f3f",
            backgroundColor: "red",
            width: "500px",
            borderRadius:"10px"
          }}
        />
      </div>
      <div
        className="col-md-6 p-5 d-flex justify-content-center align-items-center"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
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
            <button
              className="btn btn-outline-primary hover-button"
              type="submit"
            >
              Message Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
