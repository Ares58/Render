require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// CORS ayarları - production ve development için
const corsOptions = {
  origin: [
    "http://localhost:5173", // Development
    "https://savtek.onrender.com", // Production (bunu kendi Render URL'inizle değiştirin)
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Health check endpoint ekleyin
app.get("/", (req, res) => {
  res.json({ message: "Blog Backend API is running!" });
});

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
