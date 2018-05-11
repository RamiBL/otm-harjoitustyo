const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('test.db', (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Connected to the test.db SQlite database.');
// });

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

// function insert(number) {
//     init();
//     if(Number.isInteger(number)) {
//         db.run(`INSERT INTO scorestest(score) VALUES(?)`, [number], function(err) {
//             if (err) {
//               return console.log(err.message);
//             }
//             // get the last insert id
//             console.log(`A row has been inserted with rowid ${this.lastID}`);
//         });
//         console.log('Inserted');
//     }else {
//         console.log('Not an integer!');
//     }
// }
function insert(number) {
    init();
        return new Promise(function(resolve, reject) {
            db.run(`INSERT INTO scorestest(score) VALUES(?)`, [number], function(err) {
                if (err) {
                  return console.log(err.message);
                } 
                resolve(true);
            });
        })
        // db.run(`INSERT INTO scorestest(score) VALUES(?)`, [number], function(err) {
        //     if (err) {
        //       return console.log(err.message);
        //     }
        // });
};


//insert(15);


// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Closed the database connection.');
// });


module.exports = {
    insert
}