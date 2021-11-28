import Cors from "cors"
import nodemailer from "nodemailer"
import connectDB from "../../utils/connectDB"
import Registrados from "../../models/Registrados"
import Eventos from "../../models/Eventos"

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

const handlePutRequest = async (req, res) => {

  runMiddleware(req, res, cors)

  const { eventoId, registrante } = req.body

  try {

    let evento = await Eventos.findOne({ _id: eventoId })

    const newData = evento.registrados.concat(registrante)

    evento.registrados = newData

    await evento.save()

    const output = `
    <p>Te has registrado existosamente para el evento ${evento.nombreDelEvento}. Por favor visita <a href="https://miciudadderefugio.com/eventos">nuestra lista de eventos para mas información.</a> Por favor presenta este correo electrónico en la entrada.
    </p>
  `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const emailList = registrante.map((e) => { return e.correo })
    console.log(emailList)

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Mi Ciudad de Refugio" <informacion@miciudadderefugio.com>', // sender address
      to: `${emailList}`, // list of receivers
      subject: "Las Mardoqueo 2021", // Subject line
      text: "Registro exitoso para el evento", // plain text body
      html: `${output}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.status(200).send("El nuevo evento ha sido añadido.")
  } catch (error) {
    console.error(error)
    res.status(403).send("Hubo un error al crear el evento, verifica que todos los blancos estén completados.")
  }
}

const handleGetRequest = async (req, res) => {
  try {
    const registrados = await Registrados.find()
    res.status(200).send(registrados)
  } catch (error) {
    console.log(error)
    res.status("Hubo un error, intenta nuevamente.")
  }
}