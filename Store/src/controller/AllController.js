// const Contact = require('../model/ContactModel');
// const Education = require('../model/educationModel')
// const MyProject = require('../model/ProjectModle')
// const Skill = require('../model/skill.model')
// const Service = require('../model/ServiceModel')




const Contact = require('../model/ContactModel');
const Education = require('../model/educationModel');
const MyProject = require('../model/ProjectModle');
const Skill = require('../model/skill.model');
const Service = require('../model/ServiceModel');



// const saveSkill = async (req, res, next) => {
//   try {
//     const { skillName } = req.body;
//     const addSkill = new Skill ({skillName });
//     await addSkill.save();
//     res.status(201).send({ message: 'Project  saved successfully!' });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// };


const getAllSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find(); // Fetch all skills
    res.status(200).send(skills);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// const saveProject = async (req, res, next) => {
//   try {
//     const { username, title, image, description } = req.body;
//     const project = new MyProject({  username, title, image, description });
//     await project.save();
//     res.status(201).send({ message: 'Project  saved successfully!' });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// };


const getAllProjects = async (req, res, next) => {
  try {
    const projects = await MyProject.find(); // Fetch all projects
    res.status(200).send(projects);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


// const saveEducation= async(req,res,next)=>{
//  try {
//     const {school,degree,field,start_date,end_date,grade} = req.body
//     const education = new Education({ school,degree,field,start_date,end_date,grade});
//     await education.save();
//     res.status(201).send({ message: 'Education  saved successfully!' });
//  } catch (error) {
    
//  }
// }

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
        const { username, email, phone, comment } = req.body;
        const contact = new Contact({ username, email, phone, comment });
        await contact.save();
        res.status(201).send({ message: 'Contact saved successfully!' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


// const saveService = async (req, res, next) => {
//   try {
//       const {title,description} = req.body;
//       const service = new Service({title,description});
//       await service.save();
//       res.status(201).send({ message: 'service saved successfully!' });
//   } catch (error) {
//       res.status(400).send({ error: error.message });
//   }
// };

// Get All Services
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
// saveEducation,saveProject,saveSkill,saveService
 };



module.exports = {
  saveContact,
  
  getAllSkills,
  getAllProjects,
  getAllEducation,
  getAllServices
};
