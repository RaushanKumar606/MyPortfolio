
const Contact = require('../model/ContactModel');
const Education = require('../model/educationModel');
const MyProject = require('../model/ProjectModle');
const Skill = require('../model/skill.model');
const Service = require('../model/ServiceModel');


const getAllSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find(); // Fetch all skills
    res.status(200).send(skills);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};




const getAllProjects = async (req, res, next) => {
  try {
    const projects = await MyProject.find(); // Fetch all projects
    res.status(200).send(projects);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};




const getAllEducation = async (req, res, next) => {
  try {
    const education = await Education.find(); // Fetch all education records
    res.status(200).send(education);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const saveContact = async (req, res, next) => {
    try {
        const { firstName,lastName, email, phone, comment } = req.body;
        const contact = new Contact({ firstName,lastName, email, phone, comment });
        await contact.save();
        res.status(201).send({ message: 'Contact saved successfully!' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};



const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find(); // Fetch all services
    res.status(200).send(services);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};







module.exports = {
  saveContact,
  
  getAllSkills,
  getAllProjects,
  getAllEducation,
  getAllServices
};
