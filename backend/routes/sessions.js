const express = require("express");
const db = require("../db");
const authMiddleware = require("../authMiddleware");


const router = express.Router();

console.log("🔥 sessions route file LOADED");

router.post("/", async (req, res) => {
  try {
    console.log("POST BODY:", req.body);

    const { name, email, phone, age, gender, date, timeSlot } = req.body;

    const formattedDate = new Date(date).toISOString().split("T")[0];

    await db.query(
      `INSERT INTO sessions
       (name, email, phone, age_group,gender, session_date, time_slot)
       VALUES ($1, $2, $3, $4, $5, $6 , $7)`,
      [name, email, phone, age, gender, formattedDate, timeSlot]
    );

    console.log("✅ INSERT SUCCESS");


    res.json({ success: true });

  } catch (err) {
    console.error("SESSION INSERT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


router.get("/", authMiddleware, async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM sessions ORDER BY created_at DESC"
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

module.exports = router;
