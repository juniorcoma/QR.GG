import mongoose from 'mongoose';

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error connecting to MongoDB', err.message);
    } else {
      console.error(err);
    }
  }
}

export default connectToMongoDB;
