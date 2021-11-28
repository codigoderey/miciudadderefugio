import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const RegistroEventosSchema = new mongoose.Schema(
  [],
  { timestamps: true }
);

export default mongoose.models.registroeventos || mongoose.model('registroeventos', RegistroEventosSchema)
