import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [20, "First name cannot exceed 20 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [20, "Last name cannot exceed 20 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Enter a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
