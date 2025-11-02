// import mongoose
import mongoose from "mongoose";

// Define Schema
const EnquirySchema = new mongoose.Schema({
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
  reason: {
    type: String,
    required: true,
  },
});

// Export model (avoid model overwrite issue)
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);
