import express from 'express';
import fs from 'fs';
import path from 'path';


const app = express();
const PORT = 4000;

app.use(express.json())

app.get('/',(req,res)=>{
res.status(200).send( `hi all`)
})


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});



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