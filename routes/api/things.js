const express = require('express');
var router = express.Router();

var thingsCollection = [];
var thingsStructure = {
    "id": 0,
    "description": '',
    "date": 0,
    "by": ''
};

thingsCollection.push(
    Object.assign({},thingsStructure,{
        "id": 1,
        "description": "lenca",
        "date": new Date().getTime(),
        "by":"raices"
    })
);


router.get('/',(req,res,next)=>{
    res.status(200).json(thingsCollection);
});

router.post('/',(req,res,next)=>{
    var newElement=Object.assign(thingsStructure,req.body,{"date": new Date().getTime(),"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});//post

router.put('/:idElement',(req,res,next)=>{
    var id = parseInt(req.params.idElement);
    var update = req.body;
    var modifiedObject = {};
    var originalObject = {};
    thingsCollection=thingsCollection.map((e,i)=>{
        if(e.id===id){
            originalObject= Object.assign({},e);
            return Object.assign(modifiedObject,e,req.body);
        }
        return e;
    })//map
    res.status(200).json({"o": originalObject,"m": modifiedObject});
});//put

router.delete('/:id',(req,res,next)=>{
    var id= parseInt(req.params.id);
    thingsCollection = thingsCollection.filter((e,i)=>{
        return (e.id!=id);
    });

    res.status(200).json({'Eliminadito':'Elemento'+ id +'Eliminado'});
});
//delete perrx


module.exports = router;