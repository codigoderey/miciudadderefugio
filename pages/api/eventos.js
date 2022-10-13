import Evento from "../../models/Eventos";
import Cors from "cors";
import connectDB from "../../utils/connectDB";

connectDB();

// Initializing the cors middleware
const cors = Cors({
	methods: ["GET", "HEAD"]
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
			handleGetRequest(req, res);
			break;

		case "POST":
			handlePostRequest(req, res);
			break;

		case "PUT":
			handlePutRequest(req, res);
			break;

		case "DELETE":
			handleDeleteRequest(req, res);
			break;

		default:
			res
				.status(404)
				.send("El método utilizado no funcionó. Intente nuevamente.");
	}
};

const handlePostRequest = async (req, res) => {
	runMiddleware(req, res, cors);

	try {
		const {
			nombreDelEvento,
			organizadoPor,
			lugar,
			descripcionDelEvento,
			direccionCalle,
			direccionCiudad,
			direccionEstado,
			direccionZipCode,
			cantidadDisponible,
			imageUrl,
			fechasYHorasDelEvento
		} = req.body;

		const nuevoEvento = await new Evento({
			nombreDelEvento,
			organizadoPor,
			lugar,
			descripcionDelEvento,
			direccionCalle,
			direccionCiudad,
			direccionEstado,
			direccionZipCode,
			cantidadDisponible,
			imageUrl,
			fechasYHorasDelEvento
		});

		await nuevoEvento.save();
		res.status(200).send("El nuevo evento ha sido añadido.");
	} catch (error) {
		console.error(error);
		res
			.status(403)
			.send(
				"Hubo un error al crear el evento, verifica que todos los blancos estén completados."
			);
	}
};

const handleGetRequest = async (req, res) => {
	runMiddleware(req, res, cors);

	try {
		const eventos = await Evento.find();
		res.status(200).send(eventos);
	} catch (error) {
		console.log("Error: " + error.message);
		res.status("Hubo un error, intenta nuevamente.");
	}
};

const handleDeleteRequest = async (req, res) => {
	runMiddleware(req, res, cors);

	try {
		const { id } = req.query;

		await Evento.findOneAndDelete({ _id: id });

		res.send("El evento a sido eliminado exitosamente");
	} catch (error) {
		console.log("Error: " + error.message);
		res.status(500).send("Hubo un error, intente nuevamente.");
	}
};
