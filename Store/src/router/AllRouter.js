
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
