const fs = require('fs');
const shell = require('shelljs');
var router = require('express').Router();

router.route('/')
    .get((req, res, next) => {
      res.json({
        message: 'Welcome'
      });
    });

router.route('/suppliers')
    .get((req, res, next) => {
      res.json({
        message: 'suppliers GET'
      });
    })
    .post((req, res, next) => {
      fs.writeFile("../input/suppliers.txt",
        `4\n${req.body.order}\n${req.body.s1},${req.body.s2},${req.body.s3},${req.body.s4}\n${req.body.s1m},${req.body.s2m},${req.body.s3m},${req.body.s4m}`,
        (err) => {
          if (err) return console.log(err);
          console.log("Saved file suppliers.txt");
        }
      );
      res.json({
        order: req.body.order,
        s1: req.body.s1,
        s2: req.body.s2,
        s3: req.body.s3,
        s4: req.body.s4,
        s1m: req.body.s1m,
        s2m: req.body.s2m,
        s3m: req.body.s3m,
        s4m: req.body.s4m
      });
    });

router.route('/criteria')
    .get((req, res, next) => {
      res.json({
        message: 'criteria GET'
      });
    })
    .post((req, res, next) => {
      fs.writeFile("../../input/criteriaRank.csv",
       `${req.body.qop},${req.body.dop},${req.body.doq},${req.body.pcop},${req.body.pcoq},${req.body.pcod}`,
       (err) => {
         if (err) return console.log(err);
         console.log("Saved criteriaRank.csv");
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

router.route('/price')
    .get((req, res, next) => {
      res.json({
        message: 'price GET'
      })
    })
    .post((req, res, next) => {
      fs.writeFile("../input/priceRank.csv",
      `${req.body.ps2s1},${req.body.ps3s1},${req.body.ps3s2},${req.body.ps4s1},${req.body.ps4s2},${req.body.ps4s3}`,
      (err) => {
        if (err) return console.log(err);
        console.log("Saved priceRank.csv");
      });
      res.json({
        ps2s1: req.body.ps2s1,
        ps3s1: req.body.ps3s1,
        ps3s2: req.body.ps3s2,
        ps4s1: req.body.ps4s1,
        ps4s2: req.body.ps4s2,
        ps4s3: req.body.ps4s3
      });
    });

router.route('/quality')
    .get((req, res, next) => {
      res.json({
        message: 'quality GET'
      })
    })
    .post((req, res, next) => {
      fs.writeFile("../input/qualityRank.csv",
      `${req.body.qs2s1},${req.body.qs3s1},${req.body.qs3s2},${req.body.qs4s1},${req.body.qs4s2},${req.body.qs4s3}`,
      (err) => {
        if (err) return console.log(err);
        console.log("Saved qualityRank.csv");
      });
      res.json({
        qs2s1: req.body.qs2s1,
        qs3s1: req.body.qs3s1,
        qs3s2: req.body.qs3s2,
        qs4s1: req.body.qs4s1,
        qs4s2: req.body.qs4s2,
        qs4s3: req.body.qs4s3
      });
    });

router.route('/delivery')
    .get((req, res, next) => {
      res.json({
        message: 'delivery GET'
      })
    })
    .post((req, res, next) => {
      fs.writeFile("../input/deliveryRank.csv",
      `${req.body.ds2s1},${req.body.ds3s1},${req.body.ds3s2},${req.body.ds4s1},${req.body.ds4s2},${req.body.ds4s3}`,
      (err) => {
        if (err) return console.log(err);
        console.log("Saved deliveryRank.csv");
      });
      res.json({
        ds2s1: req.body.ds2s1,
        ds3s1: req.body.ds3s1,
        ds3s2: req.body.ds3s2,
        ds4s1: req.body.ds4s1,
        ds4s2: req.body.ds4s2,
        ds4s3: req.body.ds4s3
      });
    });

router.route('/process')
    .get((req, res, next) => {
      res.json({
        message: 'process GET'
      })
    })
    .post((req, res, next) => {
      fs.writeFile("../input/processRank.csv",
      `${req.body.prs2s1},${req.body.prs3s1},${req.body.prs3s2},${req.body.prs4s1},${req.body.prs4s2},${req.body.prs4s3}`,
      (err) => {
        if (err) return console.log(err);
        console.log("Saved processRank.csv");
     });
     res.json({
       prs2s1: req.body.prs2s1,
       prs3s1: req.body.prs3s1,
       prs3s2: req.body.prs3s2,
       prs4s1: req.body.prs4s1,
       prs4s2: req.body.prs4s2,
       prs4s3: req.body.prs4s3
     });
   });

router.route('/result')
    .get((req, res, next) => {
      var contents = fs.readFileSync("../output/result.csv", "utf8");
      var orderLots = contents.split(',');
      res.json({
        desiredS1: orderLots[0],
        desiredS2: orderLots[1],
        desiredS3: orderLots[2],
        desiredS4: orderLots[3]
      });
      // fs.readFile("../output/result.csv", "utf8", (err, contents) => {
      //   var orderLots = contents.split(',');
      //   res.json({
      //     desiredS1: orderLots[0],
      //     desiredS2: orderLots[1],
      //     desiredS3: orderLots[2],
      //     desiredS4: orderLots[3]
      //   });
      // });
    })
    .post((req, res, next) => {
      shell.exec('../build.sh');
      res.json({
        success: true
      });
    });

module.exports = router;
