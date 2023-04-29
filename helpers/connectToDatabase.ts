import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';

const uri = "mongodb+srv://shabeera:Shabeera@cluster0.bo2j2dk.mongodb.net/?retryWrites=true&w=majority"

async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    return await mongoose.connect(uri);
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw new Error('Failed to connect to the database');
  }
}

export { connectToDatabase };
