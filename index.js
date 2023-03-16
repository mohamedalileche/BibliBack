const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json())
mongoose.set('strictQuery', true);




mongoose.connect('mongodb+srv://mohamedalilechefabrikademy:azerty@clusterfbrk.tykmlyj.mongodb.net/?retryWrites=true&w=majority')
.then(() => { console.log('Connecté à MongoDB') })
  .then(() => { app.listen(6000); console.log('Connecté Avec succes') })
    .catch(err => console.log(err))

app.use('/Client',require('./Routes/Clients'));