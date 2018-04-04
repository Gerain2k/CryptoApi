let express = require('express');
let path = require('path');
let app = express();

let indexRoutes = require('./routes/index');

const port = process.env.PORT || '3000';
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
app.use('/', indexRoutes);

app.listen(port, (err) => {
  if(err){
    console.log(err);
  }
  console.log('Server is running on port: ',port);
});