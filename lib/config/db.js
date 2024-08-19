import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://hemu:hemu2003@cluster0.vmjph.mongodb.net/blog_project"
  );
};
