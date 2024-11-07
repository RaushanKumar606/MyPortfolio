// const express = require('express');
// const router = express.Router();
// const AllRouter = require('../controller/AllController'); // Check the path

// // Route for saving a contact
// router.route('/contact').post(AllRouter.saveContact);
// router.route('/Myskill').post(AllRouter.saveSkill);
// router.route('/Myeducation').post(AllRouter.saveEducation);
// router.route('/Myproject').post(AllRouter.saveProject);
// router.route('/service').post(AllRouter.saveService);

// module.exports = router;


const express = require('express');
const router = express.Router();
const AllRouter = require('../controller/AllController'); // Check the path

// Route for saving a contact
router.route('/contact').post(AllRouter.saveContact);
router.route('/Myskill').get(AllRouter.getAllSkills) 
router.route('/Myproject').get(AllRouter.getAllProjects)
router.route('/Myeducation').get(AllRouter.getAllEducation)
router.route('/service').get(AllRouter.getAllServices)

module.exports = router;
