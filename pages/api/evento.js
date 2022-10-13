import Evento from "../../models/Eventos";
import Cors from "cors";
import connectDB from "../../utils/connectDB";

connectDB();

// Initializing the cors middleware
const cors = Cors({
	methods: ["GET", "PUT", "HEAD"]
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

		case "PUT":
			handlePutRequest(req, res);
			break;

		default:
			res
				.status(404)
				.send("El método utilizado no funcionó. Intente nuevamente.");
	}
};

const handleGetRequest = async (req, res) => {
	runMiddleware(req, res, cors);

	try {
		const { id } = req.query;

		const evento = await Evento.findOne({ _id: id });

		res.status(200).send(evento);
	} catch (error) {
		console.log(error);
		res.status("Hubo un error, intenta nuevamente.");
	}
};

const handlePutRequest = async (req, res) => {
	runMiddleware(req, res, cors);

	try {
		const { registroId, eventoId } = req.body;

		const evento = await Evento.findOne({ _id: eventoId });

		const registrados = evento.registrados.filter((registro) => {
			return registro._id != registroId;
		});

		await Evento.findOneAndUpdate({ _id: eventoId }, { $set: { registrados } });
	} catch (error) {
		console.error(error);
	}
};
