const path = require("path");

// Default environment is 'local' if NODE_ENV is not set
const env = process.env.NODE_ENV || "local";
const envFile = `.env.${env}`;

console.log(`Loading environment variables from: ${envFile}`);

require("dotenv").config({ path: path.resolve(process.cwd(), envFile) });

// Optionally, you can log loaded variables (remove in production)
// console.log(process.env);
