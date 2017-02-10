var options = {};
var pgp = require('pg-promise')(options);
var db = pgp('postgres://localhost:5432/diary');

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
