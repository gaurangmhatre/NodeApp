var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/literacyPer', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:55790');
    res.json([{
      "name":"Overall Literacy %",
      "data":[
         67.08,
         69.47,
         93.94,
         86.73,
         81.20,
         86.53
      ]
   },
   {
      "name":"Male Literacy %",
      "data":[
         77.36,
         79.69,
         95.86,
         91.03,
         88.89,
         73.44
      ]
   },
   {
      "name":"Female Literacy %",
      "data":[
         55.24,
         58.70,
         91.57,
         81.74,
         73.16,
         53.18
      ]
   }])
});


/* GET users listing. */
router.get('/literacyByState', function(req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:55790');
    res.json([{
    "data": [
      { "x": 222, "y": 68, "z": 12, "name": "JK", "State": "JAMMU & KASHMIR" },
      { "x": 55, "y": 83, "z": 6, "name": "HP", "State": "HIMACHAL PRADESH" },
      { "x": 50, "y": 76, "z": 27, "name": "PUB", "State": "PUNJAB" },
      { "x": 0.1, "y": 86, "z": 1, "name": "CHA", "State": "CHANDIGARH" },
      { "x": 53, "y": 79, "z": 10, "name": "UTT", "State": "UTTARAKHAND" },
      { "x": 44, "y": 76, "z": 25, "name": "HAR", "State": "HARYANA" },
      { "x": 1.4, "y": 86, "z": 16, "name": "DEL", "State": "DELHI" },
      { "x": 342, "y": 67, "z": 68, "name": "RAJ", "State": "RAJASTHAN" },
      { "x": 240, "y": 69, "z": 119, "name": "UP", "State": "UTTAR PRADESH" },
      { "x": 94, "y": 63, "z": 103, "name": "BI", "State": "BIHAR" },
      { "x": 7, "y": 82, "z": 0.6, "name": "SIK", "State": "SIKKIM" },
      { "x": 83, "y": 66, "z": 1, "name": "ARU", "State": "ARUNACHAL PRADESH" },
      { "x": 16, "y": 80, "z": 1.9, "name": "NA", "State": "NAGALAND" },
      { "x": 22, "y": 79, "z": 2, "name": "MA", "State": "MANIPUR" },
      { "x": 21, "y": 91, "z": 1, "name": "MIZ", "State": "MIZORAM" },     
      { "x": 10, "y": 87, "z": 3, "name": "TRI", "State": "TRIPURA" },
      { "x": 22, "y": 75, "z": 2, "name": "MEG", "State": "MEGHALAYA" },
      { "x": 78, "y": 73, "z": 31, "name": "AS", "State": "ASSAM" },
      { "x": 88, "y": 77, "z": 991, "name": "WB", "State": "WEST BENGAL" },
      { "x": 79, "y": 67, "z": 32, "name": "JHA", "State": "JHARKHAND" },
      { "x": 155, "y": 73, "z": 41, "name": "ODI", "State": "ODISHA" },
      { "x": 135, "y": 71, "z": 25, "name": "CHA", "State": "CHHATTISGARH" },
      { "x": 308, "y": 70, "z": 72, "name": "MP", "State": "MADHYA PRADESH" },
      { "x": 196, "y": 79, "z": 60, "name": "GJ", "State": "GUJARAT" },
      { "x": 0.1, "y": 87, "z": 0.2, "name": "DD", "State": "DAMAN & DIU" },
      { "x": 0.4, "y": 77, "z": 0.3, "name": "DN", "State": "DADRA & NAGAR HAVELI" },
      { "x": 307, "y": 82, "z": 112, "name": "MH", "State": "MAHARASHTRA" },
      { "x": 275 , "y": 67, "z": 84, "name": "AP", "State": "ANDHRA PRADESH" },
      { "x": 191, "y": 75, "z": 61, "name": "KA", "State": "KARNATAKA" },
      { "x": 3.7, "y": 87, "z": 1, "name": "GO", "State": "GOA" },    
      { "x": 0.03, "y": 92, "z": 0.06, "name": "LA", "State": "LAKSHADWEEP" },
      { "x": 38, "y": 93, "z": 33, "name": "KE", "State": "KERALA" },
      { "x": 130, "y": 80, "z": 72, "name": "TN", "State": "TAMIL NADU" },
      { "x": 0.4, "y": 86, "z": 1, "name": "PUD", "State": "PUDUCHERRY" },
      { "x": 8, "y": 86, "z": 0.3, "name": "AN", "State": "A & N ISLANDS" },
      { "x": 114, "y": 66, "z": 0.3, "name": "TE", "State": "TELANGANA" }
    ]
  }])
});

module.exports = router;
