const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({"Hola":"ei corquin shaiuna"})
});

module.exports = router;