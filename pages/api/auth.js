import User from "../../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Cors from "cors"
import nodemailer from "nodemailer"
import connectDB from "../../utils/connectDB"
import crypto from "crypto"

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
      res.status(404).send("El método utilizado no funcionó. Intente nuevamente")
  }
}

const handleGetRequest = async (req, res) => {

  await runMiddleware(req, res, cors)

  const { token } = req.query

  if (token && !req.headers.authorization) {
    try {

      const user = await User.findOne({
        token,
        expira: {
          $gt: Date.now()
        }
      })

      if (user) {
        res.status(200).send(user)
      } else {
        res.status(404).send("El token ha expirado, por favor intente nuevamente.")
      }

    } catch (error) {
      console.log(error)
      res.status(404).send("Hubo un error, intente nuevamente.")
    }

  } else if (!('authorization' in req.headers)) {

    return res.status(401).send("Autorización inválida. Intente nuevamente o contacte al administrador.")

  } else if (req.headers.authorization && !token) {
    try {
      const { userId } = jwt.verify(req.headers.authorization, process.env.JWT)

      const user = await User.findOne({ _id: userId })

      if (user) {
        res.status(200).json(user)
      } else {
        return res.status(404).send("Usuario no encontrado")
      }
    } catch (error) {
      console.error(error)
      res.send(403).send("Token inválido")
    }
  }
}

const handlePostRequest = async (req, res) => {

  runMiddleware(req, res, cors)

  const { action, name, email, password } = req.body

  try {

    // login user functionality
    if (action === "ingresar") {

      // verify if user exists
      const user = await User.findOne({ email }).select("+password")

      // if does not exist, let user know
      if (!user) {
        return res
          .status(404)
          .send("Los credenciales son incorrectos, intenta nuevamente.")
      }

      // if user exist compare pass with stored pass
      const passwordVerification = await bcrypt.compare(password, user.password)

      // complete login if password match
      if (passwordVerification) {
        const token = jwt.sign({ userId: user._id },
          process.env.JWT, {
          expiresIn: "7d"
        })

        // token generado con fecha de expiracion
        const resetURL = `https://${req.headers.host}/admin/recupera-contrasena/`

        const output = `
        <p>${user.name}, has iniciado sesión exitosamente. Si no fuiste tu, por favor cambia tu contraseña.</p>

        <a href=${resetURL}>Cambia tu contraseña.</a>
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

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Mi Ciudad de Refugio" <informacion@miciudadderefugio.com>', // sender address
          to: `${email}`, // list of receivers
          subject: "Notificación de inicio de sesión ✔", // Subject line
          text: "Verifica que hayas sido tu", // plain text body
          html: `${output}`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return res
          .status(200)
          .json(token)
      } else {
        return res
          .status(404)
          .send("Los credenciales son incorrectos, intenta nuevamente.")
      }

    } else if (action === "registrar") {

      // verify if user exist
      const user = await User.findOne({ email })

      // if user exist let user know
      if (user) {
        return res
          .status(422)
          .send(`El usuario con el correo ${email} ya existe.`)
      }

      // hash the password
      const hash = await bcrypt.hash(password, 10)

      // declare new user
      const newUser = await new User({
        name,
        email,
        password: hash
      })

      // save user
      await newUser.save()

      // return a token for authentication
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT, {
        expiresIn: '7d',
      });


      const output = `
              <p>${newUser.name}, te has registrado exitosamente a <a href="https://miciudadderefugio.com">Mi Ciudad de Refugio</a>.</p>
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

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Mi Ciudad de Refugio" <informacion@miciudadderefugio.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Notificación de registro exitoso ✔", // Subject line
        text: "Bienvenido a la familia", // plain text body
        html: `${output}`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      return res
        .status(201)
        .json(token);

    } else if (action === "contrasena") {

      const { correo } = req.body;

      const user = await User.findOne({ email: correo });

      if (!user) {
        return res.status(404).send('Ese correo no está registrado. Puedes registrarte creando una cuenta. También puedes intentar con otro correo electrónico.');
      }

      const name = user.name;

      if (correo !== user.email) {
        return res.status(500).send('Ese correo no está registrado en tu cuenta.  Puedes crear una nueva.');
      }

      // el usuario existe, generar token
      user.token = crypto.randomBytes(20).toString('hex');
      user.expira = Date.now() + 3600000;

      const resetURL = `http://${req.headers.host}/admin/nueva-contrasena/${user.token}`;

      const output = `
      <p>${name}, has solicitado recuperar tu contraseña, por favor oprime el siguiente enlace para crear una nueva.</p>
      <a href=${resetURL}>Restablecer contrasena.</a>
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

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Mi Ciudad de Refugio" <informacion@miciudadderefugio.com>', // sender address
        to: `${correo}`, // list of receivers
        subject: "Recuperar contraseña ✔", // Subject line
        text: "Verifica que hayas sido tu", // plain text body
        html: `${output}`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      // Guardar el usuario
      await user.save();

      return res.status(200).end();
    } else {

      // return unknown server error if there is no action in the request body
      return res
        .status(500)
        .send("Error al ingresar usuario. Intenta nuevamente.")

    }
  } catch (error) {
    console.error(error)
    res.status(400).send("Error al ingresar usuario. Intenta nuevamente.")
  }
}

const handlePutRequest = async (req, res) => {

  runMiddleware(req, res, cors)

  const { action, contrasena, token } = req.body

  if (action === "actualizarcontrasena") {

    const passHash = await bcrypt.hash(contrasena, 10)

    const usuario = await User.findOne({
      token,
    })

    usuario.password = passHash

    await usuario.save()

    res.status(200).send("Contraseña actualizada.")
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};