import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI!)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('You can start the server now');
    });
};
