import mongoose from 'mongoose';

const { String, Date } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    token: String,
    expira: Date,
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      required: true,
      default: 'regular',
      enum: ['regular', 'admin', 'lider', 'estudiante'],
    },

    ministry: {
      type: String,
      required: true,
      default: "ninguno",
      enum: ['ninguno', 'ninos', 'juveniles', 'jovenes',],
    }
  },
  { timestamps: true }
);

export default mongoose.models.user || mongoose.model('user', UserSchema);
