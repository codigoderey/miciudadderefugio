import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const MiembroSchema = new mongoose.Schema(
  {
    ministry: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true
    },

    dob: {
      type: String,
      required: true
    },

    email: {
      type: String,
      unique: true,
    },

    phone: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.miembro || mongoose.model('miembro', MiembroSchema);
