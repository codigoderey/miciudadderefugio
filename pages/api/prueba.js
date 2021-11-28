import Pruebas from "../../models/Pruebas"
import User from "../../models/User"
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
    // check if action is to publish a new test
    const { creadaPor, topic, questions } = req.body
    const nuevaPrueba = await new Pruebas({
      creadaPor, topic, questions
    })
    await nuevaPrueba.save()

    // check if action is to add new questions to a current test
    // create a push function to add the test
    res.status(200).send("Question saved")
  } catch (error) {
    console.error(error)
    res.status(500).send("Lo sentimos, hubo un error, intente nuevamente")
  }
}

const handleGetRequest = async (req, res) => {
  console.log(req)
  try {
    const pruebas = await Pruebas.find().populate("creadaPor")
    res.status(200).json(pruebas)
  } catch (error) {
    console.error(error)
    res.status(500).send("Hubo un error, intente nuevamente")
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};