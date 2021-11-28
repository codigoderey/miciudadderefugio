import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const PruebaSchema = new mongoose.Schema(

  {
    creadaPor: {
      type: ObjectId,
      ref: "user",
      required: true
    },

    topic: {
      type: String,
      required: true,
      unique: true
    },

    questions: [
      {
        question: {
          type: String,
          required: true
        },

        rightAnswer: {
          type: String,
          required: true,
        },
        wrongAnswer1: {
          type: String,
          required: true,
        },
        wrongAnswer2: {
          type: String,
          required: true,
        },
        wrongAnswer3: {
          type: String,
          required: true,
        }

      }
    ]
  },
  { timestamps: true }
);

export default mongoose.models.prueba || mongoose.model('prueba', PruebaSchema);
