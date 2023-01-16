import  express  from "express";

const app = express();
const port = 9000;

app.use('/',(req,res) => {
  res.json({
    name: 'Dinislam',
    add: 'Ashulia Dhaka'
  })
})

app.listen(port,() => {
  console.log(`Server start on ${port}`)
})