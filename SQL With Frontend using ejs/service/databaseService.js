import { createConnection } from 'mysql2';
import 'dotenv/config';

// create connection to database
const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

export default connection;