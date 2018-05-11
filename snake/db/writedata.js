/* eslint-disable no-undef, no-unused-vars,
import/no-extraneous-dependencies, consistent-return */ // --> OFF
const sqlite3 = require('sqlite3').verbose();

let db;
/**
 * Initialises the database connection and creates the table
 * if it doesn't already exist.
 */
function init() {
  db = new sqlite3.Database('scores.db', (err) => {
    if (err) {
      return err.message;
    }
  });
  db.run('CREATE TABLE if not exists scores(score integer)');
}
/**
 * Inserts the given number into the sql database.
 * @param {*} number 
 */
function insert(number) {
  init();
  return new Promise(((resolve, reject) => {
    db.run('INSERT INTO scores(score) VALUES(?)', [number], (err) => {
      if (err) {
        return err.message;
      }
      resolve(true);
    });
  }));
}

module.exports = {
  insert,
};
