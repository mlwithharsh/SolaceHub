const express = require("express");
const db = require("../db");
const authMiddleware = require("../authMiddleware");

const router = express.Router();
console.log("🔥Counsellor route file LOADED");

router.post("/", async (req, res) => {
    try {
        const { fullName, age, linkedin, email,gender , phone } = req.body;

        await db.query(
            `INSERT INTO counsellors(full_name, age, linkedin_url, email,gender, contact_number)
             VALUES ($1, $2, $3, $4, $5 ,$6)`,
            [fullName, age, linkedin, email, gender,phone]
        );

        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DB insert failed" });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM advisors ORDER BY created_at DESC");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch advisors" });
    }
});


module.exports = router;
