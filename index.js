// index.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const UserRouter = require("./routes/userRoute");
const BriefRouter = require("./routes/BriefRoute");
const ContactRouter = require("./routes/ContactRoute");
const PaymentRouter = require("./routes/PaymentRoute");
const connectDB = require("./config/db");
const userMiddleware = require("./middleware/userMiddleware");

// Load env variables
dotenv.config();


// Initialize app
const app = express();
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());         // Enable CORS
app.use(morgan("dev"));  // Logger

app.use("/api/users", UserRouter);
app.use('/user/verify', userMiddleware);
app.use("/api/process", BriefRouter);
app.use("/api/contactus", ContactRouter);
app.use("/api/payment", PaymentRouter);



// Root route
app.get("/", async (req, res) => {
  res.send("API is running...");
});

// Connect to database
connectDB();

// Start server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, async () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });
