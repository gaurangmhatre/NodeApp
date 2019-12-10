var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/literacyPer', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', *);
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
    res.setHeader('Access-Control-Allow-Origin', *);
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

/* GET users listing. */
router.get('/literacyMen1', function(req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', *);
    res.json([
    {
      "name": "Browsers",
      "colorByPoint": true,
      "data": [
        {
          "name": "Jammu & Kashmir",
          "y": 77.37,
          "drilldown": "Jammu & Kashmir"
        },
        {
          "name": "Uttar Pradesh",
          "y": 79.69,
          "drilldown": "Uttar Pradesh"
        },
        {
          "name": "Kerala",
          "y": 95.86,
          "drilldown": "Kerala"
        },
        {
          "name": "Delhi",
          "y": 91.03,
          "drilldown": "Delhi"
        },
        {
          "name": "Maharashtra",
          "y": 88.89,
          "drilldown": "Maharashtra"
        },
        {
          "name": "Bihar",
          "y": 73.44,
          "drilldown": "Bihar"
        }
      ]
    }
  ])
 });

/* GET users listing. */
router.get('/literacyMen2', function(req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', *);
    res.json([ 
         { 
            "name":"Jammu & Kashmir",
            "id":"Jammu & Kashmir",
            "data":[ 
               [ 
                  "KUPWARA",
                  77
               ],
               [ 
                  "BARAMULA",
                  77.35
               ],
               [ 
                  "SRINAGAR",
                  77.95
               ],
               [ 
                  "BADGAM",
                  68.56
               ],
               [ 
                  "PULWAMA",
                  75.41
               ],
               [ 
                  "ANANTNAG",
                  74.13
               ],
               [ 
                  "LEH (LADAKH)",
                  89.39
               ],
               [ 
                  "KARGIL",
                  86.73
               ],
               [ 
                  "DODA",
                  80.36
               ],
               [ 
                  "UDHAMPUR",
                  79.93
               ],
               [ 
                  "PUNCH",
                  81.04
               ],
               [ 
                  "RAJAURI",
                  78.38
               ],
               [ 
                  "JAMMU",
                  89.77
               ],
               [ 
                  "KATHUA",
                  81.4
               ],
               [ 
                  "SHOPIAN",
                  71.86
               ],
               [ 
                  "BANDIPORA",
                  68.41
               ],
               [ 
                  "KISHTWAR",
                  71.75
               ],
               [ 
                  "RAMBAN",
                  71.97
               ],
               [ 
                  "GANDERBAL",
                  70.74
               ],
               [ 
                  "RAMBAN",
                  70.58
               ]
            ]
         },
         { 
            "name":"Uttar Pradesh",
            "id":"Uttar Pradesh",
            "data":[ 
               [ 
                  "SAHARANPUR",
                  79.77
               ],
               [ 
                  "MUZAFFARNAGAR",
                  79.116
               ],
               [ 
                  "BIJNOR",
                  78.7
               ],
               [ 
                  "MORADABAD",
                  66.83
               ],
               [ 
                  "RAMPUR",
                  63.1
               ],
               [ 
                  "JYOTIBA PHULE NAGAR",
                  76.53
               ],
               [ 
                  "MEERUT",
                  82.91
               ],
               [ 
                  "BAGHPAT",
                  84.17
               ],
               [ 
                  "GHAZIABAD",
                  88.16
               ],
               [ 
                  "GAUTAM BUDDHA NAGAR",
                  90.23
               ],
               [ 
                  "BULANDSHAHR",
                  82.52
               ],
               [ 
                  "ALIGARH",
                  80.24
               ],
               [ 
                  "HATHRAS",
                  83.83
               ],
               [ 
                  "MATHURA",
                  84.39
               ],
               [ 
                  "AGRA",
                  78.32
               ],
               [ 
                  "FIROZABAD",
                  83.08
               ],
               [ 
                  "ETAH",
                  83.21
               ],
               [ 
                  "MAINPURI",
                  86.93
               ],
               [ 
                  "BUDAUN",
                  62.39
               ],
               [ 
                  "BAREILLY",
                  69.47
               ],
               [ 
                  "PILIBHIT",
                  73.46
               ],
               [ 
                  "SHAHJAHANPUR",
                  70.09
               ],
               [ 
                  "KHERI",
                  71.58
               ],
               [ 
                  "SITAPUR",
                  72.61
               ],
               [ 
                  "HARDOI",
                  77.2
               ],
               [ 
                  "UNNAO",
                  77.06
               ],
               [ 
                  "LUCKNOW",
                  84.27
               ],
               [ 
                  "RAE BARELI",
                  79.39
               ],
               [ 
                  "FARRUKHABAD",
                  79.34
               ],
               [ 
                  "KANNAUJ",
                  82.36
               ],
               [ 
                  "ETAWAH",
                  87.64
               ] ]
         },
         { 
            "name":"Kerala",
            "id":"Kerala",
            "data":[ 
               [ 
                  "v11.0",
                  6.2
               ],
               [ 
                  "v10.0",
                  0.29
               ],
               [ 
                  "v9.0",
                  0.27
               ],
               [ 
                  "v8.0",
                  0.47
               ]
            ]
         },
         { 
            "name":"Delhi",
            "id":"Delhi",
            "data":[ 
               [ 
                  "v11.0",
                  3.39
               ],
               [ 
                  "v10.1",
                  0.96
               ],
               [ 
                  "v10.0",
                  0.36
               ],
               [ 
                  "v9.1",
                  0.54
               ],
               [ 
                  "v9.0",
                  0.13
               ],
               [ 
                  "v5.1",
                  0.2
               ]
            ]
         },
         { 
            "name":"Maharashtra",
            "id":"Maharashtra",
            "data":[ 
               [ 
                  "v16",
                  2.6
               ],
               [ 
                  "v15",
                  0.92
               ],
               [ 
                  "v14",
                  0.4
               ],
               [ 
                  "v13",
                  0.1
               ]
            ]
         },
         { 
            "name":"Bihar",
            "id":"Bihar",
            "data":[ 
               [ 
                  "v50.0",
                  0.96
               ],
               [ 
                  "v49.0",
                  0.82
               ],
               [ 
                  "v12.1",
                  0.14
               ]
            ]
         }
   ])
 });

