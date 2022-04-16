var express = require("express");
var pkg = require("pg");
var dotenv = require("dotenv");

dotenv.config();

const { Pool } = pkg;

//for some reason have to do this when local, then the connectionString for deployed
const pool = new Pool({
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const app = express();
app.use(express.json());

app.use(express.urlencoded());
app.use(express.static("public"));
app.use((req, res, next) => {
  next();
});

//routes
//read all
app.get("/property", (req, res) => {
  pool
    .query("SELECT * FROM property")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => res.send(500));
});

//read one
app.get("/property/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM property WHERE id = $1", [id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => res.sendStatus(500));
});

//create
app.post("/property", (req, res) => {
  const { name, address, coords } = req.body;
  const postQuery = `
      INSERT INTO property(name, address, coords) 
      VALUES ($1, $2, $3) RETURNING *;`;
  pool
    .query(postQuery, [name, address, coords])
    .then((result) => {
      res.send(`Success, ${name} added to the database`);
    })
    .catch((err) => res.sendStatus(500));
});

//update
app.patch("/property/:id", (req, res) => {
  const { id } = req.params;
  const { name, address, coords } = req.body;
  const patchQuery = `
    UPDATE property SET
    name = COALESCE($2, name),
    address = COALESCE($3, address),
    coords = COALESCE($4, coords)
  WHERE id = $1
  RETURNING *`;

  pool
    .query(patchQuery, [id, name, address, coords])
    .then((result) => {
      res.send(`${name} has been updated`);
    })
    .catch((err) => res.sendStatus(600));
});

//destroy
app.delete("/property/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM property WHERE id = $1", [id])
    .then((result) => {
      res.send(`Donut with id ${id} successfully deleted`);
    })
    .catch((err) => res.sendStatus(500));
});
//404 if not found

app.use((req, res, next) => {
  res.sendStatus(404);
});

//listen on port
app.listen(process.env.EXPRESS_PORT, () =>
  console.log(`Listening on port: ${process.env.EXPRESS_PORT}`)
);
