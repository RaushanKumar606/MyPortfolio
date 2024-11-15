
const Education = require('../model/educationModel')
const MyProject = require('../model/ProjectModle')
const Skill = require('../model/skill.model')
const Service = require('../model/ServiceModel')

const path = require('path'); 
const multer = require("multer");
const {cloudinary} = require('../cloudnary/cloudnary')
const fs = require('fs');

const saveSkill = async (req, res, next) => {
    const { skillName } = req.body;
    let Icone;
    let IconeFilePath;  
    try {
        if (!req.files || !req.files.Icone) {
            throw new Error("Icone file is required");
        }
        const IconeType = req.files.Icone[0].mimetype.split('/').pop();
        const IconeFilename = req.files.Icone[0].filename;
        IconeFilePath = path.resolve(__dirname, '../../public/data/upload', IconeFilename);
        Icone = await cloudinary.uploader.upload(IconeFilePath, {
            public_id: IconeFilename,
            folder: 'book_Covers',
            format: IconeType,
        }).catch(error => {
            console.error('Cloudinary upload error for Icone:', error);
            throw new Error('Failed to upload Icone to Cloudinary');
        });
        const addSkill = new Skill({ skillName, Icone: Icone.secure_url });
        await addSkill.save();
        res.status(201).send({ message: 'Skill saved successfully!', Icone: Icone });

    } catch (error) {
        console.error(error.message);
        res.status(400).send({ error: error.message });

    }
     finally {
        try {
            if (IconeFilePath) {
                await fs.promises.unlink(IconeFilePath);
                console.log("Icone file deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting files:", error);
        }
    }
};

// Project logic ///


const saveProject = async (req, res, next) => {
  try {
    const { username, title, description, demoLink } = req.body;
    let Icone;
    let IconeFilePath;  
    // Check if the Icone file is provided
    if (!req.files || !req.files.Icone) {
      throw new Error("Icone file is required");
    }

    // Access the Icone file details
    const IconeFile = req.files.Icone[0];
    const IconeType = IconeFile.mimetype.split('/').pop();
    const IconeFilename = IconeFile.filename;
     IconeFilePath = path.resolve(__dirname, '../../public/data/upload', IconeFilename);

   
     Icone = await cloudinary.uploader.upload(IconeFilePath, {
      public_id: IconeFilename,
      folder: 'book_Covers',
      format: IconeType,
    });

     
    const project = new MyProject({
      username,
      title,
      description,
      Icone: Icone.secure_url, 
      demoLink, 
    });

    await project.save();
    res.status(201).send({ message: 'Project saved successfully!' ,Icone:Icone});
  } catch (error) {
    console.error('Error saving project:', error);
    res.status(400).send({ error: error.message });
  }
  finally 
  {
    try {
        if (IconeFilePath) {
            await fs.promises.unlink(IconeFilePath);
            console.log("Icone file deleted successfully");
        }
    } catch (error) {
        console.error("Error deleting files:", error);
    }
}
};




// const saveProject = async (req, res, next) => {
//   try {
//     const { username, title, description,image } = req.body;
//     const project = new MyProject({  username, title, image, description ,image});
//     await project.save();
//     res.status(201).send({ message: 'Project  saved successfully!' });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// };

const saveEducation= async(req,res,next)=>{
 try {
    const {school,degree,field,start_date,end_date,grade,image} = req.body
    const education = new Education({ school,degree,field,start_date,end_date,grade,image});
    await education.save();
    res.status(201).send({ message: 'Education  saved successfully!' });
 } catch (error) {
  
 }
}

const saveService = async (req, res, next) => {
  try {
      const {title,description,image} = req.body;
      const service = new Service({title,description,image});
      await service.save();
      res.status(201).send({ message: 'service saved successfully!' });
  } catch (error) {
      res.status(400).send({ error: error.message });
  }
};


module.exports = { 
saveSkill ,saveEducation,saveProject,saveService
 };
