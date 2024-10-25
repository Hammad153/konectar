const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Database Connection
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "waitlist",
  password: "Konectar1",
  port: 5432,
});

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Error connecting to database", err);
  } else {
    console.log("Database connected successfully!");
  }
});

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//get home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});

// post a new post
app.post("/waitlist", async (req, res) => {
  const {
    fullName,
    farmName,
    farmLocation,
    email,
    phone,
    farmSize,
    produceTypes,
    supplyFrequency,
    distributionChannels,
    additionalOfferings,
    mainChallenges,
    receiveUpdates,
  } = req.body;

  const produceTypesArray = Array.isArray(produceTypes)
    ? produceTypes
    : [produceTypes];
  const distributionChannelsArray = Array.isArray(distributionChannels)
    ? distributionChannels
    : [distributionChannels];

  try {
    const query =
      "INSERT INTO waitlist (fullName, farmName, farmLocation, email, phone, farmSize, produceTypes, supplyFrequency, distributionChannels, additionalOfferings, mainChallenges, receiveUpdates) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
    await pool.query(query, [
      fullName,
      farmName,
      farmLocation,
      email,
      phone,
      farmSize,
      produceTypesArray,
      supplyFrequency,
      distributionChannelsArray,
      additionalOfferings,
      mainChallenges,
      receiveUpdates,
    ]);
    console.log("Waitlist data saved!");
    res.sendFile(__dirname + "/Views/waitlist-success.html");
  } catch (err) {
    console.error("Error saving waitlist data:", err);
    res.status(500).send("Error saving data");
  }
});

//get the home page
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Views/contact.html");
});

//post a contact page
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const query =
      "INSERT INTO contact_form (name, email, message) VALUES ($1, $2, $3)";
    await pool.query(query, [name, email, message]);
    console.log("Contact form data saved!");
    res.sendFile(__dirname + "/Views/contact-success.html");
  } catch (err) {
    console.error("Error saving contact form data:", err);
    res.status(500).send("Error saving data");
  }
});

app.get("/api/waitlist", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM waitlist");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to fecth data" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contact");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to fecth data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
