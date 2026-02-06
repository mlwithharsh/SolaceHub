require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./db");
const sessionRoutes = require("./routes/sessions");
const advisorRoutes = require("./routes/advisors");
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
// Security headers
app.use(helmet());

// Rate limit (anti-spam / brute force)
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: "Too many requests, try again later"
}));

app.use(cors({
    origin: [
        "http://localhost:5173", // dev
        "https://your-vercel-domain.vercel.app" // production later
    ]
}));
app.use(express.json());

app.post("/api/admin/login", (req, res) => {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "2h" });
        return res.json({ success: true, token });
    }

    res.status(401).json({ error: "Invalid credentials" });
});

app.use("/api/sessions", sessionRoutes);
app.use("/api/advisors", advisorRoutes);

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.get("/test-db", async (req, res) => {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    res.json(rows);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running → http://localhost:${PORT}`);
});
