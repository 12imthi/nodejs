import express from 'express';
import fs from 'fs';
import {format} from 'date-fns';
import path from 'path';



const app = express();
const PORT = 4000;

app.use(express.json())

// const timestampDir = path.join(__dirname, 'Timestamp');



app.get('/',(req,res)=>{
res.status(200).send( `welcome to nodjs app `)
})

app.get('/data',(req,res)=>{
res.status(200).send( `welcome to my first endponit `)
})

app.get('/create-read',(req,res)=> {

  let today = format(new Date(),'dd-mm-yyyy-HH-mm-ss');

  console.log(today);

  const filepath = `Timestamp/${today}.txt`;

  fs.writeFileSync(filepath,`${today}`,'utf8')

  let data = fs.readFileSync(filepath,'utf8')

  res.status(200).send(data)

})

app.get('/read',(req,res)=> {

  const filePath = "Timestamp";
  
  fs.readdir(filePath,(err,files)=>{
  
   if(err){
    console.log(err);
    res.status(500).send('some error')
   }
   else{
    const textfile = files.filter((file) => path.extname(file)=== '.txt');
  
    res.status(200).json(textfile)
   }
  })
  
  })



app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});



// const __filename = fileURLToPath(import.meta.url);
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