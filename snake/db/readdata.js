const sqlite3 = require('sqlite3').verbose();

let db;

function init() {
    db = new sqlite3.Database('test.db', (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the test.db SQlite database.');
    });
    db.run('CREATE TABLE if not exists scorestest(score integer)');
}

function getMax() {
    init();
    //const x;
    let sql = `SELECT MAX(score) FROM scorestest`;
    let x;
    return new Promise(function(resolve, reject) {
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
            resolve(row['MAX(score)']);
            });
        });
    });
    // db.all(sql, [], (err, rows) => {
    //     if (err) {
    //         throw err;
    //     }
    //     rows.forEach((row) => {
    //     resolve(row);
    //     });
    // });
    // function callback(row) {
    //     console.log('Getting highest score..')
    //     //console.log(row['MAX(score)']);
    //     console.log(row);
    //     x = row;
    // }
    // return x;
};

function getAll() {
    init();
    let sql = `SELECT * FROM scorestest ORDER BY score`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        callback(row);
        });
    });
    
    function callback(row) {
        
        console.log(row.score);
    }
    
};



getMax();
getAll();


// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Closed the database connection.');
// });


module.exports = {
    getAll,
    getMax
}
