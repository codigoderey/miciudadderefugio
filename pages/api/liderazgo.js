import data from "../../components/Database/liderazgo.json"

export default async (req, res) => {
  const { id } = req.query
  const clase = data.filter(f => f.id == id)
  res.send(clase)
}