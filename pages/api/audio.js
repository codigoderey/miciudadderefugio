import data from "../../components/Database/audio.json"

export default async (req, res) => {
  const { id } = req.query
  const audio = data.filter(f => f.id == id)
  res.send(audio)
}