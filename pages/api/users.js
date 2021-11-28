import User from "../../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Cors from "cors"
import nodemailer from "nodemailer"
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

    default:
      res.status(404).send("El método utilizado no funcionó. Intente nuevamente.")
  }
}

const handleGetRequest = async (req, res, cors) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).send("Hubo un error al solicitar los usuarios.")
  }
}