const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/userRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://arianvsh:9248@cluster0.qpx7gd9.mongodb.net/users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(err)
});

app.use(UserRoutes);

app.listen(3000, () => { console.log('Server is running...') });