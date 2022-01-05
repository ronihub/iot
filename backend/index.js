const express = require("express");
const app = express();
const pool = require("./database");
const port = 3001;
var cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/value", async (req, res) => {
  const { pm2_5, pm10, aqi, place } = req.body;
  const date = new Date();
  try {
    const result = await pool.query(
      `INSERT INTO results(aqi, pm2_5, pm10, place, created_at) 
        VALUES($1, $2, $3, $4, $5) 
        returning id`,
      [aqi, pm2_5, pm10, place, date]
    );
    res.status(201).json({
      status: "success",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/latest", async (req, res) => {
  console.log(req.body);
  const { pm2_5, pm10, aqi } = req.body.values;
  const { place } = req.body;
  const date = new Date();
  try {
    const result = await pool.query(
      `INSERT INTO latest_activities(aqi, pm2_5, pm10, place, created_at) 
        VALUES($1, $2, $3, $4, $5) 
        returning id`,
      [aqi, pm2_5, pm10, place, date]
    );

    await pool.query(
      `INSERT INTO my_history(aqi, pm2_5, pm10, place, created_at) 
        VALUES($1, $2, $3, $4, $5) 
        returning id`,
      [aqi, pm2_5, pm10, place, date]
    );

    res.status(201).json({
      status: "success",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/values", async (req, res) => {
  const { limit } = req.query;
  try {
    const result = await pool.query(`SELECT * FROM RESULTS LIMIT $1`, [limit]);
    res.status(201).json({
      status: "success",
      result: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
app.get("/values/:place", async (req, res) => {
  const { place } = req.params;
  console.log(place);
  try {
    const result = await pool.query(`SELECT * FROM RESULTS`);
    res.status(201).json({
      status: "success",
      result: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/latest", async (req, res) => {
  const { limit } = req.query;
  console.log(limit);
  try {
    const result = await pool.query(
      `SELECT * FROM LATEST_ACTIVITIES ORDER BY created_at DESC LIMIT $1`,
      [limit]
    );
    res.status(201).json({
      status: "success",
      result: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/my-history", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM my_history ORDER BY created_at DESC`
    );
    res.status(201).json({
      status: "success",
      result: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
