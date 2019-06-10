const express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({"Security":"ei corquin shaiuna"})
});

module.exports = router;