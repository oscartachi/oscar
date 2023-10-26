let express = require('express');
let router = express.Router();
const db = require('../db/db.json');


/* router.get('id'), function(req, res, next){
return new Promise((resolve, reject) => {
 const {id, name, description, price} = body;
 if(err) reject(err)
 console.log(rows);

 resolve(rows);
 console.log(rows)

})
res.render('compra',{title:'express'});

} */

router.get('/'), function (req,res,next){
   try {
      res.json(db)
   } catch (error) {
      res.status(500).json({error:'Error'})
   }
} 




module.exports = router;
