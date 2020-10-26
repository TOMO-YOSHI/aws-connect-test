let express = require('express');
let app = express();
let path = require('path');
const connectionPool = require('./connection.js');
// const mysql = require('mysql');
// const cors = require("cors");

// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.static('react-project/build'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
})

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, () => {
    console.log('Server ready on', app.settings.port);
});


// GET LIST API ************************************************

app.get('/api/pets', (req, res) => {

    connectionPool.then(pool => {
        pool.query(`
                    SELECT pets.name AS pet_name, owners.name AS owner_name 
                    FROM pets LEFT JOIN owners 
                    ON pets.owner_id = owners.id;
                `).then((result) => {
        console.log(result);
        res.send(result);
        });
    })
    .catch(error => {
        console.log(error);
    })


});
