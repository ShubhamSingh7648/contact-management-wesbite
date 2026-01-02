const express = require("express");
const cors = require("cors");
const { PORT } = require("./configs/server.config.js");
const connectDB = require("./configs/db-config.js");
const contactRoutes = require("./routes/contact.routes.js");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",          // local dev
      "https://contact-management-wesbite-6za816o71.vercel.app/" // Vercel frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api/contacts", contactRoutes);  // /api/contacts/

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
    connectDB();
});