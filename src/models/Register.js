// import mongoose
import mongoose from "mongoose";

// Define Schema
const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
    enum: ["UI/UX course", "Graphic Design course"],
  },
});

// Export model (avoid model overwrite issue)
export default mongoose.models.Register ||
  mongoose.model("Register", RegisterSchema);
