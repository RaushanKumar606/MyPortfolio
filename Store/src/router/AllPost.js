const express = require('express');
const router = express.Router();
const AllPost = require('../controller/PostContoller'); // Check the path
const path = require('path'); 
const multer = require("multer");

// Route for saving a contact

const upload = multer({
    dest:path.resolve(__dirname,'../../public/data/upload'),
    limits:{fileSize:3e7}
})

router.route('/Myskill').post(upload.fields([
    { name: 'Icone', maxCount: 2 }
]), AllPost.saveSkill);

router.route('/Myproject').post(upload.fields([
    { name: 'Icone', maxCount: 2 }
]), AllPost.saveProject);

router.route('/Myeducation').post(upload.fields([
    { name: 'Image', maxCount: 2 }
]), AllPost.saveEducation);

// router.route('/Myskill').post(AllPost.saveSkill);
// router.route('/Myeducation').post(AllPost.saveEducation);
// router.route('/Myproject').post(AllPost.saveProject);
router.route('/service').post(AllPost.saveService);

module.exports = router;
