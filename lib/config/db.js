import mongoose from "mongoose";

export const ConnectDB = async () => {
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(
    uri
  );
};
