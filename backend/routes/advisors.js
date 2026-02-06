const express = require("express");
const db = require("../db");
const authMiddleware = require("../authMiddleware");

const router = express.Router();
console.log("🔥 advisors route file LOADED");

router.post("/", async (req, res) => {
    try {
        const { fullName, age, linkedin, email, contact } = req.body;

        await db.query(
            `INSERT INTO advisors (full_name, age, linkedin_url, email, contact_number)
             VALUES ($1, $2, $3, $4, $5)`,
            [fullName, age, linkedin, email, contact]
        );

        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DB insert failed" });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM advisors ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch advisors" });
    }
});


module.exports = router;
