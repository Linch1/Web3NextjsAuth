import mongoose from 'mongoose';

const connectDB = async ()=> {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return;
  }
  // Use new db connection
  await mongoose.connect("mongodb://localhost:27017/workly", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
};

export default connectDB;
