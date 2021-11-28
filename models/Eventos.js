import mongoose from 'mongoose';

const { String, Number, Date } = mongoose.Schema.Types;

const EventoSchema = new mongoose.Schema(
  {
    nombreDelEvento: {
      type: String,
      required: true
    },

    organizadoPor: {
      type: String,
      require: true,
    },

    lugar: {
      type: String,
      required: true,
      default: "Iglesia Ciudad de Refugio"
    },

    descripcionDelEvento: {
      type: String,
      required: true,
    },

    direccionCalle: {
      type: String,
      required: true,
      default: "649 Old Mill Rd"
    },

    direccionCiudad: {
      type: String,
      required: true,
      default: "Millersville"
    },

    direccionEstado: {
      type: String,
      required: true,
      default: "MD"
    },

    direccionZipCode: {
      type: String,
      required: true,
      default: "21108"
    },

    fechasYHorasDelEvento: [{
      fecha: {
        type: Date,
        required: true,
      },
      hora: {
        type: String,
        required: true
      }
    }],

    cantidadDisponible: {
      type: Number,
      required: true
    },

    imageUrl: {
      type: String,
      required: true
    },

    costoDelEvento: {
      type: String,
      required: true,
      default: "Gratis"
    },

    registrados: [
      {
        nombre: {
          type: String,
          required: true
        },

        telefono: {
          type: String,
          required: true,
        },

        correo: {
          type: String,
          required: true
        },

        direccionCalle: {
          type: String,
          required: true,
          default: "649 Old Mill Rd"
        },

        direccionCiudad: {
          type: String,
          required: true,
          default: "Millersville"
        },

        direccionEstado: {
          type: String,
          required: true,
          default: "MD"
        },

        direccionZipCode: {
          type: String,
          required: true,
          default: "21108"
        },
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.models.evento || mongoose.model('evento', EventoSchema);
