
import mongoose from "mongoose";

export const Connection = async () => {
  const URL = `mongodb+srv://Sujeet280102:Sujeetgupta@ecotrack.xg011ns.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;