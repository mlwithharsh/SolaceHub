const express = require("express");
const db = require("../db");
const authMiddleware = require("../authMiddleware");

const router = express.Router();

console.log("🔥 sessions route file LOADED");

router.post("/", async (req, res) => {
  try {
    console.log("POST BODY:", req.body);

    const { name, email, age, date, timeSlot } = req.body;

    const formattedDate = new Date(date).toISOString().split("T")[0];

    await db.query(
      `INSERT INTO sessions
       (name, email, age_group, session_date, time_slot)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, age, formattedDate, timeSlot]
    );

    res.json({ success: true });

  } catch (err) {
    console.error("SESSION INSERT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


        console.log("✅ INSERT SUCCESS");

        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DB insert failed" });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM sessions ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch sessions" });
    }
});

module.exports = router;
