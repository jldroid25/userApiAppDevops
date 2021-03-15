const express = require('express')
const app = express()
const port = 3000
// Building a User A.PI
app.get('/', (req, res) => {

  res.json([
      { 
      name:     'Jldroid25',
      email:    'jldroid25@hackermail.hack',
      position: 'Site Reliability Engineer'
     },
     { 
        name:     'MindHunter 3',
        email:    'Mhunter@devops.sre',
        position: 'Devops Engineer'
       },

       { 
        name:     'RubiconP',
        email:    'rubic@puttyfun.facks',
        position: 'Network Operation Center'
       },

       { 
        name:     'DevCoder',
        email:    'fbdevsupport@fb.com.uk',
        position: 'Developer Support Engineer'
       },

       { 
        name:     'NetFliXRE',
        email:    'XREcoder@netflix.io',
        position: 'NetFlixRE Support Engineer'
       }

    ])
    
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})