const express = require('express');
const router = express.Router();
const medecinesController = require('../controllers/medecinesController');


router.post("/create", medecinesController.createMedecine);
router.get('/display', medecinesController.getAllMedecines); //get all the books available in the database 
router.get('/display/:medId', medecinesController.getMedecinesById); // get a specefic book by its ID
router.put('/update/:medId', medecinesController.updateMedecineById);
router.delete('/delete/:medId', medecinesController.deleteMedecineById);

module.exports = router;

// /auth/login 
// /medecines/create
// /medecines/display
// /medecines/display/:medId 
// /medecines/update/:medId
// /medecines/delete/:medId