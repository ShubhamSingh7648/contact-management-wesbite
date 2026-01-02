const express = require("express");
const cors = require("cors");
const { PORT } = require("./configs/server.config.js");
const connectDB = require("./configs/db-config.js");
const contactRoutes = require("./routes/contact.routes.js");

const app = express();

app.use(
  cors({
    origin: function(origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:4173",
        "https://contact-management-wesbite-6za816o71.vercel.app",
        /\.vercel\.app$/ 
      ];
      
      // Check if origin is allowed
      const isAllowed = allowedOrigins.some(allowed => {
        if (allowed instanceof RegExp) {
          return allowed.test(origin);
        }
        return allowed === origin;
      });
      
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());


app.get("/", (req, res) => {
  res.json({ 
    message: "Contact Management API is running",
    status: "healthy" 
  });
});

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
    connectDB();
});