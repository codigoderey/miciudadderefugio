const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://miciudadderefugio.com"
    : "http://localhost:3000"

export default baseURL