/* GET users listing. */
router.get('/literacyWomen', function(req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', *);
    res.json([ 
   { 
      "name":"Browsers",
      "colorByPoint":true,
      "data":[ 
         { 
            "name":"Jammu & Kashmir",
            "y":58.01,
            "drilldown":"Jammu & Kashmir"
         },
         { 
            "name":"Uttar Pradesh",
            "y":59.26,
            "drilldown":"Uttar Pradesh"
         },
         { 
            "name":"Kerala",
            "y":91.98,
            "drilldown":"Kerala"
         },
         { 
            "name":"Delhi",
            "y":80.93,
            "drilldown":"Delhi"
         },
         { 
            "name":"Maharashtra",
            "y":75.48,
            "drilldown":"Maharashtra"
         },
         { 
            "name":"Bihar",
            "y":53.33,
            "drilldown":"Bihar"
         }
      ]
   }
])
});

/* GET users listing. */
router.get('/literacyWomen2', function(req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', *);
    res.json( [
      {
        "name": "Jammu & Kashmir",
        "id": "Jammu & Kashmir",
        "data": [
          [
            "KUPWARA",
              54
          ],
          [
            "BARAMULA",
            55.01
          ],
          [
            "SRINAGAR",
            63.47
          ],
          [
            "BADGAM",
            46.6
          ],
          [
            "PULWAMA",
           53.81
          ],
          [
            "ANANTNAG",
            54.13
          ],
          [
            "LEH (LADAKH)",
            79.39
          ],
          [
            "KARGIL",
            75.73
          ],
          [
            "DODA",
            65.6
          ],
          [
            "UDHAMPUR",
            65.93
          ],
          [
            "PUNCH",
            62.04
          ],
          [
            "RAJAURI",
            65.38
          ],
          [
            "JAMMU",
            78.77
          ],
          [
            "KATHUA",
            72.4
          ],
          [
            "SHOPIAN",
            61.86
          ],
          [
            "BANDIPORA",
            66.41
          ],
          [
            "KISHTWAR",
            59.75
          ],
          [
            "RAMBAN",
            65.97
          ],
          [
            "GANDERBAL",
            63.74
          ],
          [
            "RAMBAN",
            67.58
          ]
        ]
      },
      {
        "name": "Uttar Pradesh",
        "id": "Uttar Pradesh",
        "data": [
          [
            "SAHARANPUR",
            69.77
          ],
          [
            "MUZAFFARNAGAR",
            67.116
          ],
          [
            "BIJNOR",
            71.7
          ],
          [
            "MORADABAD",
            55.83
          ],
          [
            "RAMPUR",
            59.1
          ],
          [
            "JYOTIBA PHULE NAGAR",
            69.53
          ],
          [
            "MEERUT",
            76.91
          ],
          [
            "BAGHPAT",
            80.17
          ],
          [
            "GHAZIABAD",
            85.16
          ],
          [
            "GAUTAM BUDDHA NAGAR",
            68.23
          ],
          [
            "BULANDSHAHR",
            78.52
          ],
          [
            "ALIGARH",
            75.24
          ],
          [
            "HATHRAS",
            80.83
          ],
          [
            "MATHURA",
            78.39
          ],
          [
            "AGRA",
            69.32
          ],
          [
            "FIROZABAD",
            77.08
          ],
          [
            "ETAH",
            78.21
          ],
          [
            "MAINPURI",
            80.93
          ],
          [
            "BUDAUN",
            58.39
          ],
          [
            "BAREILLY",
            79.47
          ],
          [
            "PILIBHIT",
            68.46
          ],
          [
            "SHAHJAHANPUR",
            65.09
          ],
          [
            "KHERI",
            68.58
          ],
          [
            "SITAPUR",
            69.61
          ],
          [
            "HARDOI",
            69.2
          ],
          [
            "UNNAO",
            70.06
          ],
          [
            "LUCKNOW",	
            79.27
          ],
          [
            "RAE BARELI",
            70.39
          ],
          [
            "FARRUKHABAD",
            75.34
          ],
          [
            "KANNAUJ",
            78.36
          ],
          [
            "ETAWAH",
            83.64
          ]
        ]
      },
      {
        "name": "Kerala",
        "id": "Kerala",
        "data": [
          [
            "v11.0",
            6.2
          ],
          [
            "v10.0",
            0.29
          ],
          [
            "v9.0",
            0.27
          ],
          [
            "v8.0",
            0.47
          ]
        ]
      },
      {
        "name": "Delhi",
        "id": "Delhi",
        "data": [
          [
            "v11.0",
            3.39
          ],
          [
            "v10.1",
            0.96
          ],
          [
            "v10.0",
            0.36
          ],
          [
            "v9.1",
            0.54
          ],
          [
            "v9.0",
            0.13
          ],
          [
            "v5.1",
            0.2
          ]
        ]
      },
      {
        "name": "Maharashtra",
        "id": "Maharashtra",
        "data": [
          [
            "v16",
            2.6
          ],
          [
            "v15",
            0.92
          ],
          [
            "v14",
            0.4
          ],
          [
            "v13",
            0.1
          ]
        ]
      },
      {
        "name": "Bihar",
        "id": "Bihar",
        "data": [
          [
            "v50.0",
            0.96
          ],
          [
            "v49.0",
            0.82
          ],
          [
            "v12.1",
            0.14
          ]
        ]
      }
    ]
)
});

module.exports = router;
