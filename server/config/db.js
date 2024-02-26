import mongoose from "mongoose";

const connectDb = async () => {
    try {
      mongoose.set('strictQuery', false);
      const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`[ MongoDB connected: ${conn.connection.host} ] `);
    } catch (err) {
        console.log(err);
    }
};

export default connectDb;
