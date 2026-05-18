import pg from "pg"
import env from "dotenv"

env.config();

console.log("=== DEBUG ENVIRONMENT ===");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("PG_HOST:", process.env.PG_HOST);

const connectionOptions = process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT,
        ssl: { rejectUnauthorized: false }
      };

console.log("connectionOptions:", JSON.stringify(connectionOptions).replace(process.env.PG_PASSWORD, "***"));

const db = new pg.Client(connectionOptions);
db.connect();

db.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = (text, params) => db.query(text, params);