const mongoose = require('mongoose');
const User = require('../models/userModel');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://paopaojr:MTMyODktcGFvcGFv@paopaojr-8081.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;