const fs = require('fs');
var router = require('express').Router();

router.route('/')
    .get((req, res, next) => {
      res.json({
        message: 'Welcome'
      });
    });

router.route('/criteria')
    .get((req, res, next) => {
      res.json({
        message: 'criteria GET'
      })
    })
    .post((req, res, next) => {
      fs.writeFile("../input/criteriaRank.csv",
       `${req.body.qop},${req.body.dop},${req.body.doq},${req.body.pcop},${req.body.pcoq},${req.body.pcod}`,
       (err) => {
         if (err) return console.log(err);
         console.log("Saved file");
       });
      res.json({
        qop: req.body.qop,
        dop: req.body.dop,
        doq: req.body.doq,
        pcop: req.body.pcop,
        pcoq: req.body.pcoq,
        pcod: req.body.pcod
      });
    });

module.exports = router;
