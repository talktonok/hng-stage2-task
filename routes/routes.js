const express = require('express');
const router = express.Router();

const enumOperation = require('../controller/enumOperation')

router.post('/perform', enumOperation.store)


 router.get('/perform', enumOperation.store);


// //Get by ID Method
// router.get('/user/:id', userController.getById);

// //Update by ID Method
// router.patch('/user/:id', userController.update);


// //Delete by ID Method
// router.delete('/user/:id', userController.deleteUser)


module.exports = router;
//DATABASE_URL = mongodb+srv://nok:jiezcOtWFB6SSMUo@cluster0.1i4gfco.mongodb.net/?retryWrites=true&w=majority