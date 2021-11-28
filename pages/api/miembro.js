import Miembro from "../../models/Miembro"
import Cors from "cors"
import connectDB from "../../utils/connectDB"

connectDB()

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// switch functions method conditionals
export default (req, res) => {
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res)
      break;

    case "POST":
      handlePostRequest(req, res)
      break;

    case "PUT":
      handlePutRequest(req, res)
      break;

    case "DELETE":
      handleDeleteRequest(req, res)
      break;
  }
}

const handlePostRequest = async (req, res) => {

  runMiddleware(req, res, cors)

  try {
    const { ministry, name, age, email, phone, dob } = req.body

    const member = await Miembro.findOne({ email })

    if (member) {
      return res.status(500).send("El correo del miembro que quiere registrar ya está en uso, por favor utilice otro o verifique que ya esté registrado.")
    } else {
      const newMember = await new Miembro({
        ministry,
        name,
        age,
        email,
        phone,
        dob
      })
      await newMember.save()
      res.status(200).send(newMember)
    }

  } catch (error) {
    console.error(error)
    res.status(500).send("Lo sentimos, hubo un error, intente nuevamente")
  }
}

const handleGetRequest = async (req, res) => {
  const { id, action } = req.query
  try {
    if (action === "editar") {
      const miembroParaEditar = await Miembro.findOne({ _id: id })
      return res.status(200).json(miembroParaEditar)
    }
    const miembros = await Miembro.find()
    res.status(200).json(miembros)
  } catch (error) {
    console.error(error)
    res.status(500).send("Hubo un error, intente nuevamente.")
  }
}

const handlePutRequest = async (req, res) => {
  try {
    const { id, name, email, phone, age } = req.body
    const miembroEditar = await Miembro.findOneAndUpdate({ _id: id }, {
      id,
      name,
      phone,
      email
    })
    await miembroEditar.save()
    res.status(200).send("El miembro ha sido actualizado.")

  } catch (error) {
    console.error(error)
    res.status(500).send("Hubo un error, intente nuevamente.")
  }
}

const handleDeleteRequest = async (req, res) => {
  const { id } = req.query

  await Miembro.findOneAndDelete({ _id: id })
  res.status(200).send("El miembro ha sido eliminado exitosamente")
}

export const config = {
  api: {
    externalResolver: true,
  },
};