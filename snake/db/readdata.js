/* eslint-disable no-undef, no-unused-vars,
import/no-extraneous-dependencies, consistent-return, no-use-before-define */ // --> OFF

const sqlite3 = require('sqlite3').verbose();

let db;

/**
 * Initialises the database connection and creates
 * a table if one does not already exist.
 */
function init() {
  db = new sqlite3.Database('test.db', (err) => {
    if (err) {
      return err.message;
    }
  });
  db.run('CREATE TABLE if not exists scorestest(score integer)');
}

/**
 * Returns the highest value from the database,
 * which corresponds to the highscore.
 */
function getMax() {
  init();
  const sql = 'SELECT MAX(score) FROM scorestest';
  return new Promise(((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        resolve(row['MAX(score)']);
      });
    });
  }));
}

/**
 * Fills the table in scores.html with all of 
 * the scores in the database
 */
function myCreateFunction() {
  init();
  const sql = 'SELECT * FROM scorestest ORDER BY score';
  const table = document.getElementById('scoretable');
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      callback(row);
    });
  });
  function callback(something) {
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = 'Score: ';
    cell2.innerHTML = something.score;
  }
}


module.exports = {
  //getAll,
  getMax,
};
