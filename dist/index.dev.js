"use strict";

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _dateFns = require("date-fns");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 4000;
app.use(_express["default"].json()); // const timestampDir = path.join(__dirname, 'Timestamp');

app.get('/', function (req, res) {
  res.status(200).send("welcome to nodjs app ");
});
app.get('/data', function (req, res) {
  res.status(200).send("welcome to my first endponit ");
});
app.get('/create-read', function (req, res) {
  var today = (0, _dateFns.format)(new Date(), 'dd-mm-yyyy-HH-mm-ss');
  console.log(today);
  var filepath = "Timestamp/".concat(today, ".txt");

  _fs["default"].writeFileSync(filepath, "".concat(today), 'utf8');

  var data = _fs["default"].readFileSync(filepath, 'utf8');

  res.status(200).send(data);
});
app.get('/read', function (req, res) {
  var filePath = "Timestamp";

  _fs["default"].readdir(filePath, function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('some error');
    } else {
      var textfile = files.filter(function (file) {
        return _path["default"].extname(file) === '.txt';
      });
      res.status(200).json(textfile);
    }
  });
});
app.listen(PORT, function () {
  console.log("App is listening on port ".concat(PORT));
}); // const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// Ensure the 'data' directory exists
// const dataDir = path.join(__dirname, 'data');
// if (!fs.existsSync(dataDir)) {
//   fs.mkdirSync(dataDir);
// }
// app.get('/create-file', (req, res) => {
//   const now = new Date();
//   const timestamp = now.toISOString();
//   const fileName = `${now.toISOString().replace(/[:.]/g, '-')}.txt`;
//   const filePath = path.join(dataDir, fileName);
//   fs.writeFile(filePath, timestamp, (err) => {
//     if (err) {
//       return res.status(500).send('Error writing file');
//     }
//     res.status(200).send(`File created: ${fileName}`);
//   });
// });