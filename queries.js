var options = {};
var pgp = require('pg-promise')(options);
// var process.env.DATABASE_URL = 'postgres://plzqpnntbrelog:eb0b29419fe5a8a2515464a914ef1a856db0fde657291147a60473925b1ef8b2@ec2-107-22-236-252.compute-1.amazonaws.com:5432/ddme08r6htmcqs';
var db = pgp(process.env.DATABASE_URL + '?ssl=true');

function getAllEntries(req, res, next) {
  db.any('SELECT * FROM entries')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getEntry(req, res, next) {
  var entryId = parseInt(req.params.id);
  db.one('SELECT * FROM entries WHERE id = $1', entryId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllEntries: getAllEntries,
  getEntry: getEntry
};
