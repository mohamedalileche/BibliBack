const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../Models/Client');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { Nom, Prénom, age, adress, email, Number_phone, Role, password } = req.body;
    
    
    // Check if user exists
    const ClientExist = await Client.findOne({ email });
    if (ClientExist) {
      return res.status(400).json({ message: 'Utilisateur existe déjà' });
    }

    // Hash the password

console.log(req.body)
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = new Client({ Nom, Prénom, age, adress, email, Number_phone, Role, password });


    await client.save();

    // Generate JWT token
    const token = jwt.sign({ clientId: client._id }, process.env.JWT_SECRET , {expiresIn: "1h"});

    res.status(201).json({ message: 'Utilisateur enregisté avec succès', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const existingclient = await Client.findOne({ email });
      if (!existingclient) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, existingclient.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ clientId: existingclient._id }, process.env.JWT_SECRET, {expiresIn: "1h"});
  
      res.json({ message: 'connecté avec succès', token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;