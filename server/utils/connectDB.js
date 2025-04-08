import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://Ujjwal:Ujjwal%401401@cluster0.qd9mstc.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0");


    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
