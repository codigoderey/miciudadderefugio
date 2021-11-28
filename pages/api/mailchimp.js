import client from "@mailchimp/mailchimp_marketing"

client.setConfig({
  apiKey: process.env.MAILCHIMP,
  server: "us1"
})

export default (req, res) => {

  const run = async () => {

    const { nombre, correo } = req.body

    try {

      await client.lists.addListMember("6a47c1d423", {
        email_address: correo,
        // status: "pending",
        // status: "transactional",
        status: "subscribed",
        merge_fields: { NOMBRE: nombre }
      })
      res.status(200).send("Añadido correctamente.")

    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }

  }

  run()

